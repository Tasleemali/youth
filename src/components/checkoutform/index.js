"use client";
import { useState } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";

export default function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        setLoading(true);
        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: { return_url: "http://localhost:3000/success" },
            redirect: "if_required",
        });

        if (error) {
            console.error("Payment Error:", error.message);
            alert(error.message);
        } else {
            console.log("Payment Success:", paymentIntent);
            alert("Payment Successful!");
        }
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement />
            <button type="submit" disabled={loading} className="bg-blue-500 text-white p-2 mt-4">
                {loading ? "Processing..." : "Pay Now"}
            </button>
        </form>
    );
}