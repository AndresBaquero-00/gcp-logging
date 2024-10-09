import { LoggingWinston } from '@google-cloud/logging-winston';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';

export const jsonFormat = winston.format.printf(({ level, message, ...meta }) => {
  return JSON.stringify({
    severity: level.toUpperCase(),
    message,
    ...meta,
  });
});

export const LoggerConfig = WinstonModule.createLogger({
  exitOnError: false,
  format: winston.format.combine(winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), jsonFormat),
  transports: [
    new winston.transports.Console(),
    new LoggingWinston({
      prefix: 'GCP Logging MS',
      labels: {
        'compute.googleapis.com/resource_name': 'gcp-logging-prod',
      },
    }),
  ],
});
