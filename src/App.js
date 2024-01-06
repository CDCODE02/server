import React from "react";
import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Tokenomice from "./components/Tokenomice";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Cards />
      <Tokenomice />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
