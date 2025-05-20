import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Get the base URL depending on the current environment
 */
export function getBaseUrl() {
  // For server-side rendering, we need to use environment variables
  if (typeof window === "undefined") {
    // Check for Vercel-specific environment variables
    // Production URL takes precedence if available (works in all environments)
    if (process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL) {
      return `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`
    }

    // For branch deployments
    if (process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL) {
      return `https://${process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL}`
    }

    // For regular deployments
    if (process.env.NEXT_PUBLIC_VERCEL_URL) {
      return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    }

    // Legacy support
    if (process.env.VERCEL_URL) {
      return `https://${process.env.VERCEL_URL}`
    }

    // Fall back to explicitly set environment variables
    if (process.env.NEXT_PUBLIC_BASE_URL) {
      return process.env.NEXT_PUBLIC_BASE_URL
    }

    // Default for development
    return process.env.NODE_ENV === "development" ? "http://localhost:3000" : ""
  }

  // For client-side, we can just use the browser's location
  return window.location.origin
}
