"use client";
import React, { useState } from "react";
import menuIconPng from "@/app/assets/burgerMenu.jpg";
import crossIcon from "@/app/assets/crossIcon.png";
import Image from "next/image";
import Link from "next/link";

interface MobileHeaderProps {
  menuitem: { id: string; contant: string }[];
}
function MobileHeader({ menuitem }: MobileHeaderProps) {
  const [menuBtn, setmenuBtn] = useState(false);
  const [menuIcon, setmenuIcon] = useState(menuIconPng);
  function handleMenu() {
    setmenuBtn((prev) => !prev);
    if (menuBtn === true) {
      setmenuIcon(menuIconPng);
    } else {
      setmenuIcon(crossIcon);
    }
  }
  return (
    <>
      <div className="lg:hidden  sticky top-0 z-50 flex justify-between px-2 py-2  bg-black text-white">
        <h1 className="font-bold text-xl">
          <span className="text-[#FF9F0D] ">Food</span>tuck
        </h1>
        <Image src={menuIcon} alt="" className="h-8 w-8" onClick={handleMenu} />
      </div>
      {menuBtn && (
        <div className="lg:hidden flex gap-4  flex-col z-40 fixed right-0 text-lg font-bold items-center pt-4 h-screen float-right bg-black w-[60vw] text-white">
          {menuitem.map((menu) => (
            <ul key={menu.id}>
              <li className="flex items-center">
                <Link
                  onClick={handleMenu}
                  href={menu.contant === "/Home" ? "/" : `${menu.contant}`}
                >
                  {menu.id}
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
