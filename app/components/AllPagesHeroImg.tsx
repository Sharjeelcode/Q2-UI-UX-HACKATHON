import Image from "next/image";
import hero from "@/app/assets/allPgaesHero.png";
import Link from "next/link";
import React from "react";
interface Props {
  page: string;
}

const AllPagesHeroImg: React.FC<Props> = ({ page }) => {
  return (
    <div className="relative">
      <Image src={hero} alt="all pages hero image" className="w-full h-auto" />
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h2 className="text-lg md:text-2xl lg:text-4xl font-bold">{page}</h2>
        <p className="lg:pt-2 lg:text-lg">
          <Link href="/" className="text-[#FF9F0D]">
            Home
          </Link>{" "}
          › {page}
        </p>
      </div>
    </div>
  );
};

export default AllPagesHeroImg;
