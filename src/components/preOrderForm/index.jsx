import React from "react";

const PreOrderForm = () => {
  return (
    <>
      <div className="w-full flex justify-center px-10 md:mx-auto my-5">
        <form className="max-w-5xl w-screen">
          <div className="flex flex-wrap justify-center ">
            <div className="w-full  px-2 mb-4">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  className="block  px-2.5 pb-2.5 pt-5 w-full bg-black text-sm text-gray-100  rounded-md border border-gray-100 appearance-none focus:outline-none peer"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute text-sm text-gray-100  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-gray-100  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Name
                </label>
              </div>
            </div>
            <div className="w-full  px-2 mb-4">
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="block  px-2.5 pb-2.5 pt-5 w-full bg-black text-sm text-gray-100  rounded-md border border-gray-100 appearance-none focus:outline-none peer"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute text-sm text-gray-100  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-gray-100  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Email
                </label>
              </div>
            </div>
            <div className="w-full  px-2 mb-4">
              <div className="relative">
                <input
                  type="number"
                  id="phone"
                  className="block  px-2.5 pb-2.5 pt-5 w-full bg-black text-sm text-gray-100  rounded-md border border-gray-100 appearance-none focus:outline-none peer  [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  placeholder=" "
                />
                <label
                  htmlFor="phone"
                  className="absolute text-sm text-gray-100  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-gray-100  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Phone
                </label>
              </div>
            </div>
            <div className="w-full px-2 mb-4">
              <div className="relative">
                <textarea
                  id="interest"
                  className="border border-gray-100  block w-full py-2 px-4 placeholder-gray-100 rounded-md bg-black text-gray-50 focus:outline-none"
                  rows="8"
                  placeholder="I'm interested in"
                ></textarea>
              </div>
            </div>
            <div className="w-full px-2 mb-4">
              <div className="relative">
                <textarea
                  id="notes"
                  className="border border-gray-100  block w-full py-2 px-4 placeholder-gray-100 rounded-md bg-black text-gray-50 focus:outline-none"
                  rows="8"
                  placeholder="Other Notes"
                ></textarea>
              </div>
            </div>

            <div className="flex flex-col  items-center gap-5 text-gray-500">
              <button className="px-6 py-3 border border-gray-100 text-gray-100 rounded-md font-semibold">
                SEND
              </button>

              <p className="mb-5">
                This site is protected by reCAPTCHA and the Google
                <span className="text-gray-100"> Privacy Policy</span> and <span className="text-gray-100">Terms of Service </span>
                apply.
              </p>

              <p>
                118 North Beacon Street, Hartford, Connecticut 06105, United
                States
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PreOrderForm;
