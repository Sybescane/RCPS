import { Client } from './client.entity';
import { Repository } from "typeorm";
import { Trainer } from "src/trainers/trainers.entity";
import { Subscribe } from "src/subscribe/subscribe.entity";
import { IncompleteClientDto } from './dto/incomplete-client.dto';
import { UpdateClientDto } from "./dto/update-client.dto";
export declare class ClientService {
    private readonly clientRepository;
    private readonly trainerRepository;
    private readonly subscribeRepository;
    constructor(clientRepository: Repository<Client>, trainerRepository: Repository<Trainer>, subscribeRepository: Repository<Subscribe>);
    findOne(email: string): Promise<Client>;
    findAll(): Promise<Client[]>;
    update(email: string, updatedClient: UpdateClientDto): Promise<Client>;
    remove(email: string): void;
    findIncomplete(): Promise<IncompleteClientDto[]>;
    addSubscribe(email: string, idSubscribe: number): Promise<Client>;
    delSubscribe(email: string, idSub: number): Promise<Client>;
    addTrainer(email: string, idTrainer: number): Promise<Client>;
    delTrainer(email: string, idTrainer: number): Promise<Client>;
}
