import { Header } from "@/components/header"
import { getMCPBySlug, mcps } from "@/lib/data"
import { notFound } from "next/navigation"
import { MCPDetailContent } from "@/components/mcp-detail-content"

export function generateStaticParams() {
  return mcps.map((mcp) => ({
    slug: mcp.slug,
  }))
}

export default async function MCPDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const mcp = getMCPBySlug(slug)

  if (!mcp) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <MCPDetailContent mcp={mcp} />
    </div>
  )
}
