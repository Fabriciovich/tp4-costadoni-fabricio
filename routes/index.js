// Importar Express y el controlador
const express = require('express');
const { rutaGet, rutaPost, rutaPut, rutaDelete } = require('../controllers/mainController');

// Crear una instancia de Router
const router = express.Router();

// Configurar las rutas
router.get('/', rutaGet);
router.post('/', rutaPost); 
router.put('/', rutaPut);
router.delete('/', rutaDelete);

module.exports = router;
