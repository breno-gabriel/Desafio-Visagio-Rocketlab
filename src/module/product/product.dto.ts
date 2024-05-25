import { Decimal } from "@prisma/client/runtime/library";
import { IsDecimal, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsUrl, Matches, NotEquals } from "class-validator";

export class ProductDTO {

    @NotEquals(" ", { message: "Digite um nome para o produto" })
    @IsNotEmpty({ message: "Digite um nome para o produto" })
    productName: string;

    @NotEquals(" ", { message: 'O link da imagem não é válido' })
    @IsUrl({}, { message: 'O link da imagem não é válido' })
    @IsOptional()
    productImage: string; 

    @NotEquals(" ", { message: 'Insira uma descrição' })
    @IsNotEmpty({ message: 'Insira uma descrição' })
    description: string; 

    @NotEquals(" ", { message: 'Insira o nome do vendedor' })
    @IsNotEmpty({ message: 'Insira o nome do vendedor' })
    sellerName: string; 

    @NotEquals(" ", { message: 'Insira um endereço de email' })
    @IsNotEmpty({ message: 'Insira um endereço de email' })
    @IsEmail()
    sellerEmail: string; 
    
    @NotEquals(" ", { message: 'Insira um número de telefone' })
    @IsOptional()
    @Matches(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, { message: 'Telefone deve estar no formato (XX) XXXXX-XXXX ou (XX) XXXX-XXXX' })
    sellerCellphone: string; 

    @IsNotEmpty()
    @IsNumber({}, { message: 'O preço deve ser um número válido' })
    @IsPositive({ message: 'O preço deve ser um número positivo' })
    price: number

}