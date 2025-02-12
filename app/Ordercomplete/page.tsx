"use client";

import { FaCheckCircle } from "react-icons/fa";

export default function OrderCompletePage() {
  return (
    <div className="flex justify-center items-center h-screen mx-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
        <h2 className="text-2xl font-semibold text-gray-800">
          Congratulations!
        </h2>
        <p className="text-gray-600 mt-2">
          Your order was placed successfully.
        </p>
      </div>
    </div>
  );
}
