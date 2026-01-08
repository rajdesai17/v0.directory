"use client"

import type React from "react"
import { Search } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useState, Suspense, useEffect, useCallback } from "react"

interface SearchBarProps {
  placeholder?: string
  className?: string
}

function SearchBarContent({ placeholder = "Search for a prompt...", className }: SearchBarProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get("q") || "")

  const debouncedSearch = useCallback(
    (value: string) => {
      const trimmed = value.trim()
      if (trimmed) {
        router.push(`/browse?q=${encodeURIComponent(trimmed)}`)
      } else {
        router.push("/browse")
      }
    },
    [router],
  )

  useEffect(() => {
    const timer = setTimeout(() => {
      debouncedSearch(query)
    }, 300) // 300ms debounce

    return () => clearTimeout(timer)
  }, [query, debouncedSearch])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    debouncedSearch(query)
  }

  return (
    <form onSubmit={handleSearch} className={className}>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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
