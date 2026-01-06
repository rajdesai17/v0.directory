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
    <div className="min-h-screen bg-background">
      <Header />

      <main className="mx-auto max-w-[1200px] px-8 py-10 lg:px-16">
        <div className="flex gap-12">
          <CategorySidebar categories={categories} />

          <div className="flex-1">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h1 className="text-xl font-semibold text-foreground">{title}</h1>
              <SearchBar placeholder="Search prompts..." className="w-full sm:w-80" />
            </div>

            {filteredPrompts.length === 0 ? (
              <div className="py-16 text-center">
                <p className="text-sm text-muted-foreground">No prompts found. Try a different search or category.</p>
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
      </main>
    </div>
  )
}
