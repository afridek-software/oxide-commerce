/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @fileoverview
 * @version 1.0.0
 * @since 2023-11-30
 * @module database
 */
import mongoose, { Connection } from 'mongoose';
import { Redis } from 'ioredis';
import { databaseConfig } from '../configs';
import { Logger } from '../utils';

export class Database {
  /**
   * Method to connect to MongoDB.
   * @returns {Promise<Connection>}
   * @public
   */
  public async connectMongo(): Promise<Connection> {
    try {
      await mongoose.connect(
        process.env.NODE_ENV === 'development'
          ? databaseConfig.development.mongoUrl
          : databaseConfig.production.mongoUrl
      );
      return mongoose.connection;
    } catch (error: any) {
      Logger.error('MongoDB Connection Failed.', {
        error_name: error.constructor.name,
        error_message: error.message,
        error_stack: error.stack,
      });
      throw error;
    }
  }

  /**
   * Method to close the MongoDB connection.
   * @returns {Promise<void>}
   * @public
   */
  public async closeMongo(): Promise<void> {
    try {
      return await mongoose.connection.close();
    } catch (error: any) {
      Logger.error('Failed to close MongoDB connection.', {
        error_name: error.constructor.name,
        error_message: error.message,
        error_stack: error.stack,
      });
      throw error;
    }
  }

  /**
   * Method to connect to Redis.
   * @returns {Redis} The Redis client.
   * @public
   */
  public redisClient(): Redis {
    return new Redis(
      process.env.NODE_ENV === 'development'
        ? databaseConfig.development.redisUrl
        : databaseConfig.production.redisUrl
    );
  }
}
