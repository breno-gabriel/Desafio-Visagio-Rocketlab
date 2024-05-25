import { Decimal } from "@prisma/client/runtime/library";

export type ProductDTO = {

    productName: string;
    productImage: string; 
    description: string; 
    sellerName: string; 
    sellerEmail: string; 
    sellerCellphone: string; 
    price: Decimal

}