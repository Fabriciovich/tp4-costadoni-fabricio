
  function rutaGet (req, res) {
    res.status(200).send("peticion get")
  }
  function rutaPost (req, res) {
    res.status(200).send("peticion post")
  }
  function rutaPut (req, res) {
    res.status(200).send("peticion put")
  }
  function rutaDelete (req, res) {
    res.status(200).send("peticion delete")
  }

  module.exports = {
    rutaGet,
    rutaPost,
    rutaPut,
    rutaDelete
  }
  
  