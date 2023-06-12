# Around the U.S. Back End  

## Descripción General
- El objetivo es crear un servidor con una API y autenticación del usuario para el proyecto "Alrededor de los EE. UU.".

## Funcionalidad
- Se creó mi propio servidor con una API
- Autenticación del usuario.
- Desplega el backend en una máquina remota.
- Se utiliza el módulo path para obtener las rutas para los archivos de datos mediante el método join() para generar una ruta normalizada.
- Utiliza el módulo fs y su método integrado `readFile()` para acceder y manipular los archivos de datos JSON.
## Directories  
  
`/data` — JSON files to temporarily emulate database integration.  
  
`/routes` — routing files.  
  
All other directories are optional and may be created by the developer if necessary.   

## Rutas
- GET localhost:3000/card — responde con JSON desde el archivo cards.json
- GET localhost:3000/users — responde con JSON desde el archivo users.json
- GET localhost:3000/users/8340d0ec33270a25f2413b69 — responde con JSON desde el archivo users.json que tiene datos del usuario con un id que coincide con el identificador que se pasa a la ruta después de /users, si no se encuentra dicho identificador devuelve un JSON con el mensaje de Id del usuario no encontrado.
- Cualquier otra ruta no especificada devuelve un JSON con el mensaje de Recurso solicitado no encontrado.
  
## Running the Project  
  
`npm run start` — Inicia el servidor en localhost:3000.  
  
`npm run dev` — Inicia el servidor en localhost:3000 con hot reload.  



