# ---- Stage 1: Build the Angular app with the "docker" configuration ----
FROM node:22-alpine AS build

WORKDIR /app

# Install dependencies first to leverage Docker layer caching
COPY package.json package-lock.json* ./
RUN npm ci

# Copy the rest of the source and build using the docker environment config
COPY . .
RUN npm run build:docker

# ---- Stage 2: Serve the static build with nginx ----
FROM nginx:stable-alpine AS runtime

# SPA-friendly nginx config (deep-link/refresh -> index.html)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# The @angular/build:application builder emits browser assets to dist/demo/browser
COPY --from=build /app/dist/demo/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# Buradaki docker container'ı ayağa kalkarken veirlecek port ile (docker-compose.yml)
# springde cors için izin verilen port aynı olmalı.
