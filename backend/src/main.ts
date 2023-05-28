import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Education API')
    .setVersion('1.0')
    .build();
  app.useGlobalPipes(new ValidationPipe({}));
  const document = SwaggerModule.createDocument(app, config);
  const configService = app.get(ConfigService);
  SwaggerModule.setup('api_docs', app, document);
  const port = configService.get('port')
  await app.listen(port, () => {
    console.log(`server run on ${port} port`)
  });
  await app.setGlobalPrefix('/api');
}
bootstrap();
