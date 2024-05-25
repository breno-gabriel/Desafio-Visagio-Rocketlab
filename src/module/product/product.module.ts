import { Module } from '@nestjs/common';
import { NotebookController } from './product.controller';
import { ProductService } from './product.service';
import { PrismaService } from 'src/database/prisma.service';

@Module({
    controllers: [NotebookController],
    providers: [ProductService, PrismaService]
})
export class NotebookModule {}
