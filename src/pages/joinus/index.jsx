import { useState } from "react";
import FormModal from "../../components/formModal";
import InvestModal from "../../components/investModal";

function JoinUs() {
    const [invest, setInvest] = useState(false);
    const [partner, setPartner] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [hoveredbtnInvest, setHoveredbtnInvest] = useState(false);

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
    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const handleMouseEnterInvest = () => {
        setHoveredbtnInvest(true);
    };

    const handleMouseLeaveInvest = () => {
        setHoveredbtnInvest(false);
    };

    const divStyle = {
        display: 'inline-block',
        transition: 'transform 0.3s ease',
        transform: hovered ? 'scale(1.2)' : 'scale(1)',

    };
    const divStyleinvest = {
        display: 'inline-block',
        transition: 'transform 0.3s ease',
        transform: hoveredbtnInvest ? 'scale(1.2)' : 'scale(1)',
    };
    const buttonStyle = {
        backgroundColor: 'black',
        width: '96px',
        height: '96px',
        // color: '#C6C6C6',
        fontSize: '12px',
        letterSpacing: '1px',
        fontWeight: 'bold',
        borderRadius: '50%',
        outline: 'none',
        cursor: 'pointer',
        color:"#fff",
        transition: 'background-color 0.3s ease',
    };
    return (
        <div className="container mx-auto py-24">
            <div className="py-10">
                <h2 className="text-5xl text-center">Join Us</h2></div>
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
                        Charj, LLC
                    </h4>
                    <p className="text-lg pt-7">
                        Hartford, Connecticut, United States
                    </p>
                    <p className="text-lg pt-10">
                        The Other "C" State Leading the Evolution of eMobility
                    </p>
                    <div className="flex w-full justify-center gap-4">
                        <div className="pt-7 ">
                            <div style={divStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <button onClick={openPartner} style={buttonStyle} type="button">
                                    PARTNER<br />WITH<br />US
                                </button>
                            </div>
                            {partner && (
                                <FormModal closePartner={closePartner} setInvest={setInvest} title="Partner with Us" />
                            )}
                        </div>
                        <div className="pt-7">

                            <div style={divStyleinvest} onMouseEnter={handleMouseEnterInvest} onMouseLeave={handleMouseLeaveInvest}>
                                <button
                                    style={buttonStyle}
                                    onClick={openInvest}
                                    type="button"
                                >
                                    INVEST<br />WITH<br />US
                                </button>
                            </div>
                            {invest && (
                                <InvestModal closeInvest={closeInvest} title="Invest with Us" />
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