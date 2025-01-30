import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import React from "react";

// Interface for Food Props
interface Food {
  name: string;
  salePrice: number;
  originalPrice: number;
  image: string;
  _id: string;
}

const Product: React.FC<Food> = ({
  name,
  salePrice,
  originalPrice,
  image,
  _id,
}) => {
  return (
    <Link href={`/Shop/${_id}`} className="hover:shadow-md">
      <div
        className="relative bg-cover bg-center h-56 w-64 md:w-52 lg:w-64 "
        style={{
          backgroundImage: `url(${urlFor(image).url()})`,
        }}
      >
        {salePrice && (
          <span className="absolute top-3 left-2 bg-[#FF9F0D] text-white px-3 text-sm rounded">
            Sell
          </span>
        )}
      </div>
      <div className="p-1">
        <h1 className="text-lg font-bold">{name}</h1>

        {salePrice ? (
          <div className="flex gap-2">
            <p className="text-[#FF9F0D] ">${salePrice.toFixed(2)}</p>
            <p className="text-gray-400 line-through">
              ${originalPrice.toFixed(2)}
            </p>
          </div>
        ) : (
          <p className="text-[#FF9F0D] ">${originalPrice.toFixed(2)}</p>
        )}
      </div>
    </Link>
  );
};

export default Product;
