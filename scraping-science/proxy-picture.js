const express = require('express');
const got = require('got');
const jsdom = require("jsdom");
const fs = require('fs')
const { JSDOM } = jsdom;
const app = express()
const port = 3000

const puppeteer = require('puppeteer');

const generateImg = async (url) => {
  const imgPath = "hackmadrid.png"
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({path: imgPath});
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
const urls = (Array.from(dom.window.document.querySelectorAll(selector)).map(image => image.src)) ;
            res.json({pictures: urls, url})
            })
        .catch(err => res.status(500).send(err))
})


app.get('/captura', function(req, res) {
    const url = req.query.url
    if(!url) {
        return res.status(666).send("Me faltan datos!")
    }

    generateImg(url)
        .then(raw => res.sendFile(__dirname, `hackmadrid.png`))
        .catch(err => {
            console.log(err);
            res.status(666).send(err)
            })

})

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})
