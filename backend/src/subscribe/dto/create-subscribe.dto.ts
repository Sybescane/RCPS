import { ApiProperty } from "@nestjs/swagger";

export class CreateSubscribeDto{
   @ApiProperty({example: 'Тренажерный зал', description: 'Название абонемента'}) 
   name: string;

   @ApiProperty({example: 'Абонемент включает в себя...', description: "Описание абонемента"})
   discription: string;

   @ApiProperty({example: '10000', description: "Стоимость абонемента"})
   cost: number;

   @ApiProperty({examples: [1,2], description: "Список клиентов"})
   clients: number[];
}