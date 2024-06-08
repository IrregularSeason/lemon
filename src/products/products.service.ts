import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  protected readonly repository: Repository<Product>;
  constructor(@InjectRepository(Product) repository: Repository<Product>) {
    this.repository = repository;
  }

  async addProduct(product: Product) {
    this.repository.save(product);
  }

  async getProducts() {
    const data = await this.repository.find();
    return {
      data,
      code: 0,
    };
  }
}
