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
    twitter?: string
  }
  createdAt: string
  previewUrl?: string
  // SEO-specific fields (optional)
  seo?: {
    metaTitle?: string      // Override default title
    metaDescription?: string // Override default description
    focusKeyword?: string   // Primary SEO keyword
    noIndex?: boolean       // Exclude from search
  }
  // Content enrichment
  faqs?: Array<{
    question: string
    answer: string
  }>
  relatedSlugs?: string[]   // Manual related content override
  difficulty?: "beginner" | "intermediate" | "advanced"
  estimatedTime?: string    // e.g., "5 min read"
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
  // SEO fields (optional)
  description?: string       // Unique category description for meta
  longDescription?: string   // Extended content for category pages
  icon?: string
  featuredPromptSlugs?: string[] // Highlight specific prompts
}

export const categories: Category[] = [
  { 
    name: "Dashboards", 
    slug: "dashboards", 
    count: 4,
    description: "Build powerful analytics dashboards, admin panels, and data visualization interfaces with v0. Perfect for monitoring, managing, and displaying complex data in intuitive layouts."
  },
  { 
    name: "Landing Pages", 
    slug: "landing-pages", 
    count: 6,
    description: "Create high-converting landing pages, hero sections, and marketing layouts with v0. Designed to capture attention and drive conversions for SaaS, startups, and product launches."
  },
  { 
    name: "Components", 
    slug: "components", 
    count: 4,
    description: "Discover reusable UI components, forms, modals, and interactive widgets for your applications. Build consistent, accessible interfaces faster with these v0 prompts."
  },
  { 
    name: "E-commerce", 
    slug: "ecommerce", 
    count: 4,
    description: "Design stunning e-commerce experiences including product pages, shopping carts, checkout flows, and storefront layouts optimized for conversions."
  },
  { 
    name: "Portfolio", 
    slug: "portfolio", 
    count: 4,
    description: "Showcase your work with beautiful portfolio designs. From minimalist to creative layouts, find the perfect prompt to highlight your projects and skills."
  },
  { 
    name: "Authentication", 
    slug: "authentication", 
    count: 1,
    description: "Build secure and user-friendly authentication flows including login forms, signup pages, password reset interfaces, and multi-factor authentication screens."
  },
  { 
    name: "Animations", 
    slug: "animations", 
    count: 3,
    description: "Add life to your interfaces with smooth animations and micro-interactions. Create engaging user experiences with motion design prompts for v0."
  },
  { 
    name: "Apps", 
    slug: "apps", 
    count: 4,
    description: "Build complete application interfaces including mobile apps, web apps, and productivity tools. From chat applications to task managers, find comprehensive UI prompts."
  },
  { 
    name: "Code Quality", 
    slug: "code-quality", 
    count: 28,
    description: "Improve your codebase with prompts focused on refactoring, best practices, testing, and optimization. Write cleaner, more maintainable code with AI assistance."
  },
]

export const mcps: MCP[] = [
  {
    id: "0",
    slug: "v0",
    name: "v0 MCP Server",
    description:
      "The official v0 MCP server allows you to integrate v0's AI-powered code generation directly into your IDE. Create and manage chats, access code generation capabilities, and leverage v0's design expertise from Cursor, Claude Desktop, or VS Code.",
    icon: "",
    author: "Vercel",
    featured: true,
    mcpUrl: "https://mcp.v0.dev",
    authType: "bearer",
    docsUrl: "https://v0.dev/docs/api/platform/adapters/mcp-server",
  },
  {
    id: "1",
    slug: "supabase",
    name: "Supabase",
    description:
      "Connect to your Supabase projects: manage databases, auth, storage, and edge functions directly from v0.",
    icon: "",
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
    icon: "",
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
    icon: "",
    author: "Stripe",
    featured: true,
    mcpUrl: "https://mcp.stripe.com",
    authType: "bearer",
    docsUrl: "https://stripe.com/docs/mcp",
  },
  {
    id: "4",
    slug: "github",
    name: "GitHub",
    description: "Access repositories, manage issues, and integrate GitHub workflows into your development process.",
    icon: "",
    author: "GitHub",
    mcpUrl: "https://mcp.github.com",
    authType: "oauth",
    docsUrl: "https://docs.github.com/mcp",
  },
  {
    id: "5",
    slug: "figma",
    name: "Figma",
    description: "Import designs directly from Figma, access design tokens, and maintain design-to-code consistency.",
    icon: "",
    author: "Figma",
    mcpUrl: "https://mcp.figma.com",
    authType: "oauth",
    docsUrl: "https://figma.com/developers/mcp",
  },
  {
    id: "6",
    slug: "linear",
    name: "Linear",
    description: "Connect your project management: create issues, track progress, and sync development workflows.",
    icon: "",
    author: "Linear",
    mcpUrl: "https://mcp.linear.app",
    authType: "oauth",
    docsUrl: "https://linear.app/docs/mcp",
  },
  {
    id: "7",
    slug: "planetscale",
    name: "PlanetScale",
    description: "Serverless MySQL platform with branching, deploy requests, and unlimited scale.",
    icon: "",
    author: "PlanetScale",
    mcpUrl: "https://mcp.planetscale.com",
    authType: "bearer",
    docsUrl: "https://planetscale.com/docs/mcp",
  },
  {
    id: "8",
    slug: "clerk",
    name: "Clerk",
    description: "Complete user management and authentication. Add sign-up, sign-in, and user profiles in minutes.",
    icon: "",
    author: "Clerk",
    mcpUrl: "https://mcp.clerk.com",
    authType: "bearer",
    docsUrl: "https://clerk.com/docs/mcp",
  },
  {
    id: "9",
    slug: "resend",
    name: "Resend",
    description: "The email API for developers. Send transactional emails with React components.",
    icon: "",
    author: "Resend",
    mcpUrl: "https://mcp.resend.com",
    authType: "bearer",
    docsUrl: "https://resend.com/docs/mcp",
  },
  {
    id: "10",
    slug: "neon",
    name: "Neon",
    description: "Serverless Postgres with branching, autoscaling, and bottomless storage.",
    icon: "",
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
    icon: "",
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
    icon: "",
    author: "Sanity",
    mcpUrl: "https://mcp.sanity.io",
    authType: "bearer",
    docsUrl: "https://sanity.io/docs/mcp",
  },
]

