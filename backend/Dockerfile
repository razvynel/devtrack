# Imagine oficială Node.js (LTS)
FROM node:20-alpine

# Directorul de lucru din container
WORKDIR /app

# Copiem package.json
COPY package*.json ./

# Instalăm dependențele
RUN npm install --production

# Copiem restul codului
COPY . .

# Expunem portul
EXPOSE 3000

# Pornim serverul
CMD ["node", "server.js"]
