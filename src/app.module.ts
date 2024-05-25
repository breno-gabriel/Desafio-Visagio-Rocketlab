import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotebookModule } from './module/product/product.module';


@Module({
  imports: [NotebookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
