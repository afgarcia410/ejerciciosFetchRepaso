const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
require('dotenv').config();
var path = require('path');

app.use(express.json());

const userCorrect = "usuario";
const passwordCorrect = "12345678";

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

function autentificarToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.TOKEN_SECRET, (err => {
        if (err) return res.sendStatus(403);

        next();
    }));
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});

app.get('/auth', autentificarToken, async (req, res) => {
    res.send({data: true});
});

app.post("/login", async (req, res) => {
    // Creamos el token en el login
    
    if(req.body.user == userCorrect && req.body.password == passwordCorrect){
        console.log("entra");
        const token = jwt.sign({
            user: req.body.user,
            password: req.body.password,
        }, process.env.TOKEN_SECRET);
        res.header('auth-token', token).json({
            error: null,
            data: { token }
        });
    }else{
        res.send({data: false});
    
    }
});