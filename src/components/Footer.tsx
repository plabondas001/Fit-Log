import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-[#0d0f13] border-t border-[#1d2026]">
      <div className="container mx-auto px-6 py-7 flex flex-col md:flex-row items-center justify-between gap-4">
        
       
        <div className="flex items-center gap-2">
          <Image src={logo} alt=""></Image>

          <span className="text-white font-bold tracking-wide">
            FITLOG
          </span>
        </div>

        
        <p className="text-sm text-gray-500">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;