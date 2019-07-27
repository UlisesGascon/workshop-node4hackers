const express = require('express');
const tr = require('tor-request');
const got = require('got');
const app = express()
const port = 3000

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/tor-proxy', function (req, res) {
    /* 
    - http://127.0.0.1:3000/tor-proxy?url=https://check.torproject.org/
    - http://127.0.0.1:3000/tor-proxy?url=hackamdrid.org
    */
    const url = req.query.url
    if(!url) {
        return res.status(666).send("Me faltan datos!")
    }

    tr.request(url, function (err, response, body) {
        
        if (err) {
            console.log(err)
            return res.status(500).send(err)
        }

        res.send(body)
    });
})

app.get('/proxy', function (req, res) {
    /* 
    - http://127.0.0.1:3000/proxy?url=https://check.torproject.org/
    - http://127.0.0.1:3000/proxy?url=hackamdrid.org
    */
    const url = req.query.url
    if(!url) {
        return res.status(666).send("Me faltan datos!")
    }
    got(url)
        .then((response) => res.send(response.body))
        .catch(err => res.status(500).send(err))
})

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})
