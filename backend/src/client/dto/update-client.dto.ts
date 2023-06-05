import { PickType } from "@nestjs/swagger";
import { Client } from "../client.entity";

export class UpdateClientDto extends PickType(Client, ['password', 'fullName', 'age'] as const){}