import Image from "next/image";
import React from "react";
import heroSocialIcons from "@/app/assets/heroSocialIcons.png";
import heroText from "@/app/assets/heroText.png";
import heroImage from "@/app/assets/heroImage.png";

function Hero() {
  return (
    <div className="flex h-screen absolute top-6 sm:top-12 text-white z-20 left-2  sm:left-32 sm:right-32">
      <div className="flex items-center w-full justify-between">
        {/* Social Icons */}
        <div>
          <Image src={heroSocialIcons} alt="" />
        </div>

        {/* Content */}
        <div className="flex w-full justify-center  lg:justify-between flex-wrap  md:flex-nowrap">
          {/* div1 */}
          <div className="flex flex-col justify-center w-[30vw] gap-6">
            <Image src={heroText} alt="" />
            <h1 className="text-[30px] md:text-[40px] font-bold">
              <span className="text-[#FF9F0D]">Th</span>e Art of speed <br />
              food Quality
            </h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              sed pharetra dictum neque massa congue
            </p>
            <div>
              <button className="bg-[#FF9F0D] rounded-full text-xl px-12 py-4">
                See Menu
              </button>
            </div>
          </div>

          {/* div2 */}
          <div className="">
            <Image
              src={heroImage}
              alt=""
              className="w-[80vw] sm:w-[40vw] md:w-[45vw] lg:w-[40vw] xl:w-[45vw]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
