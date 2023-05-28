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
const client_entity_1 = require("../client.entity");
class CreateClientDto extends (0, swagger_1.PickType)(client_entity_1.Client, ['email', 'password', 'fullName', 'age']) {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: [], type: [Number], description: 'Список идентификаторов подписок' }),
    __metadata("design:type", Array)
], CreateClientDto.prototype, "subscribes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: [], type: [Number], description: 'Список идентификаторов тренеров' }),
    __metadata("design:type", Array)
], CreateClientDto.prototype, "trainers", void 0);
exports.CreateClientDto = CreateClientDto;
//# sourceMappingURL=create-client.dto.js.map