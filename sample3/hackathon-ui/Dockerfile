FROM node:lts-alpine as build

WORKDIR /app

COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 8082

COPY --from=build /app/build /usr/share/nginx/html
