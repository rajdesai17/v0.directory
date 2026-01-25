import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { JsonLd } from "./json-ld"
import { generateBreadcrumbSchema, type BreadcrumbItem } from "@/lib/seo/schemas"
import { siteConfig } from "@/lib/seo"

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  showHome?: boolean
}

export function Breadcrumbs({ items, showHome = true }: BreadcrumbsProps) {
  // Build full breadcrumb list with home
  const fullItems: BreadcrumbItem[] = showHome
    ? [{ name: "Home", url: siteConfig.url }, ...items]
    : items

  // Helper to get href for Link (convert full URL to path)
  const getHref = (url: string) => {
    if (url.startsWith(siteConfig.url)) {
      return url.replace(siteConfig.url, "") || "/"
    }
    return url
  }

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(fullItems)} />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
          {fullItems.map((item, index) => {
            const isLast = index === fullItems.length - 1
            const isHome = index === 0 && showHome

            return (
              <li key={item.url} className="flex items-center gap-1.5">
                {index > 0 && (
                  <ChevronRight className="h-3.5 w-3.5 flex-shrink-0" />
                )}
                {isLast ? (
                  <span className="text-foreground font-medium truncate max-w-[200px]">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={getHref(item.url)}
                    className="hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    {isHome && <Home className="h-3.5 w-3.5" />}
                    <span className={isHome ? "sr-only sm:not-sr-only" : ""}>
                      {item.name}
                    </span>
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
