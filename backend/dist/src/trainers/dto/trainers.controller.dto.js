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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainerDtoController = void 0;
const common_1 = require("@nestjs/common");
const trainers_service_1 = require("../trainers.service");
const swagger_1 = require("@nestjs/swagger");
let TrainerDtoController = class TrainerDtoController {
    constructor(trainersService) {
        this.trainersService = trainersService;
    }
    findIncomplete() {
        this.trainersService.findIncomplete();
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Поиск неавторизованных тренеров' }),
    (0, common_1.Get)('incomplete'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TrainerDtoController.prototype, "findIncomplete", null);
TrainerDtoController = __decorate([
    (0, common_1.Controller)('trainer'),
    (0, swagger_1.ApiTags)('Тренеры DTO'),
    __metadata("design:paramtypes", [trainers_service_1.TrainersService])
], TrainerDtoController);
exports.TrainerDtoController = TrainerDtoController;
//# sourceMappingURL=trainers.controller.dto.js.map