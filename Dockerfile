FROM node:8
WORKDIR /usr/src
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "app"]
