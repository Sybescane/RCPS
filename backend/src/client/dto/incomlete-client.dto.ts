import { ApiProperty } from "@nestjs/swagger";

export class IncompleteClientDto{
   @ApiProperty({example: '1', description: "Уникальный идентификатор"})
   id: number;
   
   @ApiProperty({example: 'Иванов Иван Иванович', description: "ФИО"})
   fullname: string;

   @ApiProperty({example: '23', description: "Возраст"})
   age: number;
}