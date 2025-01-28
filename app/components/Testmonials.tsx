import React from "react";
import {
  testmonials,
  testmonialProfile,
  Quotes,
  star,
  leafs,
  dot,
} from "@/app/assets/exportAssets";
import Image from "next/image";
function Testmonials() {
  return (
    <div className="mx-2  md:mx-[10vw] my-[10vh]">
      <div className="flex items-center lg:block lg:items-start flex-col mb-3">
        <Image src={testmonials} alt="" />
        <h1 className="text-xl md:text-[35px] font-bold">
          What our client are saying
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="  mt-28 h-auto bg-white text-black mx-2  lg:w-[80%] ">
          <div className="relative  flex flex-col justify-center items-center shadow-md pt-16 pb-4 px-4 md:px-16 gap-4">
            <Image
              src={testmonialProfile}
              alt=""
              className="absolute top-[-80px]"
            />
            <Image src={Quotes} alt="" />
            <p className="text-center md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </p>
            <Image src={star} alt="" />
            <h1 className="text-lg md:text-xl font-bold">Alamin Hassan</h1>
            <p className="text-gray-500">Food Specialist</p>
            <Image
              src={leafs}
              alt="leafs"
              className="absolute bottom-[-80px] lg:right-[-40px]"
            />
          </div>
        </div>
        <Image src={dot} alt="dot" />
      </div>
    </div>
  );
}

export default Testmonials;
