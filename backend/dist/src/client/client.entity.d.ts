import { Subscribe } from "src/subscribe/subscribe.entity";
import { Trainer } from "src/trainers/trainers.entity";
export declare class Client {
    id: number;
    fullName: string;
    age: number;
    trainers: Trainer[];
    subscribes: Subscribe[];
}
