import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  getHello(): any {
    this.logger.log('Logueando información...', { context: AppService.name, microservice: 'training-ms-ccb' });
    try {
      this.logger.warn('Logueando advertencia...');
      throw new Error('Un error desconocido ha sucedido.');
    } catch (e) {
      this.logger.error('Logueando error...', e);
      this.logger.error('Logueando error...', { error: 'error', code: 500 });
    }

    return process.env;
  }
}
