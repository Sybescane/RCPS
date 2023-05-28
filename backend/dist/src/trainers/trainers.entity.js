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
exports.Trainer = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const client_entity_1 = require("../client/client.entity");
const typeorm_1 = require("typeorm");
let Trainer = class Trainer {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Trainer.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Заполните поле fullName' }),
    (0, class_validator_1.IsString)({ message: 'Имя должно быть строкой' }),
    (0, class_validator_1.MinLength)(5, { message: 'Минимальная длина имени - 5' }),
    (0, swagger_1.ApiProperty)({ example: 'Иванов Иван Иванович', description: "ФИО", type: String, minLength: 5 }),
    (0, typeorm_1.Column)({}),
    __metadata("design:type", String)
], Trainer.prototype, "fullName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Заполните поле profile' }),
    (0, swagger_1.ApiProperty)({ example: 'Бодибилдинг', description: 'Специализация', type: String }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Trainer.prototype, "profile", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Заполните поле experience' }),
    (0, class_validator_1.IsInt)({ message: 'Поле experience должно быть числом' }),
    (0, class_validator_1.Min)(0),
    (0, swagger_1.ApiProperty)({ example: '4', description: "Стаж работы", type: Number, minimum: 0 }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Trainer.prototype, "experience", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => client_entity_1.Client, (client) => client.trainers),
    __metadata("design:type", Array)
], Trainer.prototype, "clients", void 0);
Trainer = __decorate([
    (0, typeorm_1.Entity)('trainers')
], Trainer);
exports.Trainer = Trainer;
//# sourceMappingURL=trainers.entity.js.map