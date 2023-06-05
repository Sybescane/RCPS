"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClientDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const client_entity_1 = require("../client.entity");
class CreateClientDto extends (0, swagger_1.PickType)(client_entity_1.Client, ['email', 'password', 'fullName', 'age']) {
}
exports.CreateClientDto = CreateClientDto;
//# sourceMappingURL=create-client.dto.js.map