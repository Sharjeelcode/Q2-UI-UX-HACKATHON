"use client";
import React, { useEffect, useState } from "react";
import menuIconPng from "@/app/assets/burgerMenu.jpg";
import crossIcon from "@/app/assets/crossIcon.png";
import Image from "next/image";
import Link from "next/link";
import useCartStore from "../store/cartStore";
import basket from "@/app/assets/basket.png";

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
  const [totalItems, setTotalItems] = useState(0);
  const { cart } = useCartStore(); // Get cart from Zustand store

  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.quantity, 0);
    setTotalItems(total);
  }, [cart]);
  return (
    <>
      <div className="lg:hidden  sticky top-0 z-50 flex justify-between px-2 py-2  bg-black text-white">
        <h1 className="font-bold text-xl">
          <span className="text-[#FF9F0D] ">Food</span>tuck
        </h1>
        <div className="flex gap-2">
          <Link href={"/Cart"} className="relative flex items-center">
            <Image
              src={basket}
              alt="Basket Icon"
              className="w-[24px] h-[24px] mx-2"
            />
            {totalItems > 0 && (
              <h1 className="text-white bg-red-500 w-5 h-5 flex items-center justify-center rounded-full absolute top-[-8px] right-[-5px] text-sm">
                {totalItems}
              </h1>
            )}
          </Link>
          <Image
            src={menuIcon}
            alt=""
            className="h-8 w-8"
            onClick={handleMenu}
          />
        </div>
      </div>
      {menuBtn && (
        <div className="lg:hidden flex gap-8 flex-col z-40 fixed right-0 text-lg font-bold items-center pt-4 h-screen float-right backdrop-blur-md bg-black/50 w-full text-white">
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
