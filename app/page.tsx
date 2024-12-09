import Image from "next/image";
import heroBackgroundImg from "@/app/assets/heroBackgroundImg.png";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div
      className="w-full min-h-screen"
      style={{
        backgroundImage: `url(${heroBackgroundImg.src})`, // Optional: Replace with a background color if needed
        backgroundSize: "cover", // Makes the image cover the entire div
        backgroundPosition: "center", // Centers the background
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
        backgroundColor: "#f0f0f0", // Add a fallback background color
        opacity: "",
      }}
    >
      <div className="w-full min-h-screen bg-black opacity-85"></div>
      {/* Hero Content */}
      <div className="">
        <Hero />
      </div>
    </div>
  );
}
