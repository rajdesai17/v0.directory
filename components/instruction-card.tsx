"use client"

import type React from "react"
import Link from "next/link"
import type { Instruction } from "@/lib/data"
import { useState } from "react"

interface InstructionCardProps {
  instruction: Instruction
}

export function InstructionCard({ instruction }: InstructionCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    await navigator.clipboard.writeText(instruction.content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const truncatedContent =
    instruction.content.length > 100 ? instruction.content.slice(0, 100) + "..." : instruction.content

  return (
    <Link href={`/instructions/${instruction.slug}`} className="group block">
      <div className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-[#0a0a0a] transition-colors hover:border-muted-foreground/50">
        <div className="m-2 min-h-[70px] rounded-md border border-border/50 bg-[#111111] p-3">
          <p className="font-mono text-xs leading-relaxed text-muted-foreground">{truncatedContent}</p>
        </div>

        <div className="mt-auto px-3 pb-3">
          <h3 className="text-sm font-medium text-foreground">{instruction.title}</h3>
          <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1">
            {instruction.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-xs text-muted-foreground">
                {tag}
              </span>
            ))}
            {instruction.tags.length > 2 && (
              <span className="text-xs text-muted-foreground">+{instruction.tags.length - 2} more</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
