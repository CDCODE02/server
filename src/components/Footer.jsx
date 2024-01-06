import React from "react";
import { FaGithubSquare, FaTelegram, FaTwitterSquare } from "react-icons/fa";
import moonguys from "../assets/serheadpic.png";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <div className="flex justify-center items-center">
          <img className="w-[55px] mx-auto my-4" src={moonguys} alt="/" />
          <h1 className="w-full text-3xl font-bold text-[#00df9a]">SERVER</h1>
        </div>
        <p className="py-4  text-[#9945FF]">
          A distinct player within the realm of DeFi, attracting attention for
          its unique Features and the community-driven.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaTelegram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium  text-[#00df9a]">Links</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer"><a href="#home">Home</a></li>
            <li className="py-2 text-sm cursor-pointer"><a href="#about">About</a></li>
            <li className="py-2 text-sm cursor-pointer"><a href="#roadmap">Roadmap</a></li>
            <li className="py-2 text-sm cursor-pointer"><a href="#tokenomics">Tokenomics</a></li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium  text-[#00df9a]">On Server</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer">Blog</li>
            <li className="py-2 text-sm cursor-pointer">Jobs</li>
            <li className="py-2 text-sm cursor-pointer">Partner's</li>
            <li className="py-2 text-sm cursor-pointer">Utility</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium  text-[#00df9a]">Documentation</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer">Whitepaper</li>
            <li className="py-2 text-sm cursor-pointer">Careers</li>
          </ul>
        </div>
        {/* <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
