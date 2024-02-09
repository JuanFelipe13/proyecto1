import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Post()
  async create(@Body() createProductDto: Product): Promise<Product> {
    return this.productService.create(createProductDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.productService.delete(id);
  }
}
