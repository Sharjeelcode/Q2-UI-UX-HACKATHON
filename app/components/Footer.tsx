import Image from "next/image";
import React from "react";
import watch from "@/app/assets/Watch.png";
import Link from "next/link";
import footerImg1 from "@/app/assets/footer1.png";
import footerImg2 from "@/app/assets/footer2.png";
import footerImg3 from "@/app/assets/footer3.png";
import footerHero from "@/app/assets/footerHero.png";

function Footer() {
  return (
    <>
      <div className=" bottom-0">
        <div className="relative h-auto w-auto">
          <div className=" mx-auto max-w-7xl px-6 my-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-4 md:mx-20 border-b-2 border-[#FF9F0D] pb-4 items-center">
              <div className="text-center md:text-left">
                <h1 className="text-2xl">
                  <span className="text-[#FF9F0D]">St</span>ill You Need Our
                  Support?
                </h1>
                <h6 className="pt-3">
                  Don&apos;t wait, make a smart & logical quote here. It&apos;s
                  pretty easy.
                </h6>
              </div>
              <div className="flex flex-col md:flex-row justify-center md:justify-end items-center gap-4 md:gap-0">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="bg-[#FF9F0D] text-white px-6 py-2 outline-none text-sm rounded-sm placeholder-white w-full md:w-auto"
                />
                <button className="bg-white px-6 py-2 text-[#FF9F0D] rounded-sm text-sm">
                  Subscribe Now
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 ">
              <div>
                <h1 className="text-2xl pb-4">About Us.</h1>
                <p className="break-normal">
                  orporate clients and leisure travelers has been relying on
                  Groundlink for dependab safe, and professional chauffeured car
                  service in major cities across World.
                </p>
                <div className="flex gap-2">
                  <Image src={watch} alt="" />
                  <div>
                    <h4>Opening Houres</h4>
                    <h6 className="text-sm">Mon -Sat(8.00 - 6.00)</h6>
                    <h6 className="text-sm">Sunday - Closed</h6>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-2xl pb-4">Useful Links</h1>
                <div className="flex flex-col gap-3">
                  <Link href={"/about"} className="text-lg">
                    About
                  </Link>
                  <Link href={"/news"} className="text-lg">
                    News
                  </Link>
                  <Link href={"/Partners"} className="text-lg">
                    News
                  </Link>
                  <Link href={"/Team"} className="text-lg">
                    Team
                  </Link>
                  <Link href={"/Menu"} className="text-lg">
                    Menu
                  </Link>
                  <Link href={"/Contact"} className="text-lg">
                    Contact
                  </Link>
                </div>
              </div>
              <div>
                <h1 className="text-2xl pb-4">Help?</h1>
                <div className="flex flex-col gap-3">
                  <Link href={"/faq"} className="text-lg">
                    FAQ
                  </Link>
                  <Link href={"/term&condition"} className="text-lg">
                    Term & conditions
                  </Link>
                  <Link href={"/reporting"} className="text-lg">
                    Reporting
                  </Link>
                  <Link href={"/documentation"} className="text-lg">
                    documentation
                  </Link>
                  <Link href={"/supportpolicy"} className="text-lg">
                    Support Policy
                  </Link>
                  <Link href={"/privacy"} className="text-lg">
                    privacy
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl pb-4">Recent Post</h1>
                <div className="flex gap-2">
                  <Image src={footerImg1} alt="" />
                  <div>
                    <h6 className="text-sm text-gray-500">20 Feb 2022</h6>
                    <h5 className="text-sm">Keep Your Business</h5>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Image src={footerImg2} alt="" />
                  <div>
                    <h6 className="text-sm text-gray-500">20 Feb 2022</h6>
                    <h5 className="text-sm">Keep Your Business</h5>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Image src={footerImg3} alt="" />
                  <div>
                    <h6 className="text-sm text-gray-500">20 Feb 2022</h6>
                    <h5 className="text-sm">Keep Your Business</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom Footer */}
          <div className="bg-white bg-opacity-50 backdrop-blur-lg py-6">
            <div className=" flex flex-col items-center justify-between md:flex-row mx-auto max-w-7xl px-6  ">
              <div className="">
                <h1 className="text-center">
                  Copyright © 2022 by Ayeman. All Rights Reserved.
                </h1>
              </div>
              {/* socail icons */}
              <div className="flex gap-2 mt-2 md:mt-0">
                <svg
                  width="36"
                  height="34"
                  viewBox="0 0 36 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 2C0 0.89543 0.89543 0 2 0H34C35.1046 0 36 0.89543 36 2V32C36 33.1046 35.1046 34 34 34H2C0.895431 34 0 33.1046 0 32V2Z"
                    fill="white"
                  />
                  <path
                    d="M21.7188 18.5H19.375V25.5H16.25V18.5H13.6875V15.625H16.25V13.4062C16.25 10.9062 17.75 9.5 20.0312 9.5C21.125 9.5 22.2812 9.71875 22.2812 9.71875V12.1875H21C19.75 12.1875 19.375 12.9375 19.375 13.75V15.625H22.1562L21.7188 18.5Z"
                    fill="#4F4F4F"
                  />
                </svg>
                <svg
                  width="36"
                  height="34"
                  viewBox="0 0 36 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 2C0 0.89543 0.89543 0 2 0H34C35.1046 0 36 0.89543 36 2V32C36 33.1046 35.1046 34 34 34H2C0.895431 34 0 33.1046 0 32V2Z"
                    fill="white"
                  />
                  <path
                    d="M24.3438 14.25C24.3438 14.4062 24.3438 14.5312 24.3438 14.6875C24.3438 19.0312 21.0625 24 15.0312 24C13.1562 24 11.4375 23.4688 10 22.5312C10.25 22.5625 10.5 22.5938 10.7812 22.5938C12.3125 22.5938 13.7188 22.0625 14.8438 21.1875C13.4062 21.1562 12.1875 20.2188 11.7812 18.9062C12 18.9375 12.1875 18.9688 12.4062 18.9688C12.6875 18.9688 13 18.9062 13.25 18.8438C11.75 18.5312 10.625 17.2188 10.625 15.625V15.5938C11.0625 15.8438 11.5938 15.9688 12.125 16C11.2188 15.4062 10.6562 14.4062 10.6562 13.2812C10.6562 12.6562 10.8125 12.0938 11.0938 11.625C12.7188 13.5938 15.1562 14.9062 17.875 15.0625C17.8125 14.8125 17.7812 14.5625 17.7812 14.3125C17.7812 12.5 19.25 11.0312 21.0625 11.0312C22 11.0312 22.8438 11.4062 23.4688 12.0625C24.1875 11.9062 24.9062 11.625 25.5312 11.25C25.2812 12.0312 24.7812 12.6562 24.0938 13.0625C24.75 13 25.4062 12.8125 25.9688 12.5625C25.5312 13.2188 24.9688 13.7812 24.3438 14.25Z"
                    fill="#4F4F4F"
                  />
                </svg>
                <svg
                  width="36"
                  height="34"
                  viewBox="0 0 36 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 2C0 0.89543 0.89543 0 2 0H34C35.1046 0 36 0.89543 36 2V32C36 33.1046 35.1046 34 34 34H2C0.895431 34 0 33.1046 0 32V2Z"
                    fill="white"
                  />
                  <path
                    d="M18 12.9062C19.9688 12.9062 21.5938 14.5312 21.5938 16.5C21.5938 18.5 19.9688 20.0938 18 20.0938C16 20.0938 14.4062 18.5 14.4062 16.5C14.4062 14.5312 16 12.9062 18 12.9062ZM18 18.8438C19.2812 18.8438 20.3125 17.8125 20.3125 16.5C20.3125 15.2188 19.2812 14.1875 18 14.1875C16.6875 14.1875 15.6562 15.2188 15.6562 16.5C15.6562 17.8125 16.7188 18.8438 18 18.8438ZM22.5625 12.7812C22.5625 13.25 22.1875 13.625 21.7188 13.625C21.25 13.625 20.875 13.25 20.875 12.7812C20.875 12.3125 21.25 11.9375 21.7188 11.9375C22.1875 11.9375 22.5625 12.3125 22.5625 12.7812ZM24.9375 13.625C25 14.7812 25 18.25 24.9375 19.4062C24.875 20.5312 24.625 21.5 23.8125 22.3438C23 23.1562 22 23.4062 20.875 23.4688C19.7188 23.5312 16.25 23.5312 15.0938 23.4688C13.9688 23.4062 13 23.1562 12.1562 22.3438C11.3438 21.5 11.0938 20.5312 11.0312 19.4062C10.9688 18.25 10.9688 14.7812 11.0312 13.625C11.0938 12.5 11.3438 11.5 12.1562 10.6875C13 9.875 13.9688 9.625 15.0938 9.5625C16.25 9.5 19.7188 9.5 20.875 9.5625C22 9.625 23 9.875 23.8125 10.6875C24.625 11.5 24.875 12.5 24.9375 13.625ZM23.4375 20.625C23.8125 19.7188 23.7188 17.5312 23.7188 16.5C23.7188 15.5 23.8125 13.3125 23.4375 12.375C23.1875 11.7812 22.7188 11.2812 22.125 11.0625C21.1875 10.6875 19 10.7812 18 10.7812C16.9688 10.7812 14.7812 10.6875 13.875 11.0625C13.25 11.3125 12.7812 11.7812 12.5312 12.375C12.1562 13.3125 12.25 15.5 12.25 16.5C12.25 17.5312 12.1562 19.7188 12.5312 20.625C12.7812 21.25 13.25 21.7188 13.875 21.9688C14.7812 22.3438 16.9688 22.25 18 22.25C19 22.25 21.1875 22.3438 22.125 21.9688C22.7188 21.7188 23.2188 21.25 23.4375 20.625Z"
                    fill="#4F4F4F"
                  />
                </svg>
                <svg
                  width="36"
                  height="34"
                  viewBox="0 0 36 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 2C0 0.89543 0.89543 0 2 0H34C35.1046 0 36 0.89543 36 2V32C36 33.1046 35.1046 34 34 34H2C0.895431 34 0 33.1046 0 32V2Z"
                    fill="white"
                  />
                  <path
                    d="M26.1562 12.4062C26.5312 13.7188 26.5312 16.5312 26.5312 16.5312C26.5312 16.5312 26.5312 19.3125 26.1562 20.6562C25.9688 21.4062 25.375 21.9688 24.6562 22.1562C23.3125 22.5 18 22.5 18 22.5C18 22.5 12.6562 22.5 11.3125 22.1562C10.5938 21.9688 10 21.4062 9.8125 20.6562C9.4375 19.3125 9.4375 16.5312 9.4375 16.5312C9.4375 16.5312 9.4375 13.7188 9.8125 12.4062C10 11.6562 10.5938 11.0625 11.3125 10.875C12.6562 10.5 18 10.5 18 10.5C18 10.5 23.3125 10.5 24.6562 10.875C25.375 11.0625 25.9688 11.6562 26.1562 12.4062ZM16.25 19.0625L20.6875 16.5312L16.25 14V19.0625Z"
                    fill="#FF9F0D"
                  />
                </svg>
                <svg
                  width="36"
                  height="34"
                  viewBox="0 0 36 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 2C0 0.89543 0.89543 0 2 0H34C35.1046 0 36 0.89543 36 2V32C36 33.1046 35.1046 34 34 34H2C0.895431 34 0 33.1046 0 32V2Z"
                    fill="white"
                  />
                  <path
                    d="M25.5 17.5C25.5 21.7812 22.0312 25.25 17.75 25.25C16.9375 25.25 16.1562 25.1562 15.4375 24.9062C15.75 24.4062 16.2188 23.5625 16.4062 22.875C16.5 22.5312 16.875 21.0312 16.875 21.0312C17.125 21.5312 17.875 21.9375 18.6562 21.9375C21 21.9375 22.6875 19.7812 22.6875 17.125C22.6875 14.5625 20.5938 12.625 17.9062 12.625C14.5625 12.625 12.7812 14.875 12.7812 17.3125C12.7812 18.4688 13.375 19.875 14.3438 20.3438C14.5 20.4062 14.5938 20.375 14.625 20.2188C14.625 20.125 14.7812 19.5938 14.8438 19.3438C14.8438 19.2812 14.8438 19.1875 14.7812 19.125C14.4688 18.75 14.2188 18.0312 14.2188 17.3438C14.2188 15.6562 15.5 14 17.7188 14C19.5938 14 20.9375 15.2812 20.9375 17.1562C20.9375 19.25 19.875 20.6875 18.5 20.6875C17.75 20.6875 17.1875 20.0625 17.3438 19.3125C17.5625 18.375 18 17.375 18 16.7188C18 16.125 17.6875 15.625 17.0312 15.625C16.25 15.625 15.625 16.4375 15.625 17.5C15.625 18.1875 15.8438 18.6562 15.8438 18.6562C15.8438 18.6562 15.0938 21.9062 14.9375 22.5C14.7812 23.1875 14.8438 24.125 14.9062 24.7188C12.0312 23.5938 10 20.8125 10 17.5C10 13.2188 13.4688 9.75 17.75 9.75C22.0312 9.75 25.5 13.2188 25.5 17.5Z"
                    fill="#4F4F4F"
                  />
                </svg>
              </div>
            </div>
          </div>
          <Image
            className="absolute bottom-0 right-0"
            src={footerHero}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Footer;
