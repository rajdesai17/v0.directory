import type { Metadata } from "next"
import { Header } from "@/components/header"
import { CategorySidebar } from "@/components/category-sidebar"
import { PromptCard } from "@/components/prompt-card"
import { SearchBar } from "@/components/search-bar"
import { categories, getPromptsByCategory } from "@/lib/data"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { generateCategoryMetadata, siteConfig } from "@/lib/seo"
import { JsonLd } from "@/components/seo/json-ld"
import { generateCollectionSchema, generateBreadcrumbSchema } from "@/lib/seo/schemas"

interface CategoryPageProps {
  params: Promise<{ category: string }>
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params
  const categoryData = categories.find((c) => c.slug === category)
  
  if (!categoryData) {
    return { title: "Category Not Found" }
  }
  
  const prompts = getPromptsByCategory(category)
  return generateCategoryMetadata(categoryData, prompts.length)
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params
  
  const categoryData = categories.find((c) => c.slug === category)
  if (!categoryData) {
    notFound()
  }

  const filteredPrompts = getPromptsByCategory(category)

  // Generate structured data
  const collectionSchema = generateCollectionSchema(categoryData, filteredPrompts)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Browse", url: `${siteConfig.url}/browse` },
    { name: categoryData.name, url: `${siteConfig.url}/browse/${category}` },
  ])

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <JsonLd data={[collectionSchema, breadcrumbSchema]} />
      <Header />

      <main className="flex-1 w-full">
        <div className="mx-auto max-w-[1200px] px-4 py-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[208px_1fr] gap-8 lg:gap-12">
            <div className="hidden lg:block">
              <CategorySidebar categories={categories} activeCategory={category} />
            </div>

            <div className="min-h-[600px] lg:max-h-[calc(100vh-180px)] lg:overflow-y-auto">
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h1 className="text-lg font-semibold text-foreground whitespace-nowrap">{categoryData.name}</h1>
                <Suspense fallback={null}>
                  <SearchBar placeholder="Search prompts..." className="w-full sm:w-72" />
                </Suspense>
              </div>

              {filteredPrompts.length === 0 ? (
                <div className="pt-32">
                  <p className="text-sm text-muted-foreground text-center">
                    No prompts found in this category.
                  </p>
                </div>
              ) : (
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredPrompts.map((prompt) => (
                    <PromptCard key={prompt.id} prompt={prompt} currentCategory={category} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-border/40 py-6">
        <div className="mx-auto max-w-[1200px] px-4 lg:px-16">
          <p className="text-center text-xs text-muted-foreground/60">
            This site is not directly affiliated with Vercel or v0.
          </p>
        </div>
      </footer>
    </div>
  )
}
