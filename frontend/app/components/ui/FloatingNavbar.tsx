import React from "react";
import Logo from "../Logo";

const Navbar: React.FC = () => {
  return (
    <nav
      className="fixed top-0 left-0 w-full z-[5001] backdrop-blur-lg"
      style={{
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-4xl font-bold text-white">
            <Logo />
          </div>

          <div className="hidden md:flex space-x-8 pt-2">
            {["Home", "About", "Features", "Pricing", "Contact"].map(
              (item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-white transition duration-200"
                >
                  {item}
                </a>
              )
            )}
          </div>

          <div>
            <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-5 py-3 rounded-full">
              <span>Login</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
