"use client"

import Link from "next/link"
import type { MCP } from "@/lib/data"
import {
  V0,
  Supabase,
  Vercel,
  Stripe,
  Github,
  Figma,
  Linear,
  Planetscale,
  Clerk,
  Resend,
  Neon,
  Convex,
  Sanity,
} from "@/components/icons"

interface MCPCardProps {
  mcp: MCP
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  v0: V0,
  supabase: Supabase,
  vercel: Vercel,
  stripe: Stripe,
  github: Github,
  figma: Figma,
  linear: Linear,
  planetscale: Planetscale,
  clerk: Clerk,
  resend: Resend,
  neon: Neon,
  convex: Convex,
  sanity: Sanity,
}

export function MCPCard({ mcp }: MCPCardProps) {
  const IconComponent = iconMap[mcp.slug]

  return (
    <Link href={`/mcps/${mcp.slug}`} className="group block">
      <div className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-[#0a0a0a] p-4 transition-colors hover:border-muted-foreground/50">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#111111] text-lg">
            {IconComponent ? <IconComponent className="h-5 w-5" /> : mcp.icon}
          </div>
          <div>
            <h3 className="text-sm font-medium text-foreground">{mcp.name}</h3>
          </div>
        </div>
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-3">{mcp.description}</p>
      </div>
    </Link>
  )
}
