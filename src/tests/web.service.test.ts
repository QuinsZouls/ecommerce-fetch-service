import WebService from '@/services/web.service';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 1500));
});

describe('Testing Web Service', () => {
  describe('[POST] /items', () => {
    it('response should contain 12 products', async () => {
      const TARGET = 'https://www.tiendasjumbo.co/supermercado/frutas-y-verduras';
      const webService = new WebService();
      const items = await webService.getItemsList(TARGET);
      expect(items.length).toBe(12);
    }, 50000);
  });
});
