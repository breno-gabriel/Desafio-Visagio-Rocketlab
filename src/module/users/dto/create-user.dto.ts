import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsEmail, Matches, IsNotEmpty, MinLength, MaxLength } from "class-validator";

export class CreateUserDto {
  
    @ApiProperty({
        description: "Esse campo contém o primeiro nome do usuário", 
        example: "Breno"
    })
    @IsNotEmpty()
    FirstName: string;

    @IsNotEmpty()
    @ApiProperty({
        description: "Esse campo contém o último nome do usuário", 
        example: "Lima"
    })
    LastName: string;

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
    @IsEmail()
    @ApiProperty({
        description: "Esse campo contém o email do usuário", 
        example: "sudoko3212@outlook.com"
    })
    email: string;

    @IsOptional()
    @Matches(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, { message: 'Telefone deve estar no formato (XX) XXXXX-XXXX ou (XX) XXXX-XXXX' })
    @ApiProperty({
        description: "Esse campo contém o número de telefone do usuário", 
        example: "(81) 92222-2222"
    })
    cellPhone: string;

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
