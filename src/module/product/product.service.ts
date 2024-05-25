import { Injectable } from '@nestjs/common';
import {ProductDTO} from './product.dto'
import { PrismaService } from 'src/database/prisma.service';
import { Prisma, Product } from '@prisma/client';
import { error } from 'console';

@Injectable()
export class ProductService {

    constructor(private prisma: PrismaService) {}

    async creatProduct(data: ProductDTO) {

        const createdProduct = await this.prisma.product.create({data})

        return createdProduct

    }
    
    async deleteProduct(product_id: string) {


        const deletedProduct = await this.prisma.product.delete({
            where : {
                id: product_id
            }
        })

        return deletedProduct

    }

    async updateProduct(product_id: string, dataProduct : ProductDTO) {


        const updatedProduct = await this.prisma.product.update({
            where: {
                id: product_id
            },
            data:dataProduct
        })

        return updatedProduct

    }

}