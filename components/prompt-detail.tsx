"use client"

import type React from "react"
import Image from "next/image"
import { Copy, Share, Download, ArrowLeft } from "lucide-react"
import type { Prompt } from "@/lib/data"
import { useState } from "react"
import Link from "next/link"

interface PromptDetailProps {
  prompt: Prompt
}

export function PromptDetail({ prompt }: PromptDetailProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault()
    await navigator.clipboard.writeText(prompt.content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col gap-10 lg:flex-row">
      <div className="flex-1">
        <Link
          href="/browse"
          className="mb-8 inline-flex items-center gap-2 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to prompts
        </Link>

        <div className="overflow-hidden rounded-lg border border-border bg-card">
          <div className="flex items-center justify-end border-b border-border px-4 py-3">
            <div className="flex items-center gap-1">
              <button
                onClick={handleCopy}
                className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Copy className="h-4 w-4" />
                <span className="sr-only">{copied ? "Copied!" : "Copy"}</span>
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                <Share className="h-4 w-4" />
                <span className="sr-only">Share</span>
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                <Download className="h-4 w-4" />
                <span className="sr-only">Download</span>
              </button>
            </div>
          </div>
          <div className="max-h-[600px] overflow-auto p-6">
            <pre className="whitespace-pre-wrap font-mono text-[13px] leading-relaxed text-muted-foreground">
              {prompt.content}
            </pre>
          </div>
        </div>

        {copied && (
          <div className="mt-4 rounded-lg border border-border bg-card px-4 py-2.5 text-[13px] text-foreground">
            Prompt copied to clipboard
          </div>
        )}
      </div>

      <aside className="w-full shrink-0 lg:w-72">
        <div className="sticky top-24 space-y-6">
          <div>
            <h1 className="text-lg font-semibold text-foreground">{prompt.title}</h1>
            <div className="mt-4 flex flex-wrap gap-2">
              {prompt.tags.map((tag) => (
                <span key={tag} className="rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Image
              src={prompt.author.avatar || "/placeholder.svg"}
              alt={prompt.author.name}
              width={36}
              height={36}
              className="rounded-full"
            />
            <span className="text-sm text-foreground">{prompt.author.name}</span>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleCopy}
              className="flex w-full items-center justify-center rounded-lg bg-foreground px-4 py-2.5 text-[13px] font-medium text-background transition-colors hover:bg-foreground/90"
            >
              {copied ? "Copied!" : "Copy Prompt"}
            </button>
            <button className="flex w-full items-center justify-center rounded-lg border border-border bg-card px-4 py-2.5 text-[13px] text-foreground transition-colors hover:bg-secondary">
              Use in v0
            </button>
          </div>
        </div>
      </aside>
    </div>
  )
}
