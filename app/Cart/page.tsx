"use client";
import React, { useState } from "react";
import Image from "next/image";
import AllPagesHeroImg from "../components/AllPagesHeroImg";
import burger from "@/app/assets/burger.png";
import stars from "@/app/assets/Star.png";

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
        <div className="hidden md:grid grid-cols-5 text-lg lg:text-xl font-bold py-3 border-b border-gray-300">
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Total</div>
          <div>Remove</div>
        </div>

        {/* Products Mapping */}
        {products.map((product) => (
          <div
            key={product.id}
            className="grid grid-cols-5 items-center gap-4 py-4 border-b border-gray-300"
          >
            {/* Product Column */}
            <div className="flex gap-4 items-center">
              <Image
                src={product.image}
                alt={product.name}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h1 className="text-lg font-semibold">{product.name}</h1>
                <Image src={product.rating} alt="stars" />
              </div>
            </div>

            {/* Price Column */}
            <div className="text-gray-300">${product.price}.00</div>

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
            <div className="text-gray-300">
              ${product.price * productQuantity}.00
            </div>

            {/* Remove Button Column */}
            <div className="hover:text-[#FF9F0D] cursor-pointer text-2xl">
              X
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
