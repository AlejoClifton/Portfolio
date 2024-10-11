FROM node:lts AS dependencies

ARG PORT

ENV PORT=${PORT}

WORKDIR /administrativo-frontend-rosiestetica
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN pnpm run build

EXPOSE ${PORT}

CMD ["pnpm", "start"]
