import { ClientService } from "../client.service";
export declare class ClientDtoController {
    private readonly clientService;
    constructor(clientService: ClientService);
    findIncomplete(): void;
}
