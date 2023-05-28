import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class CreateClientDto{

   @IsNotEmpty({message: 'Имя не должно быть пустым'})
   @IsString({message: 'Имя должно быть строкой'})
   @MinLength(5, {message: 'Минимальная длина имени - 5'})
   @ApiProperty({example: 'Иванов Иван Иванович', description: "ФИО"})
   fullName: string;

   @IsNumber()
   @IsNotEmpty()
   @ApiProperty({example: '23', description: "Возраст"})
   age: number;


   @ApiProperty({examples: [1,2], description: 'Список идентификаторов подписок'})
   subscribes: number[];

   @ApiProperty({examples: [1,2], description: 'Список идентификаторов тренеров'}) 
   trainers: number[];  
}