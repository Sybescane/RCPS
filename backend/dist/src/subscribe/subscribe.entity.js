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
exports.Subscribe = void 0;
const swagger_1 = require("@nestjs/swagger");
const client_entity_1 = require("../client/client.entity");
const typeorm_1 = require("typeorm");
let Subscribe = class Subscribe {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, swagger_1.ApiProperty)({ example: '1', description: "Уникальный идентификатор" }),
    __metadata("design:type", Number)
], Subscribe.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Тренажерный зал', description: 'Название абонемента' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Subscribe.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Абонемент включает в себя...', description: "Описание абонемента" }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Subscribe.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10000', description: "Стоимость абонемента" }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Subscribe.prototype, "cost", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => client_entity_1.Client, (client) => client.subscribes),
    __metadata("design:type", Array)
], Subscribe.prototype, "clients", void 0);
Subscribe = __decorate([
    (0, typeorm_1.Entity)('subscribe')
], Subscribe);
exports.Subscribe = Subscribe;
//# sourceMappingURL=subscribe.entity.js.map