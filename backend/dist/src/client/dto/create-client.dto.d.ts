import { Client } from "../client.entity";
declare const CreateClientDto_base: import("@nestjs/common").Type<Pick<Client, "password" | "fullName" | "email" | "age">>;
export declare class CreateClientDto extends CreateClientDto_base {
}
export {};
