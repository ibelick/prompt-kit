"use client"

import { useCallback, useEffect, useState } from "react"

type ApiKeyListener = () => void

class ApiKeyManager {
  private listeners: Set<ApiKeyListener> = new Set()

  subscribe(listener: ApiKeyListener) {
    this.listeners.add(listener)
    return () => this.listeners.delete(listener)
  }

  notify() {
    this.listeners.forEach((listener) => listener())
  }

  getApiKey(): string | null {
    if (typeof window === "undefined") return null
    return localStorage.getItem("OPENAI_API_KEY")
  }

  setApiKey(key: string) {
    if (typeof window === "undefined") return
    localStorage.setItem("OPENAI_API_KEY", key)
    this.notify()
  }

  removeApiKey() {
    if (typeof window === "undefined") return
    localStorage.removeItem("OPENAI_API_KEY")
    this.notify()
  }
}

const apiKeyManager = new ApiKeyManager()

export function useApiKey() {
  const [apiKey, setApiKey] = useState<string | null>(null)
  const [hasApiKey, setHasApiKey] = useState(false)

  const updateState = useCallback(() => {
    const key = apiKeyManager.getApiKey()
    setApiKey(key)
    setHasApiKey(!!key)
  }, [])

  useEffect(() => {
    // Initial state
    updateState()

    // Subscribe to manager updates
    const unsubscribe = apiKeyManager.subscribe(updateState)

    // Listen for cross-tab storage changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "OPENAI_API_KEY") {
        updateState()
      }
    }

    window.addEventListener("storage", handleStorageChange)

    return () => {
      unsubscribe()
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [updateState])

  const saveApiKey = useCallback((key: string) => {
    apiKeyManager.setApiKey(key)
  }, [])

  const deleteApiKey = useCallback(() => {
    apiKeyManager.removeApiKey()
  }, [])

  return {
    apiKey,
    hasApiKey,
    saveApiKey,
    deleteApiKey,
    getApiKey: apiKeyManager.getApiKey,
  }
}

// Export the manager for direct access when needed
export { apiKeyManager }
