// Importar Express y el controlador
const express = require('express');
const { mainController } = require('../controllers/mainController');

// Crear una instancia de Router
const router = express.Router();

// Configurar las rutas
router.get('/', mainController);
router.post('/', mainController); 
router.put('/', mainController);
router.delete('/', mainController);

module.exports = router;
