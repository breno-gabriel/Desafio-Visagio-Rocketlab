import { Decimal } from "@prisma/client/runtime/library";
import { Type } from "class-transformer";
import { ArrayNotEmpty, IsArray, ValidateNested, IsString, IsOptional, IsDecimal, IsDate } from "class-validator";

// export class ProductListDTO {
//   @IsArray()
//   @ArrayNotEmpty()
//   @ValidateNested({ each: true })
//   @Type(() => ProductDTO)
//   productsList: ProductDTO[];
// }

export class ProductIdDTO {

  @IsString()
  id: string;

  @IsString()
  productName: string;

  @IsOptional()
  @IsString()
  productImage: string | null;

  @IsString()
  description: string;

  @IsString()
  sellerName: string;

  @IsString()
  sellerEmail: string;

  @IsString()
  sellerCellphone: string;

  // @Type(() => Decimal)
  price: string;

  @Type(() => Date)
  creatAt: Date;
}