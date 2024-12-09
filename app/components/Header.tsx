import Image from "next/image";
import React from "react";
import searchIcon from "@/app/assets/Group.png";
import handbag from "@/app/assets/Handbag.png";
import aboutmenu from "@/app/assets/aboutmenu.png";
import MobileHeader from "./MobileHeader";
import Link from "next/link";
function Header() {
  interface MenuItem {
    id: string;
    contant: string;
  }
  const headermenu: MenuItem[] = [
    { id: "Home", contant: "Home" },
    { id: "Menu", contant: "Menu" },
    { id: "Blog", contant: "Blog" },
    { id: "Pages", contant: "Pages" },
    { id: "About", contant: "About" },
    { id: "Contact", contant: "Contact" },
  ];
  return (
    <>
      {/* small devices header */}
      <MobileHeader menuitem={headermenu} />
      {/* large devices header */}
      <div className="hidden lg:flex fixed w-screen  justify-center top-[35px] z-50">
        <div className=" flex  flex-col justify-between w-[70vw] h-[87px] border-2 border-black">
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
                      href={menu.contant === "Home" ? "/" : `${menu.contant}`}
                      className="flex items-center gap-1"
                    >
                      {menu.contant != "About" ? (
                        menu.contant
                      ) : (
                        <>
                          {menu.contant}{" "}
                          <Image
                            src={aboutmenu}
                            alt=""
                            className="w-[12px] h-[12px]"
                          />
                        </>
                      )}
                    </Link>
                  </li>
                </ul>
              ))}
            </div>
            <div>
              <div className="flex items-center">
                <div className="flex items-center justify-between px-4 border-2 border-[#FF9F0D] w-[210px]  h-[44px] rounded-[27px] ">
                  <h3>Search...</h3>
                  <Image src={searchIcon} alt="" />
                </div>
                <Image
                  src={handbag}
                  alt=""
                  className="w-[24px] h-[24px] mx-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
