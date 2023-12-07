FROM node:21

EXPOSE 8080

WORKDIR /app

COPY package.json .

RUN npm install

COPY src ./src

COPY app.js .

CMD ["node", "app.js"]