import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './schemas/product.schema';
import { createProductDto } from './dto/create-product.dto';
import { updateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) { }

  @Get()
  async getAllProducts(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Post()
  async createProduct(@Body() product: createProductDto): Promise<Product> {
    return this.productService.create(product)
  }

  @Get(':id')
  async getProduct(@Param('id') id: string): Promise<Product> {
    return this.productService.findById(id);
  }

  @Put(':id')
  async updateProduct(@Param('id') id: string, @Body() product: updateProductDto): Promise<Product> {
    return this.productService.updateById(id, product)
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string): Promise<Product> {
    return this.productService.deleteById(id);
  }

  @Get('/category/:category')
  async getProductsByCategory(@Param('category') category: string): Promise<Product[]> {
    return this.productService.findAllByCategory(category);
  }

  @Get('/currency/:currency')
  async getProductsByCurrency(@Param('currency') currency: string): Promise<Product[]> {
    return this.productService.findAllByCurrency(currency);
  }

  @Delete('/price/:price')
  async deleteProductsByPriceLessThan(@Param('price') price: number): Promise<string> {
    const deletedCount = await this.productService.deleteProductsByPriceLessThan(price);
    return `${deletedCount} products deleted`;
  }

  @Get('/price/:asc')
  async getProductsSortedByPrice(): Promise<Product[]> {
    return this.productService.getProductsSortedByPrice();
  }

}
