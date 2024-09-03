import React, { useState } from "react";
// import {HiChevronDoubleLeft} from "react-icons/hi2"
import { FiAlignJustify } from "react-icons/fi";
import { MdHome } from "react-icons/md";
import { FaSearchengin } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link, Route, Routes } from "react-router-dom";
import logo from "../assets/NewLogo.png";
import { Projects, SignUp } from "../container";
import { useSelector } from "react-redux";
import { UserProfileDetails } from "../components";

const Home = () => {
  const [isSideMenu, setIsSidemenu] = useState(false);
  const user = useSelector((state) => state.user?.user);
  return (
    <>
      {/* left side section */}
      <div
        className={`w-2 ${
          isSideMenu ? "w-2" : "flex-[.2] xl:flex-[.2]"
        } min-h-screen max-h-screen relative bg-secondary px-3 py-6 flex flex-col  items-center justify-start gap-4 transition-all duration-200 ease-in-out`}
      >
        {/* anchor (myfolding Button) */}
        <motion.div
          whileTap={{ scale: 0.8 }}
          onClick={() => setIsSidemenu(!isSideMenu)}
          className="w-8 h-8 bg-secondary rounded-tr-lg rounded-br-lg absolute -right-6 flex items-center justify-center cursor-pointer pr-2"
        >
          <FiAlignJustify className="text-white text-xl" />
        </motion.div>

        <div className="overflow-hidden w-full flex flex-col gap-4">
          {/* logo */}
          <Link to={"/home"}>
            <img src={logo} alt="Logo" className="object-contain w-25 h-auto" />
          </Link>

          {/* start coding */}
          <Link to={"/newProject"}>
            <div className="px-4 py-2 flex items-center justify-center rounded-xl border border-gray-400 cursor-pointer group hover:border-gray-200 min-w-[100px]">
              <p className="text-gray-400 group-hover:text-gray-200 text-sm whitespace-nowrap">
                Start Coding
              </p>
            </div>
          </Link>

          {/* home nav */}

          {/* agar user login hoga to hi home option display hoga  */}
          {user && (
            <Link
              to="hone/projects"
              className="flex items-center justify-center gap-6"
            >
              <MdHome className="text-primaryText text-xl" />
              <p className="text-lg text-primaryText">Home</p>
            </Link>
          )}
        </div>
      </div>
      {/* right Body */}
      <div className="flex-1 min-h-screen overflow-y-scroll h-full flex flex-col items-start justify-start px-4 md:px-12 py-4 md:py-12">
        {/* top seaction */}
        <div className=" w-full flex items-center justify-between gap-3">
          {/* serach */}
          <div className="bg-secondary w-full px-4 py-3 rounded-md flex items-center justify-center gap-3">
            <FaSearchengin className="text-2xl text-primaryText" />
            <input
              type="text"
              className="flex-1 px-4 py-1 text-xl bg-transparent outline-none border-none text-primaryText placeholder:text-gray-600 placeholder:text-gray"
              placeholder="Search here..."
            />
          </div>
          {/* profile section */}

          {/* if you not  have the user */}
          {!user && (
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center gap-3"
            >
              <Link
                to={"/home/auth"}
                className="bg-emerald-500 px-6 py-2 whitespace-nowrap rounded-md text-white text-sm cursor-pointer hover:bg-emerald-700"
              >
                Sign Up
              </Link>
            </motion.div>
          )}
          {/* if you have the user */}
          {user && <UserProfileDetails />}
        </div>

        {/* Bottom Section (Cards Section) */}
        <div className="w-full">
          <Routes>
            <Route path="*" element={<Projects />} />
            <Route path="/auth" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Home;
