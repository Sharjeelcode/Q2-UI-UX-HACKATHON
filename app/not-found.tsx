// app/not-found.tsx

import Link from "next/link";
import AllPagesHeroImg from "./components/AllPagesHeroImg";

export default function NotFound() {
  return (
    <>
      <AllPagesHeroImg page="404 Error" />
      <div className="flex flex-col  gap-4 items-center justify-center h-[60vh] bg-gray-100">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-[#FF9F0D]">
          404
        </h1>
        <p className="text-2xl font-bold text-center  mt-2">
          Oops! Look likes something going wrong
        </p>
        <p className="text-center">
          Page Cannot be found! we’ll have it figured out in no time.
          <br className="hidden md:block" /> Menwhile, cheek out these fresh
          ideas:
        </p>
        <Link
          href={"/"}
          className="bg-[#FF9F0D] text-white px-8  py-4 rounded-lg"
        >
          Go to Home
        </Link>
      </div>
    </>
  );
}
