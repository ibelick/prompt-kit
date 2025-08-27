"use server"

import fs from "fs"

// Server action for reading file content
export const readFileContent = async (filePath: string): Promise<string> => {
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8")
    return fileContent
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error)
    return ""
  }
}
