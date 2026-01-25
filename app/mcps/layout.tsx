import React from "react"
import type { Metadata } from "next"
import { staticPageMetadata } from "@/lib/seo"

export const metadata: Metadata = staticPageMetadata.mcps

export default function MCPsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
