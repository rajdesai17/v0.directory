"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { categories } from "@/lib/data"
import { ChevronDown } from "lucide-react"

type SubmissionType = "prompt" | "mcp" | "instruction"

export default function SubmitPage() {
  const [submissionType, setSubmissionType] = useState<SubmissionType>("prompt")
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    prompt: "",
    category: "",
    customCategory: "",
    v0Link: "",
    author: "",
    mcpUrl: "",
    authType: "none" as "none" | "bearer" | "headers" | "oauth",
    instructionContent: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [issueUrl, setIssueUrl] = useState<string | null>(null)

  const categoryOptions = [
    ...categories.map((c) => ({ value: c.slug, label: c.name })),
    { value: "other", label: "Other (specify)" },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    if (submissionType === "prompt" && formData.category === "other" && !formData.customCategory.trim()) {
      setError("Please specify a category")
      setIsSubmitting(false)
      return
    }

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, submissionType }),
      })

      const data = await res.json()

      if (data.success) {
        setSubmitted(true)
        setIssueUrl(data.issueUrl)
      } else {
        setError(data.error || "Failed to submit. Please try again.")
      }
    } catch (err) {
      setError("Network error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleTypeChange = (type: SubmissionType) => {
    setSubmissionType(type)
    setFormData({
      title: "",
      description: "",
      prompt: "",
      category: "",
      customCategory: "",
      v0Link: "",
      author: "",
      mcpUrl: "",
      authType: "none",
      instructionContent: "",
    })
    setError(null)
  }

  const getTypeLabel = () => {
    switch (submissionType) {
      case "mcp":
        return "MCP"
      case "instruction":
        return "Instruction"
      default:
        return "Prompt"
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="mx-auto max-w-[1200px] px-8 pt-16 pb-12 lg:px-16 flex-1">
        <div className="mx-auto max-w-xl">
          {submitted ? (
            <div className="text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                <svg className="h-6 w-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="mb-2 text-2xl font-semibold tracking-tight text-foreground">Thanks for submitting!</h1>
              <p className="text-sm text-muted-foreground">
                We'll review your {getTypeLabel().toLowerCase()} and publish it if it meets our guidelines.
              </p>
              {issueUrl && (
                <a
                  href={issueUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
                >
                  View your submission on GitHub
                </a>
              )}
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h1 className="mb-2 text-2xl font-semibold tracking-tight text-foreground">Submit to v0.directory</h1>
                <p className="text-sm text-muted-foreground">
                  Share prompts, MCPs, or instructions with the community.
                </p>
              </div>

              <div className="mb-6 flex gap-2">
                {(["prompt", "mcp", "instruction"] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => handleTypeChange(type)}
                    className={`h-9 px-4 rounded-lg text-sm font-medium transition-colors ${
                      submissionType === type
                        ? "bg-foreground text-background"
                        : "bg-muted/50 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {type === "prompt" ? "Prompt" : type === "mcp" ? "MCP" : "Instruction"}
                  </button>
                ))}
              </div>

              {error && (
                <div className="mb-6 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Common fields: Title & Description */}
                <div>
                  <label htmlFor="title" className="mb-2 block text-sm font-medium text-foreground">
                    {submissionType === "mcp"
                      ? "MCP Name"
                      : submissionType === "instruction"
                        ? "Instruction Title"
                        : "Title"}
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder={
                      submissionType === "mcp"
                        ? "e.g., GitHub MCP Server"
                        : submissionType === "instruction"
                          ? "e.g., Plan Mode"
                          : "e.g., Next.js Dashboard Starter"
                    }
                    className="h-10 w-full rounded-lg border border-border bg-muted/30 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-muted-foreground/50"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="description" className="mb-2 block text-sm font-medium text-foreground">
                    Description
                  </label>
                  <input
                    type="text"
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder={
                      submissionType === "mcp"
                        ? "What does this MCP do?"
                        : submissionType === "instruction"
                          ? "What does this instruction do?"
                          : "Brief description of what this prompt creates"
                    }
                    className="h-10 w-full rounded-lg border border-border bg-muted/30 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-muted-foreground/50"
                    required
                  />
                </div>

                {submissionType === "prompt" && (
                  <>
                    <div>
                      <label htmlFor="prompt" className="mb-2 block text-sm font-medium text-foreground">
                        Full Prompt
                      </label>
                      <textarea
                        id="prompt"
                        value={formData.prompt}
                        onChange={(e) => setFormData({ ...formData, prompt: e.target.value })}
                        placeholder="Paste your complete prompt here..."
                        rows={8}
                        className="w-full resize-none rounded-lg border border-border bg-muted/30 px-3 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-muted-foreground/50"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="category" className="mb-2 block text-sm font-medium text-foreground">
                        Category
                      </label>
                      <div className="relative">
                        <select
                          id="category"
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          className="h-10 w-full appearance-none rounded-lg border border-border bg-muted/30 px-3 pr-10 text-sm text-foreground focus:border-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-muted-foreground/50"
                          required
                        >
                          <option value="" disabled>
                            Select a category
                          </option>
                          {categoryOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </div>

                    {formData.category === "other" && (
                      <div>
                        <label htmlFor="customCategory" className="mb-2 block text-sm font-medium text-foreground">
                          Custom Category
                        </label>
                        <input
                          type="text"
                          id="customCategory"
                          value={formData.customCategory}
                          onChange={(e) => setFormData({ ...formData, customCategory: e.target.value })}
                          placeholder="e.g., E-commerce, Healthcare"
                          className="h-10 w-full rounded-lg border border-border bg-muted/30 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-muted-foreground/50"
                          required
                        />
                      </div>
                    )}

                    <div>
                      <label htmlFor="v0Link" className="mb-2 block text-sm font-medium text-foreground">
                        v0 Link <span className="text-muted-foreground font-normal">(optional)</span>
                      </label>
                      <input
                        type="url"
                        id="v0Link"
                        value={formData.v0Link}
                        onChange={(e) => setFormData({ ...formData, v0Link: e.target.value })}
                        placeholder="https://v0.dev/t/..."
                        className="h-10 w-full rounded-lg border border-border bg-muted/30 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-muted-foreground/50"
                      />
                    </div>
                  </>
                )}

                {submissionType === "mcp" && (
                  <>
                    <div>
                      <label htmlFor="mcpUrl" className="mb-2 block text-sm font-medium text-foreground">
                        MCP URL
                      </label>
                      <input
                        type="url"
                        id="mcpUrl"
                        value={formData.mcpUrl}
                        onChange={(e) => setFormData({ ...formData, mcpUrl: e.target.value })}
                        placeholder="https://mcp.example.com/mcp"
                        className="h-10 w-full rounded-lg border border-border bg-muted/30 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-muted-foreground/50"
                        required
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">Authentication Type</label>
                      <div className="flex gap-2">
                        {(["none", "bearer", "headers", "oauth"] as const).map((auth) => (
                          <button
                            key={auth}
                            type="button"
                            onClick={() => setFormData({ ...formData, authType: auth })}
                            className={`h-9 px-4 rounded-lg text-sm transition-colors ${
                              formData.authType === auth
                                ? "bg-muted text-foreground"
                                : "bg-muted/30 text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            {auth.charAt(0).toUpperCase() + auth.slice(1)}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="v0Link" className="mb-2 block text-sm font-medium text-foreground">
                        Documentation URL <span className="text-muted-foreground font-normal">(optional)</span>
                      </label>
                      <input
                        type="url"
                        id="v0Link"
                        value={formData.v0Link}
                        onChange={(e) => setFormData({ ...formData, v0Link: e.target.value })}
                        placeholder="https://docs.example.com/mcp"
                        className="h-10 w-full rounded-lg border border-border bg-muted/30 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-muted-foreground/50"
                      />
                    </div>
                  </>
                )}

                {submissionType === "instruction" && (
                  <div>
                    <label htmlFor="instructionContent" className="mb-2 block text-sm font-medium text-foreground">
                      Instruction Content
                    </label>
                    <textarea
                      id="instructionContent"
                      value={formData.instructionContent}
                      onChange={(e) => setFormData({ ...formData, instructionContent: e.target.value })}
                      placeholder="Write the instruction that should be added to v0's custom instructions..."
                      rows={8}
                      className="w-full resize-none rounded-lg border border-border bg-muted/30 px-3 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-muted-foreground/50"
                      required
                    />
                  </div>
                )}

                {/* Common field: Author */}
                <div>
                  <label htmlFor="author" className="mb-2 block text-sm font-medium text-foreground">
                    Your Name <span className="text-muted-foreground font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="author"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    placeholder="How should we credit you?"
                    className="h-10 w-full rounded-lg border border-border bg-muted/30 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-muted-foreground/50"
                  />
                </div>

                <div className="mt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-10 w-full rounded-lg bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : `Submit ${getTypeLabel()}`}
                  </button>
                  <p className="mt-3 text-center text-xs text-muted-foreground">
                    Submissions are reviewed before publishing.
                  </p>
                </div>
              </form>
            </>
          )}
        </div>
      </main>

      <footer className="border-t border-border/40 py-6">
        <div className="mx-auto max-w-[1200px] px-8 lg:px-16">
          <p className="text-center text-xs text-muted-foreground/60">
            This site is not directly affiliated with Vercel or v0.
          </p>
        </div>
      </footer>
    </div>
  )
}
