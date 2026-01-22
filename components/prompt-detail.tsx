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
  fromCategory?: string
}

export function PromptDetail({ prompt, fromCategory }: PromptDetailProps) {
  const [copied, setCopied] = useState(false)
  const [claudeCopied, setClaudeCopied] = useState(false)

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

  const copyClaudeCodeCommand = async () => {
    const promptId = prompt.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")
    
    // Detect OS
    const isWindows = typeof navigator !== "undefined" && navigator.platform.toLowerCase().includes("win")
    
    let command: string
    if (isWindows) {
      // Windows PowerShell command
      const escapedContent = prompt.content.replace(/'/g, "''")
      command = `New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\\.claude\\commands" | Out-Null; '${escapedContent}' | Out-File -FilePath "$env:USERPROFILE\\.claude\\commands\\${promptId}.md" -Encoding utf8`
    } else {
      // Mac/Linux command - create directory first
      const escapedContent = prompt.content.replace(/'/g, "'\\''")
      command = `mkdir -p ~/.claude/commands && echo '${escapedContent}' > ~/.claude/commands/${promptId}.md`
    }
    
    await navigator.clipboard.writeText(command)
    setClaudeCopied(true)
    setTimeout(() => setClaudeCopied(false), 3000)
  }

  const backHref = fromCategory ? `/browse/${fromCategory}` : "/browse"

  return (
    <div>
      <Link
        href={backHref}
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
              <span className="text-sm text-foreground">By {prompt.author.name}</span>
              {prompt.author.twitter && (
                <a
                  href={`https://x.com/${prompt.author.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-secondary/80 hover:text-foreground"
                >
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
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
              {prompt.category === "code-quality" && (
                <div className="pt-1">
                  <button
                    onClick={copyClaudeCodeCommand}
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-transparent px-4 py-2.5 text-[13px] text-foreground transition-colors hover:bg-secondary/50"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z" fill="#D97757" fillRule="nonzero"/>
                    </svg>
                    {claudeCopied ? "Command Copied!" : "Copy Claude Code Command"}
                  </button>
                  <p className="mt-2 text-center text-xs text-muted-foreground">
                    Paste in terminal to add as custom command
                  </p>
                </div>
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
