FROM node:20

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

ENV NODE_OPTIONS="--max-old-space-size=768"

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
