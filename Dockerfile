FROM node:22.12.0

RUN mkdir -p /app
WORKDIR /app

COPY package*.json /app
RUN npm install

# Insert all project from local env to the docker
COPY . .

EXPOSE 8080

CMD ["npm", "run", "host"]
