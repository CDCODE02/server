import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import moonguys from "../assets/serheadpic.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(prev => !prev);
  };

  const handleCloseNav = ()=> setNav(false)
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <img className="w-[55px] mx-auto my-4" src={moonguys} alt="/" />
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">SERVER</h1>
      <ul className="hidden md:flex">
        <li className="p-4 uppercase cursor-pointer text-[#00df9a]"><a href="#home">Home</a></li>
        <li className="p-4 uppercase cursor-pointer"><a href="#about">About</a></li>

        <li className="p-4 uppercase cursor-pointer"><a href="#roadmap">Roadmap</a></li>
        <li className="p-4 uppercase cursor-pointer"><a href="#tokenomics">TOKENOMICS</a></li>
        <li className="p-4 uppercase cursor-pointer"><a target="_blank" rel="noreferrer" href="https://t.me/server_sol">community</a></li>
        <button className="bg-[#00df9a] w-[100px] rounded-md font-medium my-3 py-2 text-black">
          <a 
            href="https://docs.google.com/presentation/d/1D1mwz-qQcB_QmxSlR0m73UfeGd67PWpCNkw6XCTUW3A/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            DOC'S
          </a>
        </button>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <div className="flex justify-center items-center">
          <img className="w-[55px] mx-auto my-4" src={moonguys} alt="/" />
          <h1 className="w-full text-3xl font-bold text-[#00df9a]">SERVER</h1>
        </div>
        <li onClick={()=> handleCloseNav()} className="p-4 border-b border-gray-600 uppercase"><a href="#home">Home</a></li>
        <li onClick={()=> handleCloseNav()} className="p-4 border-b border-gray-600 uppercase"><a href="#about">About</a></li>
        <li onClick={()=> handleCloseNav()} className="p-4 border-b border-gray-600 uppercase"><a href="#roadmap">Roadmap</a></li>
        <li onClick={()=> handleCloseNav()} className="p-4 border-b border-gray-600 uppercase"><a href="#tokenomics">TOKENOMICS</a></li>
        <li onClick={()=> handleCloseNav()} className="p-4 border-b border-gray-600 uppercase"><a target="_blank" rel="noreferrer" href="https://t.me/server_sol">Community</a></li>
        <div className="flex justify-center items-center">
          <button onClick={()=> handleCloseNav()} className="bg-[#00df9a] w-[100px] rounded-md font-medium my-3 mx-auto py-2 text-black">
            LEARN MORE
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
