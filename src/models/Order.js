import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    items: [{ name: String, price: Number, quantity: Number }],
    shippingDetails: {
        name: String,
        address: String,
        city: String,
        phone: String,
    },
    status: { type: String, default: "pending" },
}, { timestamps: true });

const Order = mongoose.models.orders || mongoose.model("orders", OrderSchema);
export default Order