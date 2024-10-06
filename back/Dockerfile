# Usa una imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de tu aplicación
COPY . .

# Compila tu aplicación si es necesario
RUN npm run build

# Expone el puerto en el que tu aplicación escuchará
EXPOSE 3000

# Comando para iniciar tu aplicación
CMD ["npm", "start"]
