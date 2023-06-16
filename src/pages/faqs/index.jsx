import React, { useState } from "react";
import FaqModal from "./faqModal";
import faqImg from "../../assets/images/faqimg.webp";

const Faqs = () => {
  const faqList = [
    {
      id: 1,
      title: "How Long Does it Take to Charge an Electric Vehicle ?",
      description: `Today's electric vehicles are equipped with lithium ion battery packs containing many small cells.  In total, the cells add up to a rated battery capacity measured in kilowatt hours or "kWh."  kWh indicates how many hours a battery can discharge at a certain kilowatt load or conversely, how many hours it will take to charge at a certain kilowatt current.  A 100kWh battery, like what is seen in a premium Tesla vehicle, will take 10 hours to fully charge assuming it is connected to a 10kW charger.  A common 48-amp Level 2 charger operating on commercially available 208vac will produce a 10kW charging current.  A Tesla Supercharger in comparison will generate a 100kW charging current.`,
    },
    {
      id: 2,
      title: "How Much Does It Cost to Charge an Electric Vehicle ?",
      description:
        "The amount of energy that an electric vehicle battery can store is limited by the kWh rating.  It is recommended that drivers avoid fully charging or discharging vehicle batteries leaving 10% to 15% of buffer to avoid cell degradation.  The cost of the energy used to fill the battery is based on the kWh rate charged by the utility or charging service provider.  If charging at home, or offering charging at your business, be aware of the demand charges that may apply.  Demand charges are assessed based on the total amount of energy measured in kW that is distributed to your electrical service at a particular moment in time.  Demand charges can be set in a narrow window comprising the average load of the peak 30 minutes of utilization occurring during the billing period.  These fees vary based on utility and rate class; though, can run over $30 per kW.",
    },
    {
      id: 3,
      title: "How Much do Electric Vehicle Chargers Cost ?",
      description:
        "Electric vehicle charging infrastructure can cost hundreds of thousands of dollars.  Installation of a charging environment can cost just as much, if not more, than the charging hardware.  This infrastructure can also be provided completely free under available incentive programs.  The key to building a  sustainable charging solution is to evaluate the use case, identify operating requirements, determine available incentives that can offset hardware and/or installation costs, and design a system with the ability to self-regulate load thereby minimizing operating expenses.",
    },
    {
      id: 4,
      title: "How Much Power Can a Charger Provide ?",
      description:
        "Amps x Voltage = kW and kW x Hours = Increased State of Charge; however, each vehicle has a limit on the rate of power that can be accepted by the battery.  This acceptance rate may decrease as the vehicle battery becomes fully charged.  Seem complicated, we can quickly bring you up to speed on all things EV.",
    },
  ];

  const [expandedFAQIndex, setExpandedFAQIndex] = useState(null);

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-between py-24 px-10">
        <div className="w-full max-w-full lg:max-w-5xl ">
          <div className="justify-between text-sm flex flex-col py-10 lg:flex-row gap-5 mb-4">
            <div className="lg:w-1/2 w-full  lg:px-4 lg:flex lg:items-center ">
              <img src={faqImg} alt="" className="w-full bg-cover h-[450px] lg:h-full bg-center" />
            </div>
            <div className="lg:w-1/2 w-full flex flex-col gap-2 py-5 lg:gap-5 ">
              <h1 className="text-2xl lg:text-4xl ">
                Frequently Asked Questions
              </h1>
              <p className="text-lg font-semibold">
                How Long Does it Take to Charge an Electric Vehicle ?
              </p>
              <p className="text-lg">
                Today's electric vehicles are equipped with lithium ion battery
                packs containing many small cells. In total, the cells add up to
                a rated battery capacity measured in kilowatt hours or "kWh."
                kWh indicates how many hours a battery can discharge at a
                certain kilowatt load or conversely, how many hours it will take
                to charge at a certain kilowatt current. A 100kWh battery, like
                what is seen in a premium Tesla vehicle, will take 10 hours to
                fully charge assuming it is connected to a 10kW charger. A
                common 48-amp Level 2 charger operating on commercially
                available 208vac will produce a 10kW charging current. A Tesla
                Supercharger in comparison will generate a 100kW charging
                current.
              </p>
            </div>
          </div>

          <div className=" flex flex-col items-center py-3  ">
            {faqList.map((listItem, index) => (
              <FaqModal
                listItem={listItem}
                index={index}
                expandedFAQIndex={expandedFAQIndex}
                setExpandedFAQIndex={setExpandedFAQIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
