import React from "react"
import type { Metadata } from "next"
import { staticPageMetadata } from "@/lib/seo"

export const metadata: Metadata = staticPageMetadata.instructions

export default function InstructionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
