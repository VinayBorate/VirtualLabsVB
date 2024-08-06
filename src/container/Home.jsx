import React, { useState } from "react";
// import {HiChevronDoubleLeft} from "react-icons/hi2"
import { FiAlignJustify } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/NewLogo.png";

const Home = () => {
  const [isSideMenu, setIsSidemenu] = useState(false);
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
          className="w-8 h-8 bg-secondary rounded-tr-lg rounded-br-lg absolute -right-6 flex items-center justify-center cursor-pointer"
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
            <div className="px-6 py-3 flex items-center justify-center rounded-xl border border-gray-400 cursor-pointer group hover:border-gray-200">
              <p className="text-gray-400 group-hover:text-gray-200">
                Start Coading
              </p>
            </div>
          </Link>

          {/* home nav */}
        </div>
      </div>
    </>
  );
};

export default Home;
