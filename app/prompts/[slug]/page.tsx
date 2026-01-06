import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { PromptDetail } from "@/components/prompt-detail"
import { getPromptBySlug, prompts } from "@/lib/data"

interface PromptPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return prompts.map((prompt) => ({
    slug: prompt.slug,
  }))
}

export default async function PromptPage({ params }: PromptPageProps) {
  const { slug } = await params
  const prompt = getPromptBySlug(slug)

  if (!prompt) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="mx-auto max-w-[1400px] px-6 py-10">
        <PromptDetail prompt={prompt} />
      </main>
    </div>
  )
}
