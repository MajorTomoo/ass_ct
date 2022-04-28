/* eslint-disable linebreak-style */
const puppeteer = require('puppeteer');

test('should game begin', async () => {
  const broswer = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ['--window-size=2220,1080'],
  });
  const page = await broswer.newPage();
  await page.setViewport({
    width: 1920,
    height: 1080,
  });
  await page.goto('http://localhost:3000');
  await page.click('button#play');
});
