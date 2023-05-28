import { ClientService } from './client.service';
import { Client } from "./client.entity";
import { CreateClientDto } from './dto/create-client.dto';
import { IncompleteClientDto } from './dto/incomplete-client.dto';
export declare class ClientsController {
    private readonly clientsService;
    constructor(clientsService: ClientService);
    findAll(): Promise<Client[]>;
    findIncomplete(): Promise<IncompleteClientDto[]>;
    findOne(email: string): Promise<Client>;
    update(email: string, updateClient: Client): Promise<Client>;
    create(createClient: CreateClientDto): Promise<Client>;
    remove(email: string): void;
}
