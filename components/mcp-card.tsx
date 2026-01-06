"use client"

import Link from "next/link"
import type { MCP } from "@/lib/data"

interface MCPCardProps {
  mcp: MCP
}

export function MCPCard({ mcp }: MCPCardProps) {
  return (
    <Link href={`/mcps/${mcp.slug}`} className="group block">
      <div className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-[#0a0a0a] p-4 transition-colors hover:border-muted-foreground/50">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#111111] text-lg">{mcp.icon}</div>
          <div>
            <h3 className="text-sm font-medium text-foreground">{mcp.name}</h3>
          </div>
        </div>
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-3">{mcp.description}</p>
      </div>
    </Link>
  )
}
