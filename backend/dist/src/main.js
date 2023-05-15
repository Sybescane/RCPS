"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const dist_1 = require("@nestjs/config/dist");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Education API')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    const configService = app.get(dist_1.ConfigService);
    swagger_1.SwaggerModule.setup('api_docs', app, document);
    const port = configService.get('port');
    await app.listen(port, () => {
        console.log(`server run on ${port} port`);
    });
    await app.setGlobalPrefix('/api');
}
bootstrap();
//# sourceMappingURL=main.js.map