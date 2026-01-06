import Link from "next/link"
import type { Category } from "@/lib/data"

interface CategoryPillsProps {
  categories: Category[]
}

export function CategoryPills({ categories }: CategoryPillsProps) {
  return (
    <div className="flex items-center gap-3 overflow-x-auto pb-2">
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/browse?category=${category.slug}`}
          className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-[13px] text-foreground transition-colors hover:border-muted-foreground/50"
        >
          {category.name}
        </Link>
      ))}
    </div>
  )
}
