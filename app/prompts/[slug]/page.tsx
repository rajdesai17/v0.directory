import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { PromptDetail } from "@/components/prompt-detail"
import { getPromptBySlug, prompts, getRelatedPrompts, getCategoryBySlug } from "@/lib/data"
import { generatePromptMetadata } from "@/lib/seo"
import { JsonLd } from "@/components/seo/json-ld"
import { generatePromptArticleSchema, generateHowToSchema, generateBreadcrumbSchema } from "@/lib/seo/schemas"
import { siteConfig } from "@/lib/seo"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { RelatedPrompts } from "@/components/seo/related-prompts"

interface PromptPageProps {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ from?: string }>
}

export async function generateStaticParams() {
  return prompts.map((prompt) => ({
    slug: prompt.slug,
  }))
}

export async function generateMetadata({ params }: PromptPageProps): Promise<Metadata> {
  const { slug } = await params
  const prompt = getPromptBySlug(slug)
  
  if (!prompt) {
    return { title: "Prompt Not Found" }
  }
  
  return generatePromptMetadata(prompt)
}

export default async function PromptPage({ params, searchParams }: PromptPageProps) {
  const { slug } = await params
  const { from } = await searchParams
  const prompt = getPromptBySlug(slug)

  if (!prompt) {
    notFound()
  }

  // Generate structured data
  const articleSchema = generatePromptArticleSchema(prompt)
  const howToSchema = generateHowToSchema(prompt)
  const category = getCategoryBySlug(prompt.category)
  const breadcrumbItems = [
    { name: "Browse", url: `${siteConfig.url}/browse` },
    ...(category ? [{ name: category.name, url: `${siteConfig.url}/browse/${category.slug}` }] : []),
    { name: prompt.title, url: `${siteConfig.url}/prompts/${prompt.slug}` },
  ]
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    ...breadcrumbItems,
  ])
  
  // Get related prompts for internal linking
  const relatedPrompts = getRelatedPrompts(prompt, 4)

  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={[articleSchema, howToSchema, breadcrumbSchema]} />
      <Header />

      <main className="mx-auto max-w-[1400px] px-6 py-10">
        <Breadcrumbs items={breadcrumbItems} />
        <PromptDetail prompt={prompt} fromCategory={from} />
        <RelatedPrompts 
          prompts={relatedPrompts} 
          title="Related Prompts" 
          categorySlug={prompt.category}
        />
      </main>
    </div>
  )
}
