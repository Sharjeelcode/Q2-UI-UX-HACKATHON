import Image from "next/image";
import React from "react";
import heroSocialIcons from "@/app/assets/heroSocialIcons.png";
import heroText from "@/app/assets/heroText.png";
import heroImage from "@/app/assets/heroImage.png";

function Hero() {
  return (
    <div className="flex h-screen absolute top-12 text-white z-20 left-2  md:left-32 md:right-32">
      <div className="flex items-center w-full justify-between">
        {/* Social Icons */}
        <div>
          <Image src={heroSocialIcons} alt="" />
        </div>

        {/* Content */}
        <div className="flex w-full justify-center  lg:justify-between flex-wrap  md:flex-nowrap">
          {/* div1 */}
          <div className="flex flex-col justify-center">
            <Image src={heroText} alt="" />
            <h1 className="lg:text-[40px] font-bold">
              <span className="text-[#FF9F0D]">Th</span>e Art of speed <br />
              food Quality
            </h1>
          </div>

          {/* div2 */}
          <div className="">
            <Image
              src={heroImage}
              alt=""
              className="w-[80vw] sm:w-[40vw] md:w-[35vw] lg:w-[40vw] xl:w-[45vw]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
