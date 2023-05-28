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
exports.CreateClientDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateClientDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Имя не должно быть пустым' }),
    (0, class_validator_1.IsString)({ message: 'Имя должно быть строкой' }),
    (0, class_validator_1.MinLength)(5, { message: 'Минимальная длина имени - 5' }),
    (0, swagger_1.ApiProperty)({ example: 'Иванов Иван Иванович', description: "ФИО" }),
    __metadata("design:type", String)
], CreateClientDto.prototype, "fullName", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: '23', description: "Возраст" }),
    __metadata("design:type", Number)
], CreateClientDto.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ examples: [1, 2], description: 'Список идентификаторов подписок' }),
    __metadata("design:type", Array)
], CreateClientDto.prototype, "subscribes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ examples: [1, 2], description: 'Список идентификаторов тренеров' }),
    __metadata("design:type", Array)
], CreateClientDto.prototype, "trainers", void 0);
exports.CreateClientDto = CreateClientDto;
//# sourceMappingURL=create-client.dto.js.map