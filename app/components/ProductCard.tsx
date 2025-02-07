import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import React, { useState } from "react";
import useCartStore from "../store/cartStore";

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
  const [addCart, setaddCart] = useState("hidden");
  const { addItem } = useCartStore();

  const item = {
    id: _id,
    name: name,
    price: salePrice ? salePrice : originalPrice,
    image: image,
    quantity: 1,
  };

  return (
    <div
      className="hover:shadow-md"
      onMouseEnter={() => setaddCart("flex")}
      onMouseLeave={() => setaddCart("hidden")}
    >
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
        <div className={`${addCart}  justify-center `}>
          <button
            className="text-center absolute bottom-2 bg-black text-white px-12 py-3 hover:py-4 hover:px-14"
            onClick={() => addItem(item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <Link href={`/Shop/${_id}`} className="p-1">
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
      </Link>
    </div>
  );
};

export default Product;
