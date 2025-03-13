import Stripe from "stripe";
import { authDB } from "@/database/authDB";
import Order from "@/models/Order";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
    try {
        await authDB();
        const body = await req.json();
        const { carts, shippingDetails } = body;

        if (!carts || carts.length === 0) {
            return new Response(JSON.stringify({ message: "Cart is empty" }), { status: 400 });
        }

        if (!shippingDetails?.name || !shippingDetails?.address) {
            return new Response(JSON.stringify({ message: "Missing shipping details" }), { status: 400 });
        }

        // Save order in MongoDB before payment
        const order = new Order({
            items: carts,
            shippingDetails,
            status: "pending",
        });

        await order.save();

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: carts.map((item) => ({
                price_data: {
                    currency: "usd",
                    product_data: { name: item.name },
                    unit_amount: item.price * 100,
                },
                quantity: item.qty,
            })),
            mode: "payment",
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/order-success?orderId=${order._id}`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
        });

        return new Response(JSON.stringify({ url: session.url }), { status: 200 });
    } catch (error) {
        console.error("Checkout Error:", error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}