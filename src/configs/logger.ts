/**
 * @fileoverview Configuration for the logger setup.
 * @version 1.0.0
 * @since 2023-11-30
 * @module loggerConfig
 */

import dotenv from 'dotenv';
import { Logtail } from '@logtail/node';
import { LogtailTransport } from '@logtail/winston';
import winston from 'winston';

dotenv.config();

/**
 * Logger configuration object.
 * @type {LoggerConfiguration}
 */
export const loggerConfig = {
  transports: {
    development: new winston.transports.Console({
      level: 'info',
      format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
      ),
    }),

    production: new LogtailTransport(
      new Logtail(process.env.LOGTAIL_ACCESS_TOKEN ?? ''),
    ),
  },
};

