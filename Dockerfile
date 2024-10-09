FROM node:lts-alpine3.20 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa de producción
FROM node:lts-alpine3.20 AS production

WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./
RUN npm install --only=production
COPY .env .env

EXPOSE 8080
CMD ["node", "dist/main"]