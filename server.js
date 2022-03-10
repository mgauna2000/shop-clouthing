//importar paquetes
const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');
//declare la ruta estatica
let staticPacth = path.join(__dirname, "public");
//inicializamos express.js
const app = express();
//middlewares
app.use(express.static(staticPacth));
//routes
//home route
app.get("/", (req, res) => {
    res.sendFile(path.join(staticPacth, "index.html"));
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})