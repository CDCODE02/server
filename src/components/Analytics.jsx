import React from "react";
import Laptop from "../assets/serheadpicAB.png";

const Analytics = () => {
  return (
    <div className="w-full bg-black text-white py-16 px-4">
      <h1 className="text-[#00df9a] font-bold text-4xl p-2 text-center flex items-center justify-center">
        ABOUT
      </h1>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">Understanding SERVER:</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            A New Phenomenon
          </h1>
          <p>
            SERVER is an ecosystem known for its adoption and provision of
            financial resources, and real economic impact to the users, and its
            prominence within the broader digital asset landscape. SERVER
            harnesses the power of community engagement, drawing attention to
            the fundamental principles of decentralisation, inclusivity, and
            humour.
          </p>
          <p className="text-[#00df9a] font-bold">SERVER:</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Why Solana Blockchain?{" "}
          </h1>
          <p>
            Solana's proof-of-stake capabilities enable seamless transactions,
            making it a valuable blockchain for business applications. Solana's
            modular architecture provides greater scalability and allows
            developers to build and deploy applications that can run without
            disrupting performance. Solana's approval mechanism speeds up
            transactions while reducing costs. There's no need to pay
            transaction fees charged by other popular blockchain platforms on
            Solana.
          </p>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
