const low = require('lowdb')
const got = require('got');

const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

const express = require('express');
const app = express()
const port = 3000

db.defaults({ raw: {}, node_ips: [], exit: []}).write()

function getData() {
    const url = "https://onionoo.torproject.org/details"
    return got(url)
        .then(response => {
            const data = JSON.parse(response.body);
            db.set('raw', data).write()
            const ips = data.relays.map(relay => relay.or_addresses).reduce((a, p) => a.concat(p));
            db.set('node_ips', ips).write()

        })    
}

function getIps () {
    return db.get('node_ips').value()
}

function checkIp (ip) {
    const ips = db.get('node_ips').value()
    return ips.includes(ip)
}

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/tor-nodes', function(req, res) {
    res.json(getIps())
})

app.get('/check-ip/:ip', function (req, res) {
    const ip = req.params.ip;
    res.json({ip, isNode: checkIp(ip)})
})

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})

//CRON
setInterval(getData, 50000)