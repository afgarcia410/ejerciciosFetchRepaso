const express = require('express');
const bodyparser = require('body-parser');
const cors = require("cors");
var path = require('path');

const app = express();
app.use(bodyparser.json());
app.use(cors());

const PORT = process.env.PORT || 3000;
var server = app.listen(PORT, () => {
    console.log(`Server running on port 3000`)
})
const usuarioCorrecto = "usuario";
const contraseñaCorrecta = "12345678";

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post("/login", async (req, res) => {
    if(req.body.user == usuarioCorrecto && req.body.password == contraseñaCorrecta){
        res.send({data: true});
    }else{
        res.send({data: false});
    }
});