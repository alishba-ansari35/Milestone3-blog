"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [currentDateTime, setcurrentDateTime] = useState(``);
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        
      };
      setcurrentDateTime(
        now.toLocaleDateString("en-Us", options) +
          " " 
         
      );
    };

    updateDateTime();
    const interValid = setInterval(updateDateTime, 1000);
    return () => clearInterval(interValid);
  }, []);

  return (
    <header className="text-gray-400 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <div className="flex-1 text-black ">
          <span>{currentDateTime}</span>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-black justify-center mt-4 md:mt-0">
          <Link
            href="/"
            className="mr-5 hover:underline transition-colors duration-300 transform hover-scale-105 "
          >
            {""}
            Home
            {""}
          </Link>

          <Link
            href="/about"
            className="mr-5  hover:underline transition-colors duration-300 transform hover-scale-105"
          >
            {""}
            About
            {""}
          </Link>

          <Link
            href="/blog"
            className="mr-5  hover:underline transition-colors duration-300 transform hover-scale-105"
          >
            {""}
            Blog
            {""}
          </Link>

          <Link
            href="/contact"
            className="mr-5  hover:underline transition-colors duration-300 transform hover-scale-105"
          >
            {""}
            Contact
            {""}
          </Link>
        </nav>

         {/* <button className="inline-flex items-center bg-blue-700 border-0 py-1 px-3 focus:outline-none hover:bg-black rounded text-white mt-4 md:mt-0 transition-colors duration-300 ">
          Youtube </button>  */}
      </div>
    </header>
  );
}

