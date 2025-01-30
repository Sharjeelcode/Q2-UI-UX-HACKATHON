"use client";
import React, { useState } from "react";
import AllPagesHeroImg from "../components/AllPagesHeroImg";
import Image from "next/image";
import { useEffect } from "react";
import { client } from "../../sanity/lib/client";
import Loader from "../components/Loader";
import { urlFor } from "@/sanity/lib/image";

interface Chef {
  name: string;
  specialty: string;
  image: string;
  _id: string;
}

const query = `*[_type == "chef"]{
name,specialty,image,_id
}`;

function Page() {
  const [chefList, setChefList] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);

        // Fetch product details from server
        const chefs = await client.fetch(query);

        if (chefs.length > 0) {
          setChefList(chefs);
        } else {
          setError("Product not found.");
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error("Error fetching data:", err.message);
          setError("An error occurred while fetching Chef details.");
        } else {
          console.error("An unknown error occurred:", err);
          setError("An unknown error occurred while fetching Chef details.");
        }
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

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
      <AllPagesHeroImg page="Our Chef" />
      <div className="grid grid-cols-1 md:grid-flow-row  md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-3  mx-4 md:mx-[5vw] place-items-center my-[3vh]  gap-2 md:px-10 md:gap-4 lg:gap-5  ">
        {chefList.map((chef: Chef) => {
          return (
            <div key={chef._id}>
              <Image
                src={urlFor(chef.image).url()}
                alt=""
                className=" md:w-64"
                width={312}
                height={380}
              />
              <div className="text-center">
                <h1 className="text-lg md:text-xl font-bold">{chef.name}</h1>
                <h2>{chef.specialty}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Page;
