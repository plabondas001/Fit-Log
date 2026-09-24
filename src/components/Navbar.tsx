"use client";

import Image from "next/image";
import logo from "@/assets/logo.png";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { ExerciseContext } from "@/context/ExerciseProvider";

const Navbar = () => {
  const pathName = usePathname();
  const { plan, saved, setActivePlanTab } = useContext(ExerciseContext);

  const links = (
    <>
      <li>
        <Link
          className={
            pathName === "/workout"
              ? "text-[#c2f800] border border-[#1a2312] bg-[#1a2312] rounded-2xl px-4 py-1.5 font-medium"
              : "text-gray-300 hover:text-white px-3 py-1.5"
          }
          href="/workout"
        >
          Workout
        </Link>
      </li>
      <li>
        <Link
          className={
            pathName === "/myPlan"
              ? "text-[#c2f800] border border-[#1a2312] bg-[#1a2312] rounded-2xl px-4 py-1.5 font-medium"
              : "text-gray-300 hover:text-white px-3 py-1.5"
          }
          href="/myPlan"
        >
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <header className="w-full bg-black border-b border-gray-800 py-3 text-white">
      <nav className="container mx-auto px-4 flex flex-wrap items-center justify-between gap-y-3">
        <div className="flex items-center">
          <Link className="flex items-center gap-2 sm:gap-3" href="/">
            <Image
              width={28}
              height={28}
              src={logo}
              alt="nav-logo"
              className="w-7 sm:w-8 h-auto"
            />
            <h1 className="font-bold text-lg sm:text-xl tracking-wider">
              FITLOG
            </h1>
          </Link>
        </div>

        <ul className="flex items-center gap-2 sm:gap-6 order-3 md:order-2 w-full md:w-auto justify-center pt-2 md:pt-0 border-t md:border-t-0 border-gray-900">
          {links}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3 order-2 md:order-3">
          <Link
            href="/myPlan"
            onClick={() => setActivePlanTab("today")}
            className="bg-[#CCFF00] hover:bg-[#b8e600] text-black font-semibold text-xs sm:text-sm px-3.5 py-1.5 rounded-full flex items-center gap-2 transition-all"
          >
            <span>Plan</span>
            <span className="w-5 h-5 rounded-full bg-black text-[#CCFF00] text-[11px] font-bold flex items-center justify-center">
              {plan.length}
            </span>
          </Link>

          <Link
            href="/myPlan"
            onClick={() => setActivePlanTab("saved")}
            className="border border-gray-700 hover:border-gray-500 text-white text-xs sm:text-sm px-3.5 py-1.5 rounded-full flex items-center gap-2 transition-all"
          >
            <span>Saved</span>
            <span className="w-5 h-5 rounded-full border border-gray-600 text-gray-300 text-[11px] font-medium flex items-center justify-center">
              {saved.length}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
