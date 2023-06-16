import React from "react";
import img1 from "../../assets/images/padestal/10001.jpg";
import img2 from "../../assets/images/padestal/10002.jpg";
import img3 from "../../assets/images/padestal/10003.jpg";
import img4 from "../../assets/images/padestal/10004.jpg";
import img5 from "../../assets/images/padestal/10005.jpg";
import img6 from "../../assets/images/padestal/10006.jpg";

const Energypedestal = () => {
  return (
    <div className="bg-black pt-[120px] pb-[120px]">
      <div className=" ">
        <p className="text-[62px] font-semibold 2xl:text-[60px] text-center text-[#ffffff] ">
          THE ENERGY PEDESTAL
        </p>
        <div className="flex justify-center mt-5">
          <hr className="w-[70px] border-[1.5px] "></hr>
        </div>
        <p className="mt-4 text-[16px] text-gray-500 text-center ">
          Patent Pending
        </p>
      </div>
      {/*  */}

      <div className="w-[100% ]  flex justify-center">
        <div className="container relative pt-[56.25%] overflow-hidden  w-[85%]">
          <iframe
            className=" px-2 absolute top-0 left-0 bottom-0 right-0 w-[100%] h-[100%]"
            src="https://player.vimeo.com/video/556701532?h=beb907425f&title=0&byline=0&portrait=0"
          ></iframe>
        </div>
      </div>
      {/*  */}
      <div className="text-center px-5">
        <div className=" ">
          <p className="text-[44px] font-semibold  text-center text-[#ffffff]">
            Features
          </p>
          <div className="flex justify-center mt-5">
            <hr className="w-[70px] border-[1.5px] "></hr>
          </div>
        </div>

        <div className=" xl:flex justify-center ">
          <div className="  mt-12 md:flex md:justify-between xl:w-[90%]">
            <div className=" md:w-[32%] mt-8 ">
              <p className="text-[#ffffff] text-[22px]">
                Component Integration
              </p>
              <img src={img1} className="w-[100%] mt-5"></img>
              <p className="text-[#ffffff] mt-5 text-[16px]">
                The Energy Pedestal contains the main shutoff, utility meter and
                10 circuit distribution panel all factory installed in one
                enclosure.
              </p>
            </div>

            <div className=" md:w-[32%] mt-8  ">
              <p className="text-[#ffffff] text-[22px]">
                Central Cabinet Ready
              </p>
              <img src={img2} className="w-[100%] mt-5"></img>
              <p className="text-[#ffffff] text-[16px] mt-5">
                The interchangeable front panel allows for installation and
                servicing of AC and/or DC charging components. The assembly can
                be upfit with battery storage, solar inverters and/or backup
                generators.
              </p>
            </div>
            <div className=" md:w-[32%] mt-8 ">
              <p className="text-[#ffffff] text-[22px]">Maximize Incentives</p>
              <img src={img3} className="w-[100%] mt-5"></img>
              <p className="text-[#ffffff] text-[16px] mt-5">
                Mounting Level 2 and/or Level 3 chargers directly to the Type 3r
                rated utility enclosure eliminates additional labor and
                materials.
              </p>
            </div>
          </div>
        </div>
        <div className=" md:flex md:justify-center ">
          <div className="md:flex md:justify-center   mt-8 md:w-[80%] ">
            <div className="w-[100%] md:w-[45%]  mt-8 md:mx-11">
              <p className="text-[#ffffff] text-[22px]">Voltage Optimization</p>
              <img src={img4} className="w-[100%] mt-5"></img>
              <p className="text-[#ffffff] text-[16px] mt-5">
                Utilization of an integrated multi-tap three phase isolation
                transformer supports incoming and outgoing voltage at 208, 240,
                480 and/or 600vac for optimization of mixed Level 1, 2 and 3
                charging environments.
              </p>
            </div>
            <div className="w-[100%] md:w-[45%] mt-8  ">
              <p className="text-[#ffffff] text-[22px]  ">California Ready</p>
              <img src={img5} className="w-[100%] mt-5"></img>
              <p className="text-[#ffffff] text-[16px] mt-5">
                The interchangeable front panel allows for the mounting of a
                media panel, touchscreen parking and charging point of sale
                kiosk, credit card terminal and/or high-resolution dispensed
                energy testing.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex justify-center">
        <div className=" mt-20 w-[90%]">
          <p className="text-[44px] font-semibold  text-center text-[#ffffff] ">
            Don't Let Low Voltage Slow You Down
          </p>
          <div className="flex justify-center mt-5">
            <hr className="w-[70px] border-[1.5px] "></hr>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <div className="lg:flex lg:justify-center lg:flex-row-reverse  w-[90%]">
          <div className="flex justify-center mt-8 lg:w-[35%] h-[350px]">
            <img src={img6} className="w-[90%]"></img>
          </div>
          <div className="flex justify-center lg:w-[65%] ">
            <div className="w-[90%] mt-8">
              <p className="text-[#ffffff] text-[44px] font-normal">
                480/240vac
              </p>
              <p className="text-[#ffffff] text-[16px] mt-5">
                The optimal voltage to power charging equipment is 480vac three
                phase for Level 3 and 240vac single phase for Level 2; however,
                these voltage levels are not inherent to the distribution grid
                together.
              </p>
              <p className="text-[#ffffff] text-[16px] mt-5">
                Energy is delivered to single family homes at 240vac whereas
                commercial and industrial environment transformers commonly
                support either 480/277 or 208/120. As a result, the majority of
                Level 2 chargers outside the home are installed with 208vac
                incoming current and it can be difficult to place 50kW+ chargers
                in retail centers and conventional fueling stations without new
                480vac service.
              </p>
              <p className="text-[#ffffff] text-[16px] mt-5">
                208vac is suboptimal for Level 2 charging as it robs the on
                board charger (OBC) of 15% its potential efficiency. This means
                the 80-amp (19.2kW) acceptance rates of the new Ford Lightning,
                Chevy Silverado and Lucid Air are all reduced to 16.4kW; the
                48-amp (11.5kW) acceptance rates of the new Ford Mustang Mach-E,
                Rivian R1T and Tesla Models S, 3lr, X and Ylr are all reduced to
                10kW; and the Jaguar I-Pace will trickle charge a 90kWh battery
                on only 6.6kW.
              </p>
              <p className="text-[#ffffff] text-[16px] mt-5">
                Moreover, you may one day look down at your dashboard and see
                your 90kWh battery-equipped pickup or SUV gingerly sipping only
                3kW at 208vac from the most commonly sold Level 2 charger with
                power share. You will find yourself back on the road in 24
                hours.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* end div */}

    </div>
  );
};

export default Energypedestal;
