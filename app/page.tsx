import Image from "next/image";
import heroBackgroundImg from "@/app/assets/heroBackgroundImg.png";
export default function Home() {
  return (
    <>
      <div className="w-screen h-screen opacity-80 relative bg-black z-40"></div>
      <Image
        src={heroBackgroundImg}
        alt=""
        className="max-h-screen z-10 absolute top-0"
      />
    </>
  );
}
