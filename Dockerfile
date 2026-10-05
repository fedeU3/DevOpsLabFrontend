# Se construye desde la raiz del repo, que es el contexto que ve COPY:
#   docker build -t clerkiva-frontend .
# Lo que no entra en la imagen esta en el .dockerignore de la raiz.

# ---------- Etapa 1: build ----------
FROM node:22-bookworm-slim AS build
WORKDIR /app

# Cypress esta en devDependencies y en el npm ci baja su binario (~500MB).
# Para compilar no hace falta, asi que se saltea.
ENV CYPRESS_INSTALL_BINARY=0

COPY package.json package-lock.json ./
RUN npm ci

# Vite reemplaza import.meta.env.VITE_* por su valor AL COMPILAR: la URL del backend
# queda escrita dentro del JS. Por eso se pasa en el build (--build-arg) y no al
# correr el contenedor como en el backend.
# Por defecto es /api: el nginx de esta misma imagen la reenvia al backend, asi que
# una sola imagen sirve para staging y produccion.
ARG VITE_SERVICE_URL=/api
ENV VITE_SERVICE_URL=$VITE_SERVICE_URL

COPY . .
RUN npm run build

# ---------- Etapa 2: runtime ----------
# El resultado del build son archivos estaticos (HTML, JS, CSS, imagenes): no hace
# falta Node para servirlos, alcanza con nginx.
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
