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

  const truncatedContent = prompt.content.length > 120 ? prompt.content.slice(0, 120) + "..." : prompt.content

  return (
    <Link href={`/prompts/${prompt.slug}`} className="group block">
      <div className="flex h-full flex-col rounded-lg border border-border bg-card p-4 transition-colors hover:border-muted-foreground/50">
        <div className="mb-3 min-h-[72px]">
          <p className="font-mono text-xs leading-relaxed text-muted-foreground">{truncatedContent}</p>
        </div>

        <div className="mt-auto">
          <h3 className="text-sm font-medium text-foreground">{prompt.title}</h3>
          <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
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
