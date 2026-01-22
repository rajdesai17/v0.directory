"use client"

import type React from "react"
import Link from "next/link"
import type { Prompt } from "@/lib/data"
import { useState, useRef, useEffect } from "react"
import { Copy, ChevronDown, Check } from "lucide-react"

interface PromptCardProps {
  prompt: Prompt
  currentCategory?: string
}

export function PromptCard({ prompt, currentCategory }: PromptCardProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [copiedType, setCopiedType] = useState<"prompt" | "claude" | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleCopyPrompt = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    await navigator.clipboard.writeText(prompt.content)
    setCopiedType("prompt")
    setTimeout(() => {
      setCopiedType(null)
      setDropdownOpen(false)
    }, 1500)
  }

  const handleCopyClaudeCommand = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
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
    setCopiedType("claude")
    setTimeout(() => {
      setCopiedType(null)
      setDropdownOpen(false)
    }, 1500)
  }

  const truncatedContent = prompt.content.length > 100 ? prompt.content.slice(0, 100) + "..." : prompt.content

  const href = currentCategory 
    ? `/prompts/${prompt.slug}?from=${currentCategory}` 
    : `/prompts/${prompt.slug}`

  return (
    <div className="group relative block">
      <Link href={href} className="block">
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

      {/* Copy dropdown button */}
      <div ref={dropdownRef} className="absolute right-2 top-2 z-10">
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setDropdownOpen(!dropdownOpen)
          }}
          className="flex items-center gap-1 rounded-md border border-border/50 bg-[#0a0a0a]/90 px-2 py-1.5 text-xs text-muted-foreground opacity-0 backdrop-blur-sm transition-all hover:border-border hover:bg-[#111111] hover:text-foreground group-hover:opacity-100"
        >
          <Copy className="h-3 w-3" />
          <ChevronDown className="h-3 w-3" />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 top-full mt-1 min-w-[180px] overflow-hidden rounded-md border border-border bg-[#0a0a0a] shadow-lg">
            <button
              onClick={handleCopyPrompt}
              className="flex w-full items-center gap-2 px-3 py-2 text-left text-xs text-muted-foreground transition-colors hover:bg-[#111111] hover:text-foreground"
            >
              {copiedType === "prompt" ? (
                <Check className="h-3.5 w-3.5 text-green-500" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
              {copiedType === "prompt" ? "Copied!" : "Copy Prompt"}
            </button>
            <button
              onClick={handleCopyClaudeCommand}
              className="flex w-full items-center gap-2 px-3 py-2 text-left text-xs text-muted-foreground transition-colors hover:bg-[#111111] hover:text-foreground"
            >
              {copiedType === "claude" ? (
                <Check className="h-3.5 w-3.5 text-green-500" />
              ) : (
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z" fill="#D97757" fillRule="nonzero"/>
                </svg>
              )}
              {copiedType === "claude" ? "Copied!" : "Copy as Claude Command"}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
