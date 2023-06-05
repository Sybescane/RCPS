import { ApiProperty, PickType } from "@nestjs/swagger";
import { Subscribe } from "../subscribe.entity";

export class CreateSubscribeDto extends PickType(Subscribe, ['name', 'description', 'cost'] as const){}