// Controlador para las rutas principales
exports.mainController = (req, res) => {
    const method = req.method;
    res.send(`Petición ${method}`);
  };

  
  