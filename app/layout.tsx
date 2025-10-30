import type { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://prompt-kit.com"
  ),
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
        <Script defer src="https://assets.onedollarstats.com/stonks.js" />
      ) : null}
      <body
        className={`${inter.className} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LayoutClient>{children}</LayoutClient>
        </ThemeProvider>
      </body>
    </html>
  )
}
