import React from "react";
import carimage from "../../assets/images/carimg.webp";

const About = () => {
  return (
    <>
      <div className="bg-black py-10">
        <div className="w-[100%] ">
          <div className=" lg:flex  flex-row-reverse ">
            <div className="lg:w-[50%] ">
              <img
                src={carimage}
                alt=""
                className="w-full lg:h-full h-[280px] bg-cover lg:bg-current"
              />
            </div>
            <div className=" lg:w-[50%]  flex justify-center mx-5">
              <div className="  lg:w-[65%]">
                <div className="flex justify-center">
                  <div>
                    <h1 className="text-[36px] xl:text-[50px]  mb-4  font-normal text-[#ffffff] ">
                      About Us
                    </h1>
                    <hr className="w-[20%]"></hr>
                  </div>
                </div>
                <p className="text-2xl  xl:text-3xl  font-normal text-[#ffffff] mt-5">
                  Passionate eMobility Experts
                </p>
                <p className="text-md  text-[#919191] mt-2">
                  For over a decade the Charj team has been at the forefront of
                  the transition to a sustainable built environment and
                  transportation system. Our leadership comprises proud alumni
                  from U.S. Green Building Council, Tesla and JuiceBar EV. Our
                  field of expertise spans the entire spectrum of the eMobility
                  industry:
                </p>
                <div className="flex justify-center mt-5">
                  <ul className="list-disc  w-[70%] text-[#919191] text-md">
                    <li className="  ">
                      Global Component Sourcing & Identification of Technology
                      Partners
                    </li>
                    <li className="   ">
                      Design & Development of Charging Equipment Mains
                      Switchgear Design & Voltage Optimization
                    </li>
                    <li className="   ">
                      Mains Switchgear Design & Voltage Optimization
                    </li>
                    <li className="   ">
                      Charging Ecosystem Use Case Analysis & Operational
                      Specifications{" "}
                    </li>
                    <li className="   ">
                      Charging Environment Design and Installation Support{" "}
                    </li>
                    <li className="  ">
                      Charger Management System Selection & Onboarding{" "}
                    </li>
                    <li className="   ">
                      Regulatory Land Use & Utility Compliance Administration
                    </li>
                    <li className="   ">
                      Ownership and Operation of Level 1, Level 2 & Level 3
                      Charging Systems
                    </li>
                    <li className="   ">
                      Charging Infrastructure Incentives Tracking and Grant
                      Administration{" "}
                    </li>
                    <li className="   ">
                      Clean Energy and Carbon Credit Certification &
                      Monetization
                    </li>
                    <li className="   ">
                      Load Management Programming & Operational Costing Analysis
                    </li>
                    <li className="   ">
                      Communications System Provider Contracting, System
                      Integrity Testing & Signal Enhancement
                    </li>
                    <li className="   ">
                      Coordination of Alternative Energy Systems RFPs{" "}
                    </li>
                    <li className="  ">
                      Green Building Certification and Affordable Housing QAP
                      Point Optimization & Tax Credit Syndication
                    </li>
                    <li className="   ">
                      Sustainable REIT Certification & Index Registration
                    </li>
                  </ul>
                </div>
                <p className="text-md text-[#919191]   mt-5">
                  We have our clients range in size and scope from individual
                  multi-family properties to institutional scale financial
                  investment firms, real estate asset holding companies, freight
                  operators and emerging technology companies.{" "}
                </p>
                <h1 className="text-2xl text-gray-100   mt-5 ">
                  Our Education First Approach
                </h1>
                <p className="text-md text-[#919191]    mt-5 mb-5">
                  Our services start with an information download on general
                  eMobility matters followed by a deep dive into touch points
                  with our clients' specific industry sector. Services and
                  deliverables include comprehensive consultation, gap and
                  opportunity analysis, go-to-market equipment manufacturer,
                  service provider and technology partner recommendations, and
                  proprietary tailored industry reports with project plans,
                  timelines and costing analysis. Our individualized guidance
                  contemplates factors across the entire sustainability and
                  eMobility ecosystem delivery and operating model to best
                  enable streamlined achievement of client goals and objectives.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;