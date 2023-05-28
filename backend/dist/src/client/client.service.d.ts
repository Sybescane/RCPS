import { Client } from './client.entity';
import { Repository } from "typeorm";
import { Trainer } from "src/trainers/trainers.entity";
import { Subscribe } from "src/subscribe/subscribe.entity";
import { CreateClientDto } from "./dto/create-client.dto";
import { IncompleteClientDto } from './dto/incomplete-client.dto';
export declare class ClientService {
    private readonly clientRepository;
    private readonly trainerRepository;
    private readonly subscribeRepository;
    constructor(clientRepository: Repository<Client>, trainerRepository: Repository<Trainer>, subscribeRepository: Repository<Subscribe>);
    create(clientDto: CreateClientDto): Promise<Client>;
    findOne(email: string): Promise<Client>;
    findAll(): Promise<Client[]>;
    update(email: string, updatedClient: Client): Promise<Client>;
    remove(email: string): void;
    findIncomplete(): Promise<IncompleteClientDto[]>;
}
