import type { Metadata } from "next"
import { Header } from "@/components/header"
import { getInstructionBySlug, instructions } from "@/lib/data"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Copy, Share2, Download } from "lucide-react"
import { generateInstructionMetadata, siteConfig } from "@/lib/seo"
import { JsonLd } from "@/components/seo/json-ld"
import { generateInstructionSchema, generateBreadcrumbSchema } from "@/lib/seo/schemas"

interface InstructionPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return instructions.map((instruction) => ({
    slug: instruction.slug,
  }))
}

export async function generateMetadata({ params }: InstructionPageProps): Promise<Metadata> {
  const { slug } = await params
  const instruction = getInstructionBySlug(slug)
  
  if (!instruction) {
    return { title: "Instruction Not Found" }
  }
  
  return generateInstructionMetadata(instruction)
}

export default async function InstructionDetailPage({ params }: InstructionPageProps) {
  const { slug } = await params
  const instruction = getInstructionBySlug(slug)

  if (!instruction) {
    notFound()
  }

  // Generate structured data
  const instructionSchema = generateInstructionSchema(instruction)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Instructions", url: `${siteConfig.url}/instructions` },
    { name: instruction.title, url: `${siteConfig.url}/instructions/${instruction.slug}` },
  ])

  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={[instructionSchema, breadcrumbSchema]} />
      <Header />
      <main className="py-14">
        <div className="mx-auto max-w-[1200px] px-8 lg:px-16">
          <Link
            href="/instructions"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Instructions
          </Link>

          <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
            <div>
              <div className="rounded-lg border border-border bg-[#0a0a0a] p-6">
                <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-muted-foreground">
                  {instruction.content}
                </pre>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-xl font-semibold text-foreground">{instruction.title}</h1>
                <div className="mt-3 flex flex-wrap gap-2">
                  {instruction.tags.map((tag) => (
                    <span key={tag} className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <img
                  src={instruction.author.avatar || "/placeholder.svg"}
                  alt={instruction.author.name}
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium text-foreground">{instruction.author.name}</p>
                  <p className="text-xs text-muted-foreground">Author</p>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90 transition-colors">
                  <Copy className="h-4 w-4" />
                  Copy
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-border px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
                  <Share2 className="h-4 w-4" />
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-border px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
                  <Download className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
