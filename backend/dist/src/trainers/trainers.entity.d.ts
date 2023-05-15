import { Client } from "src/client/client.entity";
export declare class Trainer {
    id: number;
    fullname: string;
    profile: string;
    experience: number;
    clients: Client[];
}
