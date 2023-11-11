const Lugares = require("../models/Lugares");
const router = require("express").Router();
const User = require("../models/User");

// Crear un nuevo booking de hotel
router.post("/", async (req, res) => {
    const newLugares = new Lugares(req.body);
    try {
      const savedLugares = await newLugares.save();
      res.status(200).json(savedLugares);
    } catch (err) {
      res.status(500).json(err);
    }
});
  
  // Obtener booking de hotel
  router.get("/:id", async (req, res) => {
    try {
      const lugar = await Lugares.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // Eliminar booking por su ID
  router.delete("/:id", async (req, res) => {
    try {
      await Lugares.findByIdAndDelete(req.params.id);
      res.status(200).json("Comment has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router