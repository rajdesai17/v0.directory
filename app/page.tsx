import { Suspense } from "react"
import { Header } from "@/components/header"
import { SearchBar } from "@/components/search-bar"
import { PromptCard } from "@/components/prompt-card"
import { CategoryPills } from "@/components/category-pills"
import { prompts, categories } from "@/lib/data"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

function HomeContent() {
  const featuredPrompts = prompts.slice(0, 8)
  const typescriptPrompts = prompts.filter((p) => p.category === "typescript")

  return (
    <>
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-[1200px] px-8 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Discover v0 prompts and more
            </h1>
            <p className="mt-4 text-pretty text-sm text-muted-foreground sm:text-base">
              Explore a curated collection of prompts for v0 and level up your AI-assisted development workflow.
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              <Link href="/browse" className="underline underline-offset-4 hover:text-foreground">
                New to v0? Learn more here.
              </Link>
            </p>
            <div className="mt-10">
              <SearchBar placeholder="Search for a prompt..." className="mx-auto max-w-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-[1200px] px-8 lg:px-16">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium text-foreground">Featured Categories</h2>
            <Link
              href="/browse"
              className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              View all
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="mt-5">
            <CategoryPills categories={categories} />
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-[1200px] px-8 lg:px-16">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium text-foreground">Language Specialists</h2>
            <Link
              href="/browse"
              className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              View all
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featuredPrompts.map((prompt) => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-[1200px] px-8 lg:px-16">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium text-foreground">TypeScript</h2>
            <Link
              href="/browse?category=typescript"
              className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              View all
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {typescriptPrompts.slice(0, 8).map((prompt) => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <Suspense fallback={null}>
          <HomeContent />
        </Suspense>
      </main>

      <footer className="border-t border-border/50 py-8">
        <div className="mx-auto max-w-[1200px] px-8 lg:px-16">
          <p className="text-center text-xs text-muted-foreground">Built with v0</p>
        </div>
      </footer>
    </div>
  )
}
