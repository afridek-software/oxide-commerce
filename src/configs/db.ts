/**
 * @fileoverview Configuration for database connections.
 * @version 1.0.0
 * @since 2023-11-30
 * @module databaseConfig
 */

import dotenv from 'dotenv';

dotenv.config();

interface DevelopmentConfig {
  mongoUrl: string;
  redisUrl: string;
}

interface ProductionConfig {
  mongoUrl: string;
  redisUrl: string;
}

interface DatabaseConfig {
  development: DevelopmentConfig;
  production: ProductionConfig;
}

const { MONGO_DB_URL, REDIS_UPSTASH_URL } = process.env;
/**
 * Multiple database configurations, one for development and one for production.
 * @type {DatabaseConfig}
 */
export const databaseConfig: DatabaseConfig = {
  development: {
    mongoUrl: 'mongodb://127.0.0.1:27017/b-empowered',
    redisUrl: 'redis://127.0.0.1:6379',
  },

  production: {
    mongoUrl: MONGO_DB_URL,
    redisUrl: REDIS_UPSTASH_URL,
  },
};
