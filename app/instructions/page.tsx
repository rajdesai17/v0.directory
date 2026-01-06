"use client"

import { Suspense, useState } from "react"
import { Header } from "@/components/header"
import { InstructionCard } from "@/components/instruction-card"
import { instructions } from "@/lib/data"
import { Search } from "lucide-react"
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

function InstructionsContent() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredInstructions = searchQuery
    ? instructions.filter(
        (i) =>
          i.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          i.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
          i.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    : instructions

  return (
    <>
      <motion.section className="pt-16 pb-8" initial="hidden" animate="visible" variants={fadeInVariants}>
        <div className="mx-auto max-w-[1200px] px-8 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Custom Instructions
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              Curated instructions to customize v0's behavior and output for your specific needs.
            </p>
            <div className="mt-8">
              <div className="relative mx-auto max-w-xl">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search instructions..."
                  className="h-11 w-full rounded-lg border border-border bg-background pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-muted-foreground/50"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-6 pb-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ delay: 0.2 }}
      >
        <div className="mx-auto max-w-[1200px] px-8 lg:px-16">
          <motion.div className="flex items-center justify-between mb-4" variants={itemVariants}>
            <h2 className="text-sm font-medium text-foreground">All Instructions</h2>
            <span className="text-sm text-muted-foreground">{filteredInstructions.length} instructions</span>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredInstructions.map((instruction) => (
              <motion.div key={instruction.id} variants={itemVariants}>
                <InstructionCard instruction={instruction} />
              </motion.div>
            ))}
          </div>
          {filteredInstructions.length === 0 && (
            <p className="text-center text-sm text-muted-foreground py-12">
              No instructions found matching "{searchQuery}"
            </p>
          )}
        </div>
      </motion.section>
    </>
  )
}

export default function InstructionsPage() {
  return (
    <Suspense fallback={null}>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <InstructionsContent />
        </main>
        <footer className="border-t border-border/40 py-6">
          <div className="mx-auto max-w-[1200px] px-8 lg:px-16">
            <p className="text-center text-xs text-muted-foreground/60">
              This site is not directly affiliated with Vercel or v0.
            </p>
          </div>
        </footer>
      </div>
    </Suspense>
  )
}
