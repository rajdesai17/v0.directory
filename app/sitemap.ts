import type { MetadataRoute } from "next"
import { prompts, categories, mcps, instructions } from "@/lib/data"
import { siteConfig } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  // Static pages with high priority
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/browse`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mcps`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/instructions`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ]

  // Category pages - hub pages for SEO
  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${baseUrl}/browse/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  // Individual prompt pages - spoke pages
  const promptPages: MetadataRoute.Sitemap = prompts.map((prompt) => ({
    url: `${baseUrl}/prompts/${prompt.slug}`,
    lastModified: prompt.createdAt ? new Date(prompt.createdAt) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // MCP server pages
  const mcpPages: MetadataRoute.Sitemap = mcps.map((mcp) => ({
    url: `${baseUrl}/mcps/${mcp.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Instruction pages
  const instructionPages: MetadataRoute.Sitemap = instructions.map((instruction) => ({
    url: `${baseUrl}/instructions/${instruction.slug}`,
    lastModified: instruction.createdAt ? new Date(instruction.createdAt) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [
    ...staticPages,
    ...categoryPages,
    ...promptPages,
    ...mcpPages,
    ...instructionPages,
  ]
}
