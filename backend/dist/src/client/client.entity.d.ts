import { Subscribe } from "src/subscribe/subscribe.entity";
import { Trainer } from "src/trainers/trainers.entity";
export declare class Client {
    id: number;
    email: string;
    password: string;
    fullName: string;
    age: number;
    createdAt: Date;
    updatedAt: Date;
    trainers: Trainer[];
    subscribes: Subscribe[];
}
