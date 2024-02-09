import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async create(product: Product): Promise<Product> {
    const newProduct = new this.productModel(product);
    return newProduct.save();
  }

  async delete(id: string): Promise<void> {
    await this.productModel.findByIdAndDelete(id).exec();
  }
}
