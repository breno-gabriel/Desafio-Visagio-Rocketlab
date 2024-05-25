import { Module } from '@nestjs/common';
import { NotebookController } from './product.controller';
import { NotebookService } from './product.service';
import { PrismaService } from 'src/database/prisma.service';

@Module({
    controllers: [NotebookController],
    providers: [NotebookService, PrismaService]
})
export class NotebookModule {}
