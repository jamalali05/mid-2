import React from "react";
import Logo from "../images/storefont.png";
import { PiDiscordLogo } from "react-icons/pi";
import { CiYoutube, CiTwitter, CiInstagram } from "react-icons/ci";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#3B3B3B] pl-20">
        <div className=" flex w-11/12 pt-8">
          <img src={Logo} alt="" />
          <h1 className="text-white mt-1 ml-2">NFT Marketplace</h1>
        </div>
        <div className="text-[#CCCCCC]">
          <p className="pt-4 w-9/12">
            NFT marketplace UI created with Anima for Figma
          </p>
          <h1 className="pt-4">Join our community</h1>
          <div className="flex gap-4 text-4xl mt-4">
            <PiDiscordLogo />
            <CiYoutube />
            <CiTwitter />
            <CiInstagram />
          </div>

          <div className="mt-4">
            <h1 className="text-2xl font-bold">Explore</h1>
            <h2 className="pt-4">Marketplace</h2>
            <h2 className="pt-4">Rankings</h2>
            <h2 className="pt-4">Connect a wallet</h2>
          </div>

          <h1 className="text-2xl font-bold mt-4">Join Our Weekly Digest</h1>
          <p className="w-3/4 mt-4">
            get exclusive promotions & updates Straight to you inbox
          </p>

          <input
            type="text"
            className="border-2 rounded-2xl p-2 w-4/5 mt-8"
            placeholder="Enter Your Email Address"
          />
          <button className=" rounded-2xl p-2 w-4/5 mt-4 bg-[#A259FF] font-bold text-white">
            Subscribe
          </button>

          <hr className="mt-4 pb-4 mr-20"></hr>
          <p>C NFT Market. use this template freel</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
