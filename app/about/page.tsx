import { Header } from "@/components/header"
import Link from "next/link"
import { Github } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="mx-auto max-w-[1200px] px-8 py-16 lg:px-16">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            Why We Built
            <br />
            v0.directory
          </h1>
        </div>

        <div className="mx-auto max-w-2xl">
          <p className="mb-12 text-lg text-muted-foreground">
            v0 is incredibly powerful.
            <br />
            but good results depend on good prompts.
          </p>

          <div className="flex flex-col gap-10 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              most of the time, the best prompts are scattered across tweets, screenshots, or private notes. we built{" "}
              <span className="text-foreground font-medium">v0.directory</span> to collect the ones that actually work,
              in one place.
            </p>

            <p>this is a public library of real prompts people use to design, iterate, and ship UI faster with v0.</p>

            <div>
              <h2 className="mb-4 text-lg font-medium text-foreground">What You'll Find</h2>
              <p className="mb-4">v0.directory is a curated collection of:</p>
              <ul className="mb-4 ml-4 list-disc space-y-1 text-muted-foreground">
                <li>UI and page prompts for v0</li>
                <li>real-world layouts like dashboards, landing pages, auth flows, and SaaS screens</li>
                <li>prompts that focus on clarity, structure, and production-ready output</li>
              </ul>
              <p className="mb-2">every prompt is designed to be:</p>
              <ul className="ml-4 list-disc space-y-1 text-muted-foreground">
                <li>easy to understand</li>
                <li>easy to copy</li>
                <li>easy to adapt to your own product</li>
              </ul>
              <p className="mt-4 text-foreground/80">no fluff. no "prompt engineering theatre".</p>
            </div>

            <div>
              <h2 className="mb-4 text-lg font-medium text-foreground">How We Think About Curation</h2>
              <p className="mb-4">not every prompt belongs here.</p>
              <p className="mb-2">we prioritize:</p>
              <ul className="mb-4 ml-4 list-disc space-y-1 text-muted-foreground">
                <li>practical usefulness over novelty</li>
                <li>prompts that help you ship, not just experiment</li>
                <li>clean structure and clear intent</li>
              </ul>
              <p>submissions are reviewed before being published to keep the quality bar high.</p>
            </div>

            <div>
              <h2 className="mb-4 text-lg font-medium text-foreground">Community First</h2>
              <p className="mb-4">v0.directory is community-driven.</p>
              <p className="mb-4">
                if you've written a prompt that consistently gives you good results, you can{" "}
                <Link href="/submit" className="text-foreground underline underline-offset-4 hover:no-underline">
                  submit it
                </Link>
                . every submission becomes a GitHub issue, keeping the process transparent and open.
              </p>
              <p>this project is built in public, and contributions are always welcome.</p>
            </div>

            <div>
              <h2 className="mb-4 text-lg font-medium text-foreground">Follow Along</h2>
              <p className="mb-4">
                the project is evolving in public.
                <br />
                ideas, feedback, and contributions are always welcome.
              </p>
              <p className="text-foreground/80">if v0.directory helps you ship faster, that's the goal.</p>
            </div>

            {/* Keep existing social links */}
            <div className="flex items-center gap-4 border-t border-border/50 pt-6">
              <Link
                href="https://github.com/rajdesai17/v0-prompts"
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

      {/* Moved disclaimer to bottom as small centered text */}
      <footer className="py-8 text-center">
        <p className="text-xs text-muted-foreground/60">This site is not directly affiliated with Vercel or v0.</p>
      </footer>
    </div>
  )
}
