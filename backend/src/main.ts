import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config/dist';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Education API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  const configService = app.get(ConfigService)
  SwaggerModule.setup('api_docs', app, document);
  const port = configService.get('port')
  await app.listen(port, () => {
    console.log(`server run on ${port} port`)
  });
  await app.setGlobalPrefix('/api');
}
bootstrap();
