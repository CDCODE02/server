import React from "react";
import Single from "../assets/Phase-1-removebg-preview.png";
import Double from "../assets/Phase-2-removebg-preview.png";
import Triple from "../assets/Phase-3-removebg-preview.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-black">
      <h1 className="text-[#00df9a] font-bold text-4xl p-2 mb-12 text-center flex items-center justify-center">
        ROADMAP
      </h1>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl bg-[#9945FF] flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8 text-[#00df9a]">
            Phase 1
          </h2>
          {/* <p className="text-center text-4xl font-bold">$149</p> */}
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8 text-[#fff]">
              Team Formation
            </p>
            <p className="py-2 border-b mx-8 text-[#fff]">Technical Roadmap</p>
            <p className="py-2 border-b mx-8 text-[#fff]">
              Social Media Set-up
            </p>
            <p className="py-2 border-b mx-8 text-[#fff]">Website</p>
            <p className="py-2 border-b mx-8 text-[#fff]">Stealth launch</p>
          </div>
          {/* <button className="bg-[#9945FF] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button> */}
        </div>
        <div className="w-full shadow-xl bg-[#9945FF] flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105         duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8 text-[#00df9a]">
            Phase 2
          </h2>
          {/* <p className="text-center text-4xl font-bold">$300</p> */}
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8 text-[#fff]">Airdrops</p>
            <p className="py-2 border-b mx-8 text-[#fff]">
              LP lock for 40 years
            </p>
            <p className="py-2 border-b mx-8 text-[#fff]">Ad's & Marketing</p>
            <p className="py-2 border-b mx-8 text-[#fff]">CMC and CG listing</p>
            <p className="py-2 border-b mx-8 text-[#fff]">CEX Partnership</p>
          </div>
          {/* <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button> */}
        </div>
        <div className="w-full bg-[#9945FF] shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8 text-[#00df9a]">
            Phase 3
          </h2>
          {/* <p className="text-center text-4xl font-bold">$149</p> */}
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8 text-[#fff]">Staking Dapp</p>
            <p className="py-2 border-b mx-8 text-[#fff]">DEX launch</p>
            <p className="py-2 border-b mx-8 text-[#fff]">AMAs</p>
            <p className="py-2 border-b mx-8 text-[#fff]">Tech Innovation</p>
            <p className="py-2 border-b mx-8 text-[#fff]">Server expansion</p>
          </div>
          {/* <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Cards;
