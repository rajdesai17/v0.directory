"use client"

import { useState } from "react"
import { ArrowLeft, ExternalLink, Copy, Check } from "lucide-react"
import Link from "next/link"
import type { MCP } from "@/lib/data"

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={copyToClipboard}
      className="p-2 rounded-md hover:bg-[#333] transition-colors text-muted-foreground hover:text-foreground"
      title="Copy to clipboard"
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
    </button>
  )
}

function AuthBadge({ type }: { type: string }) {
  const labels: Record<string, string> = {
    none: "None",
    bearer: "Bearer Token",
    headers: "Custom Headers",
    oauth: "OAuth",
  }
  return (
    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-[#222] text-muted-foreground">
      {labels[type] || type}
    </span>
  )
}

export function MCPDetailContent({ mcp }: { mcp: MCP }) {
  return (
    <main className="py-14">
      <div className="mx-auto max-w-[1200px] px-8 lg:px-16">
        <Link
          href="/mcps"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to MCPs
        </Link>

        <div className="max-w-3xl">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#111111] text-2xl">
              {mcp.icon}
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-foreground">{mcp.name}</h1>
              <p className="text-sm text-muted-foreground">by {mcp.author}</p>
            </div>
          </div>

          <p className="mt-6 text-muted-foreground leading-relaxed">{mcp.description}</p>

          {mcp.docsUrl && (
            <Link
              href={mcp.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Official Documentation
              <ExternalLink className="h-3 w-3" />
            </Link>
          )}
        </div>

        <div className="mt-12 max-w-3xl border border-dashed border-[#333] rounded-lg p-8">
          <h2 className="text-xl font-semibold text-foreground mb-2">How to Add {mcp.name} MCP in v0</h2>

          <section className="mt-8">
            <h3 className="text-lg font-medium text-foreground mb-3">What is MCP?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Model Context Protocol (MCP) is a protocol that enables AI assistants to access custom tools and services.
              v0 supports connecting to MCP servers to extend its capabilities with additional integrations.
            </p>
          </section>

          <section className="mt-8">
            <h3 className="text-lg font-medium text-foreground mb-3">Configuration Steps</h3>
            <ol className="list-decimal list-inside space-y-4 text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Open v0 Settings</span>
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Go to your v0 chat or project</li>
                  <li>Click on the sidebar and navigate to "Connect" section</li>
                  <li>Look for "Custom MCP" or "Add MCP Connection"</li>
                </ul>
              </li>
              <li>
                <span className="font-medium text-foreground">Add Custom MCP Connection</span>
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Click "Add Custom MCP Connection" button</li>
                  <li>A modal will appear with configuration fields</li>
                </ul>
              </li>
              <li>
                <span className="font-medium text-foreground">Fill in the Connection Details</span>
              </li>
            </ol>
          </section>

          <section className="mt-8">
            <h3 className="text-lg font-medium text-foreground mb-3">Connection Details for {mcp.name}</h3>
            <div className="bg-[#0a0a0a] border border-[#222] rounded-lg p-5 space-y-4">
              <div>
                <label className="block text-xs text-muted-foreground mb-1.5">Name</label>
                <div className="flex items-center justify-between bg-[#111] border border-[#333] rounded px-3 py-2">
                  <span className="text-sm text-foreground">{mcp.name}</span>
                  <CopyButton text={mcp.name} />
                </div>
              </div>

              {mcp.mcpUrl && (
                <div>
                  <label className="block text-xs text-muted-foreground mb-1.5">URL</label>
                  <div className="flex items-center justify-between bg-[#111] border border-[#333] rounded px-3 py-2">
                    <span className="text-sm text-foreground font-mono">{mcp.mcpUrl}</span>
                    <CopyButton text={mcp.mcpUrl} />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs text-muted-foreground mb-1.5">Authentication</label>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex bg-[#111] border border-[#333] rounded overflow-hidden">
                    {["none", "bearer", "headers", "oauth"].map((auth) => (
                      <div
                        key={auth}
                        className={`px-3 py-1.5 text-xs capitalize ${
                          mcp.authType === auth ? "bg-[#333] text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {auth === "bearer"
                          ? "Bearer"
                          : auth === "headers"
                            ? "Headers"
                            : auth === "oauth"
                              ? "OAuth"
                              : "None"}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {mcp.authType && mcp.authType !== "none" && (
                <div className="bg-[#111] border border-[#333] rounded px-3 py-3 mt-2">
                  <p className="text-xs text-muted-foreground">
                    {mcp.authType === "bearer" && (
                      <>
                        You will need to provide your <span className="text-foreground">{mcp.name} API key</span> as the
                        Bearer token.
                      </>
                    )}
                    {mcp.authType === "oauth" && (
                      <>
                        You will be redirected to <span className="text-foreground">{mcp.name}</span> to authorize the
                        connection.
                      </>
                    )}
                    {mcp.authType === "headers" && <>You will need to configure custom headers for authentication.</>}
                  </p>
                </div>
              )}
            </div>
          </section>

          <section className="mt-8">
            <h3 className="text-lg font-medium text-foreground mb-3">Important Notes</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>MCP servers extend v0's capabilities with additional tools and integrations</li>
              <li>Make sure you have an active {mcp.name} account before connecting</li>
              {mcp.authType === "bearer" && <li>Keep your API keys secure and never share them publicly</li>}
              {mcp.docsUrl && (
                <li>
                  See the{" "}
                  <Link
                    href={mcp.docsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:underline"
                  >
                    official {mcp.name} documentation
                  </Link>{" "}
                  for API key generation and detailed setup
                </li>
              )}
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}
