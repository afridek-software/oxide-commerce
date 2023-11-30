/**
 * @fileoverview
 * @version 1.0.0
 * @since 2023-11-30
 * @module Logger
 */
import winston from 'winston';
import { loggerConfig } from '../configs';

class LoggerUtil {
  createLogger(): winston.Logger {
    const environment = process.env.NODE_ENV;

    if (!environment) {
      throw new Error(`Invalid configuration for environment: ${environment}`);
    }

    const transports =
      environment === 'production'
        ? loggerConfig.transports.production
        : loggerConfig.transports.development;

    return winston.createLogger({ transports });
  }
}

export const Logger = new LoggerUtil().createLogger();
