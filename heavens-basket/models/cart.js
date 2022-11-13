import { Schema, models, model } from "mongoose";
import mongoose from "mongoose";
import ProductModel from "./products";

/// http://localhost:3000/api/cart
const cartSchema = new Schema(
  {
    productId: {
      type: mongoose.ObjectId,
      ref: ProductModel,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);
const cart = models.cart || new model("cart", cartSchema);

export default cart;
