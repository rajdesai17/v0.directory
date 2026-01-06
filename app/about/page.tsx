import { Header } from "@/components/header"
import Link from "next/link"
import { Github } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="mx-auto max-w-[1200px] px-8 py-16 lg:px-16">
        <div className="mx-auto max-w-xl">
          <h1 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">About</h1>

          <div className="flex flex-col gap-6 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              <span className="text-foreground font-medium">v0.directory</span> is a public library of real prompts
              people actually use to ship UI faster.
            </p>

            <p>
              No fluff. No marketing speak. Just prompts that work—curated from the community and tested in production.
            </p>

            <div>
              <h2 className="mb-3 text-[15px] font-medium text-foreground">Why this exists</h2>
              <p>
                Good prompts are hard to write. Most people start from scratch every time they use v0. This directory
                gives you a starting point—a collection of patterns and approaches that have worked for others.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-[15px] font-medium text-foreground">How prompts are curated</h2>
              <p>
                Every prompt is reviewed before publishing. We look for clarity, specificity, and real-world usefulness.
                The goal is quality over quantity.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-[15px] font-medium text-foreground">Contribute</h2>
              <p>
                Have a prompt that's helped you build something?{" "}
                <Link href="/submit" className="text-foreground underline underline-offset-4 hover:no-underline">
                  Submit it
                </Link>
                . Found a bug or have a suggestion? Open an issue on GitHub.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[14px] text-foreground transition-opacity hover:opacity-70"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>
              <Link
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[14px] text-foreground transition-opacity hover:opacity-70"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                X / Twitter
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
