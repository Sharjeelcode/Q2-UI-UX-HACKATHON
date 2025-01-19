import Image, { StaticImageData } from "next/image";
import React from "react";
import blogImage from "@/app/assets/Image Placeholder.png";
import blogcardIcon from "@/app/assets/blogcardIcon.png";
interface blogCard {
  image: string | StaticImageData;
  title: string;
}

const BlogCard: React.FC<blogCard> = ({ image, title }) => {
  return (
    <div className="border-2 w-[300px]">
      <Image src={image} alt="blog card" className="w-auto" />
      <div className="p-4">
        <p className="text-[#FF9F0D]">10 February 2022</p>
        <h1>{title}</h1>
        <div className="flex justify-between mt-2">
          <p>Learn More</p>
          <Image src={blogcardIcon} alt="blog card" />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
