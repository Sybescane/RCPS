"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncompleteTrainerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const trainers_entity_1 = require("../trainers.entity");
class IncompleteTrainerDto extends (0, swagger_1.PickType)(trainers_entity_1.Trainer, ['fullName', 'profile']) {
}
exports.IncompleteTrainerDto = IncompleteTrainerDto;
//# sourceMappingURL=incomplete-trainer.dto.js.map