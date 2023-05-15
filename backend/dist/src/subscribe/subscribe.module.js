"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscribesModule = void 0;
const common_1 = require("@nestjs/common");
const subscribe_service_1 = require("./subscribe.service");
const subscribe_controller_1 = require("./subscribe.controller");
const typeorm_1 = require("@nestjs/typeorm");
const client_entity_1 = require("../client/client.entity");
const subscribe_entity_1 = require("./subscribe.entity");
let SubscribesModule = class SubscribesModule {
};
SubscribesModule = __decorate([
    (0, common_1.Module)({
        controllers: [subscribe_controller_1.SubscribesController],
        providers: [subscribe_service_1.SubscribesService],
        imports: [typeorm_1.TypeOrmModule.forFeature([client_entity_1.Client, subscribe_entity_1.Subscribe])],
    })
], SubscribesModule);
exports.SubscribesModule = SubscribesModule;
//# sourceMappingURL=subscribe.module.js.map