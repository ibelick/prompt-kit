import fs from "fs"
import { cache } from "react"

export const extractCodeFromFilePath = cache((filePath: string) => {
  const fileContent = fs.readFileSync(filePath, "utf-8")
  return fileContent
})
