import React from "react";
import services1 from "../../assets/images/services/services1.jpg";
import services2 from "../../assets/images/services/services2.jpg";
import services3 from "../../assets/images/services/services3.jpg";
import services4 from "../../assets/images/services/services4.jpg";
import services5 from "../../assets/images/services/services5.jpg";
import services6 from "../../assets/images/services/services6.jpg";

const Services = () => {
  return (
    <div className=" bg-black pt-[120px] pb-[120px]">
      <div className="text-center ">
        <p className="text-[40px] font-semibold 2xl:text-[60px] text-[#ffffff]">
          Our Services
        </p>
        <div className="flex justify-center">
          <hr className="w-[70px] border-[1.5px] mt-5"></hr>
        </div>
      </div>
      <div className="mt-10  lg:flex justify-center">
        <div className="lg:w-[87rem] md:flex ">
          <div className=" flex justify-center md:w-[50%]   ">
            <img
              src={services1}
              className="w-[95%] h-[77%] md:w-[98%] lg:h-[100%]"
            ></img>
          </div>
          <div className="md:mt-0 mt-5 flex justify-center items-center  md:w-[50%]  ">
            <div className="w-[95%] text-center   md:h-[300px] flex items-center ">
              <div className=" h-[96%]">
                <h1 className="text-[24px] lg:text-[28px] lg:font-medium font-normal text-[#e2e2d6]">
                  Charging Ecosystem Design & Operational Costing Analysis
                </h1>
                <p className="text-[16px] font-normal mt-3 lg:text-[17px] lg:font-normal 2xl:text-[20px] text-[#9e9e9c]">
                  Do you have questions about how to design a charging and
                  energy management system for your use case? Do you have an
                  upcoming or existing project that needs a push or resulted in
                  surprise costs? eMobility is a young industry and real
                  expertise comes from time working in the trenches. Our
                  experience can help structure and accelerate sustainable
                  deployments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* second */}
      <div className="mt-10  lg:flex justify-center">
        <div className="lg:w-[87rem] md:flex md:flex-row-reverse">
          <div className=" flex justify-center md:w-[50%]   ">
            <img
              src={services2}
              className="w-[95%] h-[77%] md:w-[98%] lg:h-[100%]"
            ></img>
          </div>
          <div className="md:mt-0 mt-5 flex justify-center items-center  md:w-[50%]  ">
            <div className="w-[95%] text-center   md:h-[300px] flex items-center ">
              <div className=" h-[96%]">
                <h1 className="text-[24px] lg:text-[28px] lg:font-medium font-normal text-[#e2e2d6]">
                  Marketing Concept Evaluation & Content Generation
                </h1>
                <p className="text-[16px] font-normal mt-3 lg:text-[17px] lg:font-normal 2xl:text-[20px] text-[#9e9e9c]">
                  Are you from a parallel industry with questions about how to
                  communicate eMobility concepts effectively to your existing or
                  target customer base? We can help you identify meaningful
                  talking points, convey concepts with intuitive and engaging
                  informational illustrations, and ensure you are speaking with
                  industry-specific language like a seasoned sprofessional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* three */}
      <div className="mt-10  lg:flex justify-center">
        <div className="lg:w-[87rem] md:flex ">
          <div className=" flex justify-center md:w-[50%]   ">
            <img
              src={services3}
              className="w-[95%] h-[77%] md:w-[98%] lg:h-[100%]"
            ></img>
          </div>
          <div className="md:mt-0 mt-5 flex justify-center items-center  md:w-[50%]  ">
            <div className="w-[95%] text-center   md:h-[300px] flex items-center ">
              <div className=" h-[96%]">
                <h1 className="text-[24px] lg:text-[28px] lg:font-medium font-normal text-[#e2e2d6]">
                  Incentives Tracking, Applications Management & Compliance
                </h1>
                <p className="text-[16px] font-normal mt-3 lg:text-[17px] lg:font-normal 2xl:text-[20px] text-[#9e9e9c]">
                  Are you eager to bring eMobility or Alternative Energy
                  Infrastructure to your real estate portfolio or fleet
                  operating environment but overwhelmed by the equipment,
                  installation or operating costs? We can help identify and
                  apply for Government and Utility programs that can fund
                  charging and energy projects and/or mitigate utility demand
                  charges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* four */}
      <div className="mt-10  lg:flex justify-center">
        <div className="lg:w-[87rem] md:flex md:flex-row-reverse">
          <div className=" flex justify-center md:w-[50%]   ">
            <img
              src={services4}
              className="w-[95%] h-[77%] md:w-[98%] lg:h-[100%]"
            ></img>
          </div>
          <div className="md:mt-0 mt-5 flex justify-center items-center  md:w-[50%]  ">
            <div className="w-[95%] text-center   md:h-[300px] flex items-center ">
              <div className=" h-[96%]">
                <h1 className="text-[24px] lg:text-[28px] lg:font-medium font-normal text-[#e2e2d6]">
                  Stay Updated on Emerging eMobility Topics and Technologies
                </h1>
                <p className="text-[16px] font-normal mt-3 lg:text-[17px] lg:font-normal 2xl:text-[20px] text-[#9e9e9c]">
                  The eMobility sector is quickly evolving through component
                  advancement, new safety standards, expanded coupler and
                  communication protocols, accessibility and consumer-protection
                  regulation, building and electrical code updates, and vehicle
                  energy acceptance rates. We can bring you up to speed and keep
                  you informed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* five */}
      <div className="mt-10  lg:flex justify-center">
        <div className="lg:w-[87rem] md:flex ">
          <div className=" flex justify-center md:w-[50%]   ">
            <img
              src={services5}
              className="w-[95%] h-[77%] md:w-[98%] lg:h-[100%]"
            ></img>
          </div>
          <div className="md:mt-0 mt-5 flex justify-center items-center  md:w-[50%]  ">
            <div className="w-[95%] text-center   md:h-[300px] flex items-center ">
              <div className=" h-[96%]">
                <h1 className="text-[24px] lg:text-[28px] lg:font-medium font-normal text-[#e2e2d6]">
                  Charging Product Design and Component Sourcing
                </h1>
                <p className="text-[16px] font-normal mt-3 lg:text-[17px] lg:font-normal 2xl:text-[20px] text-[#9e9e9c]">
                  Do you need guidance on the impact or integration of emerging
                  advanced technologies such as DC microgrids, RF LAN
                  communication systems, high level communication protocols,
                  autonomous vehicles and/or wireless charing? We can answer
                  your questions and pair you with leading technology partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* six */}
      <div className="mt-10  lg:flex justify-center">
        <div className="lg:w-[87rem] md:flex md:flex-row-reverse">
          <div className=" flex justify-center md:w-[50%]   ">
            <img
              src={services6}
              className="w-[95%] h-[77%] md:w-[98%] lg:h-[100%]"
            ></img>
          </div>
          <div className="md:mt-0 mt-5 flex justify-center items-center  md:w-[50%]  ">
            <div className="w-[95%] text-center   md:h-[300px] flex items-center ">
              <div className=" h-[96%]">
                <h1 className="text-[24px] lg:text-[28px] lg:font-medium font-normal text-[#e2e2d6]">
                  Charging Product Certification and Accelerated Life Testing
                </h1>
                <p className="text-[16px] font-normal mt-3 lg:text-[17px] lg:font-normal 2xl:text-[20px] text-[#9e9e9c]">
                  Are you bringing a new eMobility product to market,
                  encountering issues with an existing eMobility product or
                  looking to determine potential points of failure? We have
                  experience in the product certification documentation and
                  testing process and can help you obtain a license to label. We
                  can also coordinate testing to operating limits and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
