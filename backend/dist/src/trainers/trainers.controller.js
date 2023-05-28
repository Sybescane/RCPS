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
exports.TrainersController = void 0;
const trainers_service_1 = require("./trainers.service");
const common_1 = require("@nestjs/common");
const trainers_entity_1 = require("./trainers.entity");
const create_trainer_dto_1 = require("./dto/create-trainer.dto");
const swagger_1 = require("@nestjs/swagger");
let TrainersController = class TrainersController {
    constructor(trainersService) {
        this.trainersService = trainersService;
    }
    findAll() {
        return this.trainersService.findAll();
    }
    findIncomplete() {
        return this.trainersService.findIncomplete();
    }
    findOne(id) {
        return this.trainersService.findOne(+id);
    }
    update(id, updateTrainer) {
        return this.trainersService.update(+id, updateTrainer);
    }
    create(createTrainer) {
        return this.trainersService.create(createTrainer);
    }
    remove(id) {
        return this.trainersService.remove(+id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Поиск всех тренеров' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TrainersController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Поиск неавторизованных тренеров' }),
    (0, common_1.Get)('incomplete'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TrainersController.prototype, "findIncomplete", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Поиск конкретного тренера' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TrainersController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Изменение тренера' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, trainers_entity_1.Trainer]),
    __metadata("design:returntype", void 0)
], TrainersController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создание нового тренера' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_trainer_dto_1.CreateTrainerDto]),
    __metadata("design:returntype", void 0)
], TrainersController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удаление тренера' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TrainersController.prototype, "remove", null);
TrainersController = __decorate([
    (0, common_1.Controller)('trainers'),
    (0, swagger_1.ApiTags)('Тренеры'),
    __metadata("design:paramtypes", [trainers_service_1.TrainersService])
], TrainersController);
exports.TrainersController = TrainersController;
//# sourceMappingURL=trainers.controller.js.map