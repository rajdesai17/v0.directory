import type { Metadata } from "next"
import type { Prompt, Category, MCP, Instruction } from "./data"

// =============================================================================
// Site Configuration
// =============================================================================

export const siteConfig = {
  name: "v0.directory",
  url: "https://v0.directory",
  description: "Discover and share prompts, MCP servers, and custom instructions for v0 by Vercel. Build beautiful UIs faster with curated, ready-to-use prompts.",
  twitterHandle: "@v0directory",
  locale: "en_US",
}

// =============================================================================
// Utility Functions
// =============================================================================

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str
  return str.slice(0, length - 3).trim() + "..."
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
}

export function getCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`
  return `${siteConfig.url}${cleanPath}`
}

// =============================================================================
// Base Metadata Generator
// =============================================================================

interface BaseMetadataOptions {
  title: string
  description: string
  path: string
  type?: "website" | "article"
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  tags?: string[]
  noIndex?: boolean
}

export function generateBaseMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  tags,
  noIndex = false,
}: BaseMetadataOptions): Metadata {
  const url = getCanonicalUrl(path)
  const fullTitle = title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    robots: noIndex ? { index: false, follow: true } : undefined,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(authors && { authors }),
      ...(tags && { tags }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      site: siteConfig.twitterHandle,
    },
  }
}

// =============================================================================
// Page-Specific Metadata Generators
// =============================================================================

export function generatePromptMetadata(prompt: Prompt): Metadata {
  const title = prompt.seo?.metaTitle || `${prompt.title} - v0 Prompt`
  const description = prompt.seo?.metaDescription || truncate(prompt.content, 155)

  return generateBaseMetadata({
    title,
    description,
    path: `/prompts/${prompt.slug}`,
    type: "article",
    publishedTime: prompt.createdAt,
    authors: [prompt.author.name],
    tags: prompt.tags,
    noIndex: prompt.seo?.noIndex,
  })
}

export function generateCategoryMetadata(category: Category, promptCount: number): Metadata {
  const title = `${category.name} Prompts for v0`
  const description = category.description || 
    `Browse ${promptCount}+ curated ${category.name.toLowerCase()} prompts for v0. Find ready-to-use prompts for ${category.name.toLowerCase()} UI design and development.`

  return generateBaseMetadata({
    title,
    description,
    path: `/browse/${category.slug}`,
  })
}

export function generateMCPMetadata(mcp: MCP): Metadata {
  const title = `${mcp.name} MCP Server`
  const description = truncate(mcp.description, 155)

  return generateBaseMetadata({
    title,
    description,
    path: `/mcps/${mcp.slug}`,
  })
}

export function generateInstructionMetadata(instruction: Instruction): Metadata {
  const title = `${instruction.title} - v0 Custom Instruction`
  const description = truncate(instruction.content, 155)

  return generateBaseMetadata({
    title,
    description,
    path: `/instructions/${instruction.slug}`,
    type: "article",
    publishedTime: instruction.createdAt,
    authors: [instruction.author.name],
    tags: instruction.tags,
  })
}

// =============================================================================
// Static Page Metadata
// =============================================================================

export const staticPageMetadata = {
  home: generateBaseMetadata({
    title: "v0.directory - Discover Prompts for v0 by Vercel",
    description: "Discover and share prompts, MCP servers, and custom instructions for v0 by Vercel. Build beautiful UIs faster with curated, ready-to-use prompts.",
    path: "/",
  }),

  browse: generateBaseMetadata({
    title: "Browse All Prompts",
    description: "Explore our complete collection of curated v0 prompts. Filter by category to find the perfect prompt for your next project.",
    path: "/browse",
  }),

  mcps: generateBaseMetadata({
    title: "MCP Servers for v0",
    description: "Discover Model Context Protocol (MCP) servers that extend v0's capabilities. Connect to databases, APIs, and services directly from v0.",
    path: "/mcps",
  }),

  instructions: generateBaseMetadata({
    title: "Custom Instructions for v0",
    description: "Enhance v0 with custom instructions. Add specialized knowledge and behaviors to improve your AI-assisted development workflow.",
    path: "/instructions",
  }),

  submit: generateBaseMetadata({
    title: "Submit a Prompt",
    description: "Share your v0 prompts with the community. Submit prompts, MCP servers, or custom instructions to help others build better UIs.",
    path: "/submit",
    noIndex: true,
  }),

  about: generateBaseMetadata({
    title: "About v0.directory",
    description: "Learn about v0.directory, a community-driven platform for discovering and sharing prompts, MCP servers, and custom instructions for v0 by Vercel.",
    path: "/about",
  }),
}
