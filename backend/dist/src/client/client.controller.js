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
exports.ClientsController = void 0;
const client_service_1 = require("./client.service");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const update_client_dto_1 = require("./dto/update-client.dto");
let ClientsController = class ClientsController {
    constructor(clientsService) {
        this.clientsService = clientsService;
    }
    findAll() {
        return this.clientsService.findAll();
    }
    findIncomplete() {
        return this.clientsService.findIncomplete();
    }
    findOne(email) {
        return this.clientsService.findOne(email);
    }
    update(email, updateClient) {
        return this.clientsService.update(email, updateClient);
    }
    addSubcribe(email, idSub) {
        return this.clientsService.addSubscribe(email, idSub);
    }
    delSubcribe(email, idSub) {
        return this.clientsService.delSubscribe(email, idSub);
    }
    addTrainer(email, idTrainer) {
        return this.clientsService.addTrainer(email, idTrainer);
    }
    delTrainer(email, idSub) {
        return this.clientsService.delTrainer(email, idSub);
    }
    remove(email) {
        return this.clientsService.remove(email);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Поиск всех клиентов' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Поиск для неавторизованных клиентов' }),
    (0, common_1.Get)('incomplete'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "findIncomplete", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Поиск конкретного клиента' }),
    (0, common_1.Get)(':email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Изменение клиента' }),
    (0, common_1.Put)(':email'),
    __param(0, (0, common_1.Param)('email')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_client_dto_1.UpdateClientDto]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'оформить подписку на абонемент' }),
    (0, common_1.Post)('addSub'),
    __param(0, (0, common_1.Query)('email')),
    __param(1, (0, common_1.Query)('idSub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "addSubcribe", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'отменить подписку на абонемент' }),
    (0, common_1.Post)('delSub'),
    __param(0, (0, common_1.Query)('email')),
    __param(1, (0, common_1.Query)('idSub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "delSubcribe", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'записаться к тренеру' }),
    (0, common_1.Post)('addTrainer'),
    __param(0, (0, common_1.Query)('email')),
    __param(1, (0, common_1.Query)('idSub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "addTrainer", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'отписаться от тренера' }),
    (0, common_1.Post)('delTrainer'),
    __param(0, (0, common_1.Query)('email')),
    __param(1, (0, common_1.Query)('idSub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "delTrainer", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удаление клиента' }),
    (0, common_1.Delete)(':email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "remove", null);
ClientsController = __decorate([
    (0, common_1.Controller)('clients'),
    (0, swagger_1.ApiTags)('Клиенты'),
    __metadata("design:paramtypes", [client_service_1.ClientService])
], ClientsController);
exports.ClientsController = ClientsController;
//# sourceMappingURL=client.controller.js.map