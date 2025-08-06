export type RegistryType = "registry:ui" | "registry:hook" | "registry:item"

export type RegistryFileType =
  | "registry:ui"
  | "registry:hook"
  | "registry:component"
  | "registry:file"

export interface RegistryFile {
  path: string
  content: string
  type: RegistryFileType
  target?: string
}

export interface TailwindConfig {
  config?: Record<string, object>
}

export interface CssVars {
  light: Record<string, string>
  dark: Record<string, string>
}

export interface Schema {
  name: string
  description: string
  type: RegistryType
  title?: string
  registryDependencies?: string[]
  dependencies?: string[]
  devDependencies?: string[]
  tailwind?: TailwindConfig
  cssVars?: CssVars
  files: RegistryFile[]
  envVars?: Record<string, string>
}
