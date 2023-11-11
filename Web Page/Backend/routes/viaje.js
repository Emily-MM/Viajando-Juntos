const router = require("express").Router();
const Viajes = require("../models/Viajes");
const User = require("../models/User");


// Crear un nuevo booking de hotel
router.post("/", async (req, res) => {
    const newViajes = new Viajes(req.body);
    try {
      const savedViajes = await newViajes.save();
      res.status(200).json(savedViajes);
    } catch (err) {
      res.status(500).json(err);
    }
});
  
  // Obtener booking de hotel
  router.get("/:id", async (req, res) => {
    try {
      const viaje = await Viajes.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // Eliminar booking por su ID
  router.delete("/:id", async (req, res) => {
    try {
      await Viajes.findByIdAndDelete(req.params.id);
      res.status(200).json("Comment has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
