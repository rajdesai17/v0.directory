import { Header } from "@/components/header"
import { CategorySidebar } from "@/components/category-sidebar"
import { PromptCard } from "@/components/prompt-card"
import { SearchBar } from "@/components/search-bar"
import { categories, prompts, searchPrompts, getPromptsByCategory } from "@/lib/data"

interface BrowsePageProps {
  searchParams: Promise<{ category?: string; q?: string }>
}

export default async function BrowsePage({ searchParams }: BrowsePageProps) {
  const params = await searchParams
  const { category, q } = params

  let filteredPrompts = prompts
  let title = "All Prompts"

  if (q) {
    filteredPrompts = searchPrompts(q)
    title = `Search results for "${q}"`
  } else if (category) {
    filteredPrompts = getPromptsByCategory(category)
    const categoryData = categories.find((c) => c.slug === category)
    title = categoryData?.name || "Category"
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 w-full">
        <div className="mx-auto max-w-[1200px] px-8 py-8 lg:px-16">
          <div className="grid grid-cols-[208px_1fr] gap-12">
            <CategorySidebar categories={categories} />

            <div className="min-h-[600px]">
              <div className="mb-6 flex items-center justify-between gap-4">
                <h1 className="text-lg font-semibold text-foreground whitespace-nowrap">{title}</h1>
                <SearchBar placeholder="Search prompts..." className="w-72" />
              </div>

              {filteredPrompts.length === 0 ? (
                <div className="pt-32">
                  <p className="text-sm text-muted-foreground text-center">
                    No prompts found. Try a different search or category.
                  </p>
                </div>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredPrompts.map((prompt) => (
                    <PromptCard key={prompt.id} prompt={prompt} />
                  ))}
                </div>
              )}
            </div>
          </div>
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
