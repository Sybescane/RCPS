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
exports.SubscribesController = void 0;
const subscribe_service_1 = require("./subscribe.service");
const common_1 = require("@nestjs/common");
const subscribe_entity_1 = require("./subscribe.entity");
const create_subscribe_dto_1 = require("./dto/create-subscribe.dto");
const swagger_1 = require("@nestjs/swagger");
let SubscribesController = class SubscribesController {
    constructor(subscribesService) {
        this.subscribesService = subscribesService;
    }
    findAll() {
        return this.subscribesService.findAll();
    }
    findOne(id) {
        return this.subscribesService.findOne(+id);
    }
    update(id, updateSubscribe) {
        return this.subscribesService.update(+id, updateSubscribe);
    }
    create(createSubscribe) {
        return this.subscribesService.create(createSubscribe);
    }
    remove(id) {
        return this.subscribesService.remove(+id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Поиск всех абонементов' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SubscribesController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Поиск конкретного абонемента' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SubscribesController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Изменение абонемента' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, subscribe_entity_1.Subscribe]),
    __metadata("design:returntype", void 0)
], SubscribesController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создание абонемента' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_subscribe_dto_1.CreateSubscribeDto]),
    __metadata("design:returntype", Promise)
], SubscribesController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удаление абонемента' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SubscribesController.prototype, "remove", null);
SubscribesController = __decorate([
    (0, common_1.Controller)('subscribes'),
    (0, swagger_1.ApiTags)('Абонементы'),
    __metadata("design:paramtypes", [subscribe_service_1.SubscribesService])
], SubscribesController);
exports.SubscribesController = SubscribesController;
//# sourceMappingURL=subscribe.controller.js.map