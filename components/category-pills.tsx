import Link from "next/link"
import type { Category } from "@/lib/data"

interface CategoryPillsProps {
  categories: Category[]
}

const categoryIcons: Record<string, string> = {
  typescript: "TS",
  react: "⚛️",
  nextjs: "▲",
  python: "🐍",
  tailwind: "🎨",
  nodejs: "⬢",
  vue: "🟢",
  general: "📝",
}

export function CategoryPills({ categories }: CategoryPillsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.slice(0, 10).map((category) => (
        <Link
          key={category.slug}
          href={`/browse?category=${category.slug}`}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-[13px] text-foreground transition-colors hover:border-muted-foreground/50"
        >
          <span className="text-sm">{categoryIcons[category.slug] || category.name.charAt(0)}</span>
          {category.name}
        </Link>
      ))}
    </div>
  )
}
