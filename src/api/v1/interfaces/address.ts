/**
 * @fileoverview
 * @version 1.0.0
 * @since 2023-11-30
 * @module addressInterface
 */

export interface Address {
  street: string;
  suburb: string;
  province: string;
  country: string;
  zip: string;
  customerId?: string;
  createdAt: Date;
  updatedAt: Date;
}
