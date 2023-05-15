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
exports.TrainersService = void 0;
const common_1 = require("@nestjs/common");
const trainers_entity_1 = require("./trainers.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const client_entity_1 = require("../client/client.entity");
const incomplete_trainer_dto_1 = require("./dto/incomplete-trainer.dto");
let TrainersService = class TrainersService {
    constructor(trainerRepository, clientRepository) {
        this.trainerRepository = trainerRepository;
        this.clientRepository = clientRepository;
    }
    async create(trainerDto) {
        const trainer = this.trainerRepository.create();
        trainer.fullname = trainerDto.fullname;
        trainer.profile = trainerDto.profile;
        trainer.experience = trainerDto.experience;
        const clients = await this.clientRepository.findBy({
            id: (0, typeorm_1.In)(trainerDto.clients)
        });
        trainer.clients = clients;
        await this.trainerRepository.save(trainer);
        return trainer;
    }
    findOne(id) {
        return this.trainerRepository.findOne({
            where: { id },
            relations: {
                clients: true
            }
        });
    }
    async findAll() {
        return await this.trainerRepository.find({
            relations: {
                clients: true,
            },
        });
    }
    async update(id, updatedTrainer) {
        const trainer = await this.trainerRepository.findOne({
            where: { id },
        });
        trainer.fullname = updatedTrainer.fullname;
        trainer.profile = updatedTrainer.profile;
        trainer.experience = updatedTrainer.experience;
        trainer.clients = updatedTrainer.clients;
        await this.trainerRepository.save(trainer);
        return trainer;
    }
    remove(id) {
        this.trainerRepository.delete({ id });
    }
    async findIncomplete() {
        const trainers = await this.trainerRepository.find();
        const incompleteTrainers = trainers.map((trainer) => {
            const incompleteTrainer = new incomplete_trainer_dto_1.IncompleteTrainerDto();
            incompleteTrainer.id = trainer.id;
            incompleteTrainer.fullname = trainer.fullname;
            incompleteTrainer.profile = trainer.profile;
            return incompleteTrainer;
        });
        return incompleteTrainers;
    }
};
TrainersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(trainers_entity_1.Trainer)),
    __param(1, (0, typeorm_2.InjectRepository)(client_entity_1.Client)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], TrainersService);
exports.TrainersService = TrainersService;
//# sourceMappingURL=trainers.service.js.map