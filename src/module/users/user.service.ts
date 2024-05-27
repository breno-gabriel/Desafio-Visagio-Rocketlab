import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/database/prisma.service';
// import { ProductListDTO } from './dto/product-list.dto';
import { Decimal } from '@prisma/client/runtime/library';
import { ProductIdDTO } from './dto/product-list.dto';

@Injectable()
export class UserService {

  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {

    const user = await this.prisma.user.create({data: createUserDto}); 

    return user

  }


  async finishingBuying(productList: ProductIdDTO[]) {
    let totalprice = 0;
    
    productList.forEach(product => {
      totalprice += parseFloat(product.price); 
  
      this.prisma.product.delete({
        where: {
          id: product.id
        }
      });

    });
  
    return totalprice; 
  }
  

  // async login(loginUserDTO: LoginUserDto) {

  //   const user = await this.

  // }

  // findAll() {
  //   return `This action returns all user`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
