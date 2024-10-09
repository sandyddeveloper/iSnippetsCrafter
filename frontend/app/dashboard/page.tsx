"use client";
import { useState } from "react";
import Header from "../components/Dashboard/Header";
import Sidebar from "../components/Dashboard/Sidebar";
import SnippetStats from "../components/Dashboard/SnippetStats";
import RecentActivity from "../components/Dashboard/RecentActivity";
import QuickActions from "../components/Dashboard/QuickActions";

const DashboardPage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>();

  //Toggle setup
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="flex-1 ">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex">
        <Sidebar />
        <main className="p-4 space-y-6 lg:ml-64">
          <SnippetStats />
          <div className="flex justify-between">
            <RecentActivity />
            <QuickActions />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
