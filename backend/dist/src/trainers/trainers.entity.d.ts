import { Client } from "src/client/client.entity";
export declare class Trainer {
    id: number;
    fullName: string;
    profile: string;
    experience: number;
    clients: Client[];
}
