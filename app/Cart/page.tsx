"use client";
import React, { useState } from "react";
import Image from "next/image";
import AllPagesHeroImg from "../components/AllPagesHeroImg";
import burger from "@/app/assets/burger.png";
import stars from "@/app/assets/Star.png";
import Link from "next/link";
import { PiCheckSquareOffset } from "react-icons/pi";
function Page() {
  const [productQuantity, setProductQuantity] = useState(1);

  function handleQuantity(value: string) {
    if (value === "-" && productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    }
    if (value === "+") {
      setProductQuantity(productQuantity + 1);
    }
  }

  const products = [
    { id: 1, name: "Burger", image: burger, price: 35, rating: stars },
    { id: 2, name: "Pizza", image: burger, price: 15, rating: stars },
    {
      id: 3,
      name: "Chocolate Muffin",
      image: burger,
      price: 45,
      rating: stars,
    },
  ];

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
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col md:flex-row gap-4 py-4 border-b border-gray-300"
          >
            {/* Product Column */}
            <div className="flex gap-2 md:gap-4 items-center md:w-[30%]">
              <Image
                src={product.image}
                alt={product.name}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="flex justify-between w-full">
                <div>
                  <h1 className="text-lg font-semibold">{product.name}</h1>
                  <Image src={product.rating} alt="stars" />
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
                  onClick={() => handleQuantity("-")}
                >
                  -
                </button>
                <p className="border-2 px-4 py-1">{productQuantity}</p>
                <button
                  className="border-2 px-4 py-1 border-l-0"
                  onClick={() => handleQuantity("+")}
                >
                  +
                </button>
              </div>

              {/* Total Price Column */}
              <div className="text-gray-500 text-lg">
                ${product.price * productQuantity}.00
              </div>

              {/* Remove Button Column */}
              <div className="hover:text-[#FF9F0D] cursor-pointer text-2xl">
                X
              </div>
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
                <h1 className="text-lg font-bold">$120.00</h1>
              </div>
              <div className="flex justify-between">
                <h1 className="text-gray-500">Shipping Charges</h1>
                <h1 className="text-gray-500">$00.00</h1>
              </div>
              <hr />
              <div className="flex justify-between">
                <h1 className="text-lg font-bold">Total Amount</h1>
                <h1 className="text-lg font-bold">$250.00</h1>
              </div>
            </div>
            <Link href={""} className="">
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
