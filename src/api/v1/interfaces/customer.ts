/**
 * @fileoverview
 * @version 1.0.0
 * @since 2023-11-30
 * @module customerInterfacce
 */
import { Address } from './address';
import { User } from './user';

export interface Customer {
  firstName?: string;
  lastName?: string;
  billingAddress?: Address;
  shippingAddres?: Address;
  userId?: User;
  createdAt: Date;
  updatedAt: Date;
}
