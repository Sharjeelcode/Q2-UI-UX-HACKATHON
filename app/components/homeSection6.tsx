import React from "react";
import Image from "next/image";

interface HomeSection6Props {
  src: any;
  title: string;
  description: string;
  price: string;
}

const HomeSection6: React.FC<HomeSection6Props> = ({
  src,
  title,
  description,
  price,
}) => {
  return (
    <div className="flex gap-2">
      <div>
        <Image src={src} alt="" />
      </div>
      <div className="flex flex-col gap-auto">
        <h1 className="font-bold">{title}</h1>
        <p className="text-xs">{description}</p>
        <h1 className="text-[#FF9F0D] font-bold">{price}</h1>
      </div>
    </div>
  );
};

export default HomeSection6;
