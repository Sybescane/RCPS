import { ApiProperty } from "@nestjs/swagger";

export class CreateClientDto{
   @ApiProperty({example: 'Иванов Иван Иванович', description: 'ФИО'})
   fullname: string;
   @ApiProperty({example:'23', description: 'Возраст'})
   age: number;
   @ApiProperty({examples: [1,2], description: 'Список идентификаторов подписок'})
   subscribes: number[];
   @ApiProperty({examples: [1,2], description: 'Список идентификаторов тренеров'}) 
   trainers: number[];  
}