
"use client"
import { useEffect, useState } from "react";
import  useRouter  from 'next/navigation'
 

export default function OrderSuccess() {
    const router = useRouter();
    const { orderId } = router.query;
    const [order, setOrder] = useState(null);

    useEffect(() => {
        if (orderId) {
            fetch(`/api/order/${orderId}`)
                .then(res => res.json())
                .then(data => setOrder(data));
        }
    }, [orderId]);

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold text-green-600">Payment Successful!</h2>
            {order && (
                <div className="mt-4">
                    <h3 className="font-bold">Order Details:</h3>
                    <p>Name: {order.shippingDetails.name}</p>
                    <p>Address: {order.shippingDetails.address}, {order.shippingDetails.city}</p>
                    <p>Phone: {order.shippingDetails.phone}</p>
                    <p className="mt-2 font-bold">Items:</p>
                    <ul>
                        {order.items.map((item, i) => (
                            <li key={i}>{item.name} - {item.quantity} pcs</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
