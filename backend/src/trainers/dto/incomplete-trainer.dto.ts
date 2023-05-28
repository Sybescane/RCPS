import { ApiProduces, ApiProperty } from "@nestjs/swagger";

export class IncompleteTrainerDto{
   @ApiProperty({example: '1', description: "Уникальный идентификатор"})
   id: number;

   @ApiProperty({example: 'Иванов Иван Иванович', description: "ФИО"})
   fullName: string;

   @ApiProperty({example: 'Бодибилдинг', description: "Специализация"})
   profile: string;
}