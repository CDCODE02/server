import React from "react";
import Laptop from "../assets/serheadpicAB.png";

const Tokenomice = () => {
  return (
    <div className="w-full bg-black text-white py-16 px-4">
      <h1 className="text-[#00df9a] font-bold text-4xl p-2 text-center flex items-center justify-center">
        TOKENOMICE
      </h1>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">Utility token details:</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Token Name: <span className="text-[#00df9a]">SERVER</span>
          </h1>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Symbol: <span className="text-[#00df9a]">SVR</span>
          </h1>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Total Supply:{" "}
            <span className="text-[#00df9a]">100,000,000,000</span>
          </h1>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Liquidity lock: <span className="text-[#00df9a]">40 Years</span>
          </h1>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Burn: <span className="text-[#00df9a]">10%</span>
          </h1>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Liquidity: <span className="text-[#00df9a]">90%</span>
          </h1>
          {/* <p>
            SERVER is an ecosystem known for its adoption and provision of
            financial resources, and real economic impact to the users, and its
            prominence within the broader digital asset landscape. SERVER
            harnesses the power of community engagement, drawing attention to
            the fundamental principles of decentralisation, inclusivity, and
            humour.
          </p>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            LEARN MORE
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Tokenomice;
