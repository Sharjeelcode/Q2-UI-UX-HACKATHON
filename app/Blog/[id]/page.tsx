"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { IoLogoPinterest } from "react-icons/io5";
import MagnifyingGlass from "@/app/assets/MagnifyingGlass.png";
import AllPagesHeroImg from "@/app/components/AllPagesHeroImg";
import authorImg from "@/app/assets/authorImg.png";
import { SlCalender } from "react-icons/sl";
import { TiMessages } from "react-icons/ti";
import { FaRegUserCircle } from "react-icons/fa";
import { LuReplyAll } from "react-icons/lu";
import star from "@/app/assets/Star.png";
import blogDemo from "@/app/assets/blogDemo.png";
import comentProfile from "@/app/assets/comentProfile.png";
import commentProfile2 from "@/app/assets/commentProfile2.png";
import commentProfile3 from "@/app/assets/commentProfile3.png";
import userImg from "@/app/assets/userImg.jpg";

import {
  s6i1,
  s6i2,
  s6i3,
  s6i4,
  s6i5,
  s6i6,
  s6i7,
  s6i8,
} from "../../assets/exportAssets";
import { client } from "@/sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import Loader from "@/app/components/Loader";

interface Blog {
  name: string;
  description: [];
  author: string;
  releaseDate: string;
  image: string;
  _id: string;
  tags: [];
}
function Page({ params }: { params: { id: string } }) {
  const [blogDetail, setBlogDetail] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // comments data
  const [coments, setcomments] = useState<
    { name: string; email: string; userComment: string; date: string }[]
  >([]);
  const [name, setname] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [userComment, setUsercomment] = useState<string>("");

  const query = `*[_type == "Blogs" && _id == "${params.id}"] {
  name,description,author,releaseDate,image,_id,tags}`;
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const blog = await client.fetch(query);
        if (blog.length > 0) {
          setBlogDetail(blog[0]);
        } else {
          setError("Blog not found");
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error("Error fetching data:", err.message);
          setError(
            err.message || "An error occurred while fetching product details."
          );
        } else {
          console.error("An unknown error occurred:", err);
          setError("An unknown error occurred while fetching product details.");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query]);
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };
  const handleComments = (e: React.FormEvent) => {
    e.preventDefault();
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = date.toLocaleDateString("en-US", options);

    const commentStore = {
      name: name,
      email: email,
      userComment: userComment,
      date: formattedDate,
    };
    setcomments((prevComments) => [...prevComments, commentStore]);
    setname("");
    setemail("");
    setUsercomment("");
  };
  if (loading)
    return (
      <div className="text-center my-10">
        <AllPagesHeroImg page="Blog Details" />
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
    <div>
      <AllPagesHeroImg page="Blog Details" />
      <div className="flex  flex-col lg:flex-row mx-4 md:mx-[5vw] justify-center my-[3vh] px-1 md:px-4 lg:px-10 md:gap-4 lg:gap-10  ">
        {/* Blog Posts  */}
        {blogDetail ? (
          <div className="flex flex-col gap-4 mb-4 lg:w-[70vw] ">
            <div className="flex flex-col gap-3">
              <Image
                src={
                  blogDetail.image ? urlFor(blogDetail.image).url() : blogDemo
                }
                alt=""
                className="md:h-80"
                width={871}
                height={520}
              />

              <div className="flex gap-1 md:gap-2 items-center">
                <h1 className="text-sm flex gap-2 items-center">
                  <SlCalender className="text-[#FF9F0D]" />{" "}
                  {formatDate(blogDetail.releaseDate)}
                </h1>
                <span>/</span>
                <h1 className="flex gap-2 items-center">
                  <TiMessages className="text-[#FF9F0D]" /> 3
                </h1>
                <h1 className="flex gap-2 items-center text-sm">
                  <FaRegUserCircle className="text-[#FF9F0D]" />
                  {blogDetail.author}
                </h1>
              </div>
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
                {blogDetail.name}
              </h1>
              <hr />

              <p>{blogDetail.description}</p>
            </div>
            {/* tags */}
            <div className=" flex flex-col md:flex-row  justify-between items-center border-2 p-2 px-2">
              <div className="flex gap-2 px-2">
                <h1>Tags:</h1>
                <div className="flex flex-wrap">
                  {blogDetail.tags &&
                    blogDetail.tags.map((tag) => (
                      <h1 key={tag} className="text-gray-600 sm:text-sm">
                        {tag},
                      </h1>
                    ))}
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <h1>Share:</h1>
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <IoLogoPinterest />

                <div></div>
              </div>
            </div>
            {/* coments section */}
            <div className="flex flex-col gap-2">
              <h1 className=" md:text-lg lg:text-xl font-bold">
                Comments - 03
              </h1>
              <div className="flex gap-2 h-auto">
                <div>
                  <Image src={comentProfile} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 items-center">
                    <h1>MD Sojaib Khan</h1>
                    <LuReplyAll />
                    <span>Reply</span>
                  </div>
                  <div className="flex gap-2">
                    <SlCalender className="text-[#FF9F0D]" />{" "}
                    <h1 className="text-sm">June 22,2022</h1>
                  </div>
                  <p className="text-wrap">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et
                    sem, Fusce hendrerit faucibus sollicitudin.{" "}
                  </p>
                  <div className="flex mt-2">
                    <div>
                      <Image src={commentProfile2} alt="" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex gap-2 items-center ">
                        <h1>D Moon Khan</h1>
                        <LuReplyAll className="text-[#FF9F0D]" />
                        <span className="text-[#FF9F0D]">Reply</span>
                      </div>

                      <div className="flex gap-2">
                        <SlCalender className="text-[#FF9F0D]" />{" "}
                        <h1 className="text-sm">June 22,2022</h1>
                      </div>
                      <p className="text-wrap">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc orci tellus, fermentum nec imperdiet sed, pulvinar
                        et sem, Fusce hendrerit faucibus sollicitudin.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 h-auto">
                <div>
                  <Image src={commentProfile3} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                  <h1>MD Sojaib Khan</h1>
                  <div className="flex gap-2">
                    <SlCalender className="text-[#FF9F0D]" />{" "}
                    <h1 className="text-sm">June 22,2022</h1>
                  </div>
                  <p className="text-wrap">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et
                    sem, Fusce hendrerit faucibus sollicitudin.{" "}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {coments.map((comment) => (
                  <div key={comment.date} className="flex gap-2 h-auto">
                    <div>
                      <Image src={userImg} alt="" className="w-12" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h1>{comment.name}</h1>
                      <div className="flex gap-2">
                        <SlCalender className="text-[#FF9F0D]" />{" "}
                        <h1 className="text-sm">{comment.date}</h1>
                      </div>
                      <p className="text-wrap">{comment.userComment}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* new comments section */}
            <div>
              <h1 className="md:text-lg lg:text-xl font-bold">
                Post a comment
              </h1>
              <hr className="mt-4" />
              <form onSubmit={handleComments} className="flex flex-col gap-2">
                <div className="flex gap-2 justify-between">
                  <input
                    type="text"
                    value={name}
                    placeholder="Name*"
                    className="p-2 border-2 w-full"
                    onChange={(e) => setname(e.target.value)}
                    required
                  />
                  <input
                    type="email"
                    value={email}
                    placeholder="Email*"
                    className="p-2 border-2
                  w-full"
                    required
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
                <textarea
                  rows={8}
                  className="border-2 w-full p-2"
                  placeholder="Write a comment"
                  value={userComment}
                  onChange={(e) => setUsercomment(e.target.value)}
                  required
                />
                <div>
                  <button className="px-6 py-2 bg-[#FF9F0D] text-white">
                    Post a comment
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div>Blog not found</div>
        )}

        {/* Side Bar */}
        <div className="flex  flex-col gap-3 lg:w-[30vw]">
          {/* search box */}
          <div className="flex  ">
            <input
              type="text"
              className=" px-4 py-4 border-2"
              placeholder="Search Product"
            />
            <div className="bg-[#FF9F0D] flex-shrink-0  px-4 py-4">
              <Image src={MagnifyingGlass} alt="search" />
            </div>
          </div>
          {/* Author card */}
          <div className="flex flex-col items-center gap-2 border-2 border-gray-100 p-4">
            <Image src={authorImg} alt="" />
            <h1 className="text-lg font-bold">Prince Miyako</h1>
            <p>Blogger/Photographer</p>
            <div className="flex gap-2 items-center">
              <Image src={star} alt="search" />
              <span>(1 Review)</span>
            </div>
            <p className="w-48 text-wrap text-center text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.Veritatis
            </p>
            <div className="flex gap-2">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <IoLogoPinterest />
            </div>
          </div>
          {/* Recent Posts */}
          <div className="flex flex-col  gap-2 border-2 border-gray-100 p-4">
            <h1 className="text-lg font-bold">Recent Post</h1>
            <div className="flex gap-2 ">
              <Image src={s6i1} alt="" />
              <div>
                <p className="text-gray-400">June 22, 2020</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <hr />

            <div className="flex gap-2 ">
              <Image src={s6i2} alt="" />
              <div>
                <p className="text-gray-400">June 22, 2020</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <hr />

            <div className="flex gap-2 ">
              <Image src={s6i3} alt="" />
              <div>
                <p className="text-gray-400">June 22, 2020</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <hr />

            <div className="flex gap-2 ">
              <Image src={s6i4} alt="" />
              <div>
                <p className="text-gray-400">June 22, 2020</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <hr />
          </div>
          {/* Filter by Menu */}
          <div className="flex flex-col  gap-2 border-2 border-gray-100 p-4">
            <h1 className="text-lg font-bold">Filter By Menu</h1>
            <div className="flex gap-2 items-center">
              <Image src={s6i1} alt="" />
              <div className="flex justify-between w-full">
                <h1 className=" font-bold">Chicken Fry</h1>
                <p>26</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Image src={s6i8} alt="" />
              <div className="flex justify-between w-full">
                <h1 className=" font-bold">Burger Food</h1>
                <p>46</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Image src={s6i5} alt="" />
              <div className="flex justify-between w-full">
                <h1 className=" font-bold">Pizza</h1>
                <p>16</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Image src={s6i6} alt="" />
              <div className="flex justify-between w-full">
                <h1 className=" font-bold">Fresh Fruits</h1>
                <p>36</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Image src={s6i7} alt="" />
              <div className="flex justify-between w-full">
                <h1 className=" font-bold">Vegetables</h1>
                <p>12</p>
              </div>
            </div>
          </div>
          {/* Populer Tags */}
          <div className="flex flex-col  gap-2 border-2 border-gray-100 p-4">
            <h1 className="text-lg font-bold">Populer Tags</h1>
            <div className="flex gap-4 flex-wrap items-center justify-center">
              <button className="border-2 border-gray-100 px-2 py-1 rounded">
                Chicken
              </button>
              <button className="border-2 border-gray-100 px-2 py-1 rounded">
                Burger
              </button>
              <button className="border-2 border-gray-100 px-2 py-1 rounded">
                Pizza
              </button>
              <button className="border-2 border-gray-100 px-2 py-1 rounded">
                Fresh Fruits
              </button>
              <button className="border-2 border-gray-100 px-2 py-1 rounded">
                Vegetables
              </button>
              <button className="border-2 border-gray-100 px-2 py-1 rounded">
                Health
              </button>
              <button className="border-2 border-gray-100 px-2 py-1 rounded">
                Fastfood
              </button>
              <button className="border-2 border-gray-100 px-2 py-1 rounded">
                Food
              </button>
            </div>
          </div>
          {/* Photo Gallery */}
          <div className="flex flex-col  gap-2 border-2 border-gray-100 p-4">
            <h1 className="text-lg font-bold">Photo Gallery</h1>
            <div className="flex gap-2 justify-center">
              <Image src={s6i1} alt="" />
              <Image src={s6i2} alt="" />
              <Image src={s6i3} alt="" />
            </div>
            <div className="flex gap-2 justify-center">
              <Image src={s6i4} alt="" />
              <Image src={s6i5} alt="" />
              <Image src={s6i6} alt="" />
            </div>
          </div>
          {/* Follow us */}
          <div className="flex flex-col  gap-2 border-2 border-gray-100 p-4">
            <h1 className="text-lg font-bold">Follow Us</h1>
            <div className="flex gap-2 justify-center">
              <div className="p-2 bg-gray-100 hover:bg-[#FF9F0D] courser-pointer">
                <FaFacebookF />
              </div>
              <div className="p-2 bg-gray-100 hover:bg-[#FF9F0D] courser-pointer">
                <BsYoutube />
              </div>
              <div className="p-2 bg-[#FF9F0D] courser-pointer">
                <IoLogoPinterest className="text-white" />
              </div>
              <div className="p-2 bg-gray-100 hover:bg-[#FF9F0D] courser-pointer">
                <FaTwitter />
              </div>
              <div className="p-2 bg-gray-100 hover:bg-[#FF9F0D] courser-pointer">
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
