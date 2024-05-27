import { ApiProperty } from "@nestjs/swagger";
import { Decimal } from "@prisma/client/runtime/library";
import { IsDecimal, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsUrl, Matches, NotEquals } from "class-validator";

export class ProductDTO {

    @ApiProperty({
        description: "Esse campo disponibiliza o nome do produto", 
        example: "Acer Nitro 5"
    })
    @NotEquals(" ", { message: "Digite um nome para o produto" })
    @IsNotEmpty({ message: "Digite um nome para o produto" })
    productName: string;

    @ApiProperty({
        description: "Esse campo disponibiliza uma imagem (opicional) para o produto", 
        example: "http://http2.mlstatic.com/D_767204-MLB76491272819_052024-W.jpg"
    })
    @NotEquals(" ", { message: 'O link da imagem não é válido' })
    @IsUrl({}, { message: 'O link da imagem não é válido' })
    @IsOptional()
    productImage: string; 

    @ApiProperty({
        description: "Esse campo disponibiliza uma descrição do produto", 
        example: "Notebook Gamer Nitro V15 Anv15-51-57ws I5 Lx 8gb 512gb Ssd"
    })
    @NotEquals(" ", { message: 'Insira uma descrição' })
    @IsNotEmpty({ message: 'Insira uma descrição' })
    description: string; 

    @ApiProperty({
        description: "Esse campo disponibiliza o nome do vendedor", 
        example: "Jõao Cavalcanti"
    })
    @NotEquals(" ", { message: 'Insira o nome do vendedor' })
    @IsNotEmpty({ message: 'Insira o nome do vendedor' })
    sellerName: string; 

    @ApiProperty({
        description: "Esse campo disponibiliza uma endereço de email para contato", 
        example: "sucaina7924@uorak.com"
    })
    @NotEquals(" ", { message: 'Insira um endereço de email' })
    @IsNotEmpty({ message: 'Insira um endereço de email' })
    @IsEmail()
    sellerEmail: string; 
    
    @ApiProperty({
        description: "Esse campo disponibiliza um número de telefone para contato", 
        example: "(55) 91111-1111"
    })
    @NotEquals(" ", { message: 'Insira um número de telefone' })
    @IsOptional()
    @Matches(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, { message: 'Telefone deve estar no formato (XX) XXXXX-XXXX ou (XX) XXXX-XXXX' })
    sellerCellphone: string; 

    @ApiProperty({
        description: "Esse campo disponibiliza o preço do produto", 
        example: "3000.00"
    })
    @IsNotEmpty()
    @IsNumber({}, { message: 'O preço deve ser um número válido' })
    @IsPositive({ message: 'O preço deve ser um número positivo' })
    price: number

}