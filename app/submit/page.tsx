"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"

export default function SubmitPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    prompt: "",
    tags: "",
    v0Link: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // For MVP, just show success state
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="mx-auto max-w-[1200px] px-8 py-16 lg:px-16">
        <div className="mx-auto max-w-xl">
          {submitted ? (
            <div className="text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                <svg className="h-6 w-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="mb-2 text-2xl font-semibold tracking-tight text-foreground">Thanks for submitting!</h1>
              <p className="text-[15px] text-muted-foreground">
                We'll review your prompt and publish it if it meets our guidelines.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-10">
                <h1 className="mb-3 text-2xl font-semibold tracking-tight text-foreground">Submit a prompt</h1>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  Have a good v0 prompt? Share it with the community.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label htmlFor="title" className="mb-2 block text-[13px] font-medium text-foreground">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g., Next.js Dashboard Starter"
                    className="h-10 w-full rounded-lg border border-border bg-muted/30 px-3 text-[14px] text-foreground placeholder:text-muted-foreground focus:border-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-muted-foreground/50"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="description" className="mb-2 block text-[13px] font-medium text-foreground">
                    Description
                  </label>
                  <input
                    type="text"
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Brief description of what this prompt creates"
                    className="h-10 w-full rounded-lg border border-border bg-muted/30 px-3 text-[14px] text-foreground placeholder:text-muted-foreground focus:border-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-muted-foreground/50"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="prompt" className="mb-2 block text-[13px] font-medium text-foreground">
                    Full Prompt
                  </label>
                  <textarea
                    id="prompt"
                    value={formData.prompt}
                    onChange={(e) => setFormData({ ...formData, prompt: e.target.value })}
                    placeholder="Paste your complete prompt here..."
                    rows={8}
                    className="w-full resize-none rounded-lg border border-border bg-muted/30 px-3 py-3 font-mono text-[13px] text-foreground placeholder:text-muted-foreground focus:border-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-muted-foreground/50"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="tags" className="mb-2 block text-[13px] font-medium text-foreground">
                    Tags
                  </label>
                  <input
                    type="text"
                    id="tags"
                    value={formData.tags}
                    onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                    placeholder="e.g., dashboard, analytics, charts (comma separated)"
                    className="h-10 w-full rounded-lg border border-border bg-muted/30 px-3 text-[14px] text-foreground placeholder:text-muted-foreground focus:border-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-muted-foreground/50"
                  />
                </div>

                <div>
                  <label htmlFor="v0Link" className="mb-2 block text-[13px] font-medium text-foreground">
                    v0 Link <span className="text-muted-foreground">(optional)</span>
                  </label>
                  <input
                    type="url"
                    id="v0Link"
                    value={formData.v0Link}
                    onChange={(e) => setFormData({ ...formData, v0Link: e.target.value })}
                    placeholder="https://v0.dev/t/..."
                    className="h-10 w-full rounded-lg border border-border bg-muted/30 px-3 text-[14px] text-foreground placeholder:text-muted-foreground focus:border-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-muted-foreground/50"
                  />
                </div>

                <div className="mt-2">
                  <button
                    type="submit"
                    className="h-10 w-full rounded-lg bg-foreground px-4 text-[14px] font-medium text-background transition-opacity hover:opacity-90"
                  >
                    Submit Prompt
                  </button>
                  <p className="mt-3 text-center text-[12px] text-muted-foreground">
                    Prompts are reviewed before publishing.
                  </p>
                </div>
              </form>
            </>
          )}
        </div>
      </main>
    </div>
  )
}
