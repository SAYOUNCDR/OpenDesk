# OpenDesk | Autonomous Customer Intelligence 



## What is this?
OpenDesk is an open-source, AI-native customer support platform designed for modern businesses. It provides real-time AI chat, voice support, and intelligent knowledge management without the proprietary overhead.

## Vision and Features
- **AI-Powered Support**: Real-time chat with Convex Agents and Vapi voice assistant integration.
- **Knowledge Base**: Embedding-powered RAG for autonomous documentation handling.
- **SaaS Infrastructure**: Clerk authentication, Sentry monitoring, and AWS Secrets Manager integration.
- **Modern UI**: Next.js 15, React 19, Tailwind v4, and shadcn/ui.
- **Monorepo Architecture**: Managed with Turborepo for optimized development performance.

## Stack Check
- **Framework**: Next.js 15
- **Backend**: Convex
- **Auth**: Clerk
- **Monorepo**: Turborepo + pnpm

---

## Getting Started

### Adding components
Run this at the root of your `web` app:
```bash
pnpm dlx shadcn@latest add button -c apps/web
```

### Using components
```tsx
import { Button } from "@workspace/ui/components/button";
```

## Roadmap
- [ ] Operator Dashboard
- [ ] Embeddable Widget
- [ ] Multi-tenancy

Built by [SAYOUNCDR](https://github.com/SAYOUNCDR)

