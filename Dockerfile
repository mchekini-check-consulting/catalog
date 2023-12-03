FROM node:21

EXPOSE 8080

WORKDIR /app

COPY package.json .

RUN npm install

COPY app.js .

CMD ["node", "app.js"]