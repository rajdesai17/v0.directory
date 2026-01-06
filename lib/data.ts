export interface Prompt {
  id: string
  slug: string
  title: string
  content: string
  category: string
  tags: string[]
  author: {
    name: string
    avatar: string
  }
  createdAt: string
}

export interface MCP {
  id: string
  slug: string
  name: string
  description: string
  icon: string
  author: string
  featured?: boolean
  mcpUrl?: string
  authType?: "none" | "bearer" | "headers" | "oauth"
  docsUrl?: string
}

export interface Instruction {
  id: string
  slug: string
  title: string
  content: string
  category: string
  tags: string[]
  author: {
    name: string
    avatar: string
  }
  createdAt: string
}

export interface Category {
  name: string
  slug: string
  count: number
}

export const categories: Category[] = [
  { name: "Dashboards", slug: "dashboards", count: 12 },
  { name: "Landing Pages", slug: "landing-pages", count: 18 },
  { name: "Auth & Onboarding", slug: "auth-onboarding", count: 8 },
  { name: "Fintech", slug: "fintech", count: 6 },
  { name: "Marketing", slug: "marketing", count: 7 },
]

export const mcps: MCP[] = [
  {
    id: "1",
    slug: "supabase",
    name: "Supabase",
    description:
      "Connect to your Supabase projects: manage databases, auth, storage, and edge functions directly from v0.",
    icon: "⚡",
    author: "Supabase",
    featured: true,
    mcpUrl: "https://mcp.supabase.com",
    authType: "bearer",
    docsUrl: "https://supabase.com/docs/guides/ai/mcp",
  },
  {
    id: "2",
    slug: "vercel",
    name: "Vercel",
    description: "Deploy and manage your Vercel projects, configure domains, and monitor deployments seamlessly.",
    icon: "▲",
    author: "Vercel",
    featured: true,
    mcpUrl: "https://mcp.vercel.com",
    authType: "oauth",
    docsUrl: "https://vercel.com/docs/mcp",
  },
  {
    id: "3",
    slug: "stripe",
    name: "Stripe",
    description: "Integrate Stripe payments, manage subscriptions, and handle billing directly in your v0 projects.",
    icon: "💳",
    author: "Stripe",
    featured: true,
    mcpUrl: "https://mcp.stripe.com",
    authType: "bearer",
    docsUrl: "https://stripe.com/docs/mcp",
  },
  {
    id: "4",
    slug: "prisma",
    name: "Prisma",
    description:
      "Database toolkit for TypeScript and Node.js. Generate type-safe database clients and manage migrations.",
    icon: "◆",
    author: "Prisma",
    featured: true,
    mcpUrl: "https://mcp.prisma.io",
    authType: "bearer",
    docsUrl: "https://prisma.io/docs/mcp",
  },
  {
    id: "5",
    slug: "openai",
    name: "OpenAI",
    description: "Access GPT models, embeddings, and AI capabilities directly in your applications.",
    icon: "🤖",
    author: "OpenAI",
    mcpUrl: "https://mcp.openai.com",
    authType: "bearer",
    docsUrl: "https://platform.openai.com/docs/mcp",
  },
  {
    id: "6",
    slug: "resend",
    name: "Resend",
    description: "Modern email API for developers. Send transactional emails with React Email templates.",
    icon: "✉️",
    author: "Resend",
    mcpUrl: "https://mcp.resend.com",
    authType: "bearer",
    docsUrl: "https://resend.com/docs/mcp",
  },
  {
    id: "7",
    slug: "clerk",
    name: "Clerk",
    description: "Complete user management with authentication, user profiles, and organization management.",
    icon: "🔐",
    author: "Clerk",
    mcpUrl: "https://mcp.clerk.com",
    authType: "oauth",
    docsUrl: "https://clerk.com/docs/mcp",
  },
  {
    id: "8",
    slug: "upstash",
    name: "Upstash",
    description: "Serverless Redis and Kafka for modern applications. Perfect for rate limiting and caching.",
    icon: "🔴",
    author: "Upstash",
    mcpUrl: "https://mcp.upstash.com",
    authType: "bearer",
    docsUrl: "https://upstash.com/docs/mcp",
  },
  {
    id: "9",
    slug: "planetscale",
    name: "PlanetScale",
    description: "Serverless MySQL platform with branching, non-blocking schema changes, and insights.",
    icon: "🌍",
    author: "PlanetScale",
    mcpUrl: "https://mcp.planetscale.com",
    authType: "bearer",
    docsUrl: "https://planetscale.com/docs/mcp",
  },
  {
    id: "10",
    slug: "neon",
    name: "Neon",
    description: "Serverless Postgres with branching, autoscaling, and bottomless storage.",
    icon: "🟢",
    author: "Neon",
    mcpUrl: "https://mcp.neon.tech",
    authType: "bearer",
    docsUrl: "https://neon.tech/docs/mcp",
  },
  {
    id: "11",
    slug: "convex",
    name: "Convex",
    description: "The fullstack TypeScript development platform. Realtime database with serverless functions.",
    icon: "🔶",
    author: "Convex",
    mcpUrl: "https://mcp.convex.dev",
    authType: "bearer",
    docsUrl: "https://docs.convex.dev/mcp",
  },
  {
    id: "12",
    slug: "sanity",
    name: "Sanity",
    description: "Structured content platform with real-time collaboration and customizable editing.",
    icon: "📝",
    author: "Sanity",
    mcpUrl: "https://mcp.sanity.io",
    authType: "bearer",
    docsUrl: "https://sanity.io/docs/mcp",
  },
]

export const instructions: Instruction[] = [
  {
    id: "1",
    slug: "clean-code-practices",
    title: "Clean Code Practices",
    content: `Always follow these clean code practices:

- Write self-documenting code with clear variable and function names
- Keep functions small and focused on a single responsibility
- Use meaningful comments only when the code cannot explain itself
- Follow consistent formatting and indentation
- Avoid deep nesting - extract complex logic into separate functions
- Write tests for critical functionality
- Handle errors gracefully with proper error messages`,
    category: "general",
    tags: ["Clean Code", "Best Practices", "DRY"],
    author: { name: "v0 Team", avatar: "/diverse-group-avatars.png" },
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    slug: "typescript-strict-mode",
    title: "TypeScript Strict Mode",
    content: `Enable and follow TypeScript strict mode guidelines:

- Always enable strict mode in tsconfig.json
- Never use 'any' type - use 'unknown' and type guards instead
- Define explicit return types for functions
- Use discriminated unions for complex state
- Leverage utility types (Partial, Required, Pick, Omit)
- Implement proper null checking
- Use const assertions for literal types`,
    category: "typescript",
    tags: ["TypeScript", "Type Safety", "Strict Mode"],
    author: { name: "v0 Team", avatar: "/diverse-group-avatars.png" },
    createdAt: "2024-01-14",
  },
  {
    id: "3",
    slug: "react-component-patterns",
    title: "React Component Patterns",
    content: `Follow these React component patterns:

- Prefer functional components with hooks
- Use composition over inheritance
- Implement proper prop typing with TypeScript
- Memoize expensive computations with useMemo
- Use useCallback for callback props
- Implement error boundaries for graceful error handling
- Keep components focused and reusable`,
    category: "react",
    tags: ["React", "Components", "Hooks"],
    author: { name: "v0 Team", avatar: "/diverse-group-avatars.png" },
    createdAt: "2024-01-13",
  },
  {
    id: "4",
    slug: "accessibility-guidelines",
    title: "Accessibility Guidelines",
    content: `Ensure your applications are accessible:

- Use semantic HTML elements
- Provide alt text for all images
- Ensure sufficient color contrast
- Support keyboard navigation
- Use ARIA attributes appropriately
- Test with screen readers
- Implement focus management for modals and dialogs`,
    category: "accessibility",
    tags: ["A11y", "WCAG", "Screen Readers"],
    author: { name: "v0 Team", avatar: "/diverse-group-avatars.png" },
    createdAt: "2024-01-12",
  },
  {
    id: "5",
    slug: "performance-optimization",
    title: "Performance Optimization",
    content: `Optimize your application performance:

- Implement code splitting and lazy loading
- Optimize images with next/image
- Use proper caching strategies
- Minimize bundle size
- Implement virtual scrolling for long lists
- Use web workers for heavy computations
- Monitor Core Web Vitals`,
    category: "performance",
    tags: ["Performance", "Optimization", "Core Web Vitals"],
    author: { name: "v0 Team", avatar: "/diverse-group-avatars.png" },
    createdAt: "2024-01-11",
  },
  {
    id: "6",
    slug: "security-best-practices",
    title: "Security Best Practices",
    content: `Follow security best practices:

- Validate and sanitize all user inputs
- Use parameterized queries to prevent SQL injection
- Implement proper authentication and authorization
- Use HTTPS everywhere
- Set secure HTTP headers
- Protect against XSS and CSRF attacks
- Keep dependencies updated`,
    category: "security",
    tags: ["Security", "XSS", "CSRF"],
    author: { name: "v0 Team", avatar: "/diverse-group-avatars.png" },
    createdAt: "2024-01-10",
  },
]

