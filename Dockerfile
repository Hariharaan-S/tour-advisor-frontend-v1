# Build stage
FROM node:20 AS build

WORKDIR /app

COPY package.json ./
RUN npm install --legacy-peer-deps

COPY . .

ENV REACT_APP_GOOGLE_MAPS_API_KEY=AIzaSyCLnVZqt8YXxMHrqUfKUKb1u7n5iGdNffQ

RUN npm run build

# Production stage
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80