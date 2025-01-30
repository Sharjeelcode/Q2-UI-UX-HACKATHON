import Image from "next/image";
import React from "react";
import heroSocialIcons from "@/app/assets/heroSocialIcons.png";
import heroText from "@/app/assets/heroText.png";
import heroImage from "@/app/assets/heroImage.png";
import Link from "next/link";

function Hero() {
  return (
    <div className="flex absolute top-14 md:top-20 text-white z-20 left-2 right-2  md:left-32 md:right-32">
      <div className="flex items-center w-full justify-between">
        {/* Social Icons */}
        <div>
          <Image src={heroSocialIcons} alt="" className="h-[80vh]" />
        </div>

        {/* Content */}
        <div className="flex w-full justify-center  lg:justify-between flex-wrap  md:flex-nowrap">
          {/* div1 */}
          <div className="flex flex-col  justify-center items-center md:items-start lg:w-[30vw] gap-2 md:gap-6">
            <Image src={heroText} alt="" />
            <h1 className=" lg:text-[30px] max-xl:text-[40px] font-bold">
              <span className="text-[#FF9F0D]">Th</span>e Art of speed <br />
              food Quality
            </h1>
            <p className="text-center lg:text-lg md:text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              sed pharetra dictum neque massa congue
            </p>
            <div className="hidden lg:flex">
              <Link
                href={"/Shop"}
                className="bg-[#FF9F0D] rounded-full lg:text-xl px-12  py-4 lg:px-12 lg:py-4"
              >
                See Menu
              </Link>
            </div>
          </div>

          {/* div2 */}
          <div className="">
            <Image
              src={heroImage}
              alt=""
              className="w-[80vw] sm:w-[40vw] md:w-[45vw] lg:w-[40vw] xl:w-[45vw]"
            />
            <div className="flex justify-center lg:hidden">
              <button className="bg-[#FF9F0D] rounded-full lg:text-xl px-12  py-4 lg:px-12 lg:py-4">
                See Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
