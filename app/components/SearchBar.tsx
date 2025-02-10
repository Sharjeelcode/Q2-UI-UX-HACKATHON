import Image from "next/image";
import React, { useEffect, useState } from "react";
import searchIcon from "@/app/assets/Group.png";
import useProductStore from "../store/productStore";
import Link from "next/link";

interface Product {
  name: string;
  salePrice: number;
  originalPrice: number;
  image: string;
  _id: string;
}

function SearchBar() {
  const { products, fetchProducts } = useProductStore();
  const [search, setSearch] = useState<string>("");
  const [productMatches, setProductMatches] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  function handleSearchBox(event: React.ChangeEvent<HTMLInputElement>) {
    const searchValue = event.target.value;
    setSearch(searchValue);

    if (searchValue.trim()) {
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setProductMatches(filteredProducts);
    } else {
      setProductMatches([]);
    }
  }

  return (
    <div className="relative flex items-center justify-between px-4 border-2 border-[#FF9F0D] w-[240px] h-[44px] rounded-[27px]">
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent outline-none text-white w-full"
        value={search}
        onChange={handleSearchBox}
      />
      <Image src={searchIcon} alt="Search Icon" />

      {productMatches.length > 0 && (
        <div className="backdrop-blur-md bg-black/50 text-white absolute top-11 border-2 rounded-md w-[220px] right-2 px-2 z-10">
          {productMatches.map((product) => (
            <div key={product._id}>
              <Link
                href={`/Shop/${product._id}`}
                onClick={() => {
                  setSearch("");
                  setProductMatches([]);
                }}
              >
                <h2 className="px-4 py-1">{product.name}</h2>
              </Link>
              <hr />
            </div>
          ))}
        </div>
      )}

      {/* Display message when no products are found */}
      {search && productMatches.length === 0 && (
        <div className="backdrop-blur-md bg-black/50 text-white absolute top-11 border-2 rounded-md w-[220px] right-2 px-2 z-10">
          <h2 className="px-4 py-2 text-center">No Match Found</h2>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
