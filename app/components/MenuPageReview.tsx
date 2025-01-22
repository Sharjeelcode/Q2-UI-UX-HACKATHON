import Image from "next/image";
import React from "react";
import pizza from "@/app/assets/pizza.png";
import spoon from "@/app/assets/spoon.png";
import food from "@/app/assets/food.png";
import pro from "@/app/assets/proffcheff.png";
import menupageHero from "@/app/assets/menuPageHero2.png";
const MenuPageReview = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${menupageHero.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black bg-opacity-80 py-10">
        <div>
          <div className="grid md:grid-flow-col-dense justify-center gap-8 md:gap-12 lg:gap-16">
            {/* Professional Chefs */}
            <div className="p-4 text-center">
              <Image
                src={pro}
                alt="Professional Chef"
                className="w-20 h-20 mx-auto md:w-24 md:h-24 lg:w-32 lg:h-32"
              />
              <p className="leading-relaxed text-white font-bold text-sm md:text-lg lg:text-xl mt-4">
                Professional Chefs
              </p>
              <h1 className="text-white text-xl md:text-2xl lg:text-3xl">
                420
              </h1>
            </div>
            {/* Items of Food */}
            <div className="p-4 text-center">
              <Image
                src={food}
                alt="Items of Food"
                className="w-20 h-20 mx-auto md:w-24 md:h-24 lg:w-32 lg:h-32"
              />
              <p className="leading-relaxed text-white font-bold text-sm md:text-lg lg:text-xl mt-4">
                Items of Food
              </p>
              <h1 className="text-white text-xl md:text-2xl lg:text-3xl">
                320
              </h1>
            </div>
            {/* Years of Experience */}
            <div className="p-4 text-center">
              <Image
                src={spoon}
                alt="Years of Experience"
                className="w-20 h-20 mx-auto md:w-24 md:h-24 lg:w-32 lg:h-32"
              />
              <p className="leading-relaxed text-white font-bold text-sm md:text-lg lg:text-xl mt-4">
                Years of Experience
              </p>
              <h1 className="text-white text-xl md:text-2xl lg:text-3xl">
                30+
              </h1>
            </div>
            {/* Happy Customers */}
            <div className="p-4 text-center">
              <Image
                src={pizza}
                alt="Happy Customers"
                className="w-20 h-20 mx-auto md:w-24 md:h-24 lg:w-32 lg:h-32"
              />
              <p className="leading-relaxed text-white font-bold text-sm md:text-lg lg:text-xl mt-4">
                Happy Customers
              </p>
              <h1 className="text-white text-xl md:text-2xl lg:text-3xl">
                220
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPageReview;
