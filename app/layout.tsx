import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://v0.directory"),
  title: {
    default: "v0.directory - Discover Prompts, MCPs & Instructions for v0",
    template: "%s | v0.directory",
  },
  description:
    "Discover and share prompts, MCP servers, and custom instructions for v0 by Vercel. Build beautiful UIs faster with curated, ready-to-use prompts.",
  generator: "v0.app",
  keywords: ["v0", "prompts", "vercel", "ai", "ui design", "code generation", "mcp", "model context protocol"],
  authors: [{ name: "v0.directory" }],
  creator: "v0.directory",
  publisher: "v0.directory",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://v0.directory",
    siteName: "v0.directory",
    title: "v0.directory - Discover Prompts, MCPs & Instructions for v0",
    description:
      "Discover and share prompts, MCP servers, and custom instructions for v0 by Vercel. Build beautiful UIs faster with curated, ready-to-use prompts.",
  },
  twitter: {
    card: "summary_large_image",
    title: "v0.directory - Discover Prompts, MCPs & Instructions for v0",
    description:
      "Discover and share prompts, MCP servers, and custom instructions for v0 by Vercel. Build beautiful UIs faster with curated, ready-to-use prompts.",
    site: "@v0directory",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <Script
          src="https://scripts.simpleanalyticscdn.com/latest.js"
          data-collect-dnt="true"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
