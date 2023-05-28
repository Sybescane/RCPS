import { PickType } from "@nestjs/swagger";
import { Client } from "../client.entity";

export class IncompleteClientDto extends PickType(Client, ['fullName', 'age'] as const){}