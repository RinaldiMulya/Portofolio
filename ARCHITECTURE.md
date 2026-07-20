# Halmall Web - Architecture & System Design

> **Halal Marketplace Frontend** — Next.js 15 (App Router) BFF Gateway to Microservices Backend

---

## 🏗️ Architecture Overview

**Halmall Web** is a **Next.js 15 (App Router)** frontend application for a **Halal Marketplace** platform. It follows a **BFF (Backend-for-Frontend) / API Gateway pattern** that proxies requests to multiple backend microservices.

---

## 🎯 System Design

```
┌─────────────────────────────────────────────────────────────────────┐
│                        CLIENT (Browser)                             │
└────────────────────────────────┬────────────────────────────────────┘
                                 │ HTTPS
                                 ▼
┌─────────────────────────────────────────────────────────────────────┐
│                      NEXT.JS 15 (App Router)                        │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │                    Middleware (Edge)                         │   │
│  │  • Service routing via /api/proxy/{service}                  │   │
│  │  • Injects x-client-id & x-client-secret headers            │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                              │                                      │
│        ┌─────────────────────┼─────────────────────┐               │
│        ▼                     ▼                     ▼               │
│  ┌──────────┐          ┌──────────┐          ┌──────────┐        │
│  │ Server   │          │ Client   │          │ Static   │        │
│  │ Components│         │ Components│         │ Assets   │        │
│  │ (RSC)    │          │ (Hydrated)│         │ (ISR/SSG)│        │
│  └────┬─────┘          └────┬─────┘          └────┬─────┘        │
│       │                     │                     │               │
│       ▼                     ▼                     ▼               │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │                    STATE MANAGEMENT                         │  │
│  │  • Jotai (Atoms) - Local/Global UI state                   │  │
│  │  • TanStack Query (React Query) - Server state/caching     │  │
│  │  • React Context - Auth, Permissions, Articles, Referrer   │  │
│  └─────────────────────────────────────────────────────────────┘  │
└────────────────────────────────┬────────────────────────────────────┘
                                 │ HTTP/REST (via API Proxy)
                                 ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    BACKEND MICROSERVICES                            │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ │
│  │ Auth   │ │ Cart   │ │ Product│ │ Order  │ │Profile │ │ Event  │ │
│  │ Service│ │ Service│ │ Service│ │ Service│ │ Service│ │ Service│ │
│  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘ └────────┘ │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ │
│  │Address │ │Merchant│ │  PD    │ │Referral│ │Article │ │Franchise│ │
│  │Service │ │Service │ │Service │ │Service │ │Service │ │Service │ │
│  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘ └────────┘ │
│  ┌────────┐ ┌────────┐                                               │
│  │ FAQ    │ │ Short  │                                               │
│  │ Service│ │ Link   │                                               │
│  └────────┘ └────────┘                                               │
└─────────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
                    ┌────────────────────────┐
                    │  EXTERNAL SERVICES     │
                    │ • Firebase (Auth/FCM)  │
                    │ • Google Maps/Places   │
                    │ • Tawk.to (Chat)       │
                    │ • Google Analytics     │
                    └────────────────────────┘
```

---

## 🧩 Key Architectural Patterns

| Layer | Pattern | Implementation |
|-------|---------|----------------|
| **Routing** | Next.js App Router + Route Groups | `(auth)`, `(merchants)`, `(callback)` groups |
| **Rendering** | Hybrid (RSC + Client) | Server Components by default, `'use client'` for interactivity |
| **API Gateway** | Next.js Middleware Proxy | `/api/proxy/{service}` → routes to backend microservices |
| **State** | Atomic (Jotai) + Server Cache (TanStack Query) | Atoms for UI, Query for server data |
| **Auth** | JWT in HttpOnly Cookie + Context | Middleware validates, Context provides to client |
| **i18n** | next-intl | Server-side locale detection + messages |
| **Forms** | React Hook Form + Zod | Schema validation with resolvers |
| **UI** | Radix UI + Tailwind CSS | Headless accessible components |
| **Deployment** | Docker Multi-stage + Standalone | Node 20 Alpine, non-root user |

---

## ⚙️ Technology Stack

| Category | Technologies |
|----------|--------------|
| **Framework** | Next.js 15.1.9 (App Router, Turbopack), React 19 |
| **Language** | TypeScript 5 (strict mode) |
| **Styling** | Tailwind CSS 3.4, Tailwind Animate, Sass |
| **UI Components** | Radix UI (Accordion, Dialog, Select, Tabs, etc.), Lucide React, React Icons |
| **State Management** | **Jotai** (atoms, immer, optics, tanstack-query integration), **TanStack Query v5** (caching, devtools) |
| **Forms/Validation** | React Hook Form 7.54, Zod 3.24, @hookform/resolvers |
| **API/HTTP** | Axios (client & server), Custom API clients (`client-request.ts`, `server-request.ts`) |
| **Auth** | JWT (jsonwebtoken, jwt-decode), js-cookie, Firebase Auth, Google OAuth |
| **Internationalization** | next-intl 3.26 |
| **Real-time/Chat** | Firebase Messaging (FCM), Tawk.to Messenger |
| **Maps/Location** | @react-google-maps/api, react-international-phone |
| **Rich Text** | TipTap (ProseMirror-based) |
| **Image/Crop** | CropperJS, react-easy-crop, react-image-focal-point |
| **Charts/Carousel** | react-slick, slick-carousel |
| **Testing** | Playwright (E2E), Storybook 10 (Component docs) |
| **Build/Deploy** | Docker multi-stage, Next.js Standalone Output, pnpm |
| **Linting** | ESLint 9 + Next.js config |
| **Analytics** | @next/third-parties (Google Analytics) |
| **Notifications** | react-hot-toast, Firebase Cloud Messaging |

