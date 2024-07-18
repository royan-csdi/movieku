FROM node:lts-alpine as build

ENV NEXT_PUBLIC_API_KEY $NEXT_PUBLIC_API_KEY

WORKDIR /app

COPY package*.json ./
COPY .env.local ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

