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
exports.SubscribesService = void 0;
const common_1 = require("@nestjs/common");
const subscribe_entity_1 = require("./subscribe.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const client_entity_1 = require("../client/client.entity");
let SubscribesService = class SubscribesService {
    constructor(subscribeRepository, clientRepository) {
        this.subscribeRepository = subscribeRepository;
        this.clientRepository = clientRepository;
    }
    async create(subscribeDto) {
        const subscribe = this.subscribeRepository.create();
        subscribe.name = subscribeDto.name;
        subscribe.description = subscribeDto.description;
        subscribe.cost = subscribeDto.cost;
        const clients = await this.clientRepository.findBy({
            id: (0, typeorm_2.In)(subscribeDto.clients)
        });
        subscribe.clients = clients;
        await this.subscribeRepository.save(subscribe);
        return subscribe;
    }
    findOne(id) {
        return this.subscribeRepository.findOne({
            where: { id }
        });
    }
    async findAll() {
        return await this.subscribeRepository.find({
            relations: {
                clients: true
            }
        });
    }
    async update(id, updatedSubscribe) {
        const subcribe = await this.subscribeRepository.findOne({
            where: { id }
        });
        subcribe.name = updatedSubscribe.name;
        subcribe.cost = updatedSubscribe.cost;
        subcribe.description = updatedSubscribe.description;
        subcribe.clients = updatedSubscribe.clients;
        await this.subscribeRepository.save(subcribe);
        return subcribe;
    }
    remove(id) {
        this.subscribeRepository.delete({ id });
    }
};
SubscribesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(subscribe_entity_1.Subscribe)),
    __param(1, (0, typeorm_1.InjectRepository)(client_entity_1.Client)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], SubscribesService);
exports.SubscribesService = SubscribesService;
//# sourceMappingURL=subscribe.service.js.map