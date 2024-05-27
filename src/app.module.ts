import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotebookModule } from './module/product/product.module';
import { UserModule } from './module/users/user.module';


@Module({
  imports: [NotebookModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
