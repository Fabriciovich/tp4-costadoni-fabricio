// Importar las dependencias
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

// Crear una instancia de Express
const app = express();

// Configurar middlewares
app.use(helmet()); // Middleware para configurar cabeceras de seguridad
app.use(cors()); // Middleware para permitir solicitudes de diferentes dominios
app.use(morgan('combined')); // Middleware para el registro de solicitudes HTTP
app.use(express.json()); // Middleware para analizar el cuerpo de las solicitudes como JSON

// Importar las rutas desde el directorio 'routes'
const routes = require('./routes');

// Configurar las rutas
app.use('/', routes);

// Configurar el puerto de escucha
const port = 6000;

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
