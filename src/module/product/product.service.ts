import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma, Product } from '@prisma/client';
import { error } from 'console';
import { ProductDTO } from './dto/product.dto';

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

    async getAllproducts() {

        const products = await this.prisma.product.findMany()
        
        return products

    }

    async SearchProduct(searchName: string, sellerName: string)  {

        const products = await this.prisma.product.findMany({
            where: {
                productName: searchName,
                sellerName: sellerName
            },
          })

        return products

    }

}