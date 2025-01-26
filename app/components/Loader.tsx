import React from "react";

function Loader() {
  return (
    <div className="flex flex-row gap-2 items-center justify-center h-[40vh]">
      <div className="w-4 h-4 rounded-full bg-[#FF9F0D] animate-bounce"></div>
      <div className="w-4 h-4 rounded-full bg-[#FF9F0D] animate-bounce [animation-delay:-.3s]"></div>
      <div className="w-4 h-4 rounded-full bg-[#FF9F0D] animate-bounce [animation-delay:-.5s]"></div>
    </div>
  );
}

export default Loader;
