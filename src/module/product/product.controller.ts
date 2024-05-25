import { Body, Controller, Get, Post } from '@nestjs/common';
import { NotebookService } from './product.service';
import {ProductDTO} from './product.dto'

@Controller()
export class NotebookController {

    constructor(private readonly noteService: NotebookService) {}

    @Post('create')
    createNotebook(@Body() data: ProductDTO) : string {

        this.noteService.creatProduct(data)

        return "Item criando com sucesso"

    }


    

}