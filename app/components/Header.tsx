import Image from "next/image";
import React from "react";
import searchIcon from "@/app/assets/Group.png";
import handbag from "@/app/assets/Handbag.png";
import aboutmenu from "@/app/assets/aboutmenu.png";
function Header() {
  const headermenu = [
    { id: "Home", contant: "Home" },
    { id: "Menu", contant: "Menu" },
    { id: "Blog", contant: "Blog" },
    { id: "Pages", contant: "Pages" },
    { id: "About", contant: "About" },
    { id: "Contact", contant: "Contact" },
  ];
  return (
    <div className="fixed w-screen flex justify-center top-[45px] z-50">
      <div className=" flex  flex-col justify-between w-[70vw] h-[87px] border-2">
        <div>
          <h1 className="text-center font-bold text-xl">
            <span className="text-[#FF9F0D] ">Food</span>tuck
          </h1>
        </div>
        <div className="flex justify-between  bottom-0">
          <div className="flex gap-4 items-center">
            {headermenu.map((menu) => (
              <ul>
                <li key={menu.id} className="flex items-center">
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
                </li>
              </ul>
            ))}
          </div>
          <div>
            <div className="flex items-center">
              <div className="flex items-center justify-between px-4 border-2 border-[#FF9F0D] w-[310px] h-[54px] rounded-[27px] ">
                <h3>Search...</h3>
                <Image src={searchIcon} alt="" />
              </div>
              <Image src={handbag} alt="" className="w-[24px] h-[24px] mx-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
