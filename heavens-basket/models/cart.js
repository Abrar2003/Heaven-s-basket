import { Schema, models, model } from "mongoose";
import mongoose from "mongoose";
import ProductModel from "./products";

/// http://localhost:3000/api/cart

const cartSchema = new Schema(
  {
    brand: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    title: { type: String, reuired: true },
    price: { type: Number, required: true },
    piece: [{ type: String, required: true }],
    popUpMess: { type: String, required: true },

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
