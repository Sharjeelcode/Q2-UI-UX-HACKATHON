"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AllPagesHeroImg from "../components/AllPagesHeroImg";

import stars from "@/app/assets/Star.png";
import Link from "next/link";
import { PiCheckSquareOffset } from "react-icons/pi";
import useCartStore from "../store/cartStore";
import { urlFor } from "@/sanity/lib/image";
function Page() {
  const { cart, addItem, removeItem, decreaseItem } = useCartStore();
  const [totalPrice, setTotalPrice] = useState<number>(0);
  useEffect(() => {
    const total = cart.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
    setTotalPrice(total);
  }, [cart]);

  return (
    <div>
      <AllPagesHeroImg page="Shopping Cart" />
      <div className="mx-2 lg:mx-[15vw] my-8">
        {/* Table Header */}
        <div className="hidden md:flex flex-col md:flex-row text-lg lg:text-xl font-bold py-3 border-b border-gray-300">
          <div className="flex gap-6 justify-between items-center md:w-[30%]">
            <h1>Product</h1>
            <h1>Price</h1>
          </div>
          <div className="flex items-center md:w-[70%] justify-around ">
            <h1>Quantity</h1>
            <h1>Total</h1>
            <h1>Remove</h1>
          </div>
        </div>

        {/* Products Mapping */}
        {cart.map((product) => (
          <div
            key={product.id}
            className="flex flex-col md:flex-row gap-4 py-4 border-b border-gray-300"
          >
            {/* Product Column */}
            <div className="flex gap-2 md:gap-4 items-center md:w-[30%]">
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                className="w-20 h-20 object-cover rounded-md"
                width={312}
                height={267}
              />
              <div className="flex justify-between w-full">
                <div>
                  <h1 className="text-lg font-semibold">{product.name}</h1>
                  <Image src={stars} alt="stars" />
                </div>
                <div className="text-gray-500 text-lg">${product.price}.00</div>
              </div>
            </div>
            <div className="flex items-center md:w-[70%] justify-around">
              {/* Price Column */}

              {/* Quantity Column */}
              <div className="flex items-center">
                <button
                  className="border-2 py-1 px-4 border-r-0"
                  onClick={() => decreaseItem(product.id)}
                >
                  -
                </button>
                <p className="border-2 px-4 py-1">{product.quantity}</p>
                <button
                  className="border-2 px-4 py-1 border-l-0"
                  onClick={() => addItem(product)}
                >
                  +
                </button>
              </div>

              {/* Total Price Column */}
              <div className="text-gray-500 text-lg">
                ${product.price * product.quantity}.00
              </div>

              {/* Remove Button Column */}
              <button
                className="hover:text-[#FF9F0D] cursor-pointer text-2xl"
                onClick={() => removeItem(product.id)}
              >
                X
              </button>
            </div>
          </div>
        ))}

        {/* coupen and total bill */}
        <div className="flex flex-col md:flex-row my-8 gap-8">
          <div className="w-full">
            <h1 className="text-xl md:text-2xl font-bold my-4">Coupon Code</h1>
            <div className="flex flex-col gap-4 border-2 rounded-md px-4 py-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br /> Quisque diam pellentesque bibendum non
              </p>
              <div className="flex border-2 rounded-md">
                <input
                  type="text"
                  placeholder="Enter Here code"
                  className="w-full py-4 px-5 "
                />
                <button className="text-white rounded-md bg-[#FF9F0D] px-5 py-4">
                  Apply
                </button>
              </div>
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-xl md:text-2xl font-bold my-4">Total Bill</h1>
            <div className="flex flex-col gap-4 border-2 rounded-md px-4 py-4">
              <div className="flex justify-between">
                <h1 className="text-lg font-bold">Cart Subtotal</h1>
                <h1 className="text-lg font-bold">{`$${totalPrice}.00`}</h1>
              </div>
              <div className="flex justify-between">
                <h1 className="text-gray-500">Shipping Charges</h1>
                <h1 className="text-gray-500">$00.00</h1>
              </div>
              <hr />
              <div className="flex justify-between">
                <h1 className="text-lg font-bold">Total Amount</h1>
                <h1 className="text-lg font-bold">{`$${totalPrice}.00`}</h1>
              </div>
            </div>
            <Link href={"/Checkout"} className="">
              <div className="flex justify-center items-center rounded-md gap-1 text-white bg-[#FF9F0D] text-lg md:text-xl my-4 py-4">
                <h1 className="">Proceed to Checkout</h1>
                <PiCheckSquareOffset />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
