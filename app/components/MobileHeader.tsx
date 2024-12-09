"use client";
import React, { useState } from "react";
import menuIcon from "@/app/assets/burgerMenu.jpg";
import Image from "next/image";
import Link from "next/link";

function MobileHeader({ menuitem }) {
  const [menuBtn, setmenuBtn] = useState(false);
  interface MobileHeaderProps {
    menuitem: { id: string; contant: string }[];
  }
  function handleMenu() {
    menuBtn === false ? setmenuBtn(true) : setmenuBtn(false);
  }
  return (
    <>
      <div className="lg:hidden  sticky top-0 z-50 flex justify-between px-2 py-2  bg-black">
        <h1 className="font-bold text-xl">
          <span className="text-[#FF9F0D] ">Food</span>tuck
        </h1>
        <Image src={menuIcon} alt="" className="h-8 w-8" onClick={handleMenu} />
      </div>
      {menuBtn && (
        <div className="lg:hidden flex gap-4  flex-col z-40 fixed right-0 text-lg font-bold items-center pt-4 h-screen float-right bg-black w-[60vw]">
          {menuitem.map((menu: any) => (
            <ul className="">
              <li key={menu.id} className="flex items-center">
                <Link href={menu.contant === "Home" ? "/" : `${menu.contant}`}>
                  {menu.contant}
                </Link>
              </li>
            </ul>
          ))}
        </div>
      )}
    </>
  );
}

export default MobileHeader;
