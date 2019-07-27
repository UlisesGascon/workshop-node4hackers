const express = require('express');
const app = express()
const port = 3000

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/name', function (req, res) {
    res.send(`Hola ${req.query.nombre}!`)
})

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})