import { authDB } from "@/database/authDB";
import Order from "@/models/Order";


export default async function handler(req, res) {
    await authDB();

    const { id } = req.query;

    try {
        const order = await Order.findById(id);
        if (!order) return res.status(404).json({ message: "Order not found" });

        res.json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}