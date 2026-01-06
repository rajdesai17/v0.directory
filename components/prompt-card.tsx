"use client"

import type React from "react"
import Link from "next/link"
import type { Prompt } from "@/lib/data"
import { useState } from "react"

interface PromptCardProps {
  prompt: Prompt
}

export function PromptCard({ prompt }: PromptCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    await navigator.clipboard.writeText(prompt.content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const truncatedContent = prompt.content.length > 100 ? prompt.content.slice(0, 100) + "..." : prompt.content

  return (
    <Link href={`/prompts/${prompt.slug}`} className="group block">
      <div className="flex h-[200px] flex-col overflow-hidden rounded-lg border border-border bg-[#0a0a0a] transition-colors hover:border-muted-foreground/50">
        <div className="m-2 h-[100px] overflow-hidden rounded-md border border-border/50 bg-[#111111] p-3">
          <p className="font-mono text-xs leading-relaxed text-muted-foreground line-clamp-4">{truncatedContent}</p>
        </div>

        <div className="mt-auto px-3 pb-3">
          <h3 className="text-sm font-medium text-foreground line-clamp-2">{prompt.title}</h3>
          <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1">
            {prompt.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-xs text-muted-foreground">
                {tag}
              </span>
            ))}
            {prompt.tags.length > 2 && (
              <span className="text-xs text-muted-foreground">+{prompt.tags.length - 2} more</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
