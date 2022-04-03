//importar paquetes
const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');

//administracion de firebase
let serviceAccount = require("./ecommerce-website-f4998-firebase-adminsdk-x72yr-6c47f8ffc9.json");
const { hash } = require('bcrypt');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();
//declare la ruta estatica
let staticPacth = path.join(__dirname, "public");
//inicializamos express.js
const app = express();
//middlewares
app.use(express.static(staticPacth));
app.use(express.json());
//routes
//home route
app.get("/", (req, res) => {
    res.sendFile(path.join(staticPacth, "index.html"));
})
//inscribirse
app.get("/signup", (req, res) => {
    res.sendFile(path.join(staticPacth, "signup.html"));
})
app.post('/signup', (req, res) => {
    let { name, email, password, number, tac, notification } = req.body;
    //validar formulario
    if(name.length < 3) {
        return res.json({'alert': 'name must be 3 letters long'});
    }else if(!email.length) {
        return res.json({'alert': 'enter your email'});
    }else if(password.length < 8) {
        return res.json({'alert': 'password should be 8 letters long'});
    }else if(!number.length) {
        return res.json({'alert': 'enter your phone number'});
    }else if(!Number(number) || number.length < 10) {
        return res.json({'alert': 'invalid number, please enter valid one'});
    }else if(!tac) {
        return res.json({'alert': 'you must agree to our terms and conditions'});
    }
        //db tienda
    db.collection('users').doc(email).get()
    .then(user => {
        if (user.exists) {
            return res.json({'alert':'email already exists'});
        }else{
            //encrypt la contraseña antes de guardarlo
            bcrypt.genSalt(10,(err, salt) => {
                bcrypt.hash(password, salt, (error, hash) => {
                    req.body.password = hash;
                    db.collection('users').doc(email).set(req.body)
                    .then(data => {
                        res.json({
                            name: req.body.name,
                            email: req.body.email,
                            seller: req.body.seller,
                        })
                    })
                })
            })
        }
    })
})
// login ruta
app.get('/login', (req, res) => {
    res.sendFile(path.join(staticPacth, "login.html"));
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