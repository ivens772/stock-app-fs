const express = require('express');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 4000;
app.get('/',(req,res)=>{
 res.send("hola soy una nueva app")
});

app.listen(PORT, ()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
})