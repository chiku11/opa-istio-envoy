FROM nginx:1.23.4-alpine

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY ./default.conf /etc/nginx/conf.d/default.conf

COPY ./rest_module.js /etc/nginx/rest_module.js

WORKDIR /app