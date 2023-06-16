import { useState } from "react";
import FormModal from "../../components/formModal";

function JoinUs() {
    const [invest, setInvest] = useState(false);
    const [partner, setPartner] = useState(false);

    const openPartner = () => {
        setPartner(true);
    };

    const closePartner = () => {
        setPartner(false);
    };

    const openInvest = () => {
        setInvest(true);
    };

    const closeInvest = () => {
        setInvest(false);
    };
    return (
        <div className="container mx-auto">
            <div className="py-16">
                <h2 className="text-5xl text-center">Contact Us</h2></div>
            <div className="grid grid-cols-12 gap-4 px-4 md:px-0">
                <div className="col-span-2 hidden md:block"></div>
                <div className="col-span-12 md:col-span-8 text-center px-6 py-14 rounded-lg  shadow-lg">
                    <h4 className="text-2xl">
                        Engage With Us and See Positive Results
                    </h4>
                    <div className="pt-7">
                        <p className="text-lg">
                            Every business needs a sound operating plan to thrive.
                        </p>
                        <p className="text-lg">
                            Contact us; together we will achieve your eMobility goals and objectives.
                        </p>
                    </div>
                    <h4 className="text-2xl pt-9">
                        Charj, llc
                    </h4>
                    <p className="text-lg pt-7">
                        Hartford, Connecticut, United States
                    </p>
                    <p className="text-lg pt-10">
                        The Other "C" State Leading the Evolution of eMobility
                    </p>
                    <div className="flex w-full justify-center gap-4">
                        <div className="pt-7">
                            <button onClick={openPartner} className="bg-gray-900 hover:bg-gray-800 w-24 h-24 text-xs text-[#C6C6C6] tracking-wider font-bold rounded-full focus:outline-none focus:shadow-outline" type="button">
                                PARTNER<br />WITH<br />US
                            </button>
                            {partner && (
                                <FormModal closePartner={closePartner} />
                            )}

                        </div>
                        <div className="pt-7">
                            <button onClick={openInvest} className="bg-gray-900 hover:bg-gray-800 w-24 h-24 text-xs text-[#C6C6C6] tracking-wider font-bold rounded-full focus:outline-none focus:shadow-outline" type="button">
                                INVEST<br />WITH<br />US
                            </button>
                            {invest && (
                                <FormModal closeInvest={closeInvest} />
                            )}
                        </div>
                    </div>

                </div>

                <div className="col-span-2 hidden md:block"></div>
            </div>
        </div>

    )
}

export default JoinUs