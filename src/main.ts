import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'fs';
import { AppModule } from './app.module';
import { environment } from './environments/environment';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    })
  );
  app.enableCors();

  if (environment.name === 'development') {
    const config = new DocumentBuilder()
      .setTitle('BlockTrust API')
      .setDescription('The BlockTrust API description')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    const documentString = JSON.stringify(document, null, '  ');
    writeFileSync('openapi.json', documentString);
    SwaggerModule.setup('api', app, document);
  }

  await app.listen(environment.port);
}
bootstrap();
