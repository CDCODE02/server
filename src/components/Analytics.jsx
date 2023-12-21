import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">
            One Name For All Of Your Addressess
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            BNS global name service
          </h1>
          <p>
            Long addresses no longer need to be copied and pasted. All of your
            addresses can be stored under your BNS name, which can also be used
            to receive any tokens, cryptocurrencies, or NFT.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Launch app
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
