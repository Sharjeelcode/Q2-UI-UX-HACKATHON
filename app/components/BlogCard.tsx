import Image from "next/image";
import React from "react";
import blogcardIcon from "@/app/assets/blogcardIcon.png";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
interface blogCard {
  name: string;
  releaseDate: string;
  image: string;
  id: string;
}

const BlogCard: React.FC<blogCard> = ({ image, name, releaseDate, id }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString); // Convert the string to a Date object
    return date.toLocaleDateString("en-US", {
      month: "short", // Abbreviated month name
      day: "2-digit", // Two-digit day
      year: "numeric", // Four-digit year
    });
  };
  return (
    <Link href={`/Blog/${id}`}>
      <div className="border-2 w-[300px]">
        <Image
          src={urlFor(image).url()}
          alt="blog card"
          className="w-auto"
          width={871}
          height={520}
        />
        <div className="p-4">
          <p className="text-[#FF9F0D]">{formatDate(releaseDate)}</p>
          <h1>{name}</h1>
          <div className="flex justify-between mt-2">
            <p>Learn More</p>
            <Image src={blogcardIcon} alt="blog card" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
