/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @fileoverview Server setup and configuration.
 * @version 1.0.0
 * @since 2023-11-30
 * @module server
 */

import dotenv from 'dotenv';
import http from 'http';
import ip from 'ip';
import os from 'os';

import { app } from './configs';
import { Database } from './libs';
import { Logger } from './utils';

dotenv.config();

const PORT: string | number = process.env.PORT ?? 3000;

/**
 * The HTTPS server instance.
 * @type {http.Server}
 */
const server: http.Server = http.createServer(app);

// Error handling for address in use
server.on('error', (e: any) => {
  if (e.code === 'EADDRINUSE') {
    Logger.error('Address in use, retrying...', { ...e });
    setTimeout(() => {
      server.close();
      server.listen(PORT, () => {
        Logger.info('Server Started.', {
          server: {
            name: os.hostname(),
            host: `http://${ip.address()}:${PORT}`,
            platform: os.platform(),
          },
        });
      });
    }, 1000);
  }
});

/**
 * Initialize and start the server.
 */
(async (): Promise<void> => {
  try {
    // Connect to the MongoDB database
    const database = new Database();
    await database.connectMongo();

    // Start the HTTP server
    server.listen(PORT, () => {
      Logger.info('Server Started.', {
        server: {
          name: os.hostname(),
          host: `http://${ip.address()}:${PORT}`,
          platform: os.platform(),
        },
      });
    });
  } catch (error: any) {
    // Handle database connection errors
    Logger.error('Failed To Establish Connection To Database.', {
      error_name: error.constructor.name,
      error_message: `${error}`,
      error_stack: error.stack,
    });
  }
})();
