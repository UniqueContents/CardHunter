import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { application } from 'express';
import { AppModule } from './app.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors();
  // app.use(LoggerMiddleware);
  app.disable('x-powered-by');
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist: true,
  //     forbidNonWhitelisted: true,
  //     transform: true,
  //   }),
  // );

  const config = new DocumentBuilder()
    .setTitle('Unique Contents')
    .setDescription('CardHunter API description')
    .setVersion('1.0')
    .addTag('CardHunter')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // app.use(cookieParser())

  await app.listen(52201);
}
bootstrap();
