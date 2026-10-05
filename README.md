# Plantilla NestJS — Frontend

Starter template para proyectos React + TypeScript con autenticación JWT, layout con sidebar, sistema de notificaciones/modals, y conexión a un backend NestJS.

## Stack

| Herramienta | Versión | Rol |
|---|---|---|
| React | 18 | UI |
| Vite | 6 | Bundler / Dev server |
| TypeScript | 5.6 | Tipado |
| MUI v6 | 6.4 | Componentes UI + tema |
| TanStack Query | 5 | Server state / cache |
| React Router | 7 | Routing |
| React Hook Form | 7 | Formularios |
| Axios | 1.7 | HTTP client |
| dayjs | 1.11 | Fechas |

## Primeros pasos

```bash
# 1. Copiar variables de entorno
cp .env.example .env.local

# 2. Editar VITE_SERVICE_URL con la URL de tu backend
# VITE_SERVICE_URL=http://localhost:3000

# 3. Instalar dependencias
npm install

# 4. Iniciar servidor de desarrollo
npm run dev
```

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Dev server con HMR |
| `npm run build` | Build de producción |
| `npm run preview` | Preview del build |
| `npm run lint` | ESLint |
| `npm run type-check` | Verificación de tipos TypeScript |

## Estructura de carpetas

```
src/
├── components/          # Componentes reutilizables globales
│   ├── Modal/           # Dialog genérico controlado por ViewContext
│   ├── Notification/    # Snackbar genérico controlado por ViewContext
│   └── Table/           # Tabla reutilizable con skeleton loader
│
├── contexts/
│   ├── AuthContext/     # Estado de autenticación (usuario, login, logout)
│   └── ViewContext/     # UI global (notificaciones, modals, layout)
│
├── layouts/
│   ├── app/             # Layout para usuarios autenticados (sidebar + navbar)
│   ├── base/            # Layout para páginas públicas (solo navbar)
│   └── components/      # AppBar, SideDrawer, Footer, MenuItem
│
├── lib/
│   ├── constants/       # Rutas (ROUTES)
│   ├── dto/             # Objetos de transferencia (request bodies)
│   ├── hooks/           # Hooks de datos (useAuth, useBooks, etc.)
│   │   └── contextHooks/ # Wrappers de useContext
│   ├── responses/       # Interfaces de respuesta del backend
│   ├── services/        # Funciones axios (httpGET*, httpPOST*, etc.)
│   └── types/           # Tipos de formularios
│
├── pages/               # Una carpeta por ruta
├── providers/           # Árbol de providers (tema, query, router, auth)
├── theme.ts             # Paleta y overrides de MUI
└── main.tsx             # Entry point
```

## Autenticación

El flujo de auth usa JWT guardado en `localStorage`:

1. `POST /auth/login` → recibe token → guarda en localStorage
2. Axios interceptor agrega `Authorization: Bearer <token>` a cada request
3. `GET /auth` verifica el token y retorna el usuario actual
4. Si el backend responde `401` → limpia token y redirige a `/login`

Para agregar rutas protegidas, filtrar en `menuList.ts` usando los flags `adminOnly` y `activeOnly`.

## Agregar una nueva página

1. Crear `src/pages/MiPagina/index.tsx`
2. Agregar la ruta en `src/lib/constants/routes.ts`
3. Agregar el `<Route>` en `src/App.tsx`
4. Agregar el item en `src/layouts/constants/menuList.ts` (opcional)

## Sistema de notificaciones y modals

Desde cualquier componente:

```tsx
const { notification, modal } = useViewContext();

// Notificación
notification.show({ content: 'Operación exitosa', severity: 'success' });
notification.hide();

// Modal
modal.show({ title: 'Confirmar', content: <MiFormulario /> });
modal.hide();
```

## Personalización del tema

Editar `src/theme.ts`. Los colores base del template:

| Token | Valor | Uso |
|---|---|---|
| `primary.main` | `#FF7043` | Botones, acentos |
| `background.default` | `#080808` | Fondo global |
| `background.paper` | `#1E2A38` | Cards, surfaces |
| `text.primary` | `#B0BEC5` | Texto principal |

Los overrides de `MuiButton`, `MuiCard`, `MuiTextField` y `MuiCheckbox` ya están configurados en el tema — no repetir estilos inline en los componentes.

## Variables de entorno

| Variable | Descripción | Ejemplo |
|---|---|---|
| `VITE_SERVICE_URL` | URL base del backend NestJS | `http://localhost:3000` |
