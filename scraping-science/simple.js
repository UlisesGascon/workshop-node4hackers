const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://hackmadrid.org');
  await page.screenshot({path: 'hackmadrid.png'});

//Array.from(document.querySelectorAll("img")).map(img => img.src)

  const photos = await page.evaluate(() => {
    const images = Array.from(document.querySelectorAll('.image > img'));
    return images.map(img => img.src);
  })

  console.log('photos:', photos);

  await browser.close();
})();