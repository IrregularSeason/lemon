import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('get')
  async getProducts() {
    return this.productsService.getProducts();
  }

  @Post('add')
  async addProduct(@Body() body: Product) {
    return this.productsService.addProduct(body);
  }

  @Post('remove')
  async removeProduct(@Body() body) {
    const { id } = body;
    return this.productsService.removeProduct(id);
  }
}
