const mongoose = require("mongoose");

require("dotenv").config({ path: "./.env" });
mongoose.connect(process.env.DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const LibroSchema = new mongoose.Schema(
  {
    titulo: String,
    autor: String,
  },
  { collection: "libros" }
);

const Libro = mongoose.model("Libro", LibroSchema);

module.exports = Libro;
