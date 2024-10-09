import { LoggingWinston } from '@google-cloud/logging-winston';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';

export const apacheFormat = winston.format.printf(({ level, message, timestamp, ...metadata }) => {
  let log = `[${timestamp}] "${level.toUpperCase()}" ${message}`;

  if (Object.keys(metadata).length > 0) {
    log += ` ${JSON.stringify(metadata)}`;
  }

  return log;
});

export const jsonFormat = winston.format.printf(({ level, message, ...meta }) => {
  return JSON.stringify({
    severity: level.toUpperCase(),
    message,
    ...meta.metadata,
  });
});

export const LoggerConfig = WinstonModule.createLogger({
  format: winston.format.combine(winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), jsonFormat),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize()),
    }),
    new LoggingWinston({
      resource: {
        labels: {
          
        }
      }
    }),
  ],
});
