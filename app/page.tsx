import Hero from "./components/Hero";
import Image from "next/image";
import HomeSection6 from "./components/homeSection6";
import {
  heroBackgroundImg,
  aboutFont,
  check,
  egg,
  dish,
  sandwich,
  foodCatagory,
  save30,
  nugets,
  burger,
  fruits,
  sec4Image,
  sec4font,
  iconbox,
  experience,
  clientImage,
  choose,
  sec6pic,
  s6i1,
  s6i2,
  s6i3,
  s6i4,
  s6i5,
  s6i6,
  s6i7,
  s6i8,
  chef,
  chefgroup,
  testmonials,
  TestimonialsImg,
  restraindCreativeProcess,
  blogPost,
  blogImage,
  blogImg2,
  blogImg3,
} from "@/app/assets/exportAssets";
import BlogCard from "./components/BlogCard";
export default function Home() {
  return (
    <>
      <div className="bg-[#0a0a0a] text-[#ededed]">
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
                <span className="text-[#FF9F0D]">We </span> Create the best{" "}
                <br /> foody product
              </h1>
              <p className="lg:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat fringilla bibendum.
                Urna, elit augue urna, vitae feugiat pretium donec id elementum.
                Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus
                sit eu velit in consequat.
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
                Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus
                sit eu velit in consequat.
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
        {/* 7th section */}
        <div className="mx-4 md:mx-[10vw] my-[5vh]">
          <div className="flex flex-col items-center mb-3">
            <Image src={chef} alt="" className="items-center" />
            <h1 className="text-2xl md:text-[35px] font-bold">
              <span className="text-[#FF9F0D]">Me</span>et Our Chef
            </h1>
          </div>
        </div>
        <Image src={chefgroup} alt="" className="pr-5 lg:pr-10" />
        {/* 8th section */}
        <div className="mx-4 md:mx-[10vw] my-[5vh]">
          <div className="flex items-center lg:block lg:items-start flex-col mb-3">
            <Image src={testmonials} alt="" />
            <h1 className="text-xl md:text-[35px] font-bold">
              What our client are saying
            </h1>
          </div>
          <div className="flex items-center mt-8">
            <Image src={TestimonialsImg} alt="" />
          </div>
        </div>
        {/* 9th section */}
        <Image src={restraindCreativeProcess} alt="" />
        {/* 10th section */}
        <div className="mx-4 md:mx-[10vw] my-[5vh]">
          <div className="flex flex-col items-center mb-3">
            <Image src={blogPost} alt="" className="items-center" />
            <h1 className="text-2xl md:text-[35px] font-bold">
              <span className="text-[#FF9F0D]">La</span>test Nes & Blog
            </h1>
          </div>
        </div>
        {/* 11th section */}
        <div className="flex flex-col items-center justify-center gap-2 md:flex-row ">
          <BlogCard
            image={blogImage}
            title={" Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis"}
          />
          <BlogCard
            image={blogImg2}
            title={"Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A"}
          />
          <BlogCard
            image={blogImg3}
            title={"Curabitur rutrum velit ac congue malesuada"}
          />
        </div>
      </div>
    </>
  );
}
