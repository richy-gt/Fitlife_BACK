FitLife Backend
Backend de FitLife desarrollado con Node.js, Express y MongoDB para gestión de autenticación y datos de usuarios.
Tabla de Contenidos

Requisitos Previos
Instalación
Configuración
Ejecución
Estructura del Proyecto
API Endpoints
Tecnologías Utilizadas
Variables de Entorno

Requisitos Previos

Node.js (versión 16 o superior)
npm o yarn
MongoDB Atlas account o instancia local de MongoDB

Instalación
Instalar las dependencias del proyecto:
bashnpm install
Instalar Mongoose (si no se instaló automáticamente):
bashnpm install mongoose
Configuración
Crear un archivo .env en la raíz del proyecto con las siguientes variables:
envPORT=8080
MONGO_URI=tu_string_de_conexion_mongodb
JWT_SECRET=tu_secreto_jwt
Ejecución
Modo Desarrollo
Con nodemon para reinicio automático:
bashnpm run dev
Modo Producción
bashnpm start
```

El servidor estará disponible en `http://localhost:8080`

## Estructura del Proyecto
```
fitlife-backend/
├── config/
│   └── db.js                 # Configuración de conexión MongoDB
├── controllers/
│   └── userController.js     # Lógica de controladores de usuario
├── middleware/
│   └── authMiddleware.js     # Middleware de autenticación JWT
├── models/
│   └── User.js              # Modelo de datos de usuario
├── routes/
│   └── authRoutes.js        # Rutas de autenticación
├── .env                     # Variables de entorno (no incluido en repo)
├── .gitignore              # Archivos ignorados por Git
├── package.json            # Dependencias y scripts
└── server.js               # Punto de entrada de la aplicación
```

## API Endpoints

### Autenticación

#### Registro de Usuario
```
POST /api/users/register
Content-Type: application/json

Body:
{
  "name": "string",
  "email": "string",
  "password": "string"
}

Response:
{
  "message": "Usuario registrado exitosamente",
  "user": {
    "id": "string",
    "name": "string",
    "email": "string"
  }
}
```

#### Inicio de Sesión
```
POST /api/users/login
Content-Type: application/json

Body:
{
  "email": "string",
  "password": "string"
}

Response:
{
  "message": "Inicio de sesión exitoso",
  "user": {
    "id": "string",
    "name": "string",
    "email": "string"
  },
  "token": "string"
}
```

#### Obtener Perfil (Requiere Autenticación)
```
GET /api/users/profile
Authorization: Bearer {token}

Response:
{
  "message": "Perfil de usuario obtenido con éxito",
  "user": {
    "id": "string",
    "name": "string",
    "email": "string"
  }
}
Tecnologías Utilizadas

Node.js: Entorno de ejecución de JavaScript
Express: Framework web para Node.js
MongoDB: Base de datos NoSQL
Mongoose: ODM para MongoDB
JWT: JSON Web Tokens para autenticación
bcryptjs: Encriptación de contraseñas
CORS: Manejo de políticas de origen cruzado
dotenv: Gestión de variables de entorno

Variables de Entorno
VariableDescripciónEjemploPORTPuerto del servidor8080MONGO_URIString de conexión a MongoDBmongodb+srv://usuario:password@cluster.mongodb.net/databaseJWT_SECRETClave secreta para JWTsupersecreto123
Características de Seguridad

Contraseñas hasheadas con bcrypt
Autenticación basada en JWT
Tokens con expiración de 1 hora
Validación de datos de entrada
CORS configurado para desarrollo

Notas de Desarrollo

El servidor acepta conexiones desde cualquier origen (configurado para desarrollo)
Los tokens JWT expiran después de 1 hora
Las contraseñas se hashean con un salt de 10 rondas
MongoDB se conecta automáticamente al iniciar el servidor
