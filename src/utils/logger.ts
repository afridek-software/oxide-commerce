/**
 * @fileoverview
 * @version 1.0.0
 * @since 2023-11-30
 * @module Logger
 */
import winston from 'winston';
import { loggerConfig } from '../configs';

class LoggerUtil {
  private _enviroment: typeof process.env.NODE_ENV;

  constructor() {
    this._enviroment = process.env.NODE_ENV;
  }
  createLogger(): winston.Logger {
    if (!this._enviroment) {
      throw new Error(
        `Invalid configuration for environment: ${this._enviroment}`,
      );
    }

    const transports =
      this._enviroment === 'production'
        ? loggerConfig.transports.production
        : loggerConfig.transports.development;

    return winston.createLogger({ transports });
  }
}

export const Logger = new LoggerUtil().createLogger();
