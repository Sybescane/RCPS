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
const subscribe_entity_1 = require("../subscribe.entity");
class CreateSubscribeDto extends (0, swagger_1.PickType)(subscribe_entity_1.Subscribe, ['name', 'description', 'cost']) {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: [], description: "Список клиентов", type: [String] }),
    __metadata("design:type", Array)
], CreateSubscribeDto.prototype, "clients", void 0);
exports.CreateSubscribeDto = CreateSubscribeDto;
//# sourceMappingURL=create-subscribe.dto.js.map