"use client";
import React, { useState, useEffect } from "react";
import {
  BellIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  UserCircleIcon,
  ChevronDownIcon,
  CodeBracketIcon,
  SunIcon,
  MoonIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";

interface HeaderProps {
  toggleSidebar: () => void; // Function to toggle sidebar visibility
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect to apply the theme on load
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="bg-[#232323] text-white w-full h-16 flex items-center justify-between px-4 shadow-lg">
      {/* Left Section: Hamburger, Logo and Search */}
      <div className="flex items-center space-x-4">
        <button onClick={toggleSidebar} aria-label="Toggle Sidebar">
          <CodeBracketIcon className="h-8 w-8 text-white" />
        </button>

        {/* Logo */}
        <div className="flex items-center">
          <div className="text-[#DCFE50] text-2xl font-bold">iSnippetsCrafter</div>
        </div>

        {/* Search Bar */}
        <div className="hidden pl-[800px] md:flex">
          <input
            type="text"
            placeholder="Search snippets..."
            className="px-4 py-1 text-black rounded-lg outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
      </div>

      {/* Right Section: Icons and Profile */}
      <div className="flex items-center space-x-4">
        {/* Notification Icon */}
        <button className="relative hover:text-yellow-400">
          <BellIcon className="w-6 h-6" />
        </button>

        {/* Messages Icon */}
        <button className="relative hover:text-yellow-400">
          <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6" />
        </button>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="relative hover:text-yellow-400"
          aria-label="Toggle Theme"
        >
          {isDarkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2 hover:text-yellow-400"
          >
            <UserCircleIcon className="w-8 h-8" />
            <ChevronDownIcon className="w-5 h-5" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-[#232323] rounded-md shadow-lg py-2">
              <a
                href="#profile"
                className="flex items-center px-4 py-2 text-sm hover:bg-[#313230] text-white rounded-t-md"
              >
                <UserCircleIcon className="w-5 h-5 mr-2" />
                Profile
              </a>
              <a
                href="#settings"
                className="flex items-center px-4 py-2 text-sm hover:bg-[#313230] text-white rounded-t-md"
              >
                <AdjustmentsHorizontalIcon className="w-5 h-5 mr-2" />
                Settings
              </a>
              <a
                href="#logout"
                className="flex items-center px-4 py-2 text-sm hover:bg-[#313230] text-white rounded-b-md"
              >
                <UserCircleIcon className="w-5 h-5 mr-2" />
                Logout
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden">
        <input
          type="text"
          placeholder="Search snippets..."
          className="px-4 py-1 text-black rounded-lg outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
    </header>
  );
};

export default Header;
