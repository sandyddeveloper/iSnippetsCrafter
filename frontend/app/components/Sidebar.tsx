"use client";
import React, { useState } from "react";
import CodeOffIcon from '@mui/icons-material/CodeOff';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { languages, navItems } from "../lib/data";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile header */}
      <div className="lg:hidden p-4 flex justify-between items-center">
        <div className="text-purple text-2xl font-extrabold dark:text-white">iSnippet Crafter</div>
        <button onClick={toggleSidebar}>
          {isOpen ? (
            <CloseIcon sx={{ fontSize: 30 }} />
          ) : (
            <MenuIcon sx={{ fontSize: 30 }} />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed lg:static w-[75%] sm:w-[60%] md:w-[40%] lg:w-[20%] top-0 left-0 p-5 flex flex-col gap-2 h-screen pt-7 border-r bg-white dark:bg-black z-50 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <Logo />
        <QuickLinks />
        <Languages />
      </div>

      {/* Overlay for closing sidebar on smaller screens */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}

function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <div className="bg-purple p-[6px] rounded-md">
      <CodeOffIcon 
  sx={{ 
    fontSize: 27, 
    color: "white", 
    stroke: "white",       // Add stroke color
    strokeWidth: 1.5       // Increase stroke width to make it look bolder
  }} 
/>

      </div>
      <div>
        <span className="font-extrabold text-purple text-2xl dark:text-purple">iSnippet</span>
        <span className="text-slate-600 font-extrabold text-2xl dark:text-slate-300">Crafter</span>
      </div>
    </div>
  );
}

function QuickLinks() {
  const [activeItem, setActiveItem] = useState<string>("Dashboard");

  return (
    <div className="mt-8 text-sm">
      <div className="font-extrabold text-slate-400 dark:text-slate-300">Quick Links</div>
      <ul className="text-slate-400 mt-4 flex flex-col ml-2 font-semibold dark:text-slate-300">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.label;
          return (
            <li
              key={item.label}
              className={`items-end flex gap-4 cursor-pointer p-2 rounded-md ${
                isActive ? "bg-purple text-white" : ""
              }`}
              onClick={() => setActiveItem(item.label)}
            >
              <Icon />
              <span>{item.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Languages() {
  const [activeLanguage, setActiveLanguage] = useState<string>("Javascript");

  return (
    <div className="mt-6 text-sm">
      <div className="text-slate-400 font-extrabold dark:text-slate-300">Languages</div>
      <div className="mt-5 ml-2 text-slate-400 flex flex-col gap-4 dark:text-slate-300">
        {languages.map((lang, index) => {
          const Icon = lang.icon;
          const isActive = activeLanguage === lang.name;
          return (
            <div
              key={index}
              className={`items-end flex justify-between cursor-pointer p-2 rounded-md ${
                isActive ? "bg-purple text-white" : " "
              }`}
              onClick={() => setActiveLanguage(lang.name)}
            >
              <div className="flex gap-1 items-center">
                <Icon size={15} /> {lang.name}
              </div>
              <span className="font-bold">{lang.score}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
