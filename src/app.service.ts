import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    this.logger.log('Logueando información...', { info: 'Información' });
    this.logger.warn('Logueando advertencia...', { warn: 'Advertencia' });
    this.logger.error('Logueando error...', { error: 'Error' });
    this.logger.fatal('Logueando fatal...', { fatal: 'Fatal' });

    return 'Hello World!';
  }
}
