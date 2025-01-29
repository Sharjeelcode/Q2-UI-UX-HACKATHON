import React from "react";
import QuanitityBtn from "./QuanitityBtn";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoIosGitCompare, IoMdHeartEmpty } from "react-icons/io";
import Image from "next/image";
import star from "@/app/assets/Star.png";
import { urlFor } from "@/sanity/lib/image";
import freshLime from "@/app/assets/freshLime.png";

interface productDetail {
  image: string;
  name: string;
  salePrice: number;
  orignalPrice: number;
  tags: string[];
  catagory: string;
}
const ProductDetail: React.FC<productDetail> = ({
  image,
  name,
  salePrice,
  orignalPrice,
  tags,
  catagory,
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="md:w-[40%] lg:w-[70%]">
        <Image
          src={image ? urlFor(image).url() : freshLime}
          width={500}
          height={500}
          // src={urlFor(productDetials.image).url()}
          alt="magnifying glass"
          className="w-full h-[80%] lg:h-[90%]"
        />
      </div>
      <div className="md:w-[70%]">
        <h1 className="font-bold text-4xl py-4">{name}</h1>
        <p className="pb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna,
          vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae
          mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>
        <hr />
        <h1 className="text-2xl font-bold mt-2">
          {salePrice ? (
            <div className="flex gap-2">
              <p className=" ">${salePrice}.00</p>
              <p className="text-gray-400 line-through">${orignalPrice}.00</p>
            </div>
          ) : (
            <p className=" ">${orignalPrice}.00</p>
          )}
        </h1>
        <div className="flex flex-col md:flex-row gap-4 text-gray-400">
          <Image src={star} alt="magnifying glass" />
          <div className="flex flex-row gap-2">
            <p className="">5.0 Rating</p>

            <p>|</p>
            <p>22 Review</p>
          </div>
        </div>
        <p className="py-4">Dictum/cursus/Risus</p>
        <div className="flex gap-4 pb-4">
          <QuanitityBtn />
          <div>
            <button className="bg-[#FF9F0D] text-sm px-4 lg:px-6 text-white flex gap-2 py-2 items-center">
              <MdOutlineShoppingBag />
              Add to cart
            </button>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-3 mt-4">
          <h1 className="flex leading-[15px] gap-[15px] text-[15px]">
            <IoMdHeartEmpty /> Add to Wishlist <IoIosGitCompare />
            Compare
          </h1>
          <h1 className="leading-[15px] gap-[15px] text-[15px]">
            Category: {catagory}
          </h1>
          <h1 className="leading-[15px] gap-[15px] text-[15px]">
            Tag: {tags?.map((tag) => `${tag} `)}
          </h1>
        </div>
        <div className="flex leading-[20px] gap-4 py-3">
          Share: <FaInstagram className="text-[20px]" />{" "}
          <AiFillTwitterCircle className="text-[20px]" />{" "}
          <FaFacebook className="text-[20px]" />{" "}
          <AiFillTwitterCircle className="text-[20px]" />
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ProductDetail;
