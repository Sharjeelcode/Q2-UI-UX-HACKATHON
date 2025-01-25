import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SlCalender } from "react-icons/sl";
import { TiMessages } from "react-icons/ti";
import { FaRegUserCircle } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
interface Blog {
  name: string;
  author: string;
  releaseDate: string;
  image: string;
  _id: string;
}
const BlogItem: React.FC<Blog> = ({
  name,
  author,
  image,
  releaseDate,
  _id,
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString); // Convert the string to a Date object
    return date.toLocaleDateString("en-US", {
      month: "short", // Abbreviated month name
      day: "2-digit", // Two-digit day
      year: "numeric", // Four-digit year
    });
  };
  return (
    <div key={_id} className="flex flex-col gap-3">
      <Image
        src={urlFor(image).url()}
        alt=""
        className="md:h-80"
        width={871}
        height={520}
      />

      <div className="flex gap-1 md:gap-2 items-center">
        <h1 className="text-sm flex gap-2 items-center">
          <SlCalender className="text-[#FF9F0D]" /> {formatDate(releaseDate)}
        </h1>
        <span>/</span>
        <h1 className="flex gap-2 items-center">
          <TiMessages className="text-[#FF9F0D]" /> 3
        </h1>
        <h1 className="flex gap-2 items-center text-sm">
          <FaRegUserCircle className="text-[#FF9F0D]" /> {author}
        </h1>
      </div>
      <h1 className="text-lg md:text-xl lg:text-2xl font-bold">{name}</h1>
      <hr />

      <p>
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
        ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat
      </p>

      <Link href={`/Blog/${_id}`}>
        <button className="text-[#FF9F0D] flex gap-2 items-center border-2 border-[#FF9F0D] rounded px-4 py-2">
          Read More <MdArrowOutward className="text-[#FF9F0D]" />
        </button>
      </Link>
    </div>
  );
};

export default BlogItem;