---

## 📁 Project Structure (Key Directories)

```
src/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Auth route group (login, register, PIN, OTP)
│   ├── (merchants)/              # Merchant pages
│   ├── (callback)/               # OAuth callbacks
│   ├── api/                      # API Routes (proxy, webhooks)
│   │   └── proxy/                # Microservice proxy routes
│   ├── profile/                  # User profile pages
│   ├── event/                    # Event marketplace pages
│   ├── franchise/                # Franchise pages
│   ├── help-center/              # Help center
│   ├── layout.tsx                # Root layout with providers
│   ├── providers.tsx             # Client providers (Query, Jotai, Toaster)
│   └── middleware.ts             # API Gateway middleware
├── atoms/                        # Jotai atoms (40+ domain-specific)
│   ├── authAtoms.ts
│   ├── cartAtoms.ts
│   ├── productAtoms.ts
│   └── ... (checkout, event, franchise, etc.)
├── components/
│   ├── ui/                       # Radix-based UI primitives (25+)
│   ├── home/                     # Homepage sections
│   ├── event/                    # Event components
│   └── ...
├── context/                      # React Context providers
│   ├── AuthContext.tsx
│   ├── PermissionContext.tsx
│   └── ...
├── hooks/                        # Custom React hooks (100+)
│   ├── useAuth.tsx
│   ├── products/
│   ├── event/
│   ├── profile/
│   └── ...
├── services/
│   ├── backend/                  # Direct backend service calls (SSR)
│   └── internal/                 # Internal API wrappers (Client)
├── libs/
│   ├── client-request.ts         # Axios instance for client-side
│   └── server-request.ts         # Axios instance for server-side
├── config/
│   └── service-mappings.ts       # Microservice host/client-id config
├── types/                        # TypeScript types (50+ files)
├── validation/                   # Zod schemas
├── store/                        # Jotai store instance
└── assets/                       # Static assets
```

---

## 🔐 Authentication & Security Flow

1. **Login** → Backend returns JWT → Stored in **HttpOnly cookie** (`token`)
2. **Middleware** reads cookie, verifies JWT with `JWT_SECRET`, attaches user to request
3. **Root Layout** decodes token on server, provides to `AuthProvider`
4. **Client** receives user via Context + Jotai atom (`authUserAtom`)
5. **API Proxy** injects `x-client-id` + `x-client-secret` for service-to-service auth

---

## 🐳 Deployment Architecture

```dockerfile
# Multi-stage build
1. deps       → npm install (node:20-alpine)
2. builder    → npm run build (output: .next/standalone)
3. runner     → Copy standalone + static → node server.js (non-root user)
```

**Production**: `docker-compose-prod.yml` with env file, port mapping via `${EXPOSE_APP_PORT}:3000`

---

## 🎯 Domain Features (Halal Marketplace)

| Domain | Features |
|--------|----------|
| **Marketplace** | Products, Cart, Checkout, Voucher, Courier, Wishlist, Reviews |
| **Digital Products** | Topup, PDAM, PLN, Pulsa, E-wallet (Halmall Cash) |
| **Events** | Islamic events, Ticketing, Organizer dashboard |
| **Franchise** | Franchise listings, Brochure download, Partner registration |
| **Merchant** | Verification, Registration, Dashboard |
| **Social** | Referral program, Chat (Firebase/Tawk.to), Push notifications |
| **Content** | Articles, FAQ, Help Center, Campaigns |

---

## 📋 Environment Variables (Required)

```env
# Core
JWT_SECRET=
CLIENT_ID=
CLIENT_SECRET=
GOOGLE_TAG_ID=

# Microservice Hosts & Client IDs
AUTH_HOST=
AUTH_CLIENT_ID=
CART_HOST=
CART_CLIENT_ID=
PRODUCT_HOST=
PRODUCT_CLIENT_ID=
ADDRESS_SERVICE=
ADDRESS_CLIENT_ID=
ORDER_HOST=
TRX_CLIENT_ID=
PD_HOST=
PD_CLIENT_ID=
MERCHANT_SERVICE=
MERCHANT_CLIENT_ID=
PROFILE_SERVICE=
PROFILE_CLIENT_ID=
SHORT_SERVICE=
SHORT_CLIENT_ID=
EVENT_SERVICE=
EVENT_CLIENT_ID=
REFERRAL_SERVICE=
REFERRAL_CLIENT_ID=
FAQ_SERVICE=
FAQ_CLIENT_ID=
FRANCHISE_SERVICE=
FRANCHISE_CLIENT_ID=
ARTICLE_SERVICE=
ARTICLE_CLIENT_ID=

# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=

# Tawk.to
NEXT_PUBLIC_TAWK_PROPERTY_ID=
```

---

## 🚀 Getting Started

```bash
# Install dependencies
pnpm install

# Development
pnpm dev

# Build
pnpm build

# Production start
pnpm start

# Docker
docker-compose up --build
```

---

## 📚 Documentation References

- [Next.js 15 App Router](https://nextjs.org/docs/app)
- [Jotai State Management](https://jotai.org/)
- [TanStack Query v5](https://tanstack.com/query/latest)
- [Radix UI Primitives](https://www.radix-ui.com/)
- [next-intl](https://next-intl-docs.vercel.app/)
- [TipTap Editor](https://tiptap.dev/)
- [Docker Multi-stage Builds](https://docs.docker.com/build/building/multi-stage/)

---

*Generated: 2026-07-12 | Project: Halmall Web | Version: 0.1.0*