import { SubscribesService } from "./subscribe.service";
import { Subscribe } from "./subscribe.entity";
import { CreateSubscribeDto } from "./dto/create-subscribe.dto";
export declare class SubscribesController {
    private readonly subscribesService;
    constructor(subscribesService: SubscribesService);
    findAll(): Promise<Subscribe[]>;
    findOne(id: string): Promise<Subscribe>;
    update(id: string, updateSubscribe: Subscribe): Promise<Subscribe>;
    create(createSubscribe: CreateSubscribeDto): Promise<Subscribe>;
    remove(id: string): void;
}
