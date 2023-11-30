/**
 * @fileoverview
 * @version 1.0.0
 * @since 2023-11-30
 */

import mongoose from 'mongoose';

/**
 * Represents a Customer schema.
 *
 */
const CustomerSchema = new mongoose.Schema(
  {
    /**
     * The first name of the customer.
     *
     * @type {string}
     */
    firstName: {
      type: String,
      required: true,
    },
    /**
     * The last name of the customer.
     *
     * @type {string}
     */
    lastName: {
      type: String,
      required: true,
    },
    /**
     * The billing address of the customer.
     *
     * @type {Address}
     */
    billingAddress: {
      type: mongoose.Types.ObjectId,
      ref: 'Address',
      required: true,
      unique: true,
    },
    /**
     * The shipping address of the customer.
     *
     * @type {Address}
     */
    shippingAdress: {
      type: mongoose.Types.ObjectId,
      ref: 'Address',
      required: true,
      unique: true,
    },
    /**
     * The user associated with the customer.
     *
     * @type {String}
     */
    userId: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Customer', CustomerSchema);
