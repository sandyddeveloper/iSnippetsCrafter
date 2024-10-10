import React from "react";
import Sidebar from "../components/Sidebar";
import ContentArea from "../components/Navbar";
import { ThemeProvider } from "../provider";

const page = () => {
  return (
    <div className="flex ">
      <ThemeProvider>
        <Sidebar />
        <div className="content  w-[100%] dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
          <ContentArea />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default page;
