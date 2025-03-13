

import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Product Name
  mainImage: { type: String, required: true }, // Single main image
  extraImages: { type: [String], default: [] }, // Array of extra images
  description: { type: String, required: true }, // Product Description
  category: { type: String, enum: ["Men", "Women", "Unisex"], required: true }, // Category
  subcategory: { type: String, enum: ["Top", "Bottom"], required: true }, // Subcategory
  sizes: { type: [String], required: true }, // Array of available sizes
  price: { type: Number, required: true }, // Product Price
  discount: { type: Number, default: 0 }, // Discount percentage
  newArrival: { type: Boolean, default: false }, // New Arrival flag
  createdAt: { type: Date, default: Date.now } // Timestamp
});

export default mongoose.models.youths || mongoose.model("youths", ProductSchema);