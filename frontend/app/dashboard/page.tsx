"use client"
import { useState } from "react";
import Header from "../components/Dashboard/Header";
import Sidebar from "../components/Dashboard/Sidebar";


const DashboardPage : React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>();

  //Toggle setup
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }
    return (
      <div>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar />
      
      {/* <MainFooter /> */}
      </div>
    );
  };
  
  export default DashboardPage;
  