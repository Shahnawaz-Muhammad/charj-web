import React, { useState } from "react";

const Subscribe = () => {
    const [email, setEmail] = useState("")

    const handleSubscribe = (e) => {
        e.preventDefault();
        console.log("email: -------->", email)
    }

   
  return (
    <>
      <div className="w-full flex justify-center mx-auto py-12 bg-black">
        <div className="max-w-5xl w-screen flex flex-col gap-5 justify-center items-center">
          <div className="text-white flex flex-col gap-3">
            <h1 className="text-5xl ">Subscribe</h1>
            <p className="text-2xl">It is time to EVolve</p>
          </div>
          <div className="w-full  px-2 mb-4 flex flex-row gap-3">
            <div className="relative w-full">
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block  px-2.5 pb-2.5 pt-5 w-full bg-black text-sm text-gray-100  rounded-md border border-gray-100 appearance-none focus:outline-none peer focus:bg-transparent"

                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute text-md text-gray-100  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-gray-100  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 "
              >
                Email Address
              </label>
            </div>
            <button className="px-6 py-3 border border-gray-100 text-gray-100 rounded-md font-semibold" type="button" onClick={handleSubscribe}>
              SEND
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
