/**
 * @fileoverview
 * @version 1.0.0
 * @since 2023-11-30
 * @module userSchema
 */

import mongoose from 'mongoose';

/**
 * Represents a User schema.
 */

const UserSchema = new mongoose.Schema(
  {
    /**
     * The email address of the user.
     */
    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: true,
    },
    /**
     * The phone number of the user.
     */
    mobile: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    /**
     * The password of the user.
     */
    password: {
      type: String,
      required: true,
    },
    /**
     * The role of the user.
     * Possible values: 'Admin', 'Merchant', 'Customer'.
     */
    role: {
      type: String,
      enum: ['Admin', 'Merchant', 'Customer'],
      default: 'Customer',
      required: true,
    },
    /**
     * The verification status of the user.
     */
    isVerified: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('User', UserSchema);
