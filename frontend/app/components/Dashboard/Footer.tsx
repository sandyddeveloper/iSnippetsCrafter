import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-[#232323] text-gray-300 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Links Section */}
        <div className="flex flex-col md:flex-row md:space-x-10 mb-4 md:mb-0">
          <div className="flex flex-col space-y-1">
            <h4 className="text-white font-semibold text-sm">Product</h4>
            <a href="#home" className="text-gray-400 hover:text-[#DCFE50] text-xs">Home</a>
            <a href="#about" className="text-gray-400 hover:text-[#DCFE50] text-xs">About</a>
            <a href="#contact" className="text-gray-400 hover:text-[#DCFE50] text-xs">Contact</a>
          </div>
          <div className="flex flex-col space-y-1">
            <h4 className="text-white font-semibold text-sm">Resources</h4>
            <a href="#snippets" className="text-gray-400 hover:text-[#DCFE50] text-xs">Snippets</a>
            <a href="#categories" className="text-gray-400 hover:text-[#DCFE50] text-xs">Categories</a>
            <a href="#favorites" className="text-gray-400 hover:text-[#DCFE50] text-xs">Favorites</a>
          </div>
          <div className="flex flex-col space-y-1">
            <h4 className="text-white font-semibold text-sm">Support</h4>
            <a href="#help" className="text-gray-400 hover:text-[#DCFE50] text-xs">Help Center</a>
            <a href="#privacy" className="text-gray-400 hover:text-[#DCFE50] text-xs">Privacy Policy</a>
            <a href="#terms" className="text-gray-400 hover:text-[#DCFE50] text-xs">Terms of Service</a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a
            href="https://facebook.com"
            className="text-[#DCFE50] hover:bg-[#FBFEEB] p-2 rounded-full transition-colors duration-300"
            aria-label="Facebook"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://twitter.com"
            className="text-[#DCFE50] hover:bg-[#FBFEEB] p-2 rounded-full transition-colors duration-300"
            aria-label="Twitter"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            className="text-[#DCFE50] hover:bg-[#FBFEEB] p-2 rounded-full transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://linkedin.com"
            className="text-[#DCFE50] hover:bg-[#FBFEEB] p-2 rounded-full transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>

      {/* Copyright Information */}
      <div className="border-t border-gray-700 mt-4 pt-4">
        <p className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} iSnippetsCrafter. All rights reserved.
        </p>
        <p className="text-center text-gray-500 text-xs">
          Built with love by the iSnippetsCrafter team.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