export const prompts: Prompt[] = [
  {
    id: "1",
    slug: "front-end-developer",
    title: "Front-End Developer",
    content: `You are a Senior Front-End Developer and an Expert in ReactJS, NextJS, JavaScript, TypeScript, HTML, CSS and modern UI/UX frameworks (e.g., TailwindCSS, Shadcn, Radix). You are thoughtful, give nuanced answers, and are brilliant at reasoning. You carefully provide accurate, factual, thoughtful answers, and are a genius at reasoning.

- Follow the user's requirements carefully & to the letter.
- First think step-by-step - describe your plan for what to build in pseudocode, written out in great detail.
- Confirm, then write code!
- Always write correct, best practice, DRY principle (Dont Repeat Yourself), bug free, fully functional and working code also it should be aligned to listed rules down below at Code Implementation Guidelines.
- Focus on easy and readability code, over being performant.
- Fully implement all requested functionality.
- Leave NO todo's, placeholders or missing pieces.
- Ensure code is complete! Verify thoroughly finalised.
- Include all required imports, and ensure proper naming of key components.
- Be concise. Minimize any other prose.
- If you think there might not be a correct answer, you say so.
- If you do not know the answer, say so, instead of guessing.`,
    category: "typescript",
    tags: ["Tailwind CSS", "Shadcn UI", "Radix UI"],
    author: {
      name: "Mohammadali Karimi",
      avatar: "/diverse-group-avatars.png",
    },
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    slug: "nextjs-react-typescript",
    title: "Next.js React TypeScript Cursor Rules",
    content: `You are an expert in TypeScript, Node.js, Next.js App Router, React, Shadcn UI, Radix UI and Tailwind.

Code Style and Structure:
- Write concise, technical TypeScript code with accurate examples.
- Use functional and declarative programming patterns; avoid classes.
- Prefer iteration and modularization over code duplication.
- Use descriptive variable names with auxiliary verbs (e.g., isLoading, hasError).
- Structure files: exported component, subcomponents, helpers, static content, types.

Naming Conventions:
- Use lowercase with dashes for directories (e.g., components/auth-wizard).
- Favor named exports for components.`,
    category: "typescript",
    tags: ["shadcn", "radix", "tailwind"],
    author: {
      name: "Sarah Chen",
      avatar: "/diverse-group-avatars.png",
    },
    createdAt: "2024-01-12",
  },
  {
    id: "3",
    slug: "brand-dev",
    title: "Brand.dev",
    content: `#1 API to personalize your product with logos, colors, and company info from any domain.

You are an expert brand developer with deep knowledge of design systems, brand identity, and visual communication. You help users create cohesive brand experiences across all touchpoints.

Key responsibilities:
- Extract and analyze brand assets from existing sources
- Generate consistent color palettes and typography systems
- Create scalable design tokens for multi-platform use
- Ensure accessibility compliance in all brand materials`,
    category: "typescript",
    tags: ["API", "Branding", "Design"],
    author: {
      name: "Brand.dev",
      avatar: "/brand-concept.png",
    },
    createdAt: "2024-01-10",
  },
  {
    id: "4",
    slug: "expo-react-native",
    title: "Expo React Native TypeScript Cursor Rules",
    content: `You are an expert in TypeScript, React Native, Expo, and Mobile UI development.

Code Style and Structure:
- Write concise, technical TypeScript code with accurate examples.
- Use functional and declarative programming patterns; avoid classes.
- Prefer iteration and modularization over code duplication.
- Use descriptive variable names with auxiliary verbs (e.g., isLoading, hasError).

Navigation:
- Use expo-router for file-based navigation.
- Implement deep linking and universal links.
- Handle navigation state persistence.`,
    category: "react-native",
    tags: ["expo-router", "expo-status-bar", "mobile"],
    author: {
      name: "Alex Rivera",
      avatar: "/diverse-group-avatars.png",
    },
    createdAt: "2024-01-08",
  },
  {
    id: "5",
    slug: "optimized-nextjs-typescript",
    title: "Optimized Next.js TypeScript Best Practice",
    content: `You are an expert full-stack developer proficient in TypeScript, React, Next.js, and modern web development best practices.

Performance Optimization:
- Implement proper code splitting with dynamic imports
- Use React Server Components where appropriate
- Optimize images with next/image
- Implement proper caching strategies
- Use Suspense boundaries for loading states

Security Best Practices:
- Validate all user inputs
- Implement proper CSRF protection
- Use environment variables for secrets
- Implement rate limiting on API routes`,
    category: "nextjs",
    tags: ["Next.js", "TypeScript", "Performance"],
    author: {
      name: "Jordan Lee",
      avatar: "/diverse-group-avatars.png",
    },
    createdAt: "2024-01-05",
  },
  {
    id: "6",
    slug: "chrome-extension-development",
    title: "Chrome Extension Development Best Practices",
    content: `You are an expert Chrome extension developer, proficient in JavaScript, TypeScript, and the Chrome Extensions API.

Manifest V3 Guidelines:
- Use service workers instead of background pages
- Implement proper permission requests
- Use declarativeNetRequest for network modifications
- Handle extension lifecycle events properly

Security Considerations:
- Minimize required permissions
- Use content security policies
- Validate all external data
- Implement proper message passing between contexts`,
    category: "javascript",
    tags: ["Chrome", "API", "TypeScript"],
    author: {
      name: "Chris Wong",
      avatar: "/diverse-group-avatars.png",
    },
    createdAt: "2024-01-03",
  },
  {
    id: "7",
    slug: "vuejs-typescript",
    title: "Vue.js TypeScript Best Practices",
    content: `You are an expert in TypeScript, Node.js, Vite, Vue.js, Vue Router, Pinia, VueUse, and modern Vue development.

Composition API:
- Use script setup syntax for cleaner components
- Leverage composables for reusable logic
- Implement proper TypeScript types for props and emits
- Use defineProps and defineEmits with type inference

State Management with Pinia:
- Create modular stores with proper typing
- Use getters for computed state
- Implement actions for async operations
- Handle store hydration for SSR`,
    category: "typescript",
    tags: ["Pinia", "VueUse", "Vite"],
    author: {
      name: "Emma Davis",
      avatar: "/diverse-group-avatars.png",
    },
    createdAt: "2024-01-01",
  },
  {
    id: "8",
    slug: "clean-nestjs-apis",
    title: "Clean NestJs APIs with TypeScript Cursor Rules",
    content: `You are a senior TypeScript programmer with experience in the NestJS framework and a preference for clean programming and design patterns.

Architecture Principles:
- Follow Clean Architecture / Hexagonal Architecture
- Implement proper dependency injection
- Use repository pattern for data access
- Separate business logic from infrastructure

API Design:
- Use proper HTTP methods and status codes
- Implement comprehensive error handling
- Use DTOs for request/response validation
- Document APIs with Swagger/OpenAPI`,
    category: "typescript",
    tags: ["mikro-orm", "NestJS", "API"],
    author: {
      name: "Michael Brown",
      avatar: "/diverse-group-avatars.png",
    },
    createdAt: "2023-12-28",
  },
  {
    id: "9",
    slug: "python-data-science",
    title: "Python Data Science Expert",
    content: `You are an expert Python developer specializing in data science, machine learning, and scientific computing.

Libraries and Frameworks:
- NumPy for numerical computing
- Pandas for data manipulation
- Scikit-learn for machine learning
- TensorFlow/PyTorch for deep learning
- Matplotlib/Seaborn for visualization

Best Practices:
- Write vectorized code for performance
- Use proper data validation and cleaning
- Implement reproducible experiments
- Document code with type hints and docstrings`,
    category: "python",
    tags: ["NumPy", "Pandas", "ML"],
    author: {
      name: "Dr. Lisa Zhang",
      avatar: "/diverse-group-avatars.png",
    },
    createdAt: "2023-12-25",
  },
]

export function getPromptsByCategory(category: string): Prompt[] {
  return prompts.filter((p) => p.category === category)
}

export function getPromptBySlug(slug: string): Prompt | undefined {
  return prompts.find((p) => p.slug === slug)
}

export function searchPrompts(query: string): Prompt[] {
  const lowerQuery = query.toLowerCase()
  return prompts.filter(
    (p) =>
      p.title.toLowerCase().includes(lowerQuery) ||
      p.content.toLowerCase().includes(lowerQuery) ||
      p.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)),
  )
}

export function getMCPBySlug(slug: string): MCP | undefined {
  return mcps.find((m) => m.slug === slug)
}

export function getFeaturedMCPs(): MCP[] {
  return mcps.filter((m) => m.featured)
}

export function getInstructionBySlug(slug: string): Instruction | undefined {
  return instructions.find((i) => i.slug === slug)
}

export function searchInstructions(query: string): Instruction[] {
  const lowerQuery = query.toLowerCase()
  return instructions.filter(
    (i) =>
      i.title.toLowerCase().includes(lowerQuery) ||
      i.content.toLowerCase().includes(lowerQuery) ||
      i.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)),
  )
}
