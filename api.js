const express = require('express')
const mongoose = require('mongoose')
const user = require('./user.controller')
const app = express()
const port = 3000

app.use(express.json())
mongoose.connect('mongodb+srv://Davmon09:jesus1998@cluster0.2fj43cf.mongodb.net/primerapp?retryWrites=true&w=majority')

app.get('/users', user.list)
app.post('/users', user.create)
app.get('/users/:id', user.get)
app.put('/users/:id', user.update)
app.patch('/users/:id', user.update)
app.delete('/users/:id', user.destroy)

app.use(express.static('app'))

app.get('/',(req, res) => {
    console.log(__dirname)
    res.sendFile(`${_dirname}/index.html`)
})

app.get('*', (req, res) => {
    res.status(404).send('Esta pagina no existe')
})

app.listen(port, () => {
    console.log('Arrancando la aplicación')
})