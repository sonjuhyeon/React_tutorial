FROM node:18.12.0-alpine3.16 as build

WORKDIR /app

COPY package.json ./package.json
COPY package-lock.json ./package-lock.json

RUN npm install

COPY . ./

EXPOSE 3000

CMD ["npm", "start"]

RUN npm run build