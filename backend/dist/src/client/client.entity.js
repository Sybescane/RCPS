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
exports.Client = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const subscribe_entity_1 = require("../subscribe/subscribe.entity");
const trainers_entity_1 = require("../trainers/trainers.entity");
const typeorm_1 = require("typeorm");
let Client = class Client {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Client.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Заполните поле email' }),
    (0, swagger_1.ApiProperty)({ example: 'mail@mail.ru', description: 'Email' }),
    (0, typeorm_1.Column)({}),
    __metadata("design:type", String)
], Client.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Заполните поле password' }),
    (0, class_validator_1.MinLength)(8, { message: 'Минимальная длина пароля - 8' }),
    (0, swagger_1.ApiProperty)({ example: 'qwerty12345678', description: 'Password', type: String, minLength: 8 }),
    (0, typeorm_1.Column)({}),
    __metadata("design:type", String)
], Client.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Заполните поле fullName' }),
    (0, class_validator_1.IsString)({ message: 'Имя должно быть строкой' }),
    (0, class_validator_1.MinLength)(5, { message: 'Минимальная длина имени - 5' }),
    (0, swagger_1.ApiProperty)({ example: 'Иванов Иван Иванович', description: "ФИО", type: String, minLength: 5 }),
    (0, typeorm_1.Column)({}),
    __metadata("design:type", String)
], Client.prototype, "fullName", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'Поле age должно быть числом' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Заполните поле age' }),
    (0, class_validator_1.Min)(12, { message: 'Минимальный возраст - 12' }),
    (0, class_validator_1.Max)(100, { message: 'Максимальный возраст - 100' }),
    (0, swagger_1.ApiProperty)({ example: '23', description: "Возраст", minimum: 12, maximum: 100, type: Number }),
    (0, typeorm_1.Column)({}),
    __metadata("design:type", Number)
], Client.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Client.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Client.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => trainers_entity_1.Trainer, (trainer) => trainer.clients, { cascade: true }),
    (0, typeorm_1.JoinTable)({
        name: 'client_trainer',
        joinColumn: { name: 'client_id' },
        inverseJoinColumn: { name: 'trainer_id' }
    }),
    __metadata("design:type", Array)
], Client.prototype, "trainers", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => subscribe_entity_1.Subscribe, (subscribe) => subscribe.clients, { cascade: true }),
    (0, typeorm_1.JoinTable)({
        name: 'client_subscribe',
        joinColumn: { name: 'client_id' },
        inverseJoinColumn: { name: 'subscribe_id' },
    }),
    __metadata("design:type", Array)
], Client.prototype, "subscribes", void 0);
Client = __decorate([
    (0, typeorm_1.Entity)('clients'),
    (0, typeorm_1.Unique)(['email'])
], Client);
exports.Client = Client;
//# sourceMappingURL=client.entity.js.map