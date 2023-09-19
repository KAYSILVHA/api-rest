const express = require('express');
const rotas = express();


rotas.get('/', (req, res)=>{
  res.send("Tudo ok");
});



module.exports = rotas;