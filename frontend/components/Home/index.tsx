import React from "react";
import Navbar from "../ui/FloatingNavbar";
import Footer from "./Footer";
import Hero from "./Hero";

const HomePage = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <FloatingNav navItems={navItems} /> */}
        <Navbar />
        <Hero />

        <Footer />
      </div>
    </main>
  );
};

export default HomePage;
