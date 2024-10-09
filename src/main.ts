import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { LoggerConfig } from './config/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: LoggerConfig,
  });

  await app.listen(process.env.PORT || 8080, '0.0.0.0');

  const logger = new Logger('main');
  logger.log('Application is running on: ' + (await app.getUrl()));
}

bootstrap();
