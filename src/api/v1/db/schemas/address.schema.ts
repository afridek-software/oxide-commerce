/**
 * @fileoverview
 * @version 1.0.0
 * @since 2023-11-30
 */
import mongoose from 'mongoose';

/**
 * Represents an Address schema.
 *
 */
const AddressSchema = new mongoose.Schema(
  {
    /**
     * The street of the address.
     */
    street: {
      type: String,
      required: true,
    },
    /**
     * The suburb of the address.
     */
    suburb: {
      type: String,
      required: true,
    },
    /**
     * The province of the address.
     */
    province: {
      type: String,
      required: true,
    },
    /**
     * The country of the address.
     */
    country: {
      type: String,
      required: true,
    },
    /**
     * The ZIP code of the address.
     */
    zip: {
      type: String,
      required: true,
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Address', AddressSchema);
