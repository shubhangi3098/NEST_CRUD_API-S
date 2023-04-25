import { BadRequestException, Get, Injectable, NotFoundException, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import mongoose from 'mongoose';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel(Product.name)
        private productModel: mongoose.Model<Product>
    ) { }

    //get all products
    async findAll(): Promise<Product[]> {
        const products = await this.productModel.find();
        return products;
    }

    //post request for products
    async create(product: Product): Promise<Product> {
        const res = await this.productModel.create(product);
        return res;
    }

    // get product by id

    async findById(id: string): Promise<Product> {
        //validation for invalid ID entered
        const isValid = mongoose.isValidObjectId(id)
        if (!isValid) 
        {
            throw new BadRequestException('Please Enter Correct ID.')
        }
 
        const product = await this.productModel.findById(id);

        if (!product) {
            throw new NotFoundException('Product not Found!')
        }

        return product;
    }

    //update product by id
    async updateById(id: string, product: Product): Promise<Product> {
        return await this.productModel.findByIdAndUpdate(id, product, {
            new: true,
            runValidators: true
        });

    }

    // delete product by id
    async deleteById(id: string): Promise<Product> {
        return await this.productModel.findByIdAndDelete(id);

    }

    //get products by category
    async findAllByCategory(category: string): Promise<Product[]> {
        return this.productModel.find({category}).exec();
      }

    //get products by currency
    
      async findAllByCurrency(currency: string): Promise<Product[]> {
        return this.productModel.find({currency}).exec();
      }
    
      //delete products less than specific price
      async deleteProductsByPriceLessThan(price: number): Promise<number> {
        const result = await this.productModel.deleteMany({ price: { $lt: price } }).exec();
        return result.deletedCount;
      }

      //get sorted products according to price

      async getProductsSortedByPrice(): Promise<Product[]> {
        return this.productModel.find().sort({ price: 'asc' }).exec();
      }
      


}
