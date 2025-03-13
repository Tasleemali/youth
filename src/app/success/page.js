"use client";  // This must be the very first line

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function OrderSuccess() {
    const searchParams = useSearchParams();
    const orderId = searchParams.get("orderId"); // Get orderId from URL query
    const [order, setOrder] = useState(null);

    useEffect(() => {
        if (orderId) {
            fetch(`/api/order/${orderId}`)
                .then(res => res.json())
                .then(data => setOrder(data))
                .catch((err) => console.error("Error fetching order:", err));
        }
    }, [orderId]);

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold text-green-600">Payment Successful!</h2>
            {order ? (
                <div className="mt-4">
                    <h3 className="font-bold">Order Details:</h3>
                    <p>Name: {order.shippingDetails?.name}</p>
                    <p>Address: {order.shippingDetails?.address}, {order.shippingDetails?.city}</p>
                    <p>Phone: {order.shippingDetails?.phone}</p>
                    <p className="mt-2 font-bold">Items:</p>
                    <ul>
                        {order.items?.map((item, i) => (
                            <li key={i}>{item.name} - {item.qty} pcs</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Loading order details...</p>
            )}
        </div>
    );
}
