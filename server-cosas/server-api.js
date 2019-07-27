const express = require('express');
const got = require('got');
const app = express()
const port = 3000

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/api', function (req, res) {
    function allRequestWeather (list) {
        return Promise.all(list.map(station => got(`http://airemad.com/api/v1/weather/${station.id}`)))
    }

    function transformResponse (responses) {
        return responses.map(response => JSON.parse(response.body))
    }

    const url =  "http://airemad.com/api/v1/station"
    got(url)
        .then(response => allRequestWeather(JSON.parse(response.body)))
        .then(transformResponse)
        .then((data) => res.json(data))
        .catch(err => res.status(500).send(err))
})

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})

// http://airemad.com/api/v1/station