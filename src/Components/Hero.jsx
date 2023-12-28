import React from "react";
import Image from "../images/image.png";
import { CiUser, CiMail, CiLock } from "react-icons/ci";

const Hero = () => {
  return (
    <div className=" bg-[#2B2B2B] pb-4 md:flex">

      <div className="grid grid-cols-1 gap-4 place-content-start">
        <img src={Image} className="h-[280px] lg:h-screen md:h-[100vh] md:w-[100vh] w-full" alt="" />
      </div>
      <div className="mx-auto flex flex-col items-center lg:my-auto md:my-auto">
        <h1 className="font-bold text-4xl text-white">Create Account</h1>
        
        <div className="w-11/12 pl-24 mr-12 justify-center mt-4">
        <p className="text-white w-5/6">
          Welcome! enter your details and start creating, collecting and selling
          NFTS.
        </p>

        <div className="border-2 rounded-full p-2 w-4/5 mt-2 bg-white flex " ><CiUser className="mt-1 mr-2"/><input type="text" name="" id="" placeholder="Username" /></div>

        <div className="border-2 rounded-full p-2 w-4/5 mt-2 bg-white flex "><CiMail className="mt-1 mr-2" />
        <input type="email" name="" id="" placeholder="Email Address" />
        </div>

        <div className="border-2 rounded-full p-2 w-4/5 mt-2 bg-white flex "><CiLock className="mt-1 mr-2"/>
        <input type="password" name="" id="" placeholder="Password" />
        </div>

        <div className="border-2 rounded-full p-2 w-4/5 mt-2 bg-white flex "><CiLock className="mt-1 mr-2"/>
        <input type="password" name="" id="" placeholder="Confirm Password"/>
        </div>

        <button className=" rounded-full p-2 w-4/5 mt-4 bg-[#A259FF] font-bold text-white">Create Account</button>
        </div>

      </div>
    </div>
  );
};

export default Hero;
