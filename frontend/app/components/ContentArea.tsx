import SwiperSelection from "./ui/SwiperSelection";
import { SiJavascript } from "react-icons/si";
import {
  atomOneLight,
  atomOneDark,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SyntaxHighlighter from "react-syntax-highlighter";
import { useEffect, useState } from "react";
import LikeButton from "./ui/LikeButton";

export default function TagArea() {
  const [isSlideOpen, setIsSlideOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleSlideSection = () => {
    setIsSlideOpen(!isSlideOpen);
    setIsFullScreen(false); // Reset to 50% when toggling the section
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const closeSlideSection = () => {
    setIsSlideOpen(false);
  };

  return (
    <div className="flex transition-all duration-500">
      <div
        className={`transition-all duration-500 ${
          isSlideOpen ? (isFullScreen ? "w-0" : "w-1/2") : "w-full"
        }`}
      >
        <div className="mt-5">
          <SwiperSelection />
          <AllNotesSection toggleSlideSection={toggleSlideSection} />
        </div>
      </div>

      {/* Sliding Section */}
      {isSlideOpen && (
        <div
          className={`fixed top-0 right-0 h-full ${
            isFullScreen ? "w-full" : "w-1/2"
          } bg-gray-200 shadow-lg p-4 transition-transform transform translate-x-0 z-50 dark:bg-black dark:text-white text-black`}
        >
          <div className="flex justify-between items-center">
            {/* Close Button */}
            <button
              className="bg-purple text-white px-3 py-1 rounded-md"
              onClick={closeSlideSection}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Full Screen Toggle Button */}
            <button
              className="bg-purple text-white px-3 py-1 rounded-md"
              onClick={toggleFullScreen}
            >
              {isFullScreen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m15.75 9.75-4.5 4.5m0 0 4.5 4.5m-4.5-4.5H3.75m17.5 0A9 9 0 1 0 3.75 12a9 9 0 0 0 17.5 0Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9V5.25A2.25 2.25 0 0 1 6 3h3.75m4.5 0H18a2.25 2.25 0 0 1 2.25 2.25V9m0 6v3.75A2.25 2.25 0 0 1 18 21h-3.75m-4.5 0H6a2.25 2.25 0 0 1-2.25-2.25V15"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Sliding Section Content</h2>
            <p>This is where you can put your content.</p>
          </div>
        </div>
      )}
    </div>
  );
}

function AllNotesSection({
  toggleSlideSection,
}: {
  toggleSlideSection: () => void;
}) {
  return (
    <div className="mt-5 flex flex-wrap gap-4 dark:bg-gray-800 p-3 transition-colors duration-300">
      <SingleNote toggleSlideSection={toggleSlideSection} />
      <SingleNote toggleSlideSection={toggleSlideSection} />
      <SingleNote toggleSlideSection={toggleSlideSection} />
      <SingleNote toggleSlideSection={toggleSlideSection} />
      <SingleNote toggleSlideSection={toggleSlideSection} />
    </div>
  );
}

function SingleNote({
  toggleSlideSection,
}: {
  toggleSlideSection: () => void;
}) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  return (
    <div className="max-sm:w-full w-[378px] rounded-md py-4 bg-white shadow-lg dark:bg-black transition-colors duration-300">
      <NoteHeader toggleSlideSection={toggleSlideSection} />
      <NoteDate />
      <NoteTag />
      <NoteDescription />
      <CodeBlock language="javascript" isDarkMode={isDarkMode} />
      <NoteFooter />
    </div>
  );
}

function NoteHeader({
  toggleSlideSection,
}: {
  toggleSlideSection: () => void;
}) {
  return (
    <div className="flex justify-between mx-4">
      <span
        className="font-bold text-lg w-[87%] text-gray-800 dark:text-white cursor-pointer hover:text-purple dark:hover:text-purple"
        onClick={toggleSlideSection}
      >
        idhu verum Heading kaga dha
      </span>
      <LikeButton />
    </div>
  );
}

function NoteTag() {
  return (
    <div className="text-slate-500 text-[11px] mx-4 flex-wrap flex gap-1 mt-4">
      <span className="bg-purple text-white p-1 rounded-md px-2">Function</span>
      <span className="bg-purple text-white p-1 rounded-md px-2">Function</span>
      <span className="bg-purple text-white p-1 rounded-md px-2">Function</span>
      <span className="bg-purple text-white p-1 rounded-md px-2">Function</span>
    </div>
  );
}

function NoteDate() {
  return (
    <div className="text-slate-500 text-[11px] flex gap-1 font-light mx-4 mt-1">
      <span className="">11th October 2024</span>
    </div>
  );
}

function NoteDescription() {
  return (
    <div className="text-slate-600 text-[13px] mt-4 mx-4 pb-2 dark:text-gray-300">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
      dignissimos hic consectetur soluta ratione, accusantium ducimus possimus
      illum eveniet esse eaque et quae, quisquam maxime, temporibus quis ullam.
      Voluptate, repudiandae?
    </div>
  );
}

interface CodeBlockProps {
  language: string;
  isDarkMode: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, isDarkMode }) => {
  const codeString = `
    import React from 'react';

    function HelloWorld() {
        return <h1>Hello, World!</h1>;
    }
    export default HelloWorld;
    `;

  return (
    <div className="rounded-md overflow-hidden text-sm">
      <SyntaxHighlighter
        language={language}
        style={isDarkMode ? atomOneDark : atomOneLight}
        wrapLongLines
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

function NoteFooter() {
  return (
    <div className="flex justify-between text-[13px] text-slate-400 mx-4 mt-3">
      <div className="flex gap-1 items-center">
        <SiJavascript size={15} className="mc-[2px]" />
        JavaScript
      </div>
      <DeleteOutlineIcon sx={{ fontSize: 20 }} className="cursor-pointer" />
    </div>
  );
}
