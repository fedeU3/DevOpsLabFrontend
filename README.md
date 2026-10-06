# Clerkiva — Frontend

Frontend de Clerkiva: app web para que los usuarios se registren, vean los servicios disponibles y saquen, consulten y cancelen turnos. Consume la API del backend NestJS ([DevOpsLabBackend](https://github.com/fedeU3/DevOpsLabBackend)).

## Stack

| Herramienta | Versión | Rol |
|---|---|---|
| React | 18 | UI |
| Vite | 6 | Bundler / dev server |
| TypeScript | 5.6 | Tipado |
| MUI | 6 | Componentes UI + tema |
| TanStack Query | 5 | Server state / cache |
| React Router | 7 | Routing |
| React Hook Form | 7 | Formularios |
| Axios | 1 | Cliente HTTP |
| dayjs | 1.11 | Fechas |

## Primeros pasos

Requiere Node 22 (la misma versión que usan el CI y el `Dockerfile`).

```bash
# 1. Crear el .env con la URL del backend
echo "VITE_SERVICE_URL=http://localhost:3001" > .env

# 2. Instalar dependencias (respeta las versiones de package-lock.json)
npm ci

# 3. Iniciar el servidor de desarrollo
npm run dev
```

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Dev server con HMR |
| `npm run build` | Chequeo de tipos + build de producción en `dist/` |
| `npm run preview` | Sirve el build localmente |
| `npm run lint` | ESLint (es lo mismo que corre el CI) |
| `npm run type-check` | Chequeo de tipos de TypeScript |

## Funcionalidades

| Ruta | Página | Qué hace | Endpoints |
|---|---|---|---|
| `/login` | `pages/Login` | Inicio de sesión | `POST /auth/login` |
| `/signup` | `pages/SignUp` | Registro de usuario | `POST /auth/signup` |
| `/` | `pages/Home` | Lista de servicios disponibles | `GET /servicios` |
| `/turnos/nuevo` | `pages/CrearPedidos` | Sacar un turno para un servicio | `GET /servicios`, `POST /turnos` |
| `/mis-turnos` | `pages/MisPedidos` | Ver mis turnos y cancelarlos | `GET /turnos`, `PATCH /turnos/:id` |
| `/perfil` | `pages/Usuarios` | Datos del usuario logueado | `GET /auth` |
| `/usuarios` | `pages/Miembros` | Listado de usuarios | `GET /usuarios` |
| `/logout` | `pages/Logout` | Cierra la sesión | — |

Todas las rutas salvo `/login` y `/signup` son privadas: sin token redirigen a `/login`.

> Algunos nombres de carpetas vienen de la plantilla original y no coinciden con la ruta (por ejemplo, `pages/MisPedidos` es "Mis turnos"). La fuente de verdad es [src/App.tsx](src/App.tsx).
>
> También quedan restos de la plantilla que no forman parte de la app: la página `Books` (`/books`) y los hooks/servicios de `equipos`, `pedidos` y `miembros`.

## Estructura de carpetas

```
src/
├── components/          # Componentes reutilizables (Modal, Notification, Table)
├── contexts/
│   ├── AuthContext/     # Usuario logueado, login, signup, logout
│   └── ViewContext/     # UI global: notificaciones, modals y layout
├── layouts/             # AppLayout (con sidebar), BaseLayout y sus componentes
├── lib/
│   ├── constants/       # Rutas (ROUTES)
│   ├── dto/             # Bodies de los requests
│   ├── hooks/           # Hooks de datos con TanStack Query (useTurnos, useServicios...)
│   │   └── contextHooks/ # useAuthContext, useViewContext
│   ├── responses/       # Tipos de las respuestas del backend
│   ├── services/        # Llamadas HTTP con axios
│   └── types/           # Tipos de formularios
├── pages/               # Una carpeta por página
├── providers/           # Providers (tema, query client, router, auth) y config de axios
├── theme.ts             # Paleta y overrides de MUI
└── main.tsx             # Entry point
```

## Autenticación

JWT guardado en `localStorage`:

1. `POST /auth/login` devuelve el token y se guarda en `localStorage`.
2. Un interceptor de axios ([src/providers/index.tsx](src/providers/index.tsx)) agrega `Authorization: Bearer <token>` a cada request.
3. `GET /auth` valida el token y devuelve el usuario actual (incluye `idLocalidad` e `idProvincia`).
4. Si el backend responde 401, se descarta el usuario y se vuelve a `/login`.

El backend todavía no maneja roles, así que `isAdmin` es siempre `false`.

## Agregar una página

1. Crear `src/pages/MiPagina/index.tsx`.
2. Agregar la ruta en `src/lib/constants/routes.ts`.
3. Agregar el `<Route>` en `src/App.tsx` (envuelto en `<PrivateRoute>` si requiere login).
4. Opcional: agregar el ítem al menú en `src/layouts/constants/menuList.ts`.

## Notificaciones y modals

Desde cualquier componente:

```tsx
const { notification, modal } = useViewContext();

notification.show({ content: 'Operación exitosa', severity: 'success' });
modal.show({ title: 'Confirmar', content: <MiFormulario /> });
```

## Variables de entorno

| Variable | Descripción | Ejemplo |
|---|---|---|
| `VITE_SERVICE_URL` | URL base del backend | `http://localhost:3001` |

Vite reemplaza las variables `VITE_*` **al compilar**: su valor queda escrito en el JS que descarga el navegador. Nunca pongas secretos en ellas.

## Docker

La imagen se construye en dos etapas ([Dockerfile](Dockerfile)): Node 22 compila la app y nginx sirve los archivos estáticos.

```bash
docker build -t clerkiva-frontend .
docker run --rm -p 8080:80 clerkiva-frontend
```

En la imagen, `VITE_SERVICE_URL` vale `/api`. El [nginx.conf](nginx.conf) reenvía `/api/*` al servicio `backend:3001` del `docker compose` (sacando el prefijo `/api`), así que la misma imagen sirve para staging y producción. Corriendo la imagen sola, sin el backend, la app carga pero las llamadas a la API fallan.

## CI/CD

Definido en [.github/workflows/ci-cd.yml](.github/workflows/ci-cd.yml).

| Job | Cuándo corre | Qué hace |
|---|---|---|
| **Lint** | Todo push y PR a `dev`, `preprod`, `prod` | `npm ci` + `npm run lint` |
| **SonarCloud** | Igual que Lint | Análisis de calidad en SonarCloud |
| **Final check** | Igual que Lint | Resume Lint + Sonar en un solo check (para protección de ramas) |
| **Build y push a GHCR** | Push a `preprod` o `prod`, si Lint y Sonar pasaron | Construye la imagen y la sube a `ghcr.io/fedeu3/clerkiva-frontend` |
| **Deploy al VPS** | Después del build | Entra por SSH al VPS y actualiza el contenedor `frontend` |

### Ramas y ambientes

| Rama | Ambiente | Carpeta en el VPS | Tag de la imagen |
|---|---|---|---|
| `preprod` | `staging` | `/opt/clerkiva/staging` | `:preprod` |
| `prod` | `production` | `/opt/clerkiva/production` | `:prod` |

Cada imagen también se etiqueta con el SHA del commit, para poder volver a una versión anterior.

El `compose.yml` y el `.env` de cada carpeta del VPS los deja el deploy del backend: **el backend se tiene que desplegar al menos una vez antes que el frontend.**

Para que producción requiera aprobación manual, activar *Required reviewers* en *Settings → Environments → production*.

### Secretos

| Secreto | Dónde | Para qué |
|---|---|---|
| `SONAR_TOKEN`, `SONAR_ORG`, `SONAR_PROJECT_KEY` | Repository secrets | Job de SonarCloud |
| `VPS_HOST`, `VPS_USER`, `VPS_SSH_KEY`, `VPS_KNOWN_HOSTS` | Environment secrets de `staging` y `production` | Conexión SSH del deploy |

Para GHCR no hace falta crear nada: se usa el `GITHUB_TOKEN` automático del workflow.

## Tests e2e

Hay una configuración inicial de Cypress en [cypress/](cypress/) (`cypress.config.ts` apunta a `http://localhost:3001`). Cypress no está en las dependencias del proyecto ni corre en el CI.
