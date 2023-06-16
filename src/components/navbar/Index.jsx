import React, { useState, useEffect } from "react";
import LogoSvg from "../../assets/icon";
import Menu from "./Menu";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useLocation();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const shouldScrolled = scrollTop > 50;
      setScrolled(shouldScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const homeRoute = router.pathname === "/";
  const darkBgRoute =
    router.pathname === "/services" ||
    router.pathname === "/padestal-energy" ||
    router.pathname === "/charj-network";

  // const navItems = [
  //   { id: 1, title: "Option 1", url: "#" },
  //   { id: 2, title: "Services", url: "/services" },
  //   { id: 3, title: "The Padestal Energy", url: "/padestal-energy" },
  //   { id: 4, title: "Option 4", url: "#" },
  //   { id: 5, title: "Option 5", url: "#" },
  //   { id: 6, title: "Option 6", url: "#" },
  //   { id: 7, title: "Option 7", url: "#" },
  // ];

  const menuItems = [
    // { id: 1, title: "Partner With Us", url: "/join-us" },
    // { id: 2, title: "Menu Option B", url: "#" },
    // { id: 3, title: "Menu Option C", url: "#" },
    { id: 1, title: "Contact Us", url: "/contact-us" },
    { id: 2, title: "FAQ's", url: "/faqs" },
  ];
  return (
    <>
      {/* <div className=""> */}
      <div
        className={`${
          scrolled
            ? "bg-white shadow-sm text-black"
            : "bg-transparent text-white"
        } fixed top-0 z-10 w-full max-w-full flex flex-row justify-between items-center transition-colors duration-300 mx-auto pr-5  `}
      >
        <div
          className={`${
            scrolled ? "bg-[#000]" /* bg-[#a81313f6] */ : "bg-transparent"
          } skew-logo  cursor-pointer  h-full px-4 py-5 `}
        >
          <Link to="/">
            <git 
              width="6rem"
              logocolor={
                !homeRoute && !darkBgRoute && !scrolled ? "#000" : "#fff"
              }
            />
          </Link>
        </div>
        {/* <div className=" flex justify-between">
          <span className="hidden lg:flex flex-row gap-3 lg:gap-3 xl:gap-5">
            {navItems.map((item) => {
              return (
                <Link to={item.url} className="mx-1 text-[1rem] font-semibold cursor-pointer hover:bg-slate-100 px-3 py-1 rounded-md">
                  {item.title}
                </Link>
              );
            })}
          </span>
        </div> */}

        <div className="flex gap-5 text-[1rem] font-semibold">
          <div className="hidden lg:flex gap-5">

          <Link
              to="/services"
              className={`${
                (homeRoute || darkBgRoute) && !scrolled
                  ? "text-white"
                  : "text-black"
              } cursor-pointer hover:bg-slate-100 hover:text-gray-800 px-3 py-1 rounded-md`}
            >
              Services
            </Link>
            <Link
              to="/padestal-energy"
              className={`${
                (homeRoute || darkBgRoute) && !scrolled
                  ? "text-white"
                  : "text-black"
              } cursor-pointer hover:bg-slate-100 hover:text-gray-800 px-3 py-1 rounded-md`}
            >
              The Padestal Energy
            </Link>
            
            <Link
              to="/charj-network"
              className={`${
                (homeRoute || darkBgRoute) && !scrolled
                  ? "text-white"
                  : "text-black"
              } cursor-pointer hover:bg-slate-100 hover:text-gray-800 px-3 py-1 rounded-md`}
            >
              The Charge Network
            </Link>
          <Link
              to="/join-us"
              className={`${
                (homeRoute || darkBgRoute) && !scrolled
                  ? "text-white"
                  : "text-black"
              } cursor-pointer hover:bg-slate-100 hover:text-gray-800 px-3 py-1 rounded-md`}
            >
              Partner With Us
            </Link>
          </div>
          <button
            className={`${
              (homeRoute || darkBgRoute) && !scrolled
                ? "text-black bg-gray-200 hover:bg-gray-800 hover:text-white"
                : "text-white bg-gray-700 hover:bg-gray-800 hover:text-white"
            }  cursor-pointer hidden lg:flex  px-3 py-1 rounded-md`}
            onClick={() => setShowMenu(!showMenu)}
          >
            Menu
          </button>
          <span
            className={`${
              (homeRoute || darkBgRoute) && !scrolled
                ? "text-white"
                : "text-black"
            } cursor-pointer lg:hidden flex`}
            onClick={() => setShowMenu(!showMenu)}
          >
            <FaBars size={20} className="my-3" />
          </span>
        </div>
        <Menu
          menuItems={menuItems}
          // navItems={navItems}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
      </div>
    </>
  );
};

export default Navbar;
