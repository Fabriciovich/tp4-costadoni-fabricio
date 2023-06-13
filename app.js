// Importar las dependencias
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

// Crear una instancia de Express
const app = express();

// Configurar middlewares
app.use(helmet());
app.use(cors()); 
app.use(morgan('combined')); 
app.use(express.json()); 

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
