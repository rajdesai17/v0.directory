"use client"

import { Suspense } from "react"
import { Header } from "@/components/header"
import { SearchBar } from "@/components/search-bar"
import { PromptCard } from "@/components/prompt-card"
import { prompts } from "@/lib/data"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

const fadeInVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

const contributors = [
  {
    id: "raj",
    name: "Raj",
    twitter: "https://x.com/rajoninternet",
  },
]

const skeletonsBefore = Array.from({ length: 3 }, (_, i) => ({ id: `skeleton-before-${i + 1}` }))
const skeletonsAfter = Array.from({ length: 3 }, (_, i) => ({ id: `skeleton-after-${i + 1}` }))

function HomeContent() {
  const featuredPrompts = prompts.slice(0, 8)

  return (
    <>
      <motion.section className="pt-16 pb-8" initial="hidden" animate="visible" variants={fadeInVariants}>
        <div className="mx-auto max-w-[1200px] px-8 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl inline-flex items-center justify-center flex-wrap gap-2">
              Discover
              <svg
                fill="currentColor"
                fillRule="evenodd"
                height="1em"
                style={{ flex: "none", lineHeight: 1 }}
                viewBox="0 0 24 24"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block"
              >
                <title>V0</title>
                <path
                  clipRule="evenodd"
                  d="M14.252 8.25h5.624c.088 0 .176.006.26.018l-5.87 5.87a1.889 1.889 0 01-.019-.265V8.25h-2.25v5.623a4.124 4.124 0 004.125 4.125h5.624v-2.25h-5.624c-.09 0-.179-.006-.265-.018l5.874-5.875a1.9 1.9 0 01.02.27v5.623H24v-5.624A4.124 4.124 0 0019.876 6h-5.624v2.25zM0 7.5v.006l7.686 9.788c.924 1.176 2.813.523 2.813-.973V7.5H8.25v6.87L2.856 7.5H0z"
                />
              </svg>
              prompts and more
            </h1>
            <p className="mt-4 text-pretty text-sm text-muted-foreground">
              Explore a curated collection of prompts for v0 and level up your AI-assisted development workflow.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              <Link href="/about" className="underline underline-offset-4 hover:text-foreground">
                New to v0? Learn more here.
              </Link>
            </p>
            <div className="mt-8">
              <SearchBar placeholder="Search for a prompt..." className="mx-auto max-w-xl" />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ delay: 0.2 }}
      >
        <div className="mx-auto max-w-[1200px] px-8 lg:px-16">
          <motion.div className="flex items-center justify-between" variants={itemVariants}>
            <h2 className="text-sm font-medium text-foreground">Featured Prompts</h2>
            <Link
              href="/browse"
              className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              View all
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featuredPrompts.map((prompt, index) => (
              <motion.div key={prompt.id} variants={itemVariants}>
                <PromptCard prompt={prompt} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ delay: 0.4 }}
      >
        <div className="mx-auto max-w-[1200px] px-8 lg:px-16">
          <motion.div className="text-center mb-6" variants={itemVariants}>
            <h2 className="text-sm font-medium text-foreground">Contributors</h2>
            <p className="mt-2 text-xs text-muted-foreground">
              Want to be featured here? Submit a high-quality v0 prompt. Approved contributions are credited
              automatically.
            </p>
          </motion.div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {skeletonsBefore.map((slot) => (
              <motion.div key={slot.id} variants={itemVariants}>
                <div className="w-20 h-8 rounded-lg border border-dashed border-border/30 bg-card/10 flex items-center justify-center">
                  <div className="h-3 w-12 animate-pulse rounded bg-muted/30" />
                </div>
              </motion.div>
            ))}
            {contributors.map((contributor) => (
              <motion.div key={contributor.id} variants={itemVariants}>
                <Link
                  href={contributor.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-24 h-8 flex items-center justify-center gap-2 rounded-lg border border-border/50 bg-card/30 transition-colors hover:bg-card/60"
                >
                  <span className="text-xs font-medium text-foreground">{contributor.name}</span>
                  <span className="text-border/50">|</span>
                  <svg viewBox="0 0 24 24" className="h-3 w-3 text-foreground" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
              </motion.div>
            ))}
            {skeletonsAfter.map((slot) => (
              <motion.div key={slot.id} variants={itemVariants}>
                <div className="w-20 h-8 rounded-lg border border-dashed border-border/30 bg-card/10 flex items-center justify-center">
                  <div className="h-3 w-12 animate-pulse rounded bg-muted/30" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
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

      <motion.footer
        className="border-t border-border/40 py-6 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <div className="mx-auto max-w-[1200px] px-8 lg:px-16">
          <p className="text-center text-xs text-muted-foreground/60">
            This site is not directly affiliated with Vercel or v0.
          </p>
        </div>
      </motion.footer>
    </div>
  )
}
