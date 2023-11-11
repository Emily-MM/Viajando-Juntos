const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require("mongoose");
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const commentRoutes = require("./routes/comments");
const alojamientoRoutes = require("./routes/alojamiento");
const viajeRoutes = require("./routes/viaje");
const comunidadRoutes = require("./routes/comunidad");
const lugarRoutes = require("./routes/lugar");
let User=require('./models/User');

app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/details", {
  useNewUrlParser: true
});


const connection = mongoose.connection;

connection.once("open", function() {
  console.log("Connection with MongoDB was successful");
});

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/comments", commentRoutes);
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);
app.use('/api/alojamiento', alojamientoRoutes);
app.use('/api/lugar', lugarRoutes);
app.use('/api/viaje', viajeRoutes);
app.use('/api/comunidad', comunidadRoutes);

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});
