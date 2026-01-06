"use client"

import { Suspense, useState } from "react"
import { Header } from "@/components/header"
import { MCPCard } from "@/components/mcp-card"
import { mcps, getFeaturedMCPs } from "@/lib/data"
import { ChevronLeft, ChevronRight, Search } from "lucide-react"
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

function MCPsContent() {
  const [searchQuery, setSearchQuery] = useState("")
  const [featuredIndex, setFeaturedIndex] = useState(0)
  const featuredMCPs = getFeaturedMCPs()

  const filteredMCPs = searchQuery
    ? mcps.filter(
        (m) =>
          m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : mcps

  const visibleFeatured = featuredMCPs.slice(featuredIndex, featuredIndex + 4)

  const nextFeatured = () => {
    if (featuredIndex + 4 < featuredMCPs.length) {
      setFeaturedIndex(featuredIndex + 1)
    }
  }

  const prevFeatured = () => {
    if (featuredIndex > 0) {
      setFeaturedIndex(featuredIndex - 1)
    }
  }

  return (
    <>
      <motion.section className="pt-16 pb-8" initial="hidden" animate="visible" variants={containerVariants}>
        <div className="mx-auto max-w-[1200px] px-8 lg:px-16">
          <motion.div variants={itemVariants}>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold tracking-tight text-foreground">Featured MCPs</h1>
                <p className="mt-2 text-sm text-muted-foreground">
                  Browse MCPs or post an MCP to reach developers using v0.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={prevFeatured}
                  disabled={featuredIndex === 0}
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={nextFeatured}
                  disabled={featuredIndex + 4 >= featuredMCPs.length}
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" variants={containerVariants}>
            {visibleFeatured.map((mcp) => (
              <motion.div key={mcp.id} variants={itemVariants}>
                <MCPCard mcp={mcp} />
              </motion.div>
            ))}
          </motion.div>
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
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${mcps.length}+ MCPs`}
              className="h-11 w-full rounded-lg border border-border bg-background pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-muted-foreground/50"
            />
          </div>
        </div>
      </motion.section>

      <motion.section
        className="pb-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ delay: 0.3 }}
      >
        <div className="mx-auto max-w-[1200px] px-8 lg:px-16">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredMCPs.map((mcp) => (
              <motion.div key={mcp.id} variants={itemVariants}>
                <MCPCard mcp={mcp} />
              </motion.div>
            ))}
          </div>
          {filteredMCPs.length === 0 && (
            <p className="text-center text-sm text-muted-foreground py-12">No MCPs found matching "{searchQuery}"</p>
          )}
        </div>
      </motion.section>
    </>
  )
}

export default function MCPsPage() {
  return (
    <Suspense fallback={null}>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <MCPsContent />
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
