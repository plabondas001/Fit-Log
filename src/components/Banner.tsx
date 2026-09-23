import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/banner.png"

const Banner = () => {
  return (
    <div>
      <div>
        <div>
          <h3>WORKOUT LIBRARY</h3>
          <h1>TRAIN WITH INTENT. LOGEVERY SET.</h1>
          <p>
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>
          <button className="btn">BROWSE WORKOUTS</button>
        </div>

        <div>
            <Image src={bannerImg} alt="banner-img"/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
