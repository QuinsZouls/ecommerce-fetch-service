import { HttpException } from '@/exceptions/HttpException';
import WebService from '@/services/web.service';
import { NextFunction, Request, Response } from 'express';

class IndexController {
  private webService = new WebService();
  public healthCheck = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  };
  public getItems = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { url } = req.body;
      if (!url) {
        throw new HttpException(400, 'url is required');
      }
      const products = await this.webService.getItemsList(url);

      res.status(200).json({
        url,
        products,
      });
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;
