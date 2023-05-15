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
exports.CreateSubscribeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateSubscribeDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Тренажерный зал', description: 'Название абонемента' }),
    __metadata("design:type", String)
], CreateSubscribeDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Абонемент включает в себя...', description: "Описание абонемента" }),
    __metadata("design:type", String)
], CreateSubscribeDto.prototype, "discription", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10000', description: "Стоимость абонемента" }),
    __metadata("design:type", Number)
], CreateSubscribeDto.prototype, "cost", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ examples: [1, 2], description: "Список клиентов" }),
    __metadata("design:type", Array)
], CreateSubscribeDto.prototype, "clients", void 0);
exports.CreateSubscribeDto = CreateSubscribeDto;
//# sourceMappingURL=create-subscribe.dto.js.map