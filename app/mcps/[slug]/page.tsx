import type { Metadata } from "next"
import { Header } from "@/components/header"
import { getMCPBySlug, mcps } from "@/lib/data"
import { notFound } from "next/navigation"
import { MCPDetailContent } from "@/components/mcp-detail-content"
import { generateMCPMetadata, siteConfig } from "@/lib/seo"
import { JsonLd } from "@/components/seo/json-ld"
import { generateMCPSchema, generateBreadcrumbSchema } from "@/lib/seo/schemas"

interface MCPPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return mcps.map((mcp) => ({
    slug: mcp.slug,
  }))
}

export async function generateMetadata({ params }: MCPPageProps): Promise<Metadata> {
  const { slug } = await params
  const mcp = getMCPBySlug(slug)
  
  if (!mcp) {
    return { title: "MCP Not Found" }
  }
  
  return generateMCPMetadata(mcp)
}

export default async function MCPDetailPage({ params }: MCPPageProps) {
  const { slug } = await params
  const mcp = getMCPBySlug(slug)

  if (!mcp) {
    notFound()
  }

  // Generate structured data
  const mcpSchema = generateMCPSchema(mcp)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "MCPs", url: `${siteConfig.url}/mcps` },
    { name: mcp.name, url: `${siteConfig.url}/mcps/${mcp.slug}` },
  ])

  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={[mcpSchema, breadcrumbSchema]} />
      <Header />
      <MCPDetailContent mcp={mcp} />
    </div>
  )
}
