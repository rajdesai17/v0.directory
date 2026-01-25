import Link from "next/link"
import type { Prompt } from "@/lib/data"
import { ArrowRight } from "lucide-react"

interface RelatedPromptsProps {
  prompts: Prompt[]
  title?: string
  categorySlug?: string
}

export function RelatedPrompts({ 
  prompts, 
  title = "Related Prompts",
  categorySlug 
}: RelatedPromptsProps) {
  if (prompts.length === 0) return null

  return (
    <section className="mt-12 border-t border-border pt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-foreground">{title}</h2>
        {categorySlug && (
          <Link
            href={`/browse/${categorySlug}`}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View all
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        )}
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {prompts.map((prompt) => (
          <Link
            key={prompt.id}
            href={`/prompts/${prompt.slug}`}
            className="group flex flex-col rounded-lg border border-border bg-[#0a0a0a] p-4 transition-colors hover:border-muted-foreground/50"
          >
            <h3 className="text-sm font-medium text-foreground line-clamp-1 group-hover:text-foreground">
              {prompt.title}
            </h3>
            <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2">
              {prompt.content.slice(0, 100)}...
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {prompt.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-secondary/50 px-2 py-0.5 text-[10px] text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
