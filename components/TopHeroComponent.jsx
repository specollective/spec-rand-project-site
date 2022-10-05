import React from 'react'
import Image from 'next/image'
import hero_right from "../public/homepage_hero_assets/HeroRight.png";
import hero_left from "../public/homepage_hero_assets/HeroLeft.png";

function TopHeroComponent() {
  return (
    <div className="grid md:grid-cols-2 gap-3 md:gap-5 md:w-4/5 lg:w-3/4 md:m-auto px-10 py-5 md:px-0 md:py-12 ">
      <div className="cols-span-1">
        <Image src={hero_left} alt="hero left side"/>
      </div>
      <div className="cols-span-1">
        <Image src={hero_right} alt="hero right side"/>
      </div>
    </div>
  )
}

export default TopHeroComponent;
