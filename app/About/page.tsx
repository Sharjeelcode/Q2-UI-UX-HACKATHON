import React from "react";
import AllPagesHeroImg from "../components/AllPagesHeroImg";
import Image from "next/image";
import aboutImg from "@/app/assets/aboutImg.png";
import aboutFont from "@/app/assets/aboutFont.png";
import playBtn from "@/app/assets/playBtn.png";
import chooseUs from "@/app/assets/chooseUs.png";
import Student from "@/app/assets/Student.png";
import Coffee from "@/app/assets/Coffee.png";
import Person from "@/app/assets/Person.png";
import chef from "@/app/assets/chef.png";
import Testmonials from "../components/Testmonials";

function page() {
  return (
    <>
      <AllPagesHeroImg page="About Us" />
      <div className="flex flex-col  mx-4 md:mx-[5vw] justify-center my-[3vh] px- md:px-4 lg:px-10 md:gap-4 lg:gap-10  ">
        {/* About us section */}
        <div className="flex flex-col md:flex-row gap-2">
          <div className="md:w-[50%]">
            <Image src={aboutImg} alt="" />
          </div>
          <div className="text-center md:text-start flex flex-col gap-5 justify-center items-center md:items-start  md:pl-14 md:w-[50%]">
            <Image src={aboutFont} alt="" />
            <h1 className=" text-2xl lg:text-4xl font-bold">
              Food is an important <br /> part Of a balanced Diet
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>
            <div className="flex items-center gap-2">
              <button className=" px-2 md:px-6 py-2 text-white rounded bg-[#FF9F0D]">
                {" "}
                Show More
              </button>
              <button>
                <Image src={playBtn} alt="plyBtn" className="h-12" />
              </button>
              <h3>Watch Video</h3>
            </div>
          </div>
        </div>

        {/* why choose us */}
        <div className="flex flex-col gap-7">
          <div className="text-center">
            <h1 className=" text-2xl lg:text-4xl font-bold">Why Choose us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam <br />
              pellentesque bibendum non dui volutpat fringilla bibendum.{" "}
            </p>
          </div>
          <Image src={chooseUs} alt="Choose us" />
          <div className="flex items-center flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-4 items-center text-center md:w-[33%]">
              <Image src={Student} alt="Student" />
              <h1 className="font-bold text-lg">Best Chef</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat{" "}
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center text-center md:w-[33%]">
              <Image src={Coffee} alt="Student" />
              <h1 className="font-bold text-lg">120 Item food</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat{" "}
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center text-center md:w-[33%]">
              <Image src={Person} alt="Student" />
              <h1 className="font-bold text-lg">Clean Environment</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat{" "}
              </p>
            </div>
          </div>
        </div>

        {/* Our Team */}
        <Testmonials />
      </div>
    </>
  );
}

export default page;
