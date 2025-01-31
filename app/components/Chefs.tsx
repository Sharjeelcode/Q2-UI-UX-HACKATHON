"use client";
import React, { useEffect, useState } from "react";
import grass from "@/app/assets/grass.png";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
interface Chef {
  name: string;
  image: string;
  _id: string;
  specialty: string;
}

const query = `*[_type == "chef"]{
    name,image,_id,specialty
    }`;

function Chefs() {
  const [chefList, setChefList] = useState([]);
  useEffect(() => {
    const getChefs = async () => {
      try {
        const chefData = await client.fetch(query);
        setChefList(chefData);
      } catch (error) {
        console.log(error, "data not fetched");
      }
    };
    getChefs();
  }, []);

  return (
    <div className="flex gap-4 justify-center items-center mx-4 flex-col md:flex-row lg:pl-12">
      {chefList.slice(0, 4).map((chef: Chef) => {
        return (
          <div key={chef._id} className="relative">
            <div>
              <Image
                src={urlFor(chef.image).url()}
                alt="chefcard"
                className="rounded-lg"
                width={312}
                height={380}
              />
              <div className=" bg-white rounded-l-lg  text-black absolute bottom-0 pl-4 pr-[10%] lg:pr-[40%] py-4">
                <h1 className="text-xl font-bold">{chef.name}</h1>
                <p>{chef.specialty}</p>
              </div>
            </div>
          </div>
        );
      })}

      <Image src={grass} alt="" className="absolute left-0" />
    </div>
  );
}

export default Chefs;
