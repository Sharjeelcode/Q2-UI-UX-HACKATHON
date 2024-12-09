import React from "react";
import menuIcon from "@/app/assets/burgerMenu.jpg";
import Image from "next/image";

function MobileHeader() {
  return (
    <>
      <div className="lg:hidden sticky top-0 z-50 flex justify-between px-2 py-2  bg-black">
        <h1 className="font-bold text-xl">
          <span className="text-[#FF9F0D] ">Food</span>tuck
        </h1>
        <Image src={menuIcon} alt="" className="h-8 w-8" />
      </div>
      <div></div>
    </>
  );
}

export default MobileHeader;
