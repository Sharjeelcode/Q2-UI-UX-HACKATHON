import heroBackgroundImg from "@/app/assets/heroBackgroundImg.png";
import Hero from "./components/Hero";
import Image from "next/image";
import aboutFont from "@/app/assets/aboutText.png";
import check from "@/app/assets/check.png";
import egg from "@/app/assets/egg.png";
import dish from "@/app/assets/dish.png";
import sandwich from "@/app/assets/sandwich.png";
import foodCatagory from "@/app/assets/Food Category.png";
import save30 from "@/app/assets/save30.png";
import nugets from "@/app/assets/nugets.png";
import burger from "@/app/assets/burger.png";
import fruits from "@/app/assets/fruit.png";
import sec4Image from "@/app/assets/sec4Img.png";
import sec4font from "@/app/assets/sec4font.png";
import iconbox from "@/app/assets/iconbox.png";
import experience from "@/app/assets/experince.png";
import clientImage from "@/app/assets/Clients.png";
import choose from "@/app/assets/choose.png";
import sec6pic from "@/app/assets/sec6pic.png";
import s6i1 from "@/app/assets/s6i1.png";
import s6i2 from "@/app/assets/s6i2.png";
import s6i3 from "@/app/assets/s6i3.png";
import s6i4 from "@/app/assets/s6i4.png";
import s6i5 from "@/app/assets/s6i5.png";
import s6i6 from "@/app/assets/s6i6.png";
import s6i7 from "@/app/assets/s6i7.png";
import s6i8 from "@/app/assets/s6i8.png";
import HomeSection6 from "./components/homeSection6";
export default function Home() {
  return (
    <>
      <div
        className="w-full min-h-screen"
        style={{
          backgroundImage: `url(${heroBackgroundImg.src})`, // Optional: Replace with a background color if needed
          backgroundSize: "cover", // Makes the image cover the entire div
          backgroundPosition: "center", // Centers the background
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
          backgroundColor: "#f0f0f0", // Add a fallback background color
          opacity: "",
        }}
      >
        <div className="w-full min-h-screen bg-black opacity-85"></div>
        {/* Hero Content */}
        <div className="">
          <Hero />
        </div>
      </div>
      {/* 2nd section */}
      <div className="mx-4 md:mx-[10vw] my-[5vh] flex flex-wrap">
        <div className="flex gap-6  flex-wrap lg:flex-nowrap justify-center">
          <div className="flex flex-col gap-4 justify-center lg:w-[50%]">
            <Image src={aboutFont} alt="" />
            <h1 className=" text-2xl md:text-[35px] font-bold">
              <span className="text-[#FF9F0D]">We </span> Create the best <br />{" "}
              foody product
            </h1>
            <p className="lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </p>
            <div className="flex gap-4 items-center">
              <span>
                <Image src={check} alt="" />
              </span>
              <p className="lg:text-lg">
                {" "}
                Lacus nisi, et ac dapibus sit eu velit in consequat.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <span>
                <Image src={check} alt="" />
              </span>
              <p className="lg:text-lg">
                {" "}
                Quisque diam pellentesque bibendum non dui volutpat fringilla{" "}
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <span>
                <Image src={check} alt="" />
              </span>
              <p className="lg:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
            <div className="hidden lg:flex">
              <button className="bg-[#FF9F0D] rounded-full text-xl px-12 py-4">
                Read More
              </button>
            </div>
          </div>
          <div className="w-auto lg:w-[50%] mx-4">
            <div>
              <Image src={egg} alt="" className="w-full mb-2" />
            </div>
            <div className="flex gap-2 w-[100%]">
              <Image src={dish} alt="" className="w-[50%] lg:w-[50%] " />
              <Image src={sandwich} alt="" className="w-[50%] lg:w-[50%]" />
            </div>
            <div className=" flex justify-center mt-4 lg:hidden">
              <button className="bg-[#FF9F0D] rounded-full text-xl px-12 py-4">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 3rd section */}

      <div className="mx-[10vw] my-[10vh]">
        <div className="flex flex-col items-center mb-3">
          <Image src={foodCatagory} alt="" className="items-center" />
          <h1 className="text-2xl md:text-[35px] font-bold">
            <span className="text-[#FF9F0D]">Ch</span>oose Food Iteam
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Image src={save30} alt="" className="w-auto sm:w-full mb-2" />
          <Image src={burger} alt="" className="w-auto sm:w-full mb-2" />
          <Image src={fruits} alt="" className="w-auto sm:w-full mb-2" />
          <Image src={nugets} alt="" className="w-auto sm:w-full mb-2" />
        </div>
      </div>

      {/* 4th section */}
      <div className="mx-4 md:mx-[10vw] my-[5vh] flex flex-wrap">
        <div className="flex gap-6  flex-wrap lg:flex-nowrap justify-center">
          <div className="flex flex-col gap-4 justify-center lg:w-[50%]">
            <Image src={sec4font} alt="" />
            <h1 className=" text-2xl md:text-[35px] font-bold leading-10">
              <span className="text-[#FF9F0D]">Ex</span>ordinary taste <br />{" "}
              and Experienced
            </h1>
            <p className="lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </p>
            <Image src={iconbox} alt="" />
            <Image src={experience} alt="" />
          </div>
          <div className="w-auto lg:w-[50%] mx-4">
            <Image src={sec4Image} alt="" className="w-full mb-2" />
          </div>
        </div>
      </div>
      {/* 5th section */}
      <div>
        <Image src={clientImage} alt="" />
      </div>
      {/* 6th section */}
      <div className="mx-4 md:mx-[10vw] my-[10vh]">
        <div className="flex flex-col items-center mb-3">
          <Image src={choose} alt="" className="items-center" />
          <h1 className="text-2xl md:text-[35px] font-bold">
            <span className="text-[#FF9F0D]">Fr</span>om Our Menu
          </h1>
        </div>
        <ul className="flex flex-wrap gap-4 item-center justify-center lg:gap-20">
          <li className="text-[#FF9F0D]">Breakfast</li>
          <li>Lunch</li>
          <li>Dinner</li>
          <li>Desert</li>
          <li>Drink</li>
          <li>Snack</li>
          <li>Suops</li>
        </ul>
        <div className="my-4 flex gap-4 flex-wrap md:flex-nowrap">
          <div className="lg:w-[45%] h-auto">
            <Image src={sec6pic} alt="" />
          </div>
          <div className="lg:w-[55%] ">
            <div className="flex flex-col md:flex-row ">
              <div className="flex flex-col gap-4 ">
                <HomeSection6
                  src={s6i1}
                  title="Lettuce Leaf"
                  description="Lacus nisi, et ac dapibus velit in consequat."
                  price="12.5$"
                />
                <HomeSection6
                  src={s6i2}
                  title="Fresh Breakfast"
                  description="Lacus nisi, et ac dapibus velit in consequat."
                  price="12.5$"
                />
                <HomeSection6
                  src={s6i3}
                  title="Mild Butter"
                  description="Lacus nisi, et ac dapibus velit in consequat."
                  price="12.5$"
                />
                <HomeSection6
                  src={s6i4}
                  title="Fresh Bread"
                  description="Lacus nisi, et ac dapibus velit in consequat."
                  price="12.5$"
                />
              </div>
              <div className="flex flex-col gap-4 ">
                <HomeSection6
                  src={s6i5}
                  title="Glow Cheese"
                  description="Lacus nisi, et ac dapibus velit in consequat."
                  price="12.5$"
                />
                <HomeSection6
                  src={s6i6}
                  title="Italian Pizza"
                  description="Lacus nisi, et ac dapibus velit in consequat."
                  price="12.5$"
                />
                <HomeSection6
                  src={s6i7}
                  title="Sllice Beef"
                  description="Lacus nisi, et ac dapibus velit in consequat."
                  price="12.5$"
                />
                <HomeSection6
                  src={s6i8}
                  title="Mushaom Pizza"
                  description="Lacus nisi, et ac dapibus velit in consequat."
                  price="12.5$"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
