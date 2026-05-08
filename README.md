# DevOps Lab — Frontend

React + TypeScript SPA for a resource management system: equipment rental, member administration, and order tracking. Frontend counterpart to the DevOps Lab backend — built as a hands-on environment for practising full-stack and DevOps workflows.

---

## Stack

| Layer | Technology | Version |
|---|---|---|
| UI Framework | React + TypeScript | 18.3 / 5.6 |
| Build Tool | Vite | 6.0 |
| Component Library | Material UI (MUI) | v6 |
| Server State | TanStack Query | v5 |
| Client Routing | React Router | v7 |
| Forms | React Hook Form | v7 |
| HTTP Client | Axios | 1.7 |
| Date Handling | Day.js + MUI Date Pickers | — |
| Linting | ESLint 9 + typescript-eslint | — |
| Formatting | Prettier | — |

---

## Project Structure

```
src/
├── contexts/          # React Context: AuthContext, ViewContext
├── layouts/           # App shell — AppBar, SideDrawer, Footer
├── lib/
│   ├── constants/     # Route definitions
│   ├── dto/           # Outbound request payload types
│   ├── hooks/         # TanStack Query wrappers per domain
│   ├── responses/     # Inbound API response types
│   ├── services/      # Axios call layer (one file per resource)
│   └── types/         # Form schemas
├── pages/             # Route-level components
├── providers/         # Root provider tree (single composition point)
└── theme.ts           # MUI custom theme
```

**Data flow:** `service (axios) → hook (TanStack Query) → page / context`

---

## Key Design Decisions

**Provider composition** — `src/providers/` composes the full provider tree (QueryClient, Theme, Router, Auth, View, Localization) in a single component. `main.tsx` stays clean; provider order is explicit and easy to audit.

**JWT via Axios interceptor** — the request interceptor in `src/providers/` reads the token from `localStorage` and injects `Authorization: Bearer <token>` on every outbound request. A 401 response clears the token and redirects to `/login`.

**DTO / Response type split** — outbound payloads (`lib/dto/`) and inbound responses (`lib/responses/`) are typed separately. API shapes don't leak into form state or component props.

**TanStack Query defaults** — `refetchOnWindowFocus: false` and `retry: false` are set globally. Background refetches don't fire on tab switch; failed queries surface immediately without silent retries.

**Role-based access** — `AuthContext` derives `isAdmin` from the `/auth` response (`esAdmin: boolean`). Admin-only routes and UI elements gate on this flag without a separate call.

---

## Pages & Routes

| Route | Page | Access |
|---|---|---|
| `/` | Home — equipment catalog | Protected |
| `/login` | Login | Public |
| `/signup` | Sign Up | Public |
| `/logout` | Logout | Protected |
| `/books` | Books | Protected |
| `/miembros` | Members | Protected |
| `/usuario` | User profile | Protected |
| `/MisPedidos` | My orders | Protected |
| `/pedidos/create` | Create order | Protected |

---

## Getting Started

**Prerequisites:** Node.js ≥ 18, npm

```bash
npm install
```

Create `.env` at the project root:

```env
VITE_SERVICE_URL=http://localhost:3000
```

```bash
npm run dev       # dev server → http://localhost:5173
npm run build     # type-check + production bundle
npm run lint      # ESLint (zero-warning policy)
npm run format    # Prettier
```

### Environment Variables

| Variable | Description |
|---|---|
| `VITE_SERVICE_URL` | Base URL of the backend REST API |

---

## Theme

Dark-first MUI theme defined in `src/theme.ts`:

| Token | Value |
|---|---|
| Background | `#080808` |
| Surface (cards, inputs) | `#2C3E50` / `#151E26` |
| Text | `#B0BEC5` |
| Primary accent | `#FF7043` (Deep Orange) |
| Primary hover | `#E64A19` |

---

## Related

- **Backend:** [DevOpsLab Backend](#) *(link TBD)*
