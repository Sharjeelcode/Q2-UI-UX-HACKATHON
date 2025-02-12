"use client";
import React, { useEffect, useState } from "react";
import AllPagesHeroImg from "../components/AllPagesHeroImg";
import useCartStore from "../store/cartStore";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

interface Country {
  code: string;
  name: string;
}

const countries: Country[] = [
  { code: "PK", name: "Pakistan" },
  { code: "US", name: "United States" },
  { code: "UK", name: "United Kingdom" },
  { code: "CA", name: "Canada" },
  { code: "AU", name: "Australia" },
  { code: "IN", name: "India" },
  { code: "DE", name: "Germany" },
];
function Page() {
  const [isVisible, setIsVisible] = useState(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const { cart } = useCartStore();
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  useEffect(() => {
    const total = cart.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
    setTotalPrice(total);
  }, [cart]);

  return (
    <div>
      <AllPagesHeroImg page="checkout" />
      <div className="flex  flex-col lg:flex-row mx-4 md:mx-[5vw] justify-center my-[3vh]  gap-4 lg:gap-10  ">
        <div className="lg:w-[60vw]">
          <form action="">
            <h1 className="text-2xl font-bold">Contact</h1>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col w-full">
                <input
                  type="email"
                  className="border-2 py-2 px-4 rounded-md text-lg"
                  placeholder="Email"
                />
              </div>
              <h1 className="text-2xl font-bold ">Delivery</h1>
              <div className="flex flex-col w-full">
                <select
                  name="Country"
                  className="border-2 py-2 px-4 rounded-md text-lg"
                >
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col w-full">
                  <input
                    type="text"
                    className="border-2 py-2 px-4 rounded-md "
                    placeholder="First Name"
                  />
                </div>
                <div className="flex flex-col w-full ">
                  <input
                    type="text"
                    className="border-2 py-2 px-4 rounded-md "
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <input
                  type="text"
                  placeholder="Shipping adress"
                  className="border-2 py-2 px-4 rounded-md"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col w-full">
                  <input
                    type="text"
                    className="border-2 py-2 px-4 rounded-md "
                    placeholder="City"
                  />
                </div>
                <div className="flex flex-col w-full ">
                  <input
                    type="number"
                    className="border-2 py-2 px-4 rounded-md "
                    placeholder="Postal Code"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <input
                  type="number"
                  className="border-2 py-2 px-4 rounded-md"
                  placeholder="Phone Number"
                />
              </div>
              <h1 className="text-2xl font-bold">Shipping Method</h1>
              <div className="flex w-full justify-between border-2 border-black py-2 px-4 rounded-md">
                <h1>Free Shipping</h1>
                <h1 className="font-bold">Free</h1>
              </div>
              <div>
                <h1 className="text-2xl font-bold">Payment</h1>
                <p className="text-gray-500 text-sm">
                  All transactions are secure and encrypted.
                </p>
              </div>
              <div className="flex gap-4 w-full border-2  py-2 px-4 rounded-md">
                <input
                  type="radio"
                  name="payment"
                  className="text-black"
                  id="cod"
                />
                <label htmlFor="cod">Cash on Delivery</label>
              </div>
              <div className="flex gap-4 w-full border-2  py-2 px-4 rounded-md">
                <input
                  type="radio"
                  name="payment"
                  className="text-black"
                  id="card"
                />
                <label htmlFor="card">Debit Card / Credit Card</label>
              </div>
            </div>
          </form>
        </div>
        <div className="lg:w-[40vw]">
          <div className="p-6 bg-gray-50 max-w-lg mx-auto rounded-lg shadow-md">
            {/* Order Summary Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-xl">Order summary</h2>
              <button
                className="text-gray-600 text-sm hover:underline"
                onClick={toggleVisibility}
              >
                {isVisible ? "Hide" : "Show"}
              </button>
            </div>

            {/* Product Items */}
            {isVisible && (
              <div className="space-y-4 border-b pb-4">
                {cart.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="flex justify-between items-center"
                    >
                      <div className="flex gap-3 items-center">
                        <div className="w-14 h-14 bg-gray-200 rounded overflow-hidden">
                          <Image
                            src={urlFor(item.image).url()}
                            alt={item.name}
                            className="w-full h-full object-cover"
                            width={312}
                            height={267}
                          />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800">
                            {item.name}
                          </h3>
                          <span className="text-sm text-gray-600">
                            Qty: {item.quantity}
                          </span>
                        </div>
                      </div>
                      <p className="font-medium text-gray-800">
                        ${item.price * item.quantity}.00
                      </p>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Discount & Shipping */}
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <input
                  type="text"
                  placeholder="Discount code"
                  className="border w-2/3 py-2 px-3 rounded-md focus:outline-none"
                />
                <button className="bg-gray-300 py-2 px-4 rounded-md hover:bg-gray-400">
                  Apply
                </button>
              </div>
            </div>

            {/* Subtotal */}
            <div className="flex justify-between items-center mt-4">
              <p className="text-gray-700">Subtotal - {cart.length} items</p>
              <p className="font-medium text-gray-800">${totalPrice}.00</p>
            </div>

            {/* Shipping */}
            <div className="flex justify-between items-center mt-2">
              <p className="text-gray-700">Shipping</p>
              <p className="font-medium text-green-600">FREE</p>
            </div>

            {/* Total */}
            <div className="flex justify-between items-center border-t pt-4 mt-4">
              <p className="text-lg font-bold">Total</p>
              <p className="text-lg font-bold">${totalPrice}.00</p>
            </div>

            {/* Complete Order Button */}
            <Link href={"/Ordercomplete"}>
              <button className="w-full mt-6 bg-black text-white py-3 rounded-md hover:bg-gray-900">
                Complete order
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
