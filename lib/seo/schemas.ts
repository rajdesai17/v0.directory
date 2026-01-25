import type { Prompt, Category, MCP, Instruction } from "@/lib/data"
import { siteConfig, truncate } from "@/lib/seo"

// =============================================================================
// Schema Types
// =============================================================================

export interface BreadcrumbItem {
  name: string
  url: string
}

// =============================================================================
// Organization Schema (Site-wide)
// =============================================================================

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    sameAs: [
      `https://twitter.com/${siteConfig.twitterHandle.replace("@", "")}`,
    ],
  }
}

// =============================================================================
// WebSite Schema (Homepage)
// =============================================================================

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/browse?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }
}

// =============================================================================
// Breadcrumb Schema
// =============================================================================

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// =============================================================================
// Article Schema (Prompts)
// =============================================================================

export function generatePromptArticleSchema(prompt: Prompt) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: prompt.title,
    description: truncate(prompt.content, 155),
    author: {
      "@type": "Person",
      name: prompt.author.name,
      ...(prompt.author.twitter && {
        url: `https://twitter.com/${prompt.author.twitter}`,
      }),
    },
    datePublished: prompt.createdAt,
    dateModified: prompt.createdAt,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/prompts/${prompt.slug}`,
    },
    keywords: prompt.tags.join(", "),
    articleSection: prompt.category,
  }
}

// =============================================================================
// HowTo Schema (Prompts with steps)
// =============================================================================

export function generateHowToSchema(prompt: Prompt) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to use: ${prompt.title}`,
    description: truncate(prompt.content, 155),
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Copy the prompt",
        text: "Click the copy button to copy the prompt to your clipboard.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Open v0",
        text: "Go to v0.dev and start a new chat or open an existing project.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Paste and generate",
        text: "Paste the prompt and let v0 generate your UI component.",
      },
    ],
    tool: {
      "@type": "HowToTool",
      name: "v0 by Vercel",
    },
  }
}

// =============================================================================
// CollectionPage Schema (Categories)
// =============================================================================

export function generateCollectionSchema(category: Category, prompts: Prompt[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.name} Prompts for v0`,
    description: category.description || `Collection of ${category.count} ${category.name.toLowerCase()} prompts for v0`,
    url: `${siteConfig.url}/browse/${category.slug}`,
    numberOfItems: prompts.length,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: prompts.slice(0, 10).map((prompt, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${siteConfig.url}/prompts/${prompt.slug}`,
        name: prompt.title,
      })),
    },
  }
}

// =============================================================================
// SoftwareApplication Schema (MCPs)
// =============================================================================

export function generateMCPSchema(mcp: MCP) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: mcp.name,
    description: mcp.description,
    applicationCategory: "DeveloperApplication",
    applicationSubCategory: "Model Context Protocol Server",
    operatingSystem: "Cross-platform",
    author: {
      "@type": "Organization",
      name: mcp.author,
    },
    url: `${siteConfig.url}/mcps/${mcp.slug}`,
    ...(mcp.docsUrl && { sameAs: mcp.docsUrl }),
  }
}

// =============================================================================
// CreativeWork Schema (Instructions)
// =============================================================================

export function generateInstructionSchema(instruction: Instruction) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: instruction.title,
    description: truncate(instruction.content, 155),
    author: {
      "@type": "Person",
      name: instruction.author.name,
      ...(instruction.author.twitter && {
        url: `https://twitter.com/${instruction.author.twitter}`,
      }),
    },
    datePublished: instruction.createdAt,
    keywords: instruction.tags.join(", "),
    learningResourceType: "Custom Instruction",
    educationalUse: "AI Development",
  }
}

// =============================================================================
// FAQ Schema
// =============================================================================

export interface FAQ {
  question: string
  answer: string
}

export function generateFAQSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

// =============================================================================
// ItemList Schema (for listing pages)
// =============================================================================

export function generateItemListSchema(
  items: { name: string; url: string; description?: string }[],
  listName: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: listName,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
      ...(item.description && { description: item.description }),
    })),
  }
}
