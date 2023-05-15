"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainersModule = void 0;
const common_1 = require("@nestjs/common");
const trainers_service_1 = require("./trainers.service");
const trainers_controller_1 = require("./trainers.controller");
const typeorm_1 = require("@nestjs/typeorm");
const client_entity_1 = require("../client/client.entity");
const trainers_entity_1 = require("./trainers.entity");
let TrainersModule = class TrainersModule {
};
TrainersModule = __decorate([
    (0, common_1.Module)({
        controllers: [trainers_controller_1.TrainersController],
        providers: [trainers_service_1.TrainersService],
        imports: [typeorm_1.TypeOrmModule.forFeature([client_entity_1.Client, trainers_entity_1.Trainer])],
    })
], TrainersModule);
exports.TrainersModule = TrainersModule;
//# sourceMappingURL=trainers.module.js.map