import { ApiProperty, PartialType, PickType } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString, Max, Min, MinLength } from "class-validator";
import { Client } from "../client.entity";
export class CreateClientDto extends PickType(Client, ['email', 'password','fullName', 'age'] as const){

   // @ApiProperty({example: [], type: [Number],description: 'Список идентификаторов подписок'})
   // subscribes: number[];

   // @ApiProperty({example: [], type: [Number],description: 'Список идентификаторов тренеров'}) 
   // trainers: number[];  
   
}