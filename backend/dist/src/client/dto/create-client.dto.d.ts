import { Client } from "../client.entity";
declare const CreateClientDto_base: import("@nestjs/common").Type<Pick<Client, "password" | "email" | "fullName" | "age">>;
export declare class CreateClientDto extends CreateClientDto_base {
    subscribes: number[];
    trainers: number[];
}
export {};