export const prompts: Prompt[] = [
  // ========== LANDING PAGES ==========
  {
    id: "100",
    slug: "isometric-digital-ecosystem-landing",
    title: "Isometric Digital Ecosystem Landing Page",
    content: `Role: Lead Creative Technologist & Motion Designer (specializing in 3D-for-web and interactive storytelling).

Task: Build a modern, high-end landing page centered around a complex Isometric Digital Ecosystem. The aesthetic should be "Playful Engineering"—clean lines, sophisticated palettes, and physics-based motion animation that makes the scene feel alive.

1. Aesthetic & Atmosphere:

Color Palette: "Soft Futurism." A base of Off-White (#F8F9FA) and Deep Slate Blue (#1A202C). Accents should be sophisticated and slightly muted: Coral (#FF8C94), Teal (#4FD1C5), and Soft Gold (#F6E05E).

Lighting & Texture: The isometric elements must not look flat. They need soft, directional lighting (top-left light source) to create gentle shadows that ground them. Overlay a subtle noise texture (opacity 0.04) over the entire viewport to add tactile depth.

Typography: Pair a clean, geometric sans-serif like Geist Sans (for UI/Body) with a slightly wider header font like Inter Display (bold weight, tight tracking).

2. The Hero Section (The Kinetic Diorama):

Layout: A split layout. Left 40% for Typography/CTA. Right 60% for the Isometric Scene.

The Scene Content: An abstract representation of a "Connected Platform." Think floating data blocks, interconnected pipelines, abstract server racks, and little data packets moving between them on rails.

The Build Animation (Framer Motion Orchestration):

Entrance: The scene must not just fade in. It must "construct" itself. The base platform extrudes upwards first. Then, buildings/blocks pop up with a staggered spring animation (stiffness: 200, damping: 20). Finally, connecting lines draw themselves from point A to point B.

Idle State: Once built, the entire scene should have a gentle, synchronized floating/bobbing motion (a slow sine wave on the Y-axis) to feel sentient.

Interaction: Implement a subtle mouse parallax effect. As the user moves the mouse, the different layers of the isometric scene should shift slightly at different speeds to create depth.

3. The Page Layout & Scroll Animations:

Section Transitions: Use angled section dividers (slight 5-degree tilts) instead of flat horizontal lines to maintain the dynamic feel.

Feature Blocks (Scroll Reveal): As the user scrolls down, individual isometric icons for features should "pop" up from the ground plane using spring physics, followed by their text label sliding in.

4. Technical Stack & Constraints:

Framework: Next.js 14, Tailwind CSS.

Animation Engine: Framer Motion is mandatory for coordinating the complex build sequences and floating states.

Asset Handling: Isometric assets should be high-quality SVGs or layered PNGs separated into components so they can be animated individually, not one giant static image.`,
    category: "landing-pages",
    tags: ["Isometric", "Framer Motion", "3D", "Interactive", "Next.js", "Tailwind CSS"],
    author: { name: "Raj", avatar: "", twitter: "rajoninternet" },
    createdAt: "2024-02-04",
    previewUrl: "https://v0.link/xHp6Nc2",
    difficulty: "advanced",
    estimatedTime: "15 min read",
  },
  {
    id: "1",
    slug: "premium-saas-landing-page",
    title: "Premium SaaS Landing Page Template",
    content: `Role: You are an expert Senior Frontend Engineer and UI/UX Designer specializing in high-end, dark-themed SaaS interfaces.

Objective: Create a comprehensive, production-ready landing page template for a premium SaaS product. The design must feel institutional, fast, and expensive.

1. Design System & Aesthetics
Color Palette (Zinc Monochromatic): Background: zinc-950 (deep charcoal/black). Surfaces: zinc-900 for cards with a subtle zinc-800 border (1px). Typography: Primary text in white (#FFFFFF), secondary/muted text in zinc-400. Accents: Pure white for primary CTAs; subtle zinc-500 for icons.

Typography: Display: Cal Sans for Hero headlines (tight letter spacing, semi-bold). Headers: Instrument Sans for section titles (clean, modern). Body: Manrope for readability (optimized line-height: 1.6).

Foundations: Border Radius: 2xl (16px) for cards; full (pill-shape) for buttons and tags. Texture: Apply a subtle, low-opacity noise/grain overlay (1-2% opacity) to the entire background.

2. Layout & Navigation
Navbar: Fixed, pill-shaped glassmorphic bar. Effects: backdrop-blur-md, bg-zinc-900/40, and a 1px border in zinc-800. Interactions: Links should have a "magnetic" hover effect.

Hero Section: Min-height 100vh. Centered vertical layout. Headline: Massive text-7xl display type with "Text Mask" animation. Primary CTA: High-contrast white button with subtle shimmer/pulse animation. Social Proof: Overlapping avatars with staggered reveal animation.

3. Micro-Animations & Interactions
Smooth Scroll: Integrate Lenis for high-inertia, silky scrolling. Hover States: Cards: 1.02x scale up + border color transition. Buttons: Magnetic pull effect. Scroll-Triggered Reveals: Framer Motion variants to fade in and slide up with spring physics.

4. Component Specs
Bento Grid (Features): Non-uniform grid layout with live-updating animations, keyboard command visuals, and self-drawing line charts.
Infinite Marquee: Logo cloud for "Trusted By" sections with fade-in/out masks.
Pricing: Pro Tier with "Border Beam" animation. Smooth sliding toggle for billing options.

5. Technical Requirements
Framework: Next.js (App Router), Tailwind CSS. Animations: Framer Motion, GSAP. Icons: Lucide React (stroke width: 1.5px). Optimization: next/font for local fonts, zero Layout Shift.`,
    category: "landing-pages",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "SaaS", "Dark Theme"],
    author: { name: "Raj", avatar: "", twitter: "rajoninternet" },
    createdAt: "2024-01-20",
    previewUrl: "https://v0.link/6qUhlbF",
  },
  {
    id: "2",
    slug: "agency-landing-page",
    title: "Agency Landing Page",
    content: `Build a modern, premium agency landing page with the following specifications:

## Overall Theme & Style
- Dark blue gradient background (#070b1a to #0d1530)
- Animated star field particles in the background
- Glass morphism effects (backdrop-blur, semi-transparent backgrounds)
- Blue accent color (#3b82f6) for highlights, buttons, and interactive elements
- Clean, elegant typography with light font weights and tight tracking
- Smooth micro-animations and hover effects throughout

## Color Palette (5 colors max)
- Primary background: Deep navy (#070b1a, #0d1530)
- Accent: Blue-500 (#3b82f6)
- Text primary: White (#ffffff)
- Text secondary: Gray-400 (#9ca3af)
- Success/highlight: Green-400 (#4ade80) for stats

## Typography
- Headlines: font-light, tracking-tight, text-4xl to text-6xl
- Use italic on key accent words in headlines
- Body text: text-gray-300/400, leading-relaxed
- Buttons/labels: font-medium, text-sm

## Sections to Include

### 1. Header/Navigation
- Logo on left (icon + text)
- Centered navigation links (Services, Work, About, Contact)
- Right side: Login button (outline) + Language selector
- Semi-transparent background with backdrop blur
- Sticky positioning

### 2. Hero Section
- Version badge (e.g., "New - Platform 2.0")
- Large headline with italic accent word
- Subtext describing value proposition
- Two CTA buttons: Primary (filled) + Secondary (outline with icon)
- Animated star background
- Below: Floating bento grid dashboard cards

### 3. Bento Dashboard Cards (in hero)
Layout: 3 columns, middle column elevated (-translate-y)
Each card has:
- Outer container: glass effect (bg-white/10, backdrop-blur-xl, border-white/20)
- Inner card: white background, rounded corners, smaller than outer
- Creates "stacked cards" visual effect

Cards to include:
- User Signups: Large number + percentage badge
- Members: List with avatars, dropdown filter
- Balance: Amount + chart visualization
- Data Analysis: Title + "View more" button + bar chart
- Monthly Engagement: Title + dropdown + bar chart

### 4. Services/Process Section
- Use animated feature steps component
- Left side: Clickable step indicators with progress line
- Right side: Auto-scrolling images (4-5 second interval)
- Steps: Discovery, Design, Development, Launch
- Active step highlighted in blue

### 5. About Section
- Centered layout with badge
- Large headline with italic accent
- Animated counting stats (3-4 metrics)
- Stats in glass morphism cards with hover effects
- Highlight badges for key achievements
- CTA button with arrow animation

### 6. Testimonials Section
- Section badge + headline
- 3-column grid of testimonial cards
- Each card: glass effect, quote, author avatar, name, role
- Star ratings
- Hover scale effect

### 7. CTA Section
- Glass morphism container with gradient border
- Pulsing background blur effect
- Centered headline with italic accent
- Subtext
- Primary CTA button

### 8. Footer
- 4-column layout (Brand, Services, Company, Connect)
- Logo + description in first column
- Link lists in middle columns
- Social icons in last column
- Bottom bar: copyright + legal links
- Semi-transparent background

## Animation Details
- Use CSS transitions (duration-300, duration-500)
- Hover effects: scale, translateY, opacity changes
- Number counters: animate from 0 to final value
- Staggered fade-ins with Intersection Observer
- Floating/pulsing background elements
- Button arrow animations on hover

## Key CSS Classes Pattern
/* Glass morphism outer card */
.glass-outer {
  @apply rounded-3xl border border-white/20 bg-white/10 p-2 backdrop-blur-xl shadow-lg shadow-blue-500/10;
}

/* White inner card */
.glass-inner {
  @apply rounded-2xl bg-white p-5;
}

/* Section badge */
.badge {
  @apply inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-400;
}

/* Primary button */
.btn-primary {
  @apply flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-gray-900 transition-all hover:bg-gray-100 hover:scale-105;
}

/* Headline style */
.headline {
  @apply text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white text-pretty;
}

## Component Structure
app/
  page.tsx (imports all sections)
  layout.tsx (fonts, metadata)
  globals.css (theme tokens)
components/
  header.tsx
  hero-section.tsx
  dashboard-cards.tsx
  star-background.tsx
  services-section.tsx
  ui/feature-section.tsx
  about-section.tsx
  testimonials-section.tsx
  cta-section.tsx
  footer.tsx`,
    category: "landing-pages",
    tags: ["Agency", "Glassmorphism", "Animations", "Bento Grid", "Dark Theme"],
    author: { name: "Raj", avatar: "", twitter: "rajoninternet" },
    createdAt: "2024-01-21",
  },
  {
    id: "3",
    slug: "startup-landing-page",
    title: "Y Combinator Style Startup Landing",
    content: `Create a clean, conversion-focused startup landing page inspired by Y Combinator portfolio companies.

Design Philosophy:
- Ultra-minimal design with maximum whitespace
- Single clear value proposition above the fold
- Trust signals prominently displayed
- Mobile-first responsive design

Sections to Include:
1. Hero: Large headline (max 8 words), subheadline explaining the product, single CTA button, optional product screenshot/demo
2. Social Proof Bar: "Backed by" logos or "Featured in" press mentions
3. Problem/Solution: Three-column layout showing pain points and how product solves them
4. Features: Icon + title + description cards in a grid
5. Testimonials: Customer quotes with photos, names, and companies
6. Pricing: Simple tier comparison (Free, Pro, Enterprise)
7. FAQ: Accordion-style common questions
8. Final CTA: Repeat hero CTA with urgency element

Technical Specs:
- Next.js App Router with TypeScript
- Tailwind CSS with custom color palette
- Framer Motion for scroll animations
- next/image for optimized images
- Responsive breakpoints: mobile, tablet, desktop`,
    category: "landing-pages",
    tags: ["Startup", "Conversion", "Minimal", "Next.js"],
    author: { name: "v0 Community", avatar: "/diverse-group-avatars.png" },
    createdAt: "2024-01-15",
  },
  {
    id: "4",
    slug: "product-launch-landing",
    title: "Apple-Style Product Launch Page",
    content: `Create a premium product launch landing page inspired by Apple's product pages.

Visual Design:
- Large, full-bleed product imagery
- Cinematic scroll-triggered animations
- Bold typography with dramatic size contrasts
- Dark theme with product as the hero

Key Sections:
1. Hero: Full-screen product shot with minimal text, "Scroll to explore" indicator
2. Feature Spotlight: Each feature gets a full viewport section with parallax product shots
3. Specs Comparison: Animated bar charts or visual comparisons
4. Color Options: Interactive color picker that changes product images
5. Gallery: Horizontal scrolling image carousel
6. Pre-order CTA: Floating sticky bar with price and order button

Animations:
- GSAP ScrollTrigger for scroll-based animations
- Product images that rotate/transform as you scroll
- Text that fades in with staggered letter animations
- Smooth scroll with Lenis
- Parallax depth effects on layered elements

Technical Requirements:
- Next.js with App Router
- GSAP + ScrollTrigger for animations
- Three.js for 3D product viewer (optional)
- High-resolution image optimization`,
    category: "landing-pages",
    tags: ["Product Launch", "Apple", "GSAP", "Premium"],
    author: { name: "v0 Community", avatar: "/diverse-group-avatars.png" },
    createdAt: "2024-01-14",
  },
  {
    id: "5",
    slug: "ai-product-landing",
    title: "AI Product Landing with Gradient Mesh",
    content: `Create a futuristic AI product landing page with dynamic gradient mesh backgrounds.

Visual Identity:
- Animated gradient mesh background (purple/blue/pink spectrum)
- Glassmorphic UI elements with backdrop blur
- Glowing accent effects on interactive elements
- Dark base with vibrant gradient overlays

Sections:
1. Hero: Animated mesh background, large gradient text headline, floating UI mockups
2. Demo Section: Interactive prompt input with streaming text animation showing AI response
3. Use Cases: Cards with hover-reveal details and gradient borders
4. Integrations: Logo cloud with connecting animated lines
5. Pricing: Glassmorphic cards with gradient highlights on featured tier
6. CTA: Gradient button with shimmer animation

Special Effects:
- CSS gradient mesh using multiple radial gradients with animation
- Floating particles effect using canvas or CSS
- Text gradient animations
- Glow effects on focus states
- Smooth color transitions on scroll

Code Requirements:
- React with TypeScript
- Tailwind CSS with custom gradient utilities
- Framer Motion for UI animations
- Custom hooks for mouse-following effects`,
    category: "landing-pages",
    tags: ["AI", "Gradients", "Glassmorphism", "Futuristic"],
    author: { name: "v0 Community", avatar: "/diverse-group-avatars.png" },
    createdAt: "2024-01-13",
  },

  // ========== DASHBOARDS ==========
  {
    id: "6",
    slug: "analytics-dashboard",
    title: "Real-Time Analytics Dashboard",
    content: `Create a comprehensive analytics dashboard with real-time data visualization.

Layout Structure:
- Collapsible sidebar navigation (icons when collapsed)
- Top bar with search, notifications, and user menu
- Main content area with responsive grid
- Dark theme optimized for long viewing sessions

Dashboard Components:
1. KPI Cards: Large numbers with sparkline trends, percentage changes with color coding
2. Line Charts: Multi-series with toggleable datasets, zoom and pan capabilities
3. Bar Charts: Horizontal/vertical with hover tooltips
4. Donut Charts: Interactive segments with legend
5. Data Tables: Sortable columns, pagination, row selection, inline actions
6. Activity Feed: Real-time updates with timestamps
7. Map Visualization: Heatmap or marker-based geographic data

Interactive Features:
- Date range picker with presets (Today, 7d, 30d, Custom)
- Filter dropdowns that affect all widgets
- Export to CSV/PDF functionality
- Full-screen mode for individual charts
- Drag-and-drop widget reordering

Technical Stack:
- Next.js with App Router
- Recharts or Tremor for visualizations
- TanStack Table for data tables
- Zustand for state management
- Real-time updates with SWR or React Query`,
    category: "dashboards",
    tags: ["Analytics", "Charts", "Real-time", "Recharts"],
    author: { name: "v0 Community", avatar: "/diverse-group-avatars.png" },
    createdAt: "2024-01-12",
  },
  {
    id: "7",
    slug: "admin-dashboard",
    title: "SaaS Admin Dashboard",
    content: `Build a full-featured admin dashboard for SaaS applications.

Core Modules:
1. Overview: Revenue metrics, user growth, churn rate, MRR/ARR charts
2. Users: User table with search, filters, bulk actions, user detail drawer
3. Subscriptions: Plan management, upgrade/downgrade flows, billing history
4. Content: CRUD interface for managing application content
5. Settings: Team members, roles/permissions, API keys, webhooks

UI Components Required:
- Multi-step forms with validation
- Command palette (CMD+K) for quick navigation
- Toast notifications system
- Modal dialogs with forms
- Skeleton loaders for async content
- Empty states with illustrations
- Breadcrumb navigation

Design System:
- Consistent 8px spacing grid
- Color-coded status badges
- Icon system using Lucide
- Typography scale with clear hierarchy
- Form field variants (default, error, success, disabled)

Technical Implementation:
- Next.js App Router with layouts
- Server Components for data fetching
- Server Actions for mutations
- Zod for form validation
- Shadcn UI components`,
    category: "dashboards",
    tags: ["Admin", "SaaS", "CRUD", "Shadcn"],
    author: { name: "v0 Community", avatar: "/diverse-group-avatars.png" },
    createdAt: "2024-01-11",
  },
  {
    id: "8",
    slug: "finance-dashboard",
    title: "Personal Finance Dashboard",
    content: `Create a beautiful personal finance tracking dashboard.

Features:
1. Account Overview: Total balance across all accounts, account cards with logos
2. Transaction List: Categorized transactions with search and filters
3. Spending Analysis: Category breakdown pie chart, monthly comparison
4. Budget Tracking: Progress bars for each budget category
5. Goals: Savings goals with progress visualization
6. Insights: AI-generated spending insights and tips

Visual Design:
- Clean, trustworthy aesthetic (blues and greens)
- Large, readable numbers for balances
- Positive/negative indicators with color coding
- Smooth number counting animations
- Card-based layout with subtle shadows

Charts and Visualizations:
- Area chart for balance over time
- Donut chart for spending categories
- Bar chart for income vs expenses
- Sparklines in summary cards

Data Handling:
- Mock data generator for demo
- LocalStorage persistence
- Import CSV functionality
- Export reports as PDF`,
    category: "dashboards",
    tags: ["Finance", "Personal", "Budgeting", "Charts"],
    author: { name: "v0 Community", avatar: "/diverse-group-avatars.png" },
    createdAt: "2024-01-10",
  },
  {
    id: "9",
    slug: "project-management-dashboard",
    title: "Notion-Style Project Dashboard",
    content: `Build a project management dashboard inspired by Notion and Linear.

Views:
1. Board View: Kanban with drag-and-drop columns
2. List View: Grouped table with inline editing
3. Calendar View: Month/week views with task blocks
4. Timeline View: Gantt-style project timeline

Task Features:
- Rich text descriptions with markdown
- Subtasks/checklist
- Labels with custom colors
- Assignees with avatars
- Due dates with reminders
- Priority levels
- Time tracking

Interactions:
- Drag and drop between columns/groups
- Inline editing by clicking fields
- Quick actions menu on hover
- Keyboard shortcuts for power users
- Multi-select with bulk actions

Design Elements:
- Clean, minimal interface
- Subtle hover states
- Smooth transitions
- Command palette
- Customizable views with saved filters`,
    category: "dashboards",
    tags: ["Project Management", "Kanban", "Notion", "Linear"],
    author: { name: "v0 Community", avatar: "/diverse-group-avatars.png" },
    createdAt: "2024-01-09",
  },

  // ========== COMPONENTS ==========
  {
    id: "10",
    slug: "animated-pricing-table",
    title: "Animated Pricing Table Component",
    content: `Create a stunning animated pricing table component.

Design Requirements:
- Three-tier layout (Basic, Pro, Enterprise)
- Monthly/Annual toggle with savings badge
- Feature comparison with checkmarks
- Highlighted "Popular" tier with border glow
- Responsive: stacks on mobile

Animations:
- Price counter animation when toggling billing period
- Cards slide up on mount with stagger
- Hover: subtle lift with shadow increase
- Feature checkmarks animate in sequence
- Toggle switch with smooth spring animation

Interactive Elements:
- Billing period toggle (animated)
- CTA buttons with loading states
- Expandable feature lists
- Tooltip explanations for features

Code Structure:
- Fully typed TypeScript component
- Configurable via props (tiers data, currency, etc.)
- CSS-in-JS or Tailwind styling
- Framer Motion for animations
- Accessible (keyboard navigation, screen reader labels)`,
    category: "components",
    tags: ["Pricing", "Animation", "Interactive", "Framer Motion"],
    author: { name: "v0 Community", avatar: "/diverse-group-avatars.png" },
    createdAt: "2024-01-08",
  },
  {
    id: "11",
    slug: "file-upload-component",
    title: "Drag & Drop File Upload",
    content: `Build a polished drag-and-drop file upload component.

Features:
- Drag and drop zone with visual feedback
- Click to browse files
- Multiple file support
- File type restrictions with validation
- File size limits with error messages
- Upload progress indicators
- Preview for images
- Remove uploaded files

Visual States:
- Default: Dashed border, upload icon
- Drag Over: Highlighted border, "Drop files here"
- Uploading: Progress bar per file
- Success: Checkmark, file preview
- Error: Red border, error message

Code Requirements:
- React hooks for drag/drop events
- File validation (type, size)
- Progress simulation for demo
- Accessible announcements
- TypeScript with proper types
- Customizable via props`,
    category: "components",
    tags: ["File Upload", "Drag Drop", "Form", "Interactive"],
    author: { name: "v0 Community", avatar: "/diverse-group-avatars.png" },
    createdAt: "2024-01-07",
  },
  {
    id: "12",
    slug: "command-palette",
    title: "Command Palette (CMD+K)",
    content: `Create a Spotlight/Linear-style command palette.

Functionality:
- Global keyboard shortcut (CMD/CTRL + K)
- Fuzzy search across all commands
- Recent searches history
- Categorized results (Pages, Actions, Settings)
- Keyboard navigation (arrows, enter, escape)
- Nested command menus

Visual Design:
- Centered modal with backdrop blur
- Search input with icon
- Grouped results with category headers
- Highlighted matching text in results
- Keyboard shortcut hints on items
- Loading state for async searches

Animation:
- Fast scale + fade entrance
- Smooth result list transitions
- Selected item highlight animation

Technical Implementation:
- Portal rendering for proper stacking
- Focus trap within modal
- Click outside to close
- Scroll into view for selected items
- Debounced search input
- Command pattern for actions`,
    category: "components",
    tags: ["Command Palette", "Search", "Keyboard", "Modal"],
    author: { name: "v0 Community", avatar: "/diverse-group-avatars.png" },
    createdAt: "2024-01-06",
  },
  {
    id: "13",
    slug: "notification-system",
    title: "Toast Notification System",
    content: `Build a complete toast notification system.

Toast Types:
- Success (green checkmark)
- Error (red X)
- Warning (yellow triangle)
- Info (blue info icon)
- Loading (spinner)
- Custom (user-defined icon/color)

Features:
- Stackable notifications
- Auto-dismiss with progress bar
- Manual dismiss button
- Action buttons within toast
- Promise-based API (loading → success/error)
- Position options (top-right, bottom-right, etc.)

Animation Requirements:
- Slide in from edge
- Stack compression when multiple
- Smooth exit animation
- Progress bar countdown

API Design:
\`\`\`typescript
toast.success("Saved successfully!")
toast.error("Something went wrong")
toast.promise(saveData(), {
  loading: "Saving...",
  success: "Saved!",
  error: "Failed to save"
})
\`\`\`

Implementation:
- Context provider for global access
- Portal for proper rendering
- Framer Motion for animations
- Customizable duration and styling`,
    category: "components",
    tags: ["Toast", "Notifications", "System", "Context"],
    author: { name: "v0 Community", avatar: "/diverse-group-avatars.png" },
    createdAt: "2024-01-05",
  },

  // ========== E-COMMERCE ==========
  {
    id: "14",
    slug: "product-page",
    title: "Premium Product Detail Page",
    content: `Create a high-converting product detail page for e-commerce.

Above the Fold:
- Image gallery with zoom on hover and lightbox
- Product title and short description
- Price with sale comparison
- Variant selectors (size, color) with visual swatches
- Quantity selector
- Add to Cart button with loading state
- Wishlist button
- Stock status indicator

Below the Fold:
- Tabbed content (Description, Specs, Reviews)
- Size guide modal
- Shipping information
- Customer reviews with ratings
- Related products carousel

Interactive Features:
- Image zoom on hover
- Variant selection updates images
- Real-time inventory checking
- Add to cart animation (fly to cart icon)
- Review filtering and sorting

Technical Requirements:
- Server Component for initial data
- Client Components for interactivity
- Image optimization with next/image
- Structured data for SEO (JSON-LD)`,
    category: "ecommerce",
    tags: ["Product Page", "E-commerce", "Gallery", "Cart"],
    author: { name: "v0 Community", avatar: "/diverse-group-avatars.png" },
    createdAt: "2024-01-04",
  },
  {
    id: "15",
    slug: "shopping-cart",
    title: "Animated Shopping Cart",
    content: `Build a delightful shopping cart experience.

Cart Drawer:
- Slide-in drawer from right
- Product list with images, names, prices
- Quantity adjusters (+/-)
- Remove item with confirmation
- Price calculations (subtotal, tax, shipping)
- Promo code input
- Checkout button

Animations:
- Drawer slide with backdrop fade
- Item removal: slide out + height collapse
- Quantity change: number counter animation
- Cart icon badge bounce when adding
- Empty cart illustration animation

Features:
- Persistent cart (localStorage)
- Real-time price updates
- Stock validation
- Free shipping progress bar
- Recently viewed items
- Save for later

Cart Icon:
- Badge with item count
- Bounce animation on add
- Quick preview on hover`,
    category: "ecommerce",
    tags: ["Shopping Cart", "Drawer", "Animation", "E-commerce"],
    author: { name: "v0 Community", avatar: "/diverse-group-avatars.png" },
    createdAt: "2024-01-03",
  },
  {
    id: "16",
    slug: "checkout-flow",
    title: "Multi-Step Checkout Flow",
    content: `Create a conversion-optimized checkout flow.

Steps:
1. Information: Email, shipping address form
2. Shipping: Shipping method selection with prices
3. Payment: Card input or payment method selection
4. Review: Order summary before placing

Design Principles:
- Progress indicator showing current step
- Order summary sidebar (collapsible on mobile)
- Trust badges and security indicators
- Express checkout options (Apple Pay, Google Pay)
- Guest checkout without account required

Form Features:
- Address autocomplete
- Real-time validation
- Error messages inline
- Auto-formatting (phone, card numbers)
- Save information checkbox

Technical Implementation:
- Multi-step form with React Hook Form
- Zod validation schema
- Step persistence (don't lose data on back)
- Stripe Elements for payment
- Loading states for async operations`,
    category: "ecommerce",
    tags: ["Checkout", "Multi-step", "Forms", "Payments"],
    author: { name: "v0 Community", avatar: "/diverse-group-avatars.png" },
    createdAt: "2024-01-02",
  },
  {
    id: "17",
    slug: "product-catalog",
    title: "Filterable Product Catalog",
    content: `Build a product catalog with advanced filtering.

Layout:
- Filter sidebar (collapsible on mobile)
- Product grid (2/3/4 columns responsive)
- Sort dropdown
- Pagination or infinite scroll
- View toggle (grid/list)

Filter Types:
- Category tree (expandable)
- Price range slider
- Color swatches
- Size checkboxes
- Rating stars
- In-stock toggle
- Brand multi-select

Product Cards:
- Image with hover second image
- Quick view button on hover
- Wishlist heart icon
- Product name and brand
- Price with sale badge
- Rating stars
- Color dot indicators

URL State:
- Filters reflected in URL params
- Shareable filtered URLs
- Browser back/forward works
- Deep linking to filtered views`,
    category: "ecommerce",
    tags: ["Catalog", "Filters", "Products", "Grid"],
    author: { name: "v0 Community", avatar: "/diverse-group-avatars.png" },
    createdAt: "2024-01-01",
  },

  // ========== PORTFOLIO ==========
  {
    id: "18",
    slug: "terminal-portfolio",
    title: "Developer Portfolio with Terminal Theme",
    content: `Create a unique developer portfolio with terminal/code aesthetics.

Design Concept:
- Dark theme with syntax highlighting colors
- Monospace typography
- Terminal-style animations
- Code block aesthetics for content

Sections:
1. Hero: Typing animation with "developer" description
2. About: ASCII art or code-formatted bio
3. Skills: Progress bars styled as loading indicators
4. Projects: Card grid with GitHub-style activity
5. Experience: Timeline with git commit style
6. Contact: Form styled as CLI input

Interactive Elements:
- Terminal-style command input that reveals sections
- Cursor blink animations
- Text typing effects
- Syntax highlighted code snippets
- GitHub contribution-style activity graph

Easter Eggs:
- Konami code reveals hidden section
- Console messages for developers
- Fake terminal commands that work`,
    category: "portfolio",
    tags: ["Developer", "Terminal", "Dark Theme", "Creative"],
    author: { name: "v0 Community", avatar: "/diverse-group-avatars.png" },
    createdAt: "2023-12-30",
  },
  {
    id: "19",
    slug: "minimal-design-portfolio",
    title: "Minimal Designer Portfolio",
    content: `Create a clean, minimal portfolio for designers.

Design Philosophy:
- Maximum whitespace
- Typography-focused
- Large project images
- Subtle animations
- Grid-based layout

Sections:
1. Hero: Name, title, one-line description
2. Selected Works: Large project thumbnails with hover effects
3. About: Photo + short bio
4. Services: Simple list with icons
5. Contact: Minimal form or email link

Project Detail Page:
- Full-width hero image
- Project overview and role
- Image gallery with captions
- Results/metrics if applicable
- Next/Previous project navigation

Hover Effects:
- Project cards reveal title on hover
- Images subtle zoom
- Cursor changes to "View" text
- Smooth page transitions`,
    category: "portfolio",
    tags: ["Designer", "Minimal", "Clean", "Typography"],
    author: { name: "v0 Community", avatar: "/diverse-group-avatars.png" },
    createdAt: "2023-12-29",
  },
  {
    id: "20",
    slug: "creative-portfolio",
    title: "3D Interactive Portfolio",
    content: `Build an immersive 3D portfolio experience.

3D Elements:
- Three.js or React Three Fiber
- 3D room or space to navigate
- Floating project cards in 3D space
- Particle effects background
- 3D text for headlines

Navigation:
- Scroll-based camera movement
- Click to focus on projects
- Smooth transitions between views
- Mobile fallback to 2D version

Performance:
- Progressive loading
- Level of detail optimization
- Efficient geometries
- Texture compression

Interactive Features:
- Mouse parallax on elements
- 3D cursor follower
- Physics-based animations
- Sound design (optional, with toggle)`,
    category: "portfolio",
    tags: ["3D", "Three.js", "Interactive", "Creative"],
    author: { name: "v0 Community", avatar: "/diverse-group-avatars.png" },
    createdAt: "2023-12-28",
  },
  {
    id: "32",
    slug: "brutalist-void-portfolio",
    title: "Brutalist Void Portfolio Template",
    content: `Role: Lead Creative Developer & WebGL Artist (Awwwards Jury Member level).

Goal: Build a portfolio for an AI-Native Product Builder that feels organic, sentient, and highly engineered. Avoid generic SaaS aesthetics. The site must feel "alive."

Tech Stack:
- Next.js / React
- Tailwind CSS (for layout structure)
- React Three Fiber (R3F) & Drei (for the hero element)
- Framer Motion (complex orchestration)
- Lenis Scroll (for buttery smooth inertia scrolling)
- Lucide React (minimalist icons)

Design Philosophy (The "Human" Touch):
- Grain & Texture: Overlay a subtle CSS noise texture (opacity 0.05) over the entire screen to kill the "digital flatness."
- Typography: Mix a massive, architectural serif (like 'Playfair Display' or 'Editorial New') for headers with a technical monospace (like 'Geist Mono') for data.
- Physics: Elements should not just "appear." They should have weight. Use spring physics for hover states.

Detailed Section Architecture:

1. The "Sentient" Hero (WebGL):
- Background: A dark void (#050505).
- The Object: In the center, render a React Three Fiber scene: A wireframe sphere or abstract mesh that slowly morphs/breathes using a Perlin noise shader. It reacts to mouse position (looks at the cursor).
- Foreground: Huge typography layered over the 3D object.
- Text: "SYSTEM ARCHITECT" (Top Left), "INTERFACE DESIGNER" (Bottom Right).
- Center: A magnetic button that says "Initialize".

2. The "Stream of Consciousness" (About):
- Layout: A horizontal scroll section triggered by vertical scrolling (pin the section).
- Content: Large, single-sentence value propositions describing your AI philosophy.
- Effect: As the user scrolls, the text should have a "skew" velocity effect (skew-x based on scroll speed).

3. Selected Works (The Distortion Gallery):
- Structure: A single-column list, widely spaced.
- Interaction: Project titles are large (6xl).
- When hovering a title, a project image floats near the cursor.
- Crucial: The floating image must have a "displacement map" or "RGB split" glitch effect on movement (simulating AI processing data).
- Tags (e.g., "Next.js", "OpenAI") appear in small monospace pills next to the title.

4. Technical Arsenal (Marquee):
- Two rows of infinite scrolling text (Marquee).
- Row 1 moves Left, Row 2 moves Right.
- Content: Tech stack items mixed with abstract concepts (e.g., "PYTHON • LATENCY • EMPATHY • PYTORCH • INTUITION").
- Style: Outline text (transparent fill, white stroke) that fills with solid white on hover.

5. The Footer (The Hand-off):
- A massive "Let's Collaborate" link that spans 100% width.
- On hover, the background of the footer creates a "curtain reveal" effect using a distinct color (Deep Electric Blue).
- Include a "Local Time" clock that updates every second in milliseconds (e.g., 12:45:12.005) to emphasize precision.

Animation Guidelines:
- Page Load: Staggered entry. Lines reveal from 0% width to 100%. Text slides up from masked clipping paths.
- Scroll: Use framer-motion useScroll to drive parallax effects on images vs. text.
- Cursor: Replace the default cursor with a small custom dot that expands into a ring when hovering interactive elements (blend-mode: difference).

Code Request:
Provide the full React code structure. For the Three.js part, create a separate component <SentientSphere /> using @react-three/fiber. For the smooth scrolling, wrap the app in a <SmoothScroll> component using @studio-freight/react-lenis.`,
    category: "portfolio",
    tags: ["Portfolio", "Three.js", "R3F", "WebGL", "Lenis", "Awwwards"],
    author: { name: "Raj", avatar: "", twitter: "rajoninternet" },
    previewUrl: "https://v0.link/6vICeLo",
    createdAt: "2024-01-22",
  },

  // ========== AUTHENTICATION ==========
  {
    id: "21",
    slug: "auth-pages-modern",
    title: "Modern Auth Pages Set",
    content: `Create a complete set of authentication pages.

Pages Required:
1. Sign In: Email/password, social logins, remember me
2. Sign Up: Multi-field form, password strength indicator
3. Forgot Password: Email input with success state
4. Reset Password: New password with confirmation
5. Verify Email: OTP input or magic link confirmation
6. Two-Factor: 6-digit code input

Design System:
- Split layout: form on one side, illustration/branding on other
- Consistent card styling
- Clear error states
- Loading buttons
- Success animations

Form Features:
- Real-time validation
- Password visibility toggle
- Password strength meter
- Terms checkbox
- Social login buttons (Google, GitHub, Apple)

Animations:
- Page transitions
- Input focus animations
- Success checkmark animation
- Error shake effect
- Loading spinner in buttons`,
    category: "authentication",
    tags: ["Auth", "Login", "Signup", "Forms"],
    author: { name: "v0 Community", avatar: "/diverse-group-avatars.png" },
    createdAt: "2023-12-27",
  },
  {
    id: "22",
    slug: "glassmorphic-login",
    title: "Glassmorphic Login Page",
    content: `Create a stunning glassmorphic login experience.

Visual Design:
- Gradient mesh animated background
- Frosted glass card effect
- Subtle border glow
- Floating orbs behind form
- Dark/light mode variants

Glass Effect CSS:
- backdrop-filter: blur(20px)
- Semi-transparent background
- Subtle border with gradient
- Inner shadow for depth

Form Styling:
- Transparent input fields
- Glowing focus rings
- Floating labels
- Custom styled checkbox/toggle
- Gradient CTA button

Background Animation:
- Slowly morphing gradient blobs
- Floating particles
- Parallax on mouse move
- Color shifting over time

Mobile Optimization:
- Reduced blur for performance
- Simplified animations
- Touch-friendly inputs`,
    category: "components",
    tags: ["Glassmorphism", "Login", "Gradient", "Modern"],
    author: { name: "v0 Community", avatar: "/diverse-group-avatars.png" },
    createdAt: "2023-12-26",
  },
  {
    id: "23",
    slug: "onboarding-flow",
    title: "User Onboarding Flow",
    content: `Create an engaging multi-step onboarding experience.

Steps:
1. Welcome: Personalized greeting, value proposition
2. Profile Setup: Avatar, name, bio
3. Preferences: Interest selection, notification settings
4. Team/Workspace: Create or join organization
5. Tour: Interactive product walkthrough
6. Complete: Celebration animations on complete

Design Patterns:
- Progress bar/stepper
- Skip option (but encourage completion)
- Back navigation
- Save progress automatically
- Celebration animations on complete

Interactive Elements:
- Avatar upload with crop
- Multi-select interest chips
- Toggle switches for preferences
- Invite team members input
- Interactive tooltips for tour

Animations:
- Step transitions (slide)
- Progress bar animation
- Confetti on completion
- Micro-interactions on selections`,
    category: "components",
    tags: ["Onboarding", "Multi-step", "User Experience", "Flow"],
    author: { name: "v0 Community", avatar: "/diverse-group-avatars.png" },
    createdAt: "2023-12-25",
  },

  // ========== ANIMATIONS ==========
  {
    id: "24",
    slug: "page-transitions",
    title: "Smooth Page Transitions",
    content: `Implement beautiful page transitions in Next.js.

Transition Types:
1. Fade: Simple opacity transition
2. Slide: Directional slide based on navigation
3. Scale: Zoom in/out effect
4. Shared Layout: Morphing elements between pages
5. Stagger: Elements animate in sequence

Implementation:
- Framer Motion AnimatePresence
- Next.js App Router compatible
- Preserve scroll position option
- Loading state during transition
- Page Exit Animations:
- Elements fade/slide out
- Staggered children exit
- Smooth height collapse
- Background color transition

Page Enter Animations:
- Hero elements animate in first
- Content fades up with stagger
- Images scale from 0.95 to 1
- Text reveals with clip-path

Performance:
- Use transform and opacity only
- will-change hints
- Reduced motion media query support`,
    category: "animations",
    tags: ["Page Transitions", "Framer Motion", "Next.js", "UX"],
    author: { name: "v0 Community", avatar: "/diverse-group-avatars.png" },
    createdAt: "2023-12-24",
  },
  {
    id: "25",
    slug: "scroll-animations",
    title: "Advanced Scroll Animations",
    content: `Create scroll-triggered animations library.

Animation Types:
1. Fade In: Opacity 0 to 1 on scroll into view
2. Slide Up: Translate Y with fade
3. Scale In: Scale from 0.8 to 1
4. Stagger Children: Sequential child animations
5. Parallax: Different scroll speeds for layers
6. Progress: Animation tied to scroll percentage

GSAP ScrollTrigger Features:
- Scrub animations (tied to scroll position)
- Pin elements during scroll
- Snap to sections
- Horizontal scroll sections
- Batch animations for performance

Framer Motion InView:
- whileInView prop usage
- Viewport amount threshold
- Once vs repeat animations
- Custom variants

Performance Tips:
- Use Intersection Observer
- Debounce scroll handlers
- Transform-only animations
- Lazy load heavy animations`,
    category: "animations",
    tags: ["Scroll", "GSAP", "Parallax", "ScrollTrigger"],
    author: { name: "v0 Community", avatar: "/diverse-group-avatars.png" },
    createdAt: "2023-12-23",
  },
  {
    id: "26",
    slug: "micro-interactions",
    title: "Delightful Micro-Interactions",
    content: `Create a library of micro-interactions for UI polish.

Button Interactions:
- Ripple effect on click
- Magnetic hover (follows cursor)
- 3D press effect
- Loading spinner transition
- Success checkmark morph

Input Interactions:
- Floating label animation
- Focus ring expansion
- Error shake
- Character counter
- Autocomplete suggestions slide

Card Interactions:
- Tilt on hover (3D transform)
- Glow follow cursor
- Expand on click
- Flip animation
- Stacked cards shuffle

Toggle/Switch:
- Smooth boolean transition
- Icon morph (sun to moon)
- Color transition
- Haptic feedback indication

Implementation Patterns:
- CSS transitions for simple states
- Framer Motion for complex sequences
- React Spring for physics-based
- Custom hooks for reusability`,
    category: "animations",
    tags: ["Micro-interactions", "UX", "Polish", "Details"],
    author: { name: "v0 Community", avatar: "/diverse-group-avatars.png" },
    createdAt: "2023-12-22",
  },

  // ========== APPS ==========
  {
    id: "27",
    slug: "chat-application",
    title: "Real-Time Chat Application",
    content: `Build a modern real-time chat application.

Features:
1. Direct Messages: One-on-one conversations
2. Group Chats: Multiple participants
3. Channels: Topic-based public discussions
4. Threads: Reply to specific messages
5. Reactions: Emoji reactions on messages
6. File Sharing: Images, documents, media

Message Features:
- Text with markdown support
- Code blocks with syntax highlighting
- Link previews
- Image galleries
- Voice messages
- Read receipts
- Typing indicators

UI Components:
- Sidebar with conversation list
- Message list with infinite scroll
- Message input with rich formatting
- User presence indicators
- Search across messages
- Notification badges

Technical Stack:
- Next.js for frontend
- WebSocket or Socket.io for real-time
- Database for message persistence
- File storage for attachments
- Push notifications`,
    category: "apps",
    tags: ["Chat", "Real-time", "WebSocket", "Messaging"],
    author: { name: "v0 Community", avatar: "/diverse-group-avatars.png" },
    createdAt: "2023-12-21",
  },
  {
    id: "28",
    slug: "todo-app-advanced",
    title: "Advanced Todo App with Superpowers",
    content: `Create a feature-rich todo application beyond the basics.

Core Features:
- Create, edit, delete todos
- Due dates with reminders
- Priority levels (P1-P4)
- Projects/Lists organization
- Tags/Labels
- Subtasks/Checklist

Advanced Features:
- Natural language input ("Buy milk tomorrow at 5pm")
- Recurring tasks
- Calendar view integration
- Time tracking per task
- Pomodoro timer built-in
- Daily/Weekly review

Smart Features:
- Smart suggestions based on patterns
- Auto-scheduling overdue tasks
- Focus mode (show one task at a time)
- Habit tracking for recurring items
- Productivity statistics

UI/UX:
- Keyboard-first design
- Quick add from anywhere
- Drag and drop organization
- Multiple views (list, board, calendar)
- Dark mode
- Mobile-responsive`,
    category: "apps",
    tags: ["Todo", "Productivity", "Tasks", "Organization"],
    author: { name: "v0 Community", avatar: "/diverse-group-avatars.png" },
    createdAt: "2023-12-20",
  },
  {
    id: "29",
    slug: "note-taking-app",
    title: "Notion-Style Note Taking App",
    content: `Build a block-based note-taking application.

Block Types:
- Text (paragraph, headings H1-H3)
- Lists (bulleted, numbered, todo)
- Code (with syntax highlighting)
- Quote/Callout
- Image/Video embed
- Table
- Divider
- Toggle/Collapsible

Editor Features:
- Slash commands (/heading, /code, etc.)
- Markdown shortcuts (**, /, etc.)
- Drag and drop blocks
- Block nesting/indentation
- Multi-select blocks
- Duplicate/delete blocks

Page Features:
- Nested pages (infinite hierarchy)
- Page icons and covers
- Breadcrumb navigation
- Full-text search
- Recent pages
- Favorites/Starred

Collaboration:
- Real-time editing
- Comments on blocks
- @mentions
- Share with permissions`,
    category: "apps",
    tags: ["Notes", "Notion", "Editor", "Blocks"],
    author: { name: "v0 Community", avatar: "/diverse-group-avatars.png" },
    createdAt: "2023-12-19",
  },
  {
    id: "30",
    slug: "weather-app",
    title: "Beautiful Weather App",
    content: `Create a visually stunning weather application.

Weather Data:
- Current conditions (temp, feels like, humidity, wind)
- Hourly forecast (24 hours)
- Daily forecast (7-10 days)
- Weather alerts
- Air quality index
- UV index
- Sunrise/sunset times

Visual Design:
- Dynamic backgrounds based on weather/time
- Animated weather icons
- Temperature graphs
- Rain/snow particle effects
- Smooth day/night transitions

Location Features:
- Current location detection
- Search for cities
- Save multiple locations
- Location-based backgrounds

Widgets:
- Current temperature (large)
- Hourly scroll
- Daily cards
- Weather map
- Additional metrics grid

Animations:
- Weather icon animations (rain drops, sun rays, clouds moving)
- Number transitions
- Pull to refresh
- Parallax clouds`,
    category: "apps",
    tags: ["Weather", "API", "Animation", "Location"],
    author: { name: "v0 Community", avatar: "/diverse-group-avatars.png" },
    createdAt: "2023-12-18",
  },
  {
    id: "42",
    slug: "useeffect-best-practices",
    title: "useEffect Best Practices Refactor",
    content: `You are a senior React engineer. Refactor the provided React/Next.js codebase to follow strict useEffect best practices.

Goals (in priority order):
1) Eliminate unnecessary useEffect usage:
   - Remove effects used only to derive state from props/state.
   - Replace derived state with direct computation during render or memoization.
   - Avoid syncing props to state unless explicitly required.

2) Make remaining effects correct and stable:
   - Every effect must have a correct dependency array.
   - Do not disable react-hooks/exhaustive-deps.
   - Stabilize objects/arrays with useMemo and functions with useCallback.

3) Prevent infinite loops and redundant renders:
   - Avoid effects that immediately re-trigger themselves.
   - Use functional state updates when referencing previous state.

4) Handle side effects properly:
   - Effects only for true side effects (subscriptions, timers, network, external libs).
   - Include cleanups and abort in-flight work when deps change.
   - Ensure Strict Mode safety (no double-subscribe or double-fetch bugs).

5) Prefer better patterns over effects:
   - Use event handlers for user-driven logic.
   - Prefer Server Components, loaders, or SWR/React Query for data fetching.

Repository-wide instructions:
- Search the entire repository for useEffect usage.
- For each occurrence, decide whether it should be removed, refactored, or kept.

Output:
- Provide updated code only for modified files.
- Include a summary of effects found, removed, refactored, and kept.`,
    category: "code-quality",
    tags: ["React", "useEffect", "Performance", "Best Practices"],
    author: { name: "Charles", avatar: "", twitter: "WebRenew_" },
    createdAt: "2024-01-20",
  },
  {
    id: "43",
    slug: "eslint-disable-cleanup",
    title: "ESLint Disable Cleanup",
    content: `You are a senior frontend engineer acting as a repo-wide refactor agent.

Objective:
Find, evaluate, and eliminate unnecessary eslint-disable comments across the entire codebase.

Scope:
- Search for eslint-disable, eslint-disable-next-line, eslint-disable-line, and file-level disables.

Rules:
1) Classify why the disable exists before changing code.
2) Fix the underlying issue instead of silencing the rule.
3) Only keep disables when absolutely unavoidable (e.g., third-party limitations).
4) Never introduce new disables to make lint pass.

Output:
- Modify only affected files.
- Provide a summary of disables found, removed, refactored, and intentionally kept with justification.`,
    category: "code-quality",
    tags: ["ESLint", "Code Quality", "Linting", "Refactoring"],
    author: { name: "Charles", avatar: "", twitter: "WebRenew_" },
    createdAt: "2024-01-20",
  },
  {
    id: "44",
    slug: "tree-shaking-bundle-optimization",
    title: "Tree-Shaking & Bundle Size Optimization",
    content: `You are a senior frontend performance engineer.

Objective:
Identify and fix tree-shaking and bundle-size issues across the repository.

Detect:
- import * as X from libraries
- Imports from package roots instead of subpaths
- Barrel files (index.ts) exporting large module graphs
- Side-effectful imports
- Client components importing heavy or server-only modules

Rules:
- Prefer direct named imports and subpath imports.
- Reduce or eliminate barrel files that defeat tree-shaking.
- Move heavy logic out of client components.

Output:
- Modify only affected files.
- Provide a summary of blockers found and qualitative bundle-size risk reduced.`,
    category: "code-quality",
    tags: ["Performance", "Bundle Size", "Tree Shaking", "Optimization"],
    author: { name: "Charles", avatar: "", twitter: "WebRenew_" },
    createdAt: "2024-01-20",
  },
  {
    id: "45",
    slug: "client-server-boundary-violations",
    title: "Client/Server Boundary Violations",
    content: `Scan the repository for client components that import server-only modules, heavy utilities, or secrets.

Rules:
- Remove unnecessary 'use client' directives.
- Ensure client components import only client-safe dependencies.

Output:
- Update only offending files.
- Summarize violations fixed.`,
    category: "code-quality",
    tags: ["Next.js", "Server Components", "Client Components", "Security"],
    author: { name: "Charles", avatar: "", twitter: "WebRenew_" },
    createdAt: "2024-01-20",
  },
  {
    id: "46",
    slug: "accidental-rerender-detection",
    title: "Accidental Re-render Detection",
    content: `Find props and state patterns that cause unnecessary re-renders.

Detect:
- Inline object/array props
- Unstable callbacks
- Overuse of Context for frequently changing values

Refactor:
- Stabilize references with useMemo/useCallback.
- Memoize expensive leaf components where appropriate.`,
    category: "code-quality",
    tags: ["React", "Performance", "Rendering", "Optimization"],
    author: { name: "Charles", avatar: "", twitter: "WebRenew_" },
    createdAt: "2024-01-20",
  },
  {
    id: "47",
    slug: "overfetching-network-waste",
    title: "Over-fetching & Network Waste",
    content: `Scan the repository for duplicated fetch logic, over-fetching, and missing deduplication.

Refactor:
- Hoist shared fetches.
- Prefer loaders, hooks, or caching libraries.

Output:
- Summarize network calls reduced.`,
    category: "code-quality",
    tags: ["Network", "Performance", "Data Fetching", "Optimization"],
    author: { name: "Charles", avatar: "", twitter: "WebRenew_" },
    createdAt: "2024-01-20",
  },
  {
    id: "48",
    slug: "hydration-ssr-mismatch-detection",
    title: "Hydration & SSR Mismatch Detection",
    content: `Find render-time non-determinism such as Date.now(), Math.random(), browser-only APIs, or locale-dependent formatting in render paths.

Refactor:
- Move non-determinism to effects or server-only logic.

Output:
- List issues fixed.`,
    category: "code-quality",
    tags: ["SSR", "Hydration", "Next.js", "React"],
    author: { name: "Charles", avatar: "", twitter: "WebRenew_" },
    createdAt: "2024-01-20",
  },
  {
    id: "49",
    slug: "css-styling-payload-reduction",
    title: "CSS & Styling Payload Reduction",
    content: `Scan for unused CSS, overly broad global styles, large Tailwind safelists, and unnecessary font files.

Refactor:
- Scope styles narrowly.
- Remove unused utilities.

Output:
- Summarize CSS payload reductions.`,
    category: "code-quality",
    tags: ["CSS", "Tailwind", "Performance", "Styling"],
    author: { name: "Charles", avatar: "", twitter: "WebRenew_" },
    createdAt: "2024-01-20",
  },
  {
    id: "50",
    slug: "polyfill-transpilation-bloat",
    title: "Polyfill & Transpilation Bloat",
    content: `Detect libraries or APIs that trigger heavy polyfills or ES5 transpilation.

Refactor:
- Replace with modern alternatives when possible.

Output:
- List sources of polyfill bloat.`,
    category: "code-quality",
    tags: ["Performance", "Polyfills", "Transpilation", "Bundle Size"],
    author: { name: "Charles", avatar: "", twitter: "WebRenew_" },
    createdAt: "2024-01-20",
  },
  {
    id: "51",
    slug: "dead-code-unused-exports",
    title: "Dead Code & Unused Exports",
    content: `Scan the repository for unused exports, files, hooks, and feature-flagged code paths that are always off.

Refactor:
- Remove dead code safely.

Output:
- Summarize files and exports removed.`,
    category: "code-quality",
    tags: ["Dead Code", "Refactoring", "Code Quality", "Cleanup"],
    author: { name: "Charles", avatar: "", twitter: "WebRenew_" },
    createdAt: "2024-01-20",
  },
  {
    id: "52",
    slug: "debug-logging-leak-cleanup",
    title: "Debug & Logging Leak Cleanup",
    content: `Find console logs, debug flags, and dev-only logic shipped to production paths.

Refactor:
- Remove or guard with environment checks.

Output:
- Summarize debug code removed.`,
    category: "code-quality",
    tags: ["Debug", "Logging", "Production", "Cleanup"],
    author: { name: "Charles", avatar: "", twitter: "WebRenew_" },
    createdAt: "2024-01-20",
  },
  // ========== CODE QUALITY - GOLDMINE PROMPTS (by Charles) ==========
  {
    id: "53",
    slug: "implicit-behavior-detector",
    title: "Implicit Behavior & Hidden Assumptions",
    content: `Scan the repository for code whose correctness depends on undocumented assumptions, implicit defaults, magic values, or execution order.

Look for:
- Logic that only works if values are never null/undefined without checks
- Index-based or positional logic
- Order-dependent side effects
- Magic numbers or strings without explanation

Output:
- List files and assumptions found
- Recommend documentation, guards, or refactors`,
    category: "code-quality",
    tags: ["Code Quality", "Assumptions", "Documentation", "Refactoring"],
    author: { name: "Charles", avatar: "", twitter: "WebRenew_" },
    createdAt: "2024-01-20",
    difficulty: "intermediate",
  },
  {
    id: "54",
    slug: "surprising-behavior-scan",
    title: "Surprising or Non-Obvious Behavior",
    content: `Identify functions, hooks, or utilities whose behavior is surprising or non-obvious.

Look for:
- Functions that mutate inputs
- Hidden side effects
- Reads from globals or environment
- Conditional throwing or swallowing of errors

Output:
- Explain why behavior is surprising
- Recommend refactors or documentation`,
    category: "code-quality",
    tags: ["Code Quality", "Side Effects", "Documentation", "Best Practices"],
    author: { name: "Charles", avatar: "", twitter: "WebRenew_" },
    createdAt: "2024-01-20",
    difficulty: "intermediate",
  },
  {
    id: "55",
    slug: "n-plus-one-detector",
    title: "N+1 Queries & Fan-Out Explosions",
    content: `Scan for code paths where a single request can trigger linear or unbounded database queries, API calls, or network requests.

Output:
- Identify N+1 or fan-out patterns
- Suggest batching, caching, or restructuring`,
    category: "code-quality",
    tags: ["Performance", "Database", "N+1", "Optimization"],
    author: { name: "Charles", avatar: "", twitter: "WebRenew_" },
    createdAt: "2024-01-20",
    difficulty: "advanced",
  },
  {
    id: "56",
    slug: "unbounded-loops-retries",
    title: "Unbounded Loops, Polling, and Retries",
    content: `Find loops, polling mechanisms, retries, or recursive logic without hard limits, backoff, or cancellation.

Output:
- List risky loops or retries
- Recommend bounds or backoff strategies`,
    category: "code-quality",
    tags: ["Performance", "Loops", "Retries", "Reliability"],
    author: { name: "Charles", avatar: "", twitter: "WebRenew_" },
    createdAt: "2024-01-20",
    difficulty: "intermediate",
  },
  {
    id: "57",
    slug: "cache-illusion-detector",
    title: "Cache Illusions & Misuse",
    content: `Find code that assumes caching exists but does not enforce it.

Examples:
- Fetches without cache headers
- In-memory caches in serverless contexts
- Redis usage without TTLs

Output:
- Identify false cache assumptions
- Recommend enforceable caching strategies`,
    category: "code-quality",
    tags: ["Caching", "Performance", "Serverless", "Best Practices"],
    author: { name: "Charles", avatar: "", twitter: "WebRenew_" },
    createdAt: "2024-01-20",
    difficulty: "advanced",
  },
  {
    id: "58",
    slug: "partial-failure-blindness",
    title: "Partial Failure Blindness",
    content: `Find places where partial failures are silently ignored.

Look for:
- Promise.all without per-item handling
- Fire-and-forget async calls
- Empty or overly broad catch blocks

Output:
- List failure-blind code paths
- Recommend explicit handling`,
    category: "code-quality",
    tags: ["Error Handling", "Async", "Reliability", "Best Practices"],
    author: { name: "Charles", avatar: "", twitter: "WebRenew_" },
    createdAt: "2024-01-20",
    difficulty: "intermediate",
  },
  {
    id: "59",
    slug: "error-context-loss",
    title: "Error Context Loss",
    content: `Find places where errors are flattened, rethrown generically, or logged without context.

Examples:
- throw new Error('failed')
- Dropping original stack traces

Output:
- Identify context loss
- Recommend richer error handling`,
    category: "code-quality",
    tags: ["Error Handling", "Debugging", "Logging", "Best Practices"],
    author: { name: "Charles", avatar: "", twitter: "WebRenew_" },
    createdAt: "2024-01-20",
    difficulty: "intermediate",
  },
  {
    id: "60",
    slug: "false-confidence-tests",
    title: "False Confidence Tests",
    content: `Scan tests that would pass even if the underlying logic were incorrect.

Look for:
- Snapshots asserting nothing meaningful
- Over-mocked dependencies
- Tests asserting implementation details

Output:
- Flag weak tests
- Recommend behavior-based assertions`,
    category: "code-quality",
    tags: ["Testing", "Code Quality", "Best Practices", "TDD"],
    author: { name: "Charles", avatar: "", twitter: "WebRenew_" },
    createdAt: "2024-01-20",
    difficulty: "intermediate",
  },
  {
    id: "61",
    slug: "untestable-code-zones",
    title: "Untestable Code Zones",
    content: `Identify code that is difficult or impossible to test due to tight coupling, hidden globals, or side effects.

Output:
- List untestable areas
- Suggest refactors for testability`,
    category: "code-quality",
    tags: ["Testing", "Refactoring", "Coupling", "Best Practices"],
    author: { name: "Charles", avatar: "", twitter: "WebRenew_" },
    createdAt: "2024-01-20",
    difficulty: "intermediate",
  },
  {
    id: "62",
    slug: "layer-violation-detector",
    title: "Architecture Layer Violations",
    content: `Find imports or dependencies that violate intended architectural layers.

Examples:
- UI importing database logic
- Domain logic importing UI

Output:
- List violations
- Recommend boundary fixes`,
    category: "code-quality",
    tags: ["Architecture", "Clean Architecture", "Dependencies", "Best Practices"],
    author: { name: "Charles", avatar: "", twitter: "WebRenew_" },
    createdAt: "2024-01-20",
    difficulty: "advanced",
  },
  {
    id: "63",
    slug: "one-way-door-decisions",
    title: "One-Way Architectural Decisions",
    content: `Identify code that represents one-way architectural decisions.

Examples:
- Hardcoded vendors
- Tight framework coupling
- Schemas without migration paths

Output:
- Explain long-term risk
- Suggest mitigation`,
    category: "code-quality",
    tags: ["Architecture", "Technical Debt", "Vendor Lock-in", "Best Practices"],
    author: { name: "Charles", avatar: "", twitter: "WebRenew_" },
    createdAt: "2024-01-20",
    difficulty: "advanced",
  },
  {
    id: "64",
    slug: "race-condition-detector",
    title: "Race Conditions & Lost Updates",
    content: `Scan for code that may behave incorrectly under concurrent execution.

Look for:
- Read-modify-write without locking
- Shared mutable state

Output:
- Identify race conditions
- Recommend atomic or transactional patterns`,
    category: "code-quality",
    tags: ["Concurrency", "Race Conditions", "Threading", "Best Practices"],
    author: { name: "Charles", avatar: "", twitter: "WebRenew_" },
    createdAt: "2024-01-20",
    difficulty: "advanced",
  },
  {
    id: "65",
    slug: "async-ordering-assumptions",
    title: "Async Ordering Assumptions",
    content: `Find async code that assumes execution order without enforcing it.

Output:
- List ordering assumptions
- Suggest explicit sequencing`,
    category: "code-quality",
    tags: ["Async", "Concurrency", "Best Practices", "JavaScript"],
    author: { name: "Charles", avatar: "", twitter: "WebRenew_" },
    createdAt: "2024-01-20",
    difficulty: "intermediate",
  },
  {
    id: "66",
    slug: "trust-boundary-violations",
    title: "Trust Boundary Violations",
    content: `Find places where untrusted input crosses trust boundaries without validation.

Examples:
- Client to server
- Webhook handlers

Output:
- List violations
- Recommend validation or sanitization`,
    category: "code-quality",
    tags: ["Security", "Validation", "Input Sanitization", "Best Practices"],
    author: { name: "Charles", avatar: "", twitter: "WebRenew_" },
    createdAt: "2024-01-20",
    difficulty: "advanced",
  },
  {
    id: "67",
    slug: "secret-leak-detector",
    title: "Secrets & Credential Leakage",
    content: `Find places where secrets, tokens, or credentials could leak into logs, client bundles, or errors.

Output:
- Identify leak risks
- Recommend containment`,
    category: "code-quality",
    tags: ["Security", "Secrets", "Credentials", "Best Practices"],
    author: { name: "Charles", avatar: "", twitter: "WebRenew_" },
    createdAt: "2024-01-20",
    difficulty: "advanced",
  },
  {
    id: "68",
    slug: "environment-mismatch-bugs",
    title: "Environment Mismatch Bugs",
    content: `Find code that behaves differently between dev, preview, and production.

Examples:
- process.env branching
- Build-time vs runtime env usage

Output:
- List mismatches
- Recommend normalization`,
    category: "code-quality",
    tags: ["Environment", "DevOps", "Configuration", "Best Practices"],
    author: { name: "Charles", avatar: "", twitter: "WebRenew_" },
    createdAt: "2024-01-20",
    difficulty: "intermediate",
  },
  {
    id: "69",
    slug: "non-deterministic-builds",
    title: "Non-Deterministic Builds",
    content: `Find sources of non-determinism in build or generation steps.

Output:
- Identify causes
- Recommend deterministic alternatives`,
    category: "code-quality",
    tags: ["Build", "CI/CD", "Determinism", "Best Practices"],
    author: { name: "Charles", avatar: "", twitter: "WebRenew_" },
    createdAt: "2024-01-20",
    difficulty: "intermediate",
  },
  {
    id: "70",
    slug: "oncall-nightmare-review",
    title: "12-Month On-Call Nightmare Review",
    content: `Review this repository as if you are on call for it for the next 12 months.

Question:
What would wake you up at 3am?

Output:
- List high-risk areas
- Explain failure modes
- Suggest preventative fixes`,
    category: "code-quality",
    tags: ["On-Call", "Reliability", "Incident Prevention", "Best Practices"],
    author: { name: "Charles", avatar: "", twitter: "WebRenew_" },
    createdAt: "2024-01-20",
    difficulty: "advanced",
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

// The instructions array has been removed as per the updates.
// export function getInstructionBySlug(slug: string): Instruction | undefined {
//   return instructions.find((i) => i.slug === slug)
// }

// export function searchInstructions(query: string): Instruction[] {
//   const lowerQuery = query.toLowerCase()
//   return instructions.filter(
//     (i) =>
//       i.title.toLowerCase().includes(lowerQuery) ||
//       i.content.toLowerCase().includes(lowerQuery) ||
//       i.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)),
//   )
// }

export function searchMCPs(query: string): MCP[] {
  const lowerQuery = query.toLowerCase()
  return mcps.filter(
    (m) => m.name.toLowerCase().includes(lowerQuery) || m.description.toLowerCase().includes(lowerQuery),
  )
}

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

// =============================================================================
// Related Content Functions (for SEO internal linking)
// =============================================================================

/**
 * Calculate relevance score between two prompts for related content
 */
function calculatePromptRelevanceScore(source: Prompt, target: Prompt): number {
  let score = 0
  
  // Same category = high relevance
  if (source.category === target.category) {
    score += 10
  }
  
  // Shared tags = medium relevance
  const sharedTags = source.tags.filter((t) => target.tags.includes(t))
  score += sharedTags.length * 3
  
  // Same author = low relevance bonus
  if (source.author.name === target.author.name) {
    score += 2
  }
  
  return score
}

/**
 * Get related prompts for a given prompt based on category and tags
 */
export function getRelatedPrompts(prompt: Prompt, limit = 4): Prompt[] {
  return prompts
    .filter((p) => p.id !== prompt.id)
    .map((p) => ({
      prompt: p,
      score: calculatePromptRelevanceScore(prompt, p),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ prompt }) => prompt)
}

/**
 * Get prompts from the same category (excluding current prompt)
 */
export function getPromptsByCategoryExcluding(category: string, excludeId: string, limit = 4): Prompt[] {
  return prompts
    .filter((p) => p.category === category && p.id !== excludeId)
    .slice(0, limit)
}

/**
 * Get category data by slug
 */
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}
