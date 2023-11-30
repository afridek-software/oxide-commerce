/**
 * @fileoverview
 * @version 1.0.0
 * @since 2023-11-30
 * @module userInterface
 */

export interface User {
  email?: string;
  mobile?: string;
  password?: string;
  role?: string;
  isVerified?: boolean;
  createdAt: Date;
  updatedAt: Date;
}
