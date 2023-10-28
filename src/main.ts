import './config/env.config';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true, forbidUnknownValues: true }));

    const config = new DocumentBuilder()
        .setTitle('JSGuru')
        .setDescription('This is an API built to assess Nest js knowledges')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(3000);

    const appUrl = await app.getUrl();
    Logger.log(`🐈 Application is 🏃 ${appUrl}`);
    Logger.log(`🐈 Swagger is 🏃 ${appUrl}/api`);
}
bootstrap();
