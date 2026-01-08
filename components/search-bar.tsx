"use client"

import type React from "react"
import { Search } from "lucide-react"
import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { useState, Suspense, useEffect, useCallback, useRef } from "react"

interface SearchBarProps {
  placeholder?: string
  className?: string
}

function SearchBarContent({ placeholder = "Search for a prompt...", className }: SearchBarProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get("q") || "")
  const hasInteracted = useRef(false)

  const debouncedSearch = useCallback(
    (value: string) => {
      if (!hasInteracted.current) return

      const trimmed = value.trim()
      if (trimmed) {
        router.push(`/browse?q=${encodeURIComponent(trimmed)}`)
      } else if (pathname === "/browse") {
        router.push("/browse")
      }
    },
    [router, pathname],
  )

  useEffect(() => {
    const timer = setTimeout(() => {
      debouncedSearch(query)
    }, 300)

    return () => clearTimeout(timer)
  }, [query, debouncedSearch])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    hasInteracted.current = true
    debouncedSearch(query)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    hasInteracted.current = true
    setQuery(e.target.value)
  }

  return (
    <form onSubmit={handleSearch} className={className}>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          placeholder={placeholder}
          value={query}
          onChange={handleChange}
          className="h-12 w-full rounded-lg border border-border bg-card px-4 pl-11 text-sm text-foreground placeholder:text-muted-foreground focus:border-muted-foreground focus:outline-none"
        />
      </div>
    </form>
  )
}

export function SearchBar({ placeholder, className }: SearchBarProps) {
  return (
    <Suspense
      fallback={
        <div className={className}>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder={placeholder}
              disabled
              className="h-12 w-full rounded-lg border border-border bg-card px-4 pl-11 text-sm text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>
      }
    >
      <SearchBarContent placeholder={placeholder} className={className} />
    </Suspense>
  )
}
