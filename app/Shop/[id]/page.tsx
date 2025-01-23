"use client";
import AllPagesHeroImg from "@/app/components/AllPagesHeroImg";
import React, { useState } from "react";
import freshLime from "@/app/assets/freshLime.png";
import star from "@/app/assets/Star.png";
import Image from "next/image";
import { MdOutlineShoppingBag } from "react-icons/md";
function page({ params }: { params: { id: string } }) {
  console.log(params.id);
  const [productQuantity, setproductQuantity] = useState(1);
  function quantityHandler(value: string) {
    if (value === "-") {
      if (productQuantity === 1) {
        return;
      }
      setproductQuantity(productQuantity - 1);
    }
    if (value === "+") {
      setproductQuantity(productQuantity + 1);
    }
  }
  return (
    <>
      <AllPagesHeroImg page="Shop Details" />
      <div>
        <div className="flex  mx-4 md:mx-[5vw]  my-[3vh] px-10 md:gap-4 lg:gap-160  ">
          <Image src={freshLime} alt="magnifying glass" className="w-full" />
          <div>
            <h1 className="font-bold text-4xl py-4">Yummy checken</h1>
            <p className="pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, urna, vitae feugiat pretium donec id elementum. Ultrices
              mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit
              in consequat.
            </p>
            <hr />
            <h1 className="text-2xl font-bold mt-2">54.00$</h1>
            <div className="flex gap-4 text-gray-400">
              <Image src={star} alt="magnifying glass" /> <p>|</p>{" "}
              <p>5.0 Rating</p>
              <p>|</p>
              <p>22 Review</p>
            </div>
            <p className="py-4">Dictum/cursus/Risus</p>
            <div className="flex gap-4 pb-4">
              <div className="flex">
                <button
                  className="border-2 py-1 px-4 border-r-0"
                  onClick={() => quantityHandler("-")}
                >
                  -
                </button>
                <p className="border-2 px-4 py-1">{productQuantity}</p>
                <button
                  className="border-2 px-4 py-1 border-l-0"
                  onClick={() => quantityHandler("+")}
                >
                  +
                </button>
              </div>
              <div>
                <button className="bg-[#FF9F0D] px-4 lg:px-6 text-white flex gap-2 py-1 items-center">
                  <MdOutlineShoppingBag />
                  Add to cart
                </button>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
