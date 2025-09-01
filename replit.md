# Overview

This is a modern React-based corporate website for AC19 Global Services Ltd, a technology services company specializing in software sourcing, deployment, support, and training. The application showcases the company's services, industry expertise, and training partnerships through a professional, responsive homepage design. Built with React, Vite, and a modern tech stack, it features a clean orange (#FE7E00) and dark gray (#343434) color scheme with comprehensive UI components and smooth animations.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom design system based on shadcn/ui components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: Comprehensive shadcn/ui component library with Radix UI primitives

## Design System
- **Color Palette**: Primary orange (#FE7E00), secondary dark gray (#343434), with CSS custom properties for theming
- **Typography**: Inter font family for clean, professional appearance
- **Layout**: Responsive grid system with mobile-first approach
- **Component Structure**: Modular section-based components (Hero, Services, Industries, etc.)

## Project Structure
- **Monorepo Layout**: Separate client, server, and shared directories
- **Client**: Contains React application with pages, components, hooks, and styles
- **Server**: Express.js backend with route handlers and storage interfaces
- **Shared**: Common schemas and types using Drizzle ORM with Zod validation

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Development Storage**: In-memory storage implementation for development
- **API Structure**: RESTful API design with middleware for logging and error handling

## Development Environment
- **Hot Reload**: Vite HMR integration with Express middleware mode
- **TypeScript**: Strict configuration with path aliases for clean imports
- **Code Quality**: ESM modules throughout with proper error boundaries

# External Dependencies

## UI Framework Dependencies
- **@radix-ui/react-***: Comprehensive set of unstyled, accessible UI primitives
- **class-variance-authority**: Component variant API for consistent styling
- **tailwindcss**: Utility-first CSS framework with custom configuration
- **lucide-react**: Modern icon library with consistent design language

## Database and ORM
- **@neondatabase/serverless**: Serverless PostgreSQL database driver
- **drizzle-orm**: Type-safe SQL ORM with excellent TypeScript integration
- **drizzle-zod**: Automatic schema validation generation

## Development Tools
- **@tanstack/react-query**: Data fetching and caching library
- **wouter**: Minimalist routing library for React
- **date-fns**: Modern date utility library
- **@replit/vite-plugin-***: Replit-specific development enhancements

## Build and Development
- **vite**: Next-generation frontend build tool
- **esbuild**: Fast JavaScript bundler for production builds
- **tsx**: TypeScript execution engine for development server
- **postcss** with **autoprefixer**: CSS processing pipeline