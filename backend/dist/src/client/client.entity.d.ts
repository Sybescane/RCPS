import { Subscribe } from "src/subscribe/subscribe.entity";
import { Trainer } from "src/trainers/trainers.entity";
export declare class Client {
    id: number;
    fullname: string;
    age: number;
    isSubscribe: boolean;
    trainers: Trainer[];
    subcribes: Subscribe[];
}
