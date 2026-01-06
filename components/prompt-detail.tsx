"use client"

import type React from "react"
import { Copy, Share, Download, ArrowLeft, ExternalLink, User } from "lucide-react"
import type { Prompt } from "@/lib/data"
import { useState } from "react"
import Link from "next/link"

function V0Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M23.3919 0H32.9188C36.7819 0 39.9136 3.13165 39.9136 6.99475V16.0805H36.0006V6.99475C36.0006 6.90167 35.9969 6.80925 35.9898 6.71766L26.4628 16.079C26.4949 16.08 26.5272 16.0805 26.5595 16.0805H36.0006V19.7762H26.5595C22.6964 19.7762 19.4788 16.6139 19.4788 12.7508V3.68923H23.3919V12.7508C23.3919 12.9253 23.4054 13.0977 23.4316 13.2668L33.1682 3.6995C33.0861 3.6927 33.003 3.68923 32.9188 3.68923H23.3919V0Z"
        fill="currentColor"
      />
      <path
        d="M13.7688 19.0956L0 3.68759H5.53933L13.6231 12.7337V3.68759H17.7535V17.5746C17.7535 19.6705 15.1654 20.6584 13.7688 19.0956Z"
        fill="currentColor"
      />
    </svg>
  )
}

interface PromptDetailProps {
  prompt: Prompt
}

export function PromptDetail({ prompt }: PromptDetailProps) {
  const [copied, setCopied] = useState(false)

  const openInV0 = () => {
    const encodedPrompt = encodeURIComponent(prompt.content)
    window.open(`https://v0.dev/chat?q=${encodedPrompt}`, "_blank")
  }

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault()
    await navigator.clipboard.writeText(prompt.content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div>
      <Link
        href="/browse"
        className="mb-8 inline-flex items-center gap-2 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to prompts
      </Link>

      <div className="flex flex-col gap-10 lg:flex-row">
        <div className="min-h-[600px] flex-1">
          <div className="h-[500px] overflow-hidden rounded-lg border border-border bg-card">
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
            <div className="h-[calc(100%-49px)] overflow-auto p-6">
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
          <div className="space-y-6">
            <div>
              <h1 className="text-lg font-semibold text-foreground">{prompt.title}</h1>
              <div className="mt-4 flex flex-wrap gap-2">
                {prompt.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border/50 bg-secondary/30 px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary">
                <User className="h-4 w-4 text-muted-foreground" />
              </div>
              <span className="text-sm text-foreground">{prompt.author.name}</span>
            </div>

            {prompt.previewUrl && (
              <div className="pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">View Example</span>
                  <a
                    href={prompt.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {prompt.previewUrl.replace("https://", "")}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            )}

            <div className="space-y-3 pt-2">
              <button
                onClick={handleCopy}
                className="flex w-full items-center justify-center rounded-lg bg-foreground px-4 py-2.5 text-[13px] font-medium text-background transition-colors hover:bg-foreground/90"
              >
                {copied ? "Copied!" : "Copy Prompt"}
              </button>
              <button
                onClick={openInV0}
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-[13px] text-foreground transition-colors hover:bg-secondary"
              >
                Open in
                <V0Logo className="h-4 w-4" />
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
