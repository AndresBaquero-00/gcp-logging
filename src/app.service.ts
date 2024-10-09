import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    this.logger.log('Logueando información...');
    this.logger.warn('Logueando advertencia...');
    this.logger.error('Logueando error...');

    return 'Hello World!';
  }
}
