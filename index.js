const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const port = process.env.PORT || 3000;

const frutas = require('./src/frutas/frutas.json')
app.get('/', (req,res) => {
    return res.status(200).json({mensagem: 'ok, funcionado!'});
  })
  
app.get('/frutas', (req,res) => {
      return res.json(frutas)
  })
  
app.get('/frutas/:nomeDaFruta', (req, res) => {
      const { nomeDaFruta } = req.params;
      const frutaEncontrada = frutas.find(fruta => fruta.nome === nomeDaFruta);
  
      if (frutaEncontrada) {
        res.json(frutaEncontrada);
      } else {
        res.status(404).json({ mensagem: 'Fruta não encontrada' });
      }
    });

app.listen(port, () => {
    console.log("Servidor está rodando")
      
})
