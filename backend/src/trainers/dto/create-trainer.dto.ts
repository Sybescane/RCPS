import { ApiProperty } from "@nestjs/swagger";

export class CreateTrainerDto{
   @ApiProperty({example: 'Иванов Иван Иванович', description: "ФИО"})
   fullname: string;

   @ApiProperty({example: 'Бодибилдинг', description: "Специализация"})
   profile: string;

   @ApiProperty({example: '4', description: "Стаж работы"})
   experience: number;

   @ApiProperty({examples: [1,2], description: 'Список идентификаторов клиентов'}) 
   clients: number[];
}