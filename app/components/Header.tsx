"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import searchIcon from "@/app/assets/Group.png";
import MagnifyingGlass from "@/app/assets/MagnifyingGlass.png";
import User from "@/app/assets/User.png";
import basket from "@/app/assets/basket.png";
import MobileHeader from "./MobileHeader";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useCartStore from "../store/cartStore";
interface MenuItem {
  id: string;
  contant: string;
}
function Header() {
  const pathname = usePathname();
  const { cart } = useCartStore(); // Get cart from Zustand store
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.quantity, 0);
    setTotalItems(total);
  }, [cart]);
  const headermenu: MenuItem[] = [
    { id: "Home", contant: "/Home" },
    { id: "Menu", contant: "/Menu" },
    { id: "Blog", contant: "/Blog" },
    { id: "Chefs", contant: "/Chefs" },
    { id: "About", contant: "/About" },
    { id: "Shop", contant: "/Shop" },
  ];
  return (
    <>
      {/* small devices header */}
      <MobileHeader menuitem={headermenu} />

      {/* condional rendring of header menu for diffrent pages */}
      {pathname == "/" ? (
        <div className="bg-[#0a0a0a] text-[#ededed]">
          {/* large devices header */}
          <div className="hidden lg:flex fixed w-screen  justify-center top-[15px] z-50">
            <div className=" flex  flex-col justify-between w-[70vw] h-[87px] ">
              <div>
                <h1 className="text-center font-bold text-2xl">
                  <span className="text-[#FF9F0D] ">Food</span>tuck
                </h1>
              </div>
              <div className="flex justify-between  bottom-0">
                <div className="flex gap-4 items-center text-lg">
                  {headermenu.map((menu) => (
                    <ul key={menu.id}>
                      <li className="flex items-center">
                        <Link
                          href={menu.id === "Home" ? "/" : `${menu.id}`}
                          className="flex items-center gap-1"
                        >
                          {menu.id != "About" ? menu.id : <>{menu.id} </>}
                        </Link>
                      </li>
                    </ul>
                  ))}
                </div>
                <div>
                  <div className="flex items-center justify-end gap-4">
                    {/* Search Bar */}
                    <div className="flex items-center justify-between px-4 border-2 border-[#FF9F0D] w-[300px] h-[44px] rounded-[27px]">
                      <h3 className="text-gray-500">Search...</h3>
                      <Image src={searchIcon} alt="Search Icon" />
                    </div>
                    <Image
                      src={User}
                      alt=""
                      className="w-[24px] h-[24px] mx-2"
                    />

                    {/* Cart Icon */}
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-[#0a0a0a] text-[#ededed]">
          {/* large devices header */}
          <div className="hidden lg:flex lg:fixed top-0 w-screen  justify-around items-center py-6 z-50 bg-[#0a0a0a]">
            <Link href={"/"}>
              <h1 className="text-center font-bold text-2xl">
                <span className="text-[#FF9F0D] ">Food</span>tuck
              </h1>
            </Link>
            <div className="flex gap-4 items-center text-lg">
              {headermenu.map((menu) => (
                <ul key={menu.id}>
                  <li className="flex items-center">
                    <Link
                      href={menu.contant === "/Home" ? "/" : `${menu.contant}`}
                      className="flex items-center gap-1"
                    >
                      {menu.id != "About" ? menu.id : <>{menu.id} </>}
                    </Link>
                  </li>
                </ul>
              ))}
            </div>
            <div>
              <div className="flex items-center">
                <Image
                  src={MagnifyingGlass}
                  alt=""
                  className="w-[24px] h-[24px] mx-2"
                />
                <Image src={User} alt="" className="w-[24px] h-[24px] mx-2" />
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
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
