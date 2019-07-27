
//import http from 'http';
const http = require('http');

const port = 3000;
const ip = "127.0.0.1";
const msg = JSON.stringify({msg: 'Hola a todos, ahora usando HTTP'});


http.createServer()
.on('request', (req, res) => {
    //console.log(req.headers)
  res.writeHead(666, {'Content-Type': 'application/json'});
  res.end(msg);
})
.on('request', (req, res) => {
    console.log(req.headers)
})
.listen(port, ip);
console.log(`Server running at http://${ip}:${port}/`);