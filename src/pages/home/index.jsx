import React from "react";
import heroVideo from "../../assets/images/car-model.mp4";
import homeVideo from "../../assets/images/Electric.webm"
import { Link } from "react-router-dom";
import IndustryInsights from "../../components/learnmore";
import About from "../../components/about";

const Home = () => {
  
  return (
    <>
      <div className="h-[100vh] max-w-screen relative ">
        <div className="relative flex justify-center items-center h-screen w-full ">
          
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            className="h-full w-screen object-cover"
          />
          <div className="absolute top-28 w-full flex flex-col text-center justify-center items-center text-white gap-y-7">
            <h1 className="text-5xl font-bold">eMOBILITY ACCELERATOR</h1>
            <p className="text-3xl font-normal ">
              Be on the road of the future
            </p>
          </div>
          <div className="absolute w-full bottom-20 flex flex-row gap-3 text-center justify-center items-center">
            <Link
              to="/services"
              className="bg-gray-100 px-20 py-1.5 text-black text-xl font-semibold rounded-sm hover:bg-gray-900 hover:text-white ease-in-out duration-300"
            >
              ASK US HOW
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-black py-20 max-w-screen">
          <div className="bg-[#000000] h-full  flex justify-center">
            <video
              src={homeVideo}
              autoPlay
              loop
              muted
              controls
              className="h-full w-[1200px] object-cover"
            />
          </div>
      </div>

      <IndustryInsights />
      <About />
    </>
  );
};

export default Home;
