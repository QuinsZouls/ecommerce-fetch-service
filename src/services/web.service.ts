import puppeteer, { Page } from 'puppeteer';

async function autoScroll(page: Page) {
  await page.evaluate(async () => {
    await new Promise<void>(resolve => {
      let totalHeight = 0;
      const distance = 1026;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight - window.innerHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
}
export default class WebService {
  public async getItemsList(url: string) {
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--incognito', '--disable-setuid-sandbox'] }); // for test disable the headlels mode,
    const page = await browser.newPage();
    //await page.setViewport({ width: 1800, height: 1026 });

    await page.goto(url, { waitUntil: 'load' });
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.goto(url, { waitUntil: 'networkidle0' });
    await page.goto(url, { waitUntil: 'networkidle2' });
    await autoScroll(page);
    await page.waitForSelector('#gallery-layout-container > div:nth-child(12)');
    const items = await page.evaluate(() => {
      const div = document.querySelectorAll('#gallery-layout-container > div');
      const list: any[] = [];

      div.forEach(element => {
        const productName = element.querySelector('div > h3 > span');
        const price = element.querySelector('#items-price > div > div');
        const brand = element.querySelector('section > a > article > div > div:nth-child(3) > div > span');
        if (productName != null) {
          list.push({
            name: productName.textContent,
            price: price?.textContent,
            brand: brand?.textContent,
          });
        }
      });

      return list;
    });
    browser.close();
    return items;
  }
}
