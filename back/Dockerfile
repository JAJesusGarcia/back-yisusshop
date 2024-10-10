# Usa una imagen base oficial de Node.js
FROM node:16-alpine

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código al contenedor
COPY . .

# Corre el build
RUN npm run build

# Expone el puerto en el que correrá la aplicación
EXPOSE 3000

# Comando de inicio
CMD ["npm", "start"]
