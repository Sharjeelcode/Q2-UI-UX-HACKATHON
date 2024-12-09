import Image from "next/image";
import heroBackgroundImg from "@/app/assets/heroBackgroundImg.png";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen ">
      {/* Background Image */}
      <Image
        src={heroBackgroundImg}
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        priority
        className="opacity-20 gt1"
      />

      {/* Hero Content */}
      <div className="relative z-10">{/* <Hero /> */}</div>
    </div>
  );
}
