import { Injectable } from '@nestjs/common';
import {ProductDTO} from './product.dto'
import { PrismaService } from 'src/database/prisma.service';
import { Prisma, Product } from '@prisma/client';

@Injectable()
export class NotebookService {

    constructor(private prisma: PrismaService) {}

    async creatProduct(data: ProductDTO) {

        const notebook = await this.prisma.product.create({data})

        return notebook

    }


}