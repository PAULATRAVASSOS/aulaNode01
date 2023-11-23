const express =require('express')
const app = express()
const path = require('path')

//app.get('/', (req, res) => {
 //    res.send("Olá mundo")
//})

//app.get('/',(req, res) => {
//     res.json({
 //         nome: "Paula",
  //        sobrenome: "Travassos"
 //    })
//})

app.get('/ws/69047232/json', (req, res) => {
     res.json({
          cep: "69047232",
          logradouro: "Rua Madalena Mota",
          complemento: "",
          bairro: "Redenção",
          localidade: "Manaus",
          UF: "AM",
          ibge: "1302603",
          gia: "",
          ddd: "92",
          siafi: "0255"
     })
})

app.get('/imagens', (req, res) => {
     res.send("Olá imagens")
})

app.get('/sobre', (req, res) => {
     res.sendFile(path.resolve('sobre.html'))
})

app.get('/perguntasfrequentes', (req, res) => {
     res.sendFile(path.resolve('perguntasfrequentes.html'))
})

app.listen(3000, () => {
     console.log('Servidor iniciado com sucesso   ')
})