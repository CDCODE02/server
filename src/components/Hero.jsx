import React from "react";
import Typed from "react-typed";
import backgroundImage from "../assets/serbg2.jpeg";

const Hero = () => {
  return (
    <div
      className="w-full h-screen mx-auto text-center flex flex-col justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        margin: 0,
        maxWidth: "100%",
        height: "88vh", // Default height for larger screens
        "@media (max-width: 600px)": {
          height: "80vh",
        },
      }}
    >
      <>
        <p className="text-[#00df9a] font-bold p-2">
          AN ECOSYSTEM ONE OF ITS KIND
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-[#00df9a]">
          SERVER ON SOLANA
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4 text-[#9945FF]">
            unique characteristics
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-3 pl-1 text-[#00df9a]"
            strings={[
              "Emerged",
              "Distinct",
              "DeFi realm",
              "community",
              "driven",
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-medium  text-[#9945FF]">
          Attracting attention for its unique Features and the community-driven
          ethos behind its development.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          LEARN MORE
        </button>
      </>
    </div>
  );
};

export default Hero;

/* Add the following CSS within your global styles or the appropriate stylesheet */
