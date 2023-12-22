// Tokenomice.jsx

import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
// import Laptop from "../assets/serheadpicAB.png";

const Tokenomice = () => {
  // Sample data for the pie chart
  const data = {
    labels: ["Liquidity", "Burn", "Airdrop"],
    datasets: [
      {
        data: [85, 10, 5],
        backgroundColor: ["#00df9a", "#9945FF", "#FFD700"], // Adjust colors as needed
      },
    ],
  };

  return (
    <div className="w-full bg-black text-white py-16 px-4">
      <h2 className="text-[#00df9a] font-bold text-4xl p-2 text-center">
        TOKENOMICE
      </h2>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
        <div className="w-full md:w-[500px] mx-auto my-4">
          {/* Use Doughnut component from react-chartjs-2 */}
          <Doughnut data={data} />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold mb-4">
            Utility token details:
          </p>
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
            Airdrop: <span className="text-[#00df9a]">5%</span>
          </h1>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Burn: <span className="text-[#00df9a]">10%</span>
          </h1>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Liquidity: <span className="text-[#00df9a]">85%</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Tokenomice;
