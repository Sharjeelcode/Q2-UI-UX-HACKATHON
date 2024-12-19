import heroBackgroundImg from "@/app/assets/heroBackgroundImg.png";
import Hero from "./components/Hero";
import Image from "next/image";
import aboutFont from "@/app/assets/aboutText.png";
import check from "@/app/assets/check.png";
import egg from "@/app/assets/egg.png";
import dish from "@/app/assets/dish.png";
import sandwich from "@/app/assets/sandwich.png";
import foodCatagory from "@/app/assets/Food Category.png";
import save30 from "@/app/assets/save30.png";
import nugets from "@/app/assets/nugets.png";
import burger from "@/app/assets/burger.png";
import fruits from "@/app/assets/fruit.png";

export default function Home() {
  return (
    <>
      <div
        className="w-full min-h-screen"
        style={{
          backgroundImage: `url(${heroBackgroundImg.src})`, // Optional: Replace with a background color if needed
          backgroundSize: "cover", // Makes the image cover the entire div
          backgroundPosition: "center", // Centers the background
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
          backgroundColor: "#f0f0f0", // Add a fallback background color
          opacity: "",
        }}
      >
        <div className="w-full min-h-screen bg-black opacity-85"></div>
        {/* Hero Content */}
        <div className="">
          <Hero />
        </div>
      </div>
      {/* 2nd section */}
      <div className="mx-[10vw] my-[17vh]">
        <div className="flex gap-6 ">
          <div className="flex flex-col gap-4 w-[50%]">
            <Image src={aboutFont} alt="" />
            <h1 className="text-[35px] font-bold">
              <span className="text-[#FF9F0D]">We </span> Create the best <br />{" "}
              foody product
            </h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </p>
            <div className="flex gap-4 items-center">
              <span>
                <Image src={check} alt="" />
              </span>
              <p className="text-lg">
                {" "}
                Lacus nisi, et ac dapibus sit eu velit in consequat.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <span>
                <Image src={check} alt="" />
              </span>
              <p className="text-lg">
                {" "}
                Quisque diam pellentesque bibendum non dui volutpat fringilla{" "}
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <span>
                <Image src={check} alt="" />
              </span>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
            <div>
              <button className="bg-[#FF9F0D] rounded-full text-xl px-12 py-4">
                Read More
              </button>
            </div>
          </div>
          <div className="w-[50%]">
            <div>
              <Image src={egg} alt="" className="w-full mb-2" />
            </div>
            <div className="flex gap-2">
              <Image src={dish} alt="" className="w-[50%]" />
              <Image src={sandwich} alt="" className="w-[50%]" />
            </div>
          </div>
        </div>
      </div>
      {/* 3rd section */}

      <div className="mx-[10vw] my-[17vh]">
        <div className="flex flex-col items-center mb-3">
          <Image src={foodCatagory} alt="" className="items-center" />
          <h1 className="text-[35px] font-bold">
            <span className="text-[#FF9F0D]">Ch</span>oose Food Iteam
          </h1>
        </div>
        <div className="flex gap-4">
          <Image src={save30} alt="" className="w-full mb-2" />
          <Image src={burger} alt="" className="w-full mb-2" />
          <Image src={fruits} alt="" className="w-full mb-2" />
          <Image src={nugets} alt="" className="w-full mb-2" />
        </div>
      </div>
    </>
  );
}
