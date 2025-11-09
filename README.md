# FitLife Backend

Backend de FitLife desarrollado con Node.js, Express y MongoDB para gestión de autenticación y datos de usuarios.

## Tabla de Contenidos
- Requisitos Previos
- Instalación
- Configuración
- Ejecución
- Estructura del Proyecto
- API Endpoints
- Tecnologías Utilizadas
- Variables de Entorno

## Requisitos Previos
- Node.js (versión 16 o superior)
- npm o yarn
- MongoDB Atlas account o instancia local de MongoDB

## Instalación

Instalar las dependencias del proyecto:

npm install


Instalar Mongoose (si no se instaló automáticamente):

npm install mongoose


## Configuración

Crear un archivo .env en la raíz del proyecto con las siguientes variables:

PORT=8080
MONGO_URI=tu_string_de_conexion_mongodb
JWT_SECRET=tu_secreto_jwt


## Ejecución

**Modo Desarrollo** con nodemon para reinicio automático:

npm run dev


**Modo Producción:**

npm start


El servidor estará disponible en http://localhost:8080
