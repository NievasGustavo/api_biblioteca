const mongoose = require("mongoose");

require("dotenv").config({ path: "./.env" });
mongoose.connect(process.env.DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const UsuarioSchema = new mongoose.Schema(
    {
      username: String,
      password: String,
    }
  )
  
  const Usuario = mongoose.model("Usuario", UsuarioSchema);

  module.exports = Usuario;