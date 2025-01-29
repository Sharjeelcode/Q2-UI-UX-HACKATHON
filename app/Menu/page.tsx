import Image from "next/image";
import AllPagesHeroImg from "../components/AllPagesHeroImg";
import menuImage1 from "@/app/assets/menuImg1.png";
import menuImage2 from "@/app/assets/menuImg2.png";
import menuImage3 from "@/app/assets/menuImg3.png";
import menuImage4 from "@/app/assets/menuImg4.png";
import dishes from "@/app/assets/dishs.png";
import spone from "@/app/assets/spone.png";
import bakery from "@/app/assets/bakery.png";
import coffe from "@/app/assets/coffe.png";
import bistro from "@/app/assets/bistro.png";
import icecream from "@/app/assets/icecream.png";
import { BsCupHot } from "react-icons/bs";
import { menudata1, menudata2, menudata3, menudata4 } from "@/Data/data";
import MenuPageReview from "../components/MenuPageReview";
function page() {
  return (
    <>
      <AllPagesHeroImg page={"Menu"} />
      <div className="mx-4 md:mx-[10vw] my-[3vh]">
        {/* Starter Menu */}
        <div className="flex flex-col  items-center lg:flex-row gap-12">
          <Image src={menuImage1} alt="Menu Image" className="" />
          <div className="flex-grow">
            <BsCupHot className="text-[#FF9F0D]" />
            <h1 className="text-2xl lg:text-4xl font-bold pb-4">
              Starter Menu
            </h1>
            {menudata1.map((data, index) => (
              <div key={index}>
                <div className="flex flex-col justify-between  gap-4">
                  <div className="flex justify-between items-center pt-2">
                    <h2 className=" text-lg lg:text-xl font-bold hover:text-[#FF9F0D]">
                      {data.title}
                    </h2>
                    <h1 className="text-[#FF9F0D] font-bold">{data.price}</h1>
                  </div>
                  <div>
                    <p className="text-[#4d4d4d] text-sm lg:text-lg w-[80%]">
                      {data.para}
                    </p>
                    <p className="py-2">{data.some}</p>
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
        {/* Main Course */}
        <div className="flex flex-col  items-center lg:flex-row gap-12 my-20">
          <div className="flex-grow">
            <BsCupHot className="text-[#FF9F0D]" />
            <h1 className="text-2xl lg:text-4xl font-bold pb-4">
              Starter Menu
            </h1>
            {menudata2.map((data, index) => (
              <div key={index}>
                <div className="flex flex-col justify-between  gap-4">
                  <div className="flex justify-between items-center pt-2">
                    <h2 className=" text-lg lg:text-xl font-bold hover:text-[#FF9F0D]">
                      {data.title}
                    </h2>
                    <h1 className="text-[#FF9F0D] font-bold">{data.price}</h1>
                  </div>
                  <div>
                    <p className="text-[#4d4d4d] text-sm lg:text-lg w-[80%]">
                      {data.para}
                    </p>
                    <p className="py-2">{data.some}</p>
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
          <Image src={menuImage2} alt="Menu Image" className="" />
        </div>
        {/* Review */}
      </div>
      <MenuPageReview />
      <div className="mx-4 md:mx-[10vw] my-[5vh]">
        {/* Dessert Menu */}
        <div className="flex flex-col  items-center lg:flex-row gap-12">
          <Image src={menuImage3} alt="Menu Image" className="" />
          <div className="flex-grow">
            <BsCupHot className="text-[#FF9F0D]" />
            <h1 className="text-2xl lg:text-4xl font-bold pb-4">
              Dessert Menu
            </h1>
            {menudata3.map((data, index) => (
              <div key={index}>
                <div className="flex flex-col justify-between  gap-4">
                  <div className="flex justify-between items-center pt-2">
                    <h2 className=" text-lg lg:text-xl font-bold hover:text-[#FF9F0D]">
                      {data.title}
                    </h2>
                    <h1 className="text-[#FF9F0D] font-bold">{data.price}</h1>
                  </div>
                  <div>
                    <p className="text-[#4d4d4d] text-sm lg:text-lg w-[80%]">
                      {data.para}
                    </p>
                    <p className="py-2">{data.some}</p>
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
        {/* Main Course */}
        <div className="flex flex-col  items-center lg:flex-row gap-12 my-20">
          <div className="flex-grow">
            <BsCupHot className="text-[#FF9F0D]" />
            <h1 className="text-2xl lg:text-4xl font-bold pb-4">Drinks</h1>
            {menudata4.map((data, index) => (
              <div key={index}>
                <div className="flex flex-col justify-between  gap-4">
                  <div className="flex justify-between items-center pt-2">
                    <h2 className=" text-lg lg:text-xl font-bold hover:text-[#FF9F0D]">
                      {data.title}
                    </h2>
                    <h1 className="text-[#FF9F0D] font-bold">{data.price}</h1>
                  </div>
                  <div>
                    <p className="text-[#4d4d4d] text-sm lg:text-lg w-[80%]">
                      {data.para}
                    </p>
                    <p className="py-2">{data.some}</p>
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
          <Image src={menuImage4} alt="Menu Image" className="" />
        </div>
      </div>
      <div className="mx-4 md:mx-[10vw] my-[5vh]">
        <p className="text-center">Partners & Clients</p>
        <h1 className="text-center text-xl md:text-2xl lg:text-4xl font-bold">
          We work with the best pepole
        </h1>
        <div className="flex flex-row  lg:flex-col items-center gap-4 mt-4">
          <Image src={dishes} alt="Menu Image" className="" />
          <Image src={bakery} alt="Menu Image" className="" />
          <Image src={spone} alt="Menu Image" className="" />
          <Image src={coffe} alt="Menu Image" className="" />
          <Image src={bistro} alt="Menu Image" className="" />
          <Image src={icecream} alt="Menu Image" className="" />
        </div>
      </div>
    </>
  );
}

export default page;
