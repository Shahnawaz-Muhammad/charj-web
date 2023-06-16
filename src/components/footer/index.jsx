import React from "react";
import { Link } from "react-router-dom";
import poweredLogo from "../../assets/images/powered-logo.png"

const Footer = () => {
  return (
    <>
      <div className="flex  flex-col items-center justify-between py-6 px-10 bg-black gap-3">
          <h1 className="text-md font-light text-white tracking-widest">Copyright © 2021 Charj,llc - All Rights Reserved.</h1>
          <h1 className="text-md font-light text-white tracking-widest flex items-end">Powered by <Link to="https://claystone.pk/" target="_blank"><img src={poweredLogo} alt="clay stone logo" className="h-6" /></Link></h1>
      </div>
    </>
  );
};

export default Footer;
