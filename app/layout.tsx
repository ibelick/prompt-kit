import type { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import { LayoutClient } from "./layout.client"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "prompt-kit",
  description:
    "Core building blocks for AI apps. High-quality, accessible, and customizable components for AI interfaces. Built with React, shadcn/ui and Tailwind CSS.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const isDev = process.env.NODE_ENV === "development"

  return (
    <html lang="en" suppressHydrationWarning>
      {!isDev ? (
        <Script
          async
          src="https://analytics.umami.is/script.js"
          data-website-id="d96e0c36-2259-4f49-86cf-0f8d296645bd"
        />
      ) : null}
      <body
        className={`${inter.className} ${geistMono.variable} font-sans antialiased`}
      >
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  )
}
