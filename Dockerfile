FROM node:12
WORKDIR /Users/Mateus/Desktop/ienvironment-mqtt
COPY package*.json ./

RUN npm install
COPY . .
EXPOSE 1883
CMD [ "node", "server.js"]