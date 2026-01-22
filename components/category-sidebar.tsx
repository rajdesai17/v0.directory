"use client"

import Link from "next/link"
import type { Category } from "@/lib/data"
import { cn } from "@/lib/utils"

interface CategorySidebarProps {
  categories: Category[]
  activeCategory?: string
}

export function CategorySidebar({ categories, activeCategory }: CategorySidebarProps) {
  return (
    <aside className="hidden md:block">
      <nav className="sticky top-24 space-y-0.5">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/browse/${category.slug}`}
            className={cn(
              "flex items-center justify-between px-3 py-2 text-[13px] transition-colors",
              activeCategory === category.slug ? "text-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            <span>{category.name}</span>
            <span className="tabular-nums text-muted-foreground">{category.count}</span>
          </Link>
        ))}
        <div className="pt-6">
          <Link
            href="/submit"
            className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2.5 text-[13px] text-foreground transition-colors hover:bg-secondary"
          >
            Submit
            <span className="text-muted-foreground">+</span>
          </Link>
        </div>
      </nav>
    </aside>
  )
}
