import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { Product } from './product.entity';
import { CreateProductDto } from './dtos/input/create.product.dto';
import { User } from 'src/user/user.entity';
@Injectable()
export class ProductsService {
    constructor(private readonly productsRepository: ProductsRepository) {}

    async create(createProductRequest: CreateProductDto, user: User): Promise<Product> {
        return await this.productsRepository.save({ ...createProductRequest, user });
    }

    async find(): Promise<Product[]> {
        return await this.productsRepository.find();
    }

    async findOne(id: string): Promise<Product> {
        const product = await this.productsRepository.findOne({ where: { id } });
        if (!product) {
            throw new NotFoundException('Product not found.');
        }
        return product;
    }

    async delete(id: string, user: User): Promise<void> {
        const product = await this.productsRepository.findOne({ where: { id, user } });
        if (!product) {
            throw new NotFoundException('Product not found.');
        }
        await this.productsRepository.delete(product);
    }
}
