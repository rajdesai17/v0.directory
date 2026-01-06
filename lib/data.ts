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
  previewUrl?: string
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
  { name: "Dashboards", slug: "dashboards", count: 4 },
  { name: "Landing Pages", slug: "landing-pages", count: 4 },
  { name: "Components", slug: "components", count: 4 },
  { name: "E-commerce", slug: "ecommerce", count: 4 },
  { name: "Portfolio", slug: "portfolio", count: 3 },
  { name: "Authentication", slug: "authentication", count: 3 },
  { name: "Animations", slug: "animations", count: 3 },
  { name: "Apps", slug: "apps", count: 4 },
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
  // ========== LANDING PAGES ==========
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
    author: { name: "Raj", avatar: "/diverse-group-avatars.png" },
    createdAt: "2024-01-16",
    previewUrl: "https://v0.link/6qUhlbF",
  },
  {
    id: "2",
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
    id: "3",
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
    id: "4",
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
    id: "5",
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
    id: "6",
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
    id: "7",
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
    id: "8",
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
    id: "9",
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
    id: "10",
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
    id: "11",
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
    id: "12",
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
    id: "13",
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
    id: "14",
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
    id: "15",
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
    id: "16",
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
    id: "17",
    slug: "developer-portfolio",
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
    id: "18",
    slug: "designer-portfolio",
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
    id: "19",
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

  // ========== AUTHENTICATION ==========
  {
    id: "20",
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
    id: "21",
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
    category: "authentication",
    tags: ["Glassmorphism", "Login", "Gradient", "Modern"],
    author: { name: "v0 Community", avatar: "/diverse-group-avatars.png" },
    createdAt: "2023-12-26",
  },
  {
    id: "22",
    slug: "onboarding-flow",
    title: "User Onboarding Flow",
    content: `Create an engaging multi-step onboarding experience.

Steps:
1. Welcome: Personalized greeting, value proposition
2. Profile Setup: Avatar, name, bio
3. Preferences: Interest selection, notification settings
4. Team/Workspace: Create or join organization
5. Tour: Interactive product walkthrough
6. Complete: Success celebration

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
    category: "authentication",
    tags: ["Onboarding", "Multi-step", "User Experience", "Flow"],
    author: { name: "v0 Community", avatar: "/diverse-group-avatars.png" },
    createdAt: "2023-12-25",
  },

  // ========== ANIMATIONS ==========
  {
    id: "23",
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
- Exit animations before route change

Page Exit Animations:
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
    id: "24",
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
    id: "25",
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
    id: "26",
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
    id: "27",
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
    id: "28",
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
    id: "29",
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

export function searchMCPs(query: string): MCP[] {
  const lowerQuery = query.toLowerCase()
  return mcps.filter(
    (m) => m.name.toLowerCase().includes(lowerQuery) || m.description.toLowerCase().includes(lowerQuery),
  )
}
