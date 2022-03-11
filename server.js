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
//inscribirse
app.get("/signup", (req, res) => {
    res.sendFile(path.join(staticPacth, "signup.html"));
})
// 404 ruta
app.get("/404", (req, res) => {
    res.sendFile(path.join(staticPacth, "404.html"));
})

app.use((req, res) => {
    res.redirect("/404");
})


app.listen(3000, () => {
    console.log('listening on port 3000');
})