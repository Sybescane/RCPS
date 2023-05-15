import { Subscribe } from './subscribe.entity';
import { Repository } from 'typeorm';
import { Client } from 'src/client/client.entity';
import { CreateSubscribeDto } from './dto/create-subscribe.dto';
export declare class SubscribesService {
    private readonly subscribeRepository;
    private readonly clientRepository;
    constructor(subscribeRepository: Repository<Subscribe>, clientRepository: Repository<Client>);
    create(subscribeDto: CreateSubscribeDto): Promise<Subscribe>;
    findOne(id: number): Promise<Subscribe>;
    findAll(): Promise<Subscribe[]>;
    update(id: number, updatedSubscribe: Subscribe): Promise<Subscribe>;
    remove(id: number): void;
}
