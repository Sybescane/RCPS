import { Client } from './client.entity';
import { Repository } from "typeorm";
import { Trainer } from "src/trainers/trainers.entity";
import { Subscribe } from "src/subscribe/subscribe.entity";
import { CreateClientDto } from "./dto/create-client.dto";
import { IncompleteClientDto } from './dto/incomlete-client.dto';
export declare class ClientService {
    private readonly clientRepository;
    private readonly trainerRepository;
    private readonly subscribeRepository;
    constructor(clientRepository: Repository<Client>, trainerRepository: Repository<Trainer>, subscribeRepository: Repository<Subscribe>);
    create(clientDto: CreateClientDto): Promise<Client>;
    findOne(id: number): Promise<Client>;
    findAll(): Promise<Client[]>;
    update(id: number, updatedClient: Client): Promise<Client>;
    remove(id: number): void;
    findIncomplete(): Promise<IncompleteClientDto[]>;
}