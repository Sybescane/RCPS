"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSubscribeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const subscribe_entity_1 = require("../subscribe.entity");
class CreateSubscribeDto extends (0, swagger_1.PickType)(subscribe_entity_1.Subscribe, ['name', 'description', 'cost']) {
}
exports.CreateSubscribeDto = CreateSubscribeDto;
//# sourceMappingURL=create-subscribe.dto.js.map