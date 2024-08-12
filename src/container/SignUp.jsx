import React, { useState } from "react";
import Logo from "../assets/NewLogo.png";
import { UserAuthInput } from "../components";
import { FaEnvelope } from "react-icons/fa6";
import { MdPassword } from "react-icons/md";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-full py-6">
      <img
        src={Logo}
        className="object-contain w-32 opacity-50 h-auto "
        alt="MyLogo"
      />

      <div className="w-full flex flex-col items-center justify-center py-8">
        <p className=" py-12 text-2xl text-primaryText">Join With Us!😎</p>

        <div className=" px-8 w-full md:w-auto py-4 rounded-xl bg-secondary shadow-md flex flex-col items-center justify-center gap-8">
          {/* email */}
          <UserAuthInput
            label="Email"
            placeHolder="Email"
            isPass={false}
            key="Email"
            setStateFunction={setEmail}
            Icon={FaEnvelope}
          />

          {/* password */}
          <UserAuthInput
            label="Password"
            placeHolder="Password"
            isPass={true}
            key="Password"
            setStateFunction="setPassword"
            Icon={MdPassword}
          />

          {/* alert section */}

          {/* login button */}

          {/* account text section */}

          {/* orsection */}

          {/* sign in with google */}

          {/* or section */}

          {/* sign in with github */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
