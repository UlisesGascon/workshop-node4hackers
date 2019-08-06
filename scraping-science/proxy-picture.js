const express = require('express');
const got = require('got');
const jsdom = require("jsdom");
const fs = require('fs')
const { JSDOM } = jsdom;
const app = express()
const port = 3000
const path = require('path');
const puppeteer = require('puppeteer');

const generateImg = async (url,imgName) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({path: imgName});
  await browser.close();
};


app.get('/', function (req, res) {
    res.send('Hello World!')
})


app.get('/pictures', function (req, res) {
    /* 
    - http://127.0.0.1:3000/pictures?url=hackamdrid.org
    */
    const url = req.query.url
    const selector = req.query.selector || "img"
    if(!url) {
        return res.status(666).send("Me faltan datos!")
    }
    got(url)
        .then((response) => {
                const dom = new JSDOM(response.body);
                const urls = (Array.from(dom.window.document.querySelectorAll(selector))
                    .map(image => image.src))
                res.json({pictures: urls, url})
            })
        .catch(err => res.status(500).send(err))
})

app.get('/captura', function(req, res) {
    let url = req.query.url
    if(!url) {
        return res.status(666).send("Me faltan datos!")
    }
    url=url.startsWith('http://') || url.startsWith('https://')?url:'https://'+url;
    let imgName = 'screenshot.png'
    let imgPath= path.join(__dirname,imgName)
    
    generateImg(url,imgName)
        .then(raw => res.sendFile(imgPath))
        .catch(err => {
            console.log(err);
            res.status(666).send(err)
            })

})

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})
