import { FaTruck, FaHeadset } from "react-icons/fa";

const Features = () => {
  return (
    <div className="max-w-5xl mx-auto py-10 px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 text-center text-black">
      {/* Fast Delivery */}
      <div className="flex flex-col items-center space-y-3">
        <FaTruck className="text-5xl md:text-6xl text-gray-700" />
        <h2 className="text-xl md:text-2xl font-bold">Fast Delivery</h2>
        <p className="text-gray-600 text-sm md:text-base max-w-sm">
          Enjoy <strong>Fast Nationwide Delivery</strong> on all orders with{" "}
          <span className="font-bold">YOUTH</span>—no minimum, no fuss, just
          fashion at your doorstep.
        </p>
      </div>

      {/* Top Notch Support */}
      <div className="flex flex-col items-center space-y-3">
        <FaHeadset className="text-5xl md:text-6xl text-gray-700" />
        <h2 className="text-xl md:text-2xl font-bold">Top Notch Support</h2>
        <p className="text-gray-600 text-sm md:text-base max-w-sm">
          Shop with confidence at <span className="font-bold">YOUTH</span>—
          <strong>Secure Payments</strong> and <strong>Customer Support</strong>{" "}
          ensure a seamless and safe shopping experience.
        </p>
      </div>
    </div>
  );
};

export default Features;