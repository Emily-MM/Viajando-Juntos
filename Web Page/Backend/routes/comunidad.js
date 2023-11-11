const Comunidades = require("../models/Comunidades");
const router = require("express").Router();
const User = require("../models/User");

// Crear un nuevo booking de hotel
router.post("/", async (req, res) => {
    const newComunidad = new Comunidades(req.body);
    try {
      const savedComunidad = await newComunidad.save();
      res.status(200).json(savedComunidad);
    } catch (err) {
      res.status(500).json(err);
    }
});
  
  // Obtener booking de hotel
  router.get("/:id", async (req, res) => {
    try {
      const comunidad = await Comunidades.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // Eliminar booking por su ID
  router.delete("/:id", async (req, res) => {
    try {
      await Comunidades.findByIdAndDelete(req.params.id);
      res.status(200).json("Comment has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports = router