import Image from "next/image";
import React from "react";
import heroSocialIcons from "@/app/assets/heroSocialIcons.png";
import heroText from "@/app/assets/heroText.png";
import heroImage from "@/app/assets/heroImage.png";
function Hero() {
  return (
    <div className="absolute top-[130px] mx-[150px]  text-white z-50">
      <div className="flex justify-between  w-[80vw]">
        <div className="flex gap-4">
          <Image src={heroSocialIcons} alt="" />
          <div className="flex flex-col justify-center">
            <Image src={heroText} alt="" />
            <h1 className="text-[40px] font-bold">
              <span className="text-[#FF9F0D] ">Th</span>e Art of speed <br />
              food Quality
            </h1>
          </div>
        </div>
        <div>
          <Image src={heroImage} alt="" className="w-[667px]" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
