"use client";
import Image from "next/image";
import React, { useState } from "react";
import UserDefaultImg from "../assets/User.png";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

function UserIcon() {
  const { user } = useUser();
  const [menu, setmenu] = useState(false);

  return (
    <>
      {!user ? (
        <div className="relative">
          <Image
            src={UserDefaultImg}
            alt="UserImg"
            className="w-[24px] h-[24px] mx-2 rounded-full cursor-pointer"
            width={24}
            height={24}
            onClick={() => (menu == false ? setmenu(true) : setmenu(false))}
          />
          {menu && (
            <div className="absolute top-8 right-3 rounded-md  backdrop-blur-sm bg-black/50 text-white w-32">
              <div className="px-2 py-1 flex flex-col ">
                <div className="  hover:border-b-2">
                  <SignInButton />
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <UserButton />
      )}
    </>
  );
}

export default UserIcon;
