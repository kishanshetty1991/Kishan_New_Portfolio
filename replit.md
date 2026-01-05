# replit.md

## Overview

This is a personal portfolio website for a full-stack developer named Kishan Shetty. The application is built as a single-page React application with a dark theme, showcasing the developer's introduction, about section, projects, skills, and contact information. The architecture follows a monorepo structure with a React frontend (Vite) and an Express.js backend, designed for deployment on Replit.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter (lightweight React router alternative to React Router)
- **State Management**: TanStack React Query for server state management
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library (Radix UI primitives with custom styling)
- **Component Organization**: 
  - `client/src/components/ui/` - Reusable UI primitives from shadcn
  - `client/src/pages/` - Page components
  - `client/src/pages/sections/` - Page section components (AboutMe, Contact, Introduction, Portfolio, Skills)

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Server**: HTTP server with Vite middleware in development, static file serving in production
- **API Pattern**: RESTful endpoints under `/api` prefix (currently minimal, ready for expansion)
- **Build**: esbuild for server bundling

### Project Structure
```
├── client/           # Frontend React application
│   ├── src/
│   │   ├── components/ui/  # shadcn UI components
│   │   ├── pages/          # Page and section components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utilities and query client
├── server/           # Backend Express application
├── shared/           # Shared types/schemas (Drizzle-ready)
└── public/           # Static assets (figmaAssets)
```

### Design Patterns
- **Monorepo Structure**: Client and server share TypeScript configuration with path aliases (`@/` for client, `@shared/` for shared code)
- **Component-Based Architecture**: Atomic design with reusable UI components
- **CSS Variables**: Theme tokens defined in CSS for consistent styling
- **Type Safety**: Full TypeScript coverage with strict mode

## External Dependencies

### Database
- **Drizzle ORM**: Configured with drizzle-kit for schema management
- **Neon Database**: PostgreSQL serverless driver (`@neondatabase/serverless`) ready for use
- **Session Store**: `connect-pg-simple` for PostgreSQL session storage (when auth is needed)

### UI Libraries
- **Radix UI**: Full suite of accessible, unstyled UI primitives (dialogs, menus, tooltips, etc.)
- **shadcn/ui**: Pre-configured component library using Radix + Tailwind
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel functionality
- **Recharts**: Charting library (available via shadcn chart component)
- **Vaul**: Drawer component
- **cmdk**: Command menu component

### Form & Validation
- **React Hook Form**: Form state management
- **Zod**: Schema validation (with drizzle-zod integration)
- **@hookform/resolvers**: Zod resolver for React Hook Form

### Development Tools
- **Vite Plugins**: 
  - `@replit/vite-plugin-runtime-error-modal` - Error overlay
  - `@replit/vite-plugin-cartographer` - Replit integration (dev only)
  - `@replit/vite-plugin-dev-banner` - Development banner (dev only)

### Fonts
- Google Fonts: Poppins, Roboto Mono, DM Sans, Fira Code, Architects Daughter, Geist Mono

### Build & Development
- **TypeScript**: Strict mode with path aliases
- **PostCSS**: With Tailwind and Autoprefixer
- **esbuild**: Server bundling for production