"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { IoLogoPinterest } from "react-icons/io5";
import MagnifyingGlass from "@/app/assets/MagnifyingGlass.png";
import AllPagesHeroImg from "@/app/components/AllPagesHeroImg";
import authorImg from "@/app/assets/authorImg.png";
import { SlCalender } from "react-icons/sl";
import { TiMessages } from "react-icons/ti";
import { FaRegUserCircle } from "react-icons/fa";
import star from "@/app/assets/Star.png";
import blogDemo from "@/app/assets/blogDemo.png";
import {
  s6i1,
  s6i2,
  s6i3,
  s6i4,
  s6i5,
  s6i6,
  s6i7,
  s6i8,
} from "../../assets/exportAssets";
import { client } from "@/sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";

interface Blog {
  name: string;
  description: [];
  author: string;
  releaseDate: string;
  image: string;
  _id: string;
  tags: [];
}
function Page({ params }: { params: { id: string } }) {
  const [blogDetail, setBlogDetail] = useState({} as Blog);

  const query = `*[_type == "Blogs" && _id == "${params.id}"] {
  name,description,author,releaseDate,image,_id,tags}`;

  useEffect(() => {
    async function getData() {
      const Blog = await client.fetch(query);
      setBlogDetail(Blog[0]);
    }
    getData();
  }, [query]);
  const formatDate = (dateString: string) => {
    const date = new Date(dateString); // Convert the string to a Date object
    return date.toLocaleDateString("en-US", {
      month: "short", // Abbreviated month name
      day: "2-digit", // Two-digit day
      year: "numeric", // Four-digit year
    });
  };
  console.log(blogDetail.image);

  return (
    <div>
      <AllPagesHeroImg page="Blog Details" />
      <div className="flex  flex-col lg:flex-row mx-4 md:mx-[5vw] justify-center my-[3vh] px-2 md:px-4 lg:px-10 md:gap-4 lg:gap-10  ">
        {/* Blog Posts  */}
        {blogDetail ? (
          <div className="flex flex-col gap-4 mb-4 lg:w-[70vw] ">
            <div className="flex flex-col gap-3">
              <Image
                src={
                  blogDetail.image ? urlFor(blogDetail.image).url() : blogDemo
                }
                alt=""
                className="md:h-80"
                width={871}
                height={520}
              />

              <div className="flex gap-1 md:gap-2 items-center">
                <h1 className="text-sm flex gap-2 items-center">
                  <SlCalender className="text-[#FF9F0D]" />{" "}
                  {formatDate(blogDetail.releaseDate)}
                </h1>
                <span>/</span>
                <h1 className="flex gap-2 items-center">
                  <TiMessages className="text-[#FF9F0D]" /> 3
                </h1>
                <h1 className="flex gap-2 items-center text-sm">
                  <FaRegUserCircle className="text-[#FF9F0D]" />
                  {blogDetail.author}
                </h1>
              </div>
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
                {blogDetail.name}
              </h1>
              <hr />

              <p>{blogDetail.description}</p>
            </div>
          </div>
        ) : (
          <div>Blog not found</div>
        )}

        {/* Side Bar */}
        <div className="flex  flex-col gap-3 lg:w-[30vw]">
          {/* search box */}
          <div className="flex  ">
            <input
              type="text"
              className=" px-4 py-4 border-2"
              placeholder="Search Product"
            />
            <div className="bg-[#FF9F0D] flex-shrink-0  px-4 py-4">
              <Image src={MagnifyingGlass} alt="search" />
            </div>
          </div>
          {/* Author card */}
          <div className="flex flex-col items-center gap-2 border-2 border-gray-100 p-4">
            <Image src={authorImg} alt="" />
            <h1 className="text-lg font-bold">Prince Miyako</h1>
            <p>Blogger/Photographer</p>
            <div className="flex gap-2 items-center">
              <Image src={star} alt="search" />
              <span>(1 Review)</span>
            </div>
            <p className="w-48 text-wrap text-center text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.Veritatis
            </p>
            <div className="flex gap-2">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <IoLogoPinterest />
            </div>
          </div>
          {/* Recent Posts */}
          <div className="flex flex-col  gap-2 border-2 border-gray-100 p-4">
            <h1 className="text-lg font-bold">Recent Post</h1>
            <div className="flex gap-2 ">
              <Image src={s6i1} alt="" />
              <div>
                <p className="text-gray-400">June 22, 2020</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <hr />

            <div className="flex gap-2 ">
              <Image src={s6i2} alt="" />
              <div>
                <p className="text-gray-400">June 22, 2020</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <hr />

            <div className="flex gap-2 ">
              <Image src={s6i3} alt="" />
              <div>
                <p className="text-gray-400">June 22, 2020</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <hr />

            <div className="flex gap-2 ">
              <Image src={s6i4} alt="" />
              <div>
                <p className="text-gray-400">June 22, 2020</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <hr />
          </div>
          {/* Filter by Menu */}
          <div className="flex flex-col  gap-2 border-2 border-gray-100 p-4">
            <h1 className="text-lg font-bold">Filter By Menu</h1>
            <div className="flex gap-2 items-center">
              <Image src={s6i1} alt="" />
              <div className="flex justify-between w-full">
                <h1 className=" font-bold">Chicken Fry</h1>
                <p>26</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Image src={s6i8} alt="" />
              <div className="flex justify-between w-full">
                <h1 className=" font-bold">Burger Food</h1>
                <p>46</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Image src={s6i5} alt="" />
              <div className="flex justify-between w-full">
                <h1 className=" font-bold">Pizza</h1>
                <p>16</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Image src={s6i6} alt="" />
              <div className="flex justify-between w-full">
                <h1 className=" font-bold">Fresh Fruits</h1>
                <p>36</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Image src={s6i7} alt="" />
              <div className="flex justify-between w-full">
                <h1 className=" font-bold">Vegetables</h1>
                <p>12</p>
              </div>
            </div>
          </div>
          {/* Populer Tags */}
          <div className="flex flex-col  gap-2 border-2 border-gray-100 p-4">
            <h1 className="text-lg font-bold">Populer Tags</h1>
            <div className="flex gap-4 flex-wrap items-center justify-center">
              <button className="border-2 border-gray-100 px-2 py-1 rounded">
                Chicken
              </button>
              <button className="border-2 border-gray-100 px-2 py-1 rounded">
                Burger
              </button>
              <button className="border-2 border-gray-100 px-2 py-1 rounded">
                Pizza
              </button>
              <button className="border-2 border-gray-100 px-2 py-1 rounded">
                Fresh Fruits
              </button>
              <button className="border-2 border-gray-100 px-2 py-1 rounded">
                Vegetables
              </button>
              <button className="border-2 border-gray-100 px-2 py-1 rounded">
                Health
              </button>
              <button className="border-2 border-gray-100 px-2 py-1 rounded">
                Fastfood
              </button>
              <button className="border-2 border-gray-100 px-2 py-1 rounded">
                Food
              </button>
            </div>
          </div>
          {/* Photo Gallery */}
          <div className="flex flex-col  gap-2 border-2 border-gray-100 p-4">
            <h1 className="text-lg font-bold">Photo Gallery</h1>
            <div className="flex gap-2 justify-center">
              <Image src={s6i1} alt="" />
              <Image src={s6i2} alt="" />
              <Image src={s6i3} alt="" />
            </div>
            <div className="flex gap-2 justify-center">
              <Image src={s6i4} alt="" />
              <Image src={s6i5} alt="" />
              <Image src={s6i6} alt="" />
            </div>
          </div>
          {/* Follow us */}
          <div className="flex flex-col  gap-2 border-2 border-gray-100 p-4">
            <h1 className="text-lg font-bold">Follow Us</h1>
            <div className="flex gap-2 justify-center">
              <div className="p-2 bg-gray-100 hover:bg-[#FF9F0D] courser-pointer">
                <FaFacebookF />
              </div>
              <div className="p-2 bg-gray-100 hover:bg-[#FF9F0D] courser-pointer">
                <BsYoutube />
              </div>
              <div className="p-2 bg-[#FF9F0D] courser-pointer">
                <IoLogoPinterest className="text-white" />
              </div>
              <div className="p-2 bg-gray-100 hover:bg-[#FF9F0D] courser-pointer">
                <FaTwitter />
              </div>
              <div className="p-2 bg-gray-100 hover:bg-[#FF9F0D] courser-pointer">
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
