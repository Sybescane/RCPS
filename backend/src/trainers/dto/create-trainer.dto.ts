import { ApiProperty, PickType } from "@nestjs/swagger";
import { Trainer } from "../trainers.entity";

export class CreateTrainerDto extends PickType(Trainer, ['fullName', 'profile', 'experience'] as const) {

   @ApiProperty({example: [], description: 'Список идентификаторов клиентов', type: [String]}) 
   clients: string[];
}