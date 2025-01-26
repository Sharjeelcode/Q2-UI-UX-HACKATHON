"use client";
import React, { useEffect, useState } from "react";
import AllPagesHeroImg from "../components/AllPagesHeroImg";
import Image from "next/image";
import MagnifyingGlass from "@/app/assets/MagnifyingGlass.png";
import ShopSideBarImg from "@/app/assets/ShopSideBarImg.png";
import ArrowCircleRight from "@/app/assets/ArrowCircleRight.png";
import latestProducts from "@/app/assets/latestProducts.png";
import { client } from "@/sanity/lib/client";
import Product from "../components/ProductCard";
import Loader from "../components/Loader";

interface Food {
  name: string;
  salePrice: number;
  originalPrice: number;
  image: string;
  _id: string;
}

const query = `*[_type == "food"]{
  name,
  salePrice,
  originalPrice,
  image,
  description,
  available,
  _id
}`;
function Page() {
  const [foodList, setFoodList] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadFoodList = async () => {
      try {
        if (typeof window !== "undefined") {
          setLoading(true);

          // Check localStorage first
          const storedFoodList = localStorage.getItem("foodList");

          if (storedFoodList) {
            setFoodList(JSON.parse(storedFoodList));
          } else {
            // Fetch from server
            const fetchedFoodList = await client.fetch(query);
            setFoodList(fetchedFoodList);

            // Save to localStorage for future use
            localStorage.setItem("foodList", JSON.stringify(fetchedFoodList));
          }
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error("Error fetching data:", err.message);
          setError(
            err.message || "An error occurred while fetching product details."
          );
        } else {
          console.error("An unknown error occurred:", err);
          setError("An unknown error occurred while fetching product details.");
        }
      } finally {
        setLoading(false);
      }
    };

    loadFoodList();
  }, []);
  if (loading)
    return (
      <div className="text-center my-10">
        <AllPagesHeroImg page="Blog List" />
        <Loader />
      </div>
    );
  if (error)
    return (
      <div className="text-center text-red-500 my-10">
        <AllPagesHeroImg page="Blog Details" />
        {error}
      </div>
    );
  return (
    <>
      <AllPagesHeroImg page="Shop" />
      <div className="flex  flex-col lg:flex-row mx-4 md:mx-[5vw] justify-center my-[3vh] px-10 md:gap-4 lg:gap-20  ">
        {/* Products Cards */}

        <div className="">
          {/* dropdowns */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-6">
            <div className="flex gap-2">
              <p>Sort By : </p>
              <select className="border-2 border-gray-100 rounded-md md:px-4">
                <option className="px-4">Newest</option>
                <option>Oldest</option>
              </select>
            </div>
            <div className="flex gap-2">
              <p>Show : </p>
              <select className="border-2 border-gray-100 rounded-md px-4">
                <option className="px-4">Default</option>
                <option>All Foods</option>
              </select>
            </div>
          </div>
          {/* Products Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-12 my-8 justify-items-center">
            {foodList.map((food: Food) => {
              return (
                <>
                  <Product
                    key={food._id}
                    name={food.name}
                    salePrice={food.salePrice}
                    originalPrice={food.originalPrice}
                    image={food.image}
                    _id={food._id}
                  />
                </>
              );
            })}
            {foodList.map((food: Food) => {
              return (
                <Product
                  key={food._id}
                  name={food.name}
                  salePrice={food.salePrice}
                  originalPrice={food.originalPrice}
                  image={food.image}
                  _id={food._id}
                />
              );
            })}
          </div>
        </div>
        <div className="flex  flex-col gap-3">
          {/* search box */}
          <div className="flex">
            <input
              type="text"
              className="bg-gray-100 p-1"
              placeholder="Search Product"
            />
            <div className="bg-[#FF9F0D] flex-shrink-0  p-1">
              <Image src={MagnifyingGlass} alt="search" />
            </div>
          </div>
          {/* Categories */}
          <h1 className="font-bold ">Catagory</h1>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-2">
              <input type="checkbox" name="Sandwiches" id="Sandwiches" />
              <label htmlFor="Sandwiches">Sandwiches</label>
            </li>
            <li className="flex gap-2">
              <input type="checkbox" name="Burger" id="Burger" />
              <label htmlFor="Burger">Burger</label>
            </li>
            <li className="flex gap-2">
              <input type="checkbox" name="Chiken Chup" id="Chiken Chup" />
              <label htmlFor="Chiken Chup">Chiken Chup</label>
            </li>
            <li className="flex gap-2">
              <input type="checkbox" name="Drink" id="Drink" />
              <label htmlFor="Drink">Drink</label>
            </li>
            <li className="flex gap-2">
              <input type="checkbox" name="Pizza" id="Pizza" />
              <label htmlFor="Pizza">Pizza</label>
            </li>
            <li className="flex gap-2">
              <input type="checkbox" name="Thi" id="Thi" />
              <label htmlFor="Thi">Thi</label>
            </li>
            <li className="flex gap-2">
              <input type="checkbox" name="Non Veg" id="Non Veg" />
              <label htmlFor="Non Veg">Non Veg</label>
            </li>
            <li className="flex gap-2">
              <input type="checkbox" name="Uncategorized" id="Uncategorized" />
              <label htmlFor="Uncategorized">Uncategorized</label>
            </li>
          </ul>
          {/* Shop Image Card*/}
          <div
            className="relative bg-cover bg-center h-64 w-full"
            style={{
              backgroundImage: `url(${ShopSideBarImg.src})`,
            }}
          >
            <div className="absolute top-10  px-4">
              <h1 className="text-sm font-bold text-white">Perfect Taste</h1>
              <h1 className=" font-bold text-white">Classic Resturent</h1>
              <p className="text-[#FF9F0D] font-bold pt-4">45.00$</p>
            </div>
            <div className="absolute flex gap-2 bottom-5 text-white  px-4">
              <span>Shop Now</span>
              <Image src={ArrowCircleRight} alt="" />
            </div>
          </div>
          <h1 className="font-bold ">Filter By Price</h1>
          <input
            type="range"
            min="1"
            max="100"
            className="w-full h-2 bg-[#FF9F0D] rounded-lg appearance-none 
             focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] 
             accent-white"
          />
          <div className="flex justify-between text-gray-400">
            <p>From 0$ to $8000</p>
            <p>Filter</p>
          </div>
          {/* Latest Products */}
          <h1 className="font-bold ">Latest Products</h1>
          <Image src={latestProducts} alt="" />
          {/* Product Tags */}
          <h1 className="font-bold ">Product Tags</h1>
          <div className="flex gap-2 text-sm">
            <h1 className="underline cursor-pointer underline-offset-4 under decoration-gray-200 hover:text-[#FF9F0D] hover:decoration-[#FF9F0D] ">
              Services
            </h1>
            <h1 className="underline cursor-pointer underline-offset-4 under decoration-gray-200 hover:text-[#FF9F0D] hover:decoration-[#FF9F0D] ">
              Our Menu
            </h1>
            <h1 className="underline cursor-pointer underline-offset-4 under decoration-gray-200 hover:text-[#FF9F0D] hover:decoration-[#FF9F0D] ">
              Pizza
            </h1>
          </div>
          <div className="flex gap-2 text-sm">
            <h1 className="underline cursor-pointer underline-offset-4 under decoration-gray-200 hover:text-[#FF9F0D] hover:decoration-[#FF9F0D] ">
              Cup Cake
            </h1>
            <h1 className="underline cursor-pointer underline-offset-4 under decoration-gray-200 hover:text-[#FF9F0D] hover:decoration-[#FF9F0D] ">
              Burger
            </h1>
            <h1 className="underline cursor-pointer underline-offset-4 under decoration-gray-200 hover:text-[#FF9F0D] hover:decoration-[#FF9F0D] ">
              Cookies
            </h1>
          </div>
          <div className="flex gap-2 text-sm">
            <h1 className="underline cursor-pointer underline-offset-4 under decoration-gray-200 hover:text-[#FF9F0D] hover:decoration-[#FF9F0D] ">
              Our Shop
            </h1>
            <h1 className="underline cursor-pointer underline-offset-4 under decoration-gray-200 hover:text-[#FF9F0D] hover:decoration-[#FF9F0D] ">
              Tandori Chiken
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
