import { ClientService } from './client.service';
import { Client } from "./client.entity";
import { IncompleteClientDto } from './dto/incomplete-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
export declare class ClientsController {
    private readonly clientsService;
    constructor(clientsService: ClientService);
    findAll(): Promise<Client[]>;
    findIncomplete(): Promise<IncompleteClientDto[]>;
    findOne(email: string): Promise<Client>;
    update(email: string, updateClient: UpdateClientDto): Promise<Client>;
    addSubcribe(email: string, idSub: number): Promise<Client>;
    delSubcribe(email: string, idSub: number): Promise<Client>;
    addTrainer(email: string, idTrainer: number): Promise<Client>;
    delTrainer(email: string, idSub: number): Promise<Client>;
    remove(email: string): void;
}
