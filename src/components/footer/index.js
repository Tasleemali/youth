import Image from "next/image";
import { FaInstagram, FaFacebookF, FaPlay } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black py-10  text-gray-300">

        <div className="mx-auto max-w-screen-2xl  px-5 md:px-20  ">

       
      <div className="container mx-auto grid md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold">
            <span className="">You</span>th
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Youth is a fast-fashion brand designed in Spain. Targeting the youth
            of today who want to live on their own terms and always stay stylish.
          </p>
          <div className="flex space-x-4 mt-4">
            <FaInstagram className="text-2xl cursor-pointer" />
            <FaFacebookF className="text-2xl cursor-pointer" />
            <FaPlay className="text-2xl cursor-pointer" />
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-lg font-semibold">Help & Information</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>Blogs</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
          <button className="mt-4 px-4 py-2 bg-black text-white text-sm font-medium rounded-md">
            Track Order
          </button>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold">Policy</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>Returns & Exchange Policy</li>
              <li>Shipping & Delivery</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>Men</li>
              <li>Women</li>
              <li>New Arrivals</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="border-t mt-6 pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
        <p>Copyright 2025 | YOUTH. All rights reserved.</p>
        <div className="flex space-x-2 mt-4 md:mt-0">
          <img src="https://w7.pngwing.com/pngs/962/794/png-transparent-mastercard-credit-card-mastercard-logo-mastercard-logo-love-text-heart-thumbnail.png" className="w-10 h-7" alt="Mastercard" />
          <img src="https://w7.pngwing.com/pngs/667/172/png-transparent-logo-brand-visa-font-visa-blue-text-trademark-thumbnail.png" className="w-10 h-7" alt="Visa" />
          <img src="https://w7.pngwing.com/pngs/662/383/png-transparent-amex-payment-method-icon-thumbnail.png" className="w-10 h-7" alt="Amex" />
          <img src="https://w7.pngwing.com/pngs/720/939/png-transparent-paypal-computer-icons-logo-paypal-blue-angle-service-thumbnail.png" className="w-10 h-7" alt="PayPal" />
          <img src="https://w7.pngwing.com/pngs/473/389/png-transparent-apple-pay-mobile-payment-apple-wallet-apple-text-service-rectangle-thumbnail.png" className="w-10 h-7" alt="Apple Pay" />
          <img src="https://w7.pngwing.com/pngs/191/51/png-transparent-google-pay-or-tez-hd-logo-thumbnail.png" className="w-10 h-7" alt="Google Pay" />
        </div>
      </div>
      </div>
    </footer>
  );
}
