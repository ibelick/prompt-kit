"use client"

import {
  FileUpload,
  FileUploadContent,
  FileUploadTrigger,
} from "@/components/prompt-kit/file-upload"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function BasicFileUpload() {
  const [files, setFiles] = useState<File[]>([])

  const handleFilesAdded = (newFiles: File[]) => {
    setFiles((prev) => [...prev, ...newFiles])
  }

  return (
    <FileUpload onFilesAdded={handleFilesAdded}>
      <div className="w-full max-w-sm rounded-md border-2 border-dashed border-gray-300 p-6">
        <p className="mb-4 text-center">Drag files here or click to upload</p>

        <div className="flex flex-col items-center">
          <FileUploadTrigger>
            <Button variant="outline">Upload Files</Button>
          </FileUploadTrigger>

          {files.length > 0 && (
            <div className="mt-4">
              <p className="mb-2 font-medium">Selected files:</p>
              <ul className="text-sm">
                {files.map((file, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    {file.name} ({Math.round(file.size / 1024)} KB)
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <FileUploadContent className="bg-blue-500/20">
          <div className="p-8 text-center">
            <p className="text-xl font-bold">Drop files here</p>
          </div>
        </FileUploadContent>
      </div>
    </FileUpload>
  )
}
