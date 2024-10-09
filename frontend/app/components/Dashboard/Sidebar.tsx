"use client";
import React, { useState } from "react";
import { Home, Code, Folder, Tag, Star, Clock, User, Settings, LogOut } from "lucide-react";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";


const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState<string>("Dashboard");

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const navItems = [
    { icon: Home, label: "Dashboard" },
    { icon: Code, label: "Snippets" },
    { icon: Folder, label: "Categories" },
    { icon: Tag, label: "Tags" },
    { icon: Star, label: "Favorites" },
    { icon: Clock, label: "Recent" },
    { icon: User, label: "Profile" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <div
      className={`fixed left-0 top-16 h-full bg-[#1A1A1A] text-white ${isCollapsed ? "w-20" : "w-64"} transition-width duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-between p-4">
        <span className={`${isCollapsed ? "hidden" : "text-[22px] font-bold text-[#C0C0C0]"}`}>
          Navigator
        </span>

        <button
          className="text-[#FBFEEB] hover:text-[#DCFE50] focus:outline-none"
          onClick={toggleSidebar}
        >
          <Bars3BottomRightIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="mt-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.label;
          return (
            <div
              key={item.label}
              className={`flex items-center p-3 my-2 cursor-pointer rounded-md ${
                isActive
                  ? "bg-[#313230] text-[#DCFE50] border-l-4 border-[#DCFE50]"
                  : "hover:bg-[#313230] hover:text-[#DCFE50]"
              } transition-colors duration-200 ease-in-out`}
              onClick={() => setActiveItem(item.label)}
            >
              <Icon className="w-6 h-6 mr-2" />
              {!isCollapsed && <span className="text-sm">{item.label}</span>}
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
