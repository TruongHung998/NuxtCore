FROM node:18

WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .

RUN yarn run build
EXPOSE 5000
CMD ["yarn", "run", "start"]