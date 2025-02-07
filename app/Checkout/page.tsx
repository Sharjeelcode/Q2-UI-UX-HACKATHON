import React from "react";
import AllPagesHeroImg from "../components/AllPagesHeroImg";

function page() {
  return (
    <div>
      <AllPagesHeroImg page="checkout" />
      <div className="flex  flex-col lg:flex-row mx-4 md:mx-[5vw] justify-center my-[3vh]  md:gap-4 lg:gap-10  ">
        <div className="w-[60vw]">
          <form action="">
            <h1 className="text-2xl font-bold">Contact</h1>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col w-full">
                <input
                  type="email"
                  className="border-2 py-2 px-4 rounded-md text-lg"
                  placeholder="Email"
                />
              </div>
              <h1 className="text-2xl font-bold ">Delivery</h1>
              <div className="flex flex-col w-full">
                <select name="Country" id="">
                  <option></option>
                </select>
                <input
                  type=""
                  placeholder="Shipping adress"
                  className="border-2 py-2 px-1 rounded-md"
                />
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col w-full">
                  <input
                    type="text"
                    className="border-2 py-2 px-4 rounded-md "
                    placeholder="First Name"
                  />
                </div>
                <div className="flex flex-col w-full ">
                  <input
                    type="text"
                    className="border-2 py-2 px-4 rounded-md "
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <input
                  type="text"
                  placeholder="Shipping adress"
                  className="border-2 py-2 px-1 rounded-md"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="w-[40vw]"></div>
      </div>
    </div>
  );
}

export default page;
