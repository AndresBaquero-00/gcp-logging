import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    this.logger.log('Logueando información...');
    try {
      this.logger.warn('Logueando advertencia...');
      throw new Error('Un error desconocido ha sucedido.');
    } catch (e) {
      this.logger.error('Logueando error...', e);
    }

    return 'Hello World!';
  }
}
