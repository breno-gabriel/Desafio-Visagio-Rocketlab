import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsNotEmpty, Matches, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto  {

    @IsNotEmpty()
    @ApiProperty({
        description: "Esse campo contém o nome de usuário, devendo ter pelo menos 3 caracteres, no máximo 20 caracteres e apenas caracteres alfanuméricos", 
        example: "extremedude2024"
    })
    @MinLength(3, { message: 'O nome de usuário deve ter pelo menos 3 caracteres' })
    @MaxLength(20, { message: 'O nome de usuário não pode ter mais que 20 caracteres' })
    @Matches(/^[a-zA-Z0-9]*$/, { message: 'O nome de usuário deve conter apenas caracteres alfanuméricos' })
    userName: string;

    @IsNotEmpty()
    @ApiProperty({
        description: "Esse campo contém a senha do usuário, devendo ter deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial.", 
        example: "Password123!"
    })
    @Matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        { message: 'A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial.' }
    )
    password: string;

}
