const express = require('express');
const bodyparser = require('body-parser');
const cors = require("cors");

const app = express();
app.use(bodyparser.json());
app.use(cors());

const PORT = process.env.PORT || 3000;
var server = app.listen(PORT, () => {
    console.log(`server running on port 3000`)
})
const usuarioCorrecto = "usuario";
const contraseñaCorrecta = "12345678";


app.post("/login", async (req, res) => {
    //console.log("login");
    if(req.body.user == usuarioCorrecto && req.body.password == contraseñaCorrecta){
        //console.log("true");
        res.send({data: true});
    }else{
        //console.log("false");
        res.send({data: false});
    }
});