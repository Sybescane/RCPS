import { ClientService } from './client.service';
import { Client } from "./client.entity";
import { CreateClientDto } from './dto/create-client.dto';
export declare class ClientsController {
    private readonly clientsService;
    constructor(clientsService: ClientService);
    findAll(): Promise<Client[]>;
    findOne(id: string): void;
    update(id: string, updateClient: Client): Promise<Client>;
    create(createClient: CreateClientDto): Promise<Client>;
    remove(id: string): void;
}
