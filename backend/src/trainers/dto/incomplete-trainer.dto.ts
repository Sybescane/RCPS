import { ApiProduces, ApiProperty, PickType } from "@nestjs/swagger";
import { Trainer } from "../trainers.entity";

export class IncompleteTrainerDto extends PickType(Trainer, ['fullName', 'profile'] as const) {}