import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import {ProductDTO} from './product.dto'
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Products")
@Controller('products')
export class NotebookController {

    constructor(private readonly productService: ProductService) {}

    @Post('create')
    createProduct(@Body() data: ProductDTO) : string {

        this.productService.creatProduct(data)

        return "Item criando com sucesso!"

    }

    @Delete('delete/:id')
    deleteProduct(@Param('id') product_id: string) : string {

        this.productService.deleteProduct(product_id)

        return "Produto deletado com sucesso!"

    }

    @Put('update/:id')  
    updateProduct(@Param('id') product_id: string, @Body() data: ProductDTO): string {
      this.productService.updateProduct(product_id, data);
      return "Produto atualizado com sucesso!";
    }

    @Get('storage')
    getProductsStorage() {

        return this.productService.getAllproducts();

    }

    @Get('search')
    searchProducts(@Query('productName') productName?: string, @Query('sellerName') sellerName?: string) {

        return this.productService.SearchProduct(productName, sellerName);

    }

}