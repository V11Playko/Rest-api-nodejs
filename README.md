# Sistema de Gestión de Usuarios y Publicaciones de Blog
Este proyecto es un sistema backend robusto para gestionar usuarios, roles, permisos y publicaciones de blog. Está construido con Node.js, Express y MongoDB, utilizando TypeScript para garantizar seguridad en los tipos y mejorar la experiencia del desarrollador.

## Tutorial de YouTube
Este proyecto fue creado como parte de un tutorial en YouTube. Para obtener una guía detallada del proyecto y aprender cómo construirlo paso a paso, consulta nuestro video:
[Ver el tutorial en YouTube](https://www.youtube.com/playlist?list=PLoOnCUvhzJYPbtVpYCqP98DoN0pKKImQo)  
[![Crea una API Rest Con Node JS, Typescript y Express](https://img.youtube.com/vi/jMNzE_QCrd8/maxresdefault.jpg)](https://youtu.be/PLoOnCUvhzJYPbtVpYCqP98DoN0pKKImQo "Typescript Generics | Aprende a como usar los Tipos Genéricos en Typescript")  
¡No olvides dar like, suscribirte y dejar un comentario si encuentras útil el tutorial!

## Características
- Autenticación y autorización de usuarios
- Control de acceso basado en roles (RBAC)
- Gestión de usuarios (operaciones CRUD)
- Gestión de publicaciones de blog (operaciones CRUD)
- Middleware personalizado para autenticación y permisos basados en roles
- Integración con MongoDB para persistencia de datos
- Uso de TypeScript para una verificación de tipos mejorada y mayor calidad de código

## Tecnologías utilizadas
- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose (ODM)
- JSON Web Tokens (JWT) para autenticación

## Estructura del proyecto
El proyecto está organizado en varios directorios clave:
- `src/`: Contiene el código fuente en TypeScript
  - `controllers/`: Maneja el procesamiento de solicitudes y la generación de respuestas
  - `middlewares/`: Middleware personalizado para autenticación y permisos
  - `models/`: Modelos de Mongoose para interacción con la base de datos
  - `repositories/`: Capa de acceso a datos para operaciones en la base de datos
  - `routes/`: Definiciones de rutas API
  - `services/`: Capa de lógica de negocio
  - `types/`: Definiciones de tipos de TypeScript
- `dist/`: Código JavaScript compilado
- `@types/`: Definiciones de tipos personalizados para bibliotecas externas

## Comenzando
### Requisitos previos
- Node.js (se recomienda la versión 14 o superior)
- MongoDB

### Instalación
1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura tus variables de entorno (crea un archivo `.env` en el directorio raíz):
   ```env
   MONGODB_URI=tu_cadena_de_conexión_a_mongodb
   JWT_SECRET=tu_secreto_jwt
   ```
4. Compila el código TypeScript:
   ```bash
   npm run build
   ```
5. Inicia el servidor:
   ```bash
   npm start
   ```

## Uso
La API proporciona endpoints para la gestión de usuarios, autenticación, roles y operaciones en publicaciones de blog. Puedes usar herramientas como Postman o los archivos HTTP proporcionados (`auth.http`, `users.http`, `roles.http`, `posts.http`) para interactuar con la API.

### Endpoints clave
- Autenticación: `/api/auth/login`, `/api/auth/register`
- Usuarios: `/api/users`
- Roles: `/api/roles`
- Publicaciones: `/api/posts`

Consulta los archivos de rutas para obtener una lista completa de los endpoints disponibles y sus funcionalidades.

## Desarrollo
Para el desarrollo, puedes usar los siguientes scripts de npm:
- `npm run dev`: Inicia el servidor de desarrollo con recarga en caliente
- `npm run build`: Compila el código TypeScript a JavaScript
- `npm start`: Inicia el servidor en modo producción

## Contribuciones
¡Las contribuciones son bienvenidas! No dudes en enviar un Pull Request.
1. Haz un fork del proyecto
2. Crea una rama para tu funcionalidad (`git checkout -b feature/FuncionalidadAsombrosa`)
3. Realiza tus cambios (`git commit -m 'Añadir FuncionalidadAsombrosa'`)
4. Sube los cambios a tu rama (`git push origin feature/FuncionalidadAsombrosa`)
5. Abre un Pull Request

## Licencia
Este proyecto está licenciado bajo la Licencia MIT.

## Agradecimientos
- A Express.js por proporcionar un marco sólido para aplicaciones web
- A MongoDB por el almacenamiento eficiente de datos
- A TypeScript por mejorar la calidad del código y la experiencia del desarrollador
