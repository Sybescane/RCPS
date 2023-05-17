"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientService = void 0;
const common_1 = require("@nestjs/common");
const client_entity_1 = require("./client.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const trainers_entity_1 = require("../trainers/trainers.entity");
const subscribe_entity_1 = require("../subscribe/subscribe.entity");
const incomlete_client_dto_1 = require("./dto/incomlete-client.dto");
let ClientService = class ClientService {
    constructor(clientRepository, trainerRepository, subscribeRepository) {
        this.clientRepository = clientRepository;
        this.trainerRepository = trainerRepository;
        this.subscribeRepository = subscribeRepository;
    }
    async create(clientDto) {
        const client = this.clientRepository.create();
        client.fullname = clientDto.fullname;
        client.age = clientDto.age;
        const subscribes = await this.subscribeRepository.findBy({
            id: (0, typeorm_2.In)(clientDto.subscribes)
        });
        const trainers = await this.trainerRepository.findBy({
            id: (0, typeorm_2.In)(clientDto.trainers)
        });
        client.subcribes = subscribes;
        client.trainers = trainers;
        await this.clientRepository.save(client);
        return client;
    }
    findOne(id) {
        return this.clientRepository.findOne({
            where: { id },
            relations: {
                trainers: true,
                subcribes: true,
            },
        });
    }
    async findAll() {
        return await this.clientRepository.find({
            relations: {
                subcribes: true,
                trainers: true,
            },
        });
    }
    async update(id, updatedClient) {
        const client = await this.clientRepository.findOne({
            where: { id }
        });
        client.fullname = updatedClient.fullname;
        client.age = updatedClient.age;
        client.trainers = updatedClient.trainers;
        client.subcribes = updatedClient.subcribes;
        await this.clientRepository.save(client);
        return client;
    }
    remove(id) {
        this.clientRepository.delete({ id });
    }
    async findIncomplete() {
        const clients = await this.clientRepository.find();
        const incompleteClients = clients.map((client) => {
            const incompleteClient = new incomlete_client_dto_1.IncompleteClientDto();
            incompleteClient.id = client.id;
            incompleteClient.fullname = client.fullname;
            incompleteClient.age = client.age;
            return incompleteClient;
        });
        return incompleteClients;
    }
};
ClientService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(client_entity_1.Client)),
    __param(1, (0, typeorm_1.InjectRepository)(trainers_entity_1.Trainer)),
    __param(2, (0, typeorm_1.InjectRepository)(subscribe_entity_1.Subscribe)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ClientService);
exports.ClientService = ClientService;
//# sourceMappingURL=client.service.js.map