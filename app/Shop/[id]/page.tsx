"use client";
import AllPagesHeroImg from "@/app/components/AllPagesHeroImg";
import star from "@/app/assets/Star.png";
import Image from "next/image";
import { MdOutlineShoppingBag } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoIosGitCompare, IoMdHeartEmpty } from "react-icons/io";
import { client } from "@/sanity/lib/client";
import QuanitityBtn from "@/app/components/QuanitityBtn";
import { urlFor } from "@/sanity/lib/image";
import freshLime from "@/app/assets/freshLime.png";
import { useEffect, useState } from "react";
import Product from "@/app/components/ProductCard";
import Loader from "@/app/components/Loader";

interface Food {
  name: string;
  category: string;
  salePrice: number;
  originalPrice: number;
  tags: string[];
  image: string;
  description: string;
  available: boolean;
  _id: string;
}

function Page({ params }: { params: { id: string } }) {
  const [productDetials, setProductDetails] = useState<Food>({} as Food);
  const [productList, setProductList] = useState<Food[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const query = `*[_type == "food" && _id == "${params.id}"] {
  name,
  category,
  salePrice,
  originalPrice,
  tags,
  image,
  description,
  available,
  _id
}`;

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);

        // Fetch product details from server
        const foodList = await client.fetch(query);

        if (foodList.length > 0) {
          setProductDetails(foodList[0]);
        } else {
          setError("Product not found.");
        }

        // Load product list from localStorage
        const storedFoodList = localStorage.getItem("foodList");
        setProductList(storedFoodList ? JSON.parse(storedFoodList) : []);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error("Error fetching data:", err.message);
          setError("An error occurred while fetching product details.");
        } else {
          console.error("An unknown error occurred:", err);
          setError("An unknown error occurred while fetching product details.");
        }
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [query]);
  if (loading)
    return (
      <div className="text-center my-10">
        <AllPagesHeroImg page="Blog List" />
        <Loader />
      </div>
    );
  if (error)
    return (
      <div className="text-center text-red-500 my-10">
        <AllPagesHeroImg page="Blog Details" />
        {error}
      </div>
    );
  return (
    <>
      <AllPagesHeroImg page="Shop Details" />
      <div className="flex flex-col md:flex-row md:mx-[5vw]  my-[3vh] px-2 md:gap-4 lg:gap-160  ">
        {/* Product Details */}
        <div className="md:w-[40%] lg:w-[70%]">
          <Image
            src={
              productDetials.image
                ? urlFor(productDetials.image).url()
                : freshLime
            }
            width={500}
            height={500}
            // src={urlFor(productDetials.image).url()}
            alt="magnifying glass"
            className="w-full h-[80%] lg:h-[90%]"
          />
        </div>
        <div className="md:w-[70%]">
          <h1 className="font-bold text-4xl py-4">{productDetials.name}</h1>
          <p className="pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, urna, vitae feugiat pretium donec id elementum. Ultrices
            mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit
            in consequat.
          </p>
          <hr />
          <h1 className="text-2xl font-bold mt-2">
            {productDetials.salePrice ? (
              <div className="flex gap-2">
                <p className=" ">${productDetials.salePrice}.00</p>
                <p className="text-gray-400 line-through">
                  ${productDetials.originalPrice}.00
                </p>
              </div>
            ) : (
              <p className=" ">${productDetials.originalPrice}.00</p>
            )}
          </h1>
          <div className="flex flex-col md:flex-row gap-4 text-gray-400">
            <Image src={star} alt="magnifying glass" />
            <div className="flex flex-row gap-2">
              <p className="">5.0 Rating</p>

              <p>|</p>
              <p>22 Review</p>
            </div>
          </div>
          <p className="py-4">Dictum/cursus/Risus</p>
          <div className="flex gap-4 pb-4">
            <QuanitityBtn />
            <div>
              <button className="bg-[#FF9F0D] text-sm px-4 lg:px-6 text-white flex gap-2 py-2 items-center">
                <MdOutlineShoppingBag />
                Add to cart
              </button>
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-3 mt-4">
            <h1 className="flex leading-[15px] gap-[15px] text-[15px]">
              <IoMdHeartEmpty /> Add to Wishlist <IoIosGitCompare />
              Compare
            </h1>
            <h1 className="leading-[15px] gap-[15px] text-[15px]">
              Category: {productDetials.category}
            </h1>
            <h1 className="leading-[15px] gap-[15px] text-[15px]">
              Tag: {productDetials.tags?.map((tag) => `${tag} `)}
            </h1>
          </div>
          <div className="flex leading-[20px] gap-4 py-3">
            Share: <FaInstagram className="text-[20px]" />{" "}
            <AiFillTwitterCircle className="text-[20px]" />{" "}
            <FaFacebook className="text-[20px]" />{" "}
            <AiFillTwitterCircle className="text-[20px]" />
          </div>
          <hr />
        </div>
      </div>
      <div className="flex flex-col  md:mx-[5vw]  my-[3vh] px-2  ">
        {/* product discription */}
        <div className="mb-2">
          <button className="bg-[#FF9F0D] text-white px-5 py-2">
            Description
          </button>
          <button className="px-5 py-2">Reviews (24)</button>
        </div>

        <div className="flex flex-col gap-4">
          <p>
            Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed
            purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis
            sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget
            sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor.
            Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet
            interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla
            facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.
          </p>
          <p>
            Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur
            blandit justo urna, id porttitor est dignissim nec. Pellentesque
            scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum
            accumsan et sagittis massa. Aliquam aliquam accumsan lectus quis
            auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis
            vehicula fermentum. Integer eu vulputate justo. Aenean pretium odio
            vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.
          </p>
          <h1 className="text-lg font-bold">Key Benifits</h1>
          <ul className="list-disc pl-5">
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            <li>Maecenas ullamcorper est et massa mattis condimentum.</li>
            <li>
              Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.
            </li>
            <li>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
            <li>Mauris eget diam magna, in blandit turpis.</li>
          </ul>
        </div>
        <div className="mt-6">
          <h1 className="text-xl md:text-2xl font-bold">Similar Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 my-4 justify-items-center">
            {productList.slice(0, 4).map((food: Food) => (
              <Product
                key={food._id}
                name={food.name}
                salePrice={food.salePrice}
                originalPrice={food.originalPrice}
                image={food.image}
                _id={food._id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
