const router = require("express").Router();
const Alojamientos = require("../models/Alojamientos");


// Crear un nuevo booking de hotel
router.post("/", async (req, res) => {
    const newAlojamiento = new Alojamientos(req.body);
    try {
      const savedAlojamiento = await newAlojamiento.save();
      res.status(200).json(savedAlojamiento);
    } catch (err) {
      res.status(500).json(err);
    }
});
  
  // Obtener booking de hotel
  router.get("/:id", async (req, res) => {
    try {
      const alojamiento = await Alojamientos.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // Eliminar booking por su ID
  router.delete("/:id", async (req, res) => {
    try {
      await Alojamientos.findByIdAndDelete(req.params.id);
      res.status(200).json("Comment has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;

