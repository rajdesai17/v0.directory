"use client"

import Link from "next/link"
import { useState } from "react"
import { Github, ChevronDown, Menu, X } from "lucide-react"

const categories = [
  { name: "Dashboards", slug: "dashboards" },
  { name: "Landing Pages", slug: "landing-pages" },
  { name: "Components", slug: "components" },
  { name: "E-commerce", slug: "ecommerce" },
  { name: "Portfolio", slug: "portfolio" },
  { name: "Authentication", slug: "authentication" },
  { name: "Animations", slug: "animations" },
  { name: "Apps", slug: "apps" },
]

export function Header() {
  const [categoriesOpen, setCategoriesOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-8 lg:px-16">
        {/* Left - Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-[15px] font-medium tracking-tight text-foreground">v0.directory</span>
        </Link>

        {/* Center - Primary Nav (desktop) */}
        <nav className="hidden items-center gap-1 md:flex">
          <Link
            href="/browse"
            className="rounded-md px-3 py-1.5 text-[13px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            Prompts
          </Link>

          <Link
            href="/mcps"
            className="rounded-md px-3 py-1.5 text-[13px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            MCPs
          </Link>

          <Link
            href="/instructions"
            className="rounded-md px-3 py-1.5 text-[13px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            Instructions
          </Link>

          {/* Categories Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCategoriesOpen(!categoriesOpen)}
              className="flex items-center gap-1 rounded-md px-3 py-1.5 text-[13px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              Categories
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${categoriesOpen ? "rotate-180" : ""}`} />
            </button>

            {categoriesOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setCategoriesOpen(false)} />
                <div className="absolute left-0 top-full z-50 mt-1 w-48 rounded-lg border border-border bg-background p-1 shadow-xl">
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/browse?category=${category.slug}`}
                      onClick={() => setCategoriesOpen(false)}
                      className="block rounded-md px-3 py-2 text-[13px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>

          <Link
            href="/submit"
            className="rounded-md px-3 py-1.5 text-[13px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            Submit
          </Link>
          <Link
            href="/about"
            className="rounded-md px-3 py-1.5 text-[13px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="https://v0.dev/docs/introduction"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md px-3 py-1.5 text-[13px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            Learn
          </Link>
        </nav>

        {/* Right - Utility */}
        <div className="flex items-center gap-1">
          <Link
            href="https://github.com/rajdesai17/v0.directory"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:hidden"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background px-8 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            <Link
              href="/browse"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2 text-[14px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              Prompts
            </Link>
            <Link
              href="/mcps"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2 text-[14px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              MCPs
            </Link>
            <Link
              href="/instructions"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2 text-[14px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              Instructions
            </Link>
            <div className="px-3 py-2">
              <span className="text-[12px] font-medium uppercase tracking-wider text-muted-foreground/60">
                Categories
              </span>
              <div className="mt-2 flex flex-col gap-1">
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/browse?category=${category.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-md px-2 py-1.5 text-[13px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/submit"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2 text-[14px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              Submit
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2 text-[14px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="https://v0.dev/docs/introduction"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2 text-[14px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              Learn
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
