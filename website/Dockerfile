FROM node:20-alpine AS builder
WORKDIR /app

ENV NEXT_PUBLIC_DIRECTUS_API_URL=https://directus.virenet.com/
ENV NEXT_PUBLIC_DIRECTUS_URL=https://directus.virenet.com/items/article

COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app

ENV NEXT_PUBLIC_DIRECTUS_API_URL=https://directus.virenet.com/
ENV NEXT_PUBLIC_DIRECTUS_URL=https://directus.virenet.com/items/article
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs


COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/node_modules ./node_modules


RUN chown -R nextjs:nodejs /app
USER nextjs
EXPOSE 3000
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]
