const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config()
const PORT = process.env.PORT;

//middleware
app.use(express.static(path.join(__dirname, 'public')));


mongoose.connect(`mongodb+srv://ivens772:${process.env.DB_PASSWORD}@devfs.s08zbad.mongodb.net/?retryWrites=true&w=majority`
).then(resul => {
    console.log("conexion exitosa")
})
.catch(err=>console.log(err))
 const productSchema = mongoose.Schema({
    name: {type:String, required:true},
    price: Number,
 },
 {
 timestamps: true
 })

 const Product = mongoose.model('product', productSchema,)

app.use(express.json())
app.post('/api/v1/products',(req,res)=>{
    
    const newProduct = new Product(req.body)

    newProduct.save().then(resul => {
        res.status(201).json({ok: true})
    }).catch(err => {
        console.log(err)
    })

    
});
app.use(express.json)

app.listen(PORT, ()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
})
