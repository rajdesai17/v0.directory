import React from "react"
import type { Metadata } from "next"
import { staticPageMetadata } from "@/lib/seo"
import { JsonLd } from "@/components/seo/json-ld"
import { generateWebsiteSchema, generateOrganizationSchema } from "@/lib/seo/schemas"

export const metadata: Metadata = staticPageMetadata.home

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const websiteSchema = generateWebsiteSchema()
  const organizationSchema = generateOrganizationSchema()

  return (
    <>
      <JsonLd data={[websiteSchema, organizationSchema]} />
      {children}
    </>
  )
}
