const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
app.get('/',(req,res)=>{
 res.send("hola soy una nueva app con nodemon")
});

app.listen(PORT, ()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
})