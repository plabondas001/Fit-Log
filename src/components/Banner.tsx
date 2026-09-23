import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/banner.png";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#111319] border border-gray-800/50 my-6 sm:my-10 p-6 sm:p-10 lg:p-12 rounded-2xl md:rounded-3xl gap-8 overflow-hidden">
        {/* Left Content */}
        <div className="space-y-4 sm:space-y-6 max-w-2xl text-center md:text-left w-full">
          <h3 className="text-[10px] sm:text-xs font-bold text-[#c2f800] tracking-widest uppercase">
            WORKOUT LIBRARY
          </h3>

          {/* TRAIN WITH INTENT. LOG ek line-e rakhar jonno whitespace-nowrap and responsive font size */}
          <h1 className="font-extrabold text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-white uppercase tracking-tight leading-[1.1] sm:leading-[1.05] font-sans">
            <span className="inline-block md:whitespace-nowrap">
              TRAIN WITH INTENT. LOG
            </span>{" "}
            <br /> EVERY SET.
          </h1>

          <p className="text-gray-400 text-xs sm:text-sm lg:text-base leading-relaxed max-w-lg mx-auto md:mx-0">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          <div className="pt-2">
            <Link
              href="#library"
              className="btn bg-[#c2f800] hover:bg-[#b0e000] text-black font-extrabold uppercase border-none rounded-xl px-5 sm:px-6 text-xs sm:text-sm gap-2 w-full sm:w-auto inline-flex items-center justify-center min-h-12 h-12"
            >
              <span>BROWSE WORKOUTS</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 fill-current stroke-current stroke-2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 5v14m0 0l-6-6m6 6l6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-auto flex justify-center items-center">
          <Image
            src={bannerImg}
            alt="Workout equipment preview"
            className="max-h-[220px] sm:max-h-[300px] lg:max-h-[360px] w-auto object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
