import { IsString } from "class-validator";

export class idValidation {

    @IsString({ message: 'O ID deve ser uma string' })
    id: string;

}
