import puppeteer from 'puppeteer';

export default class WebService {
  public async getItemsList(url: string) {
    const browser = await puppeteer.launch({ headless: true }); // for test disable the headlels mode,
    const page = await browser.newPage();
    await page.setViewport({ width: 1000, height: 926 });
    await page.goto(url, { waitUntil: 'networkidle2' });
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
    return items;
  }
}
