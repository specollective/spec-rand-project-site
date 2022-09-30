import React from 'react'
import Image from 'next/image'
import hero_right from "../public/homepage_hero_assets/HeroRight.png";
import hero_left from "../public/homepage_hero_assets/HeroLeft.png";

function TopHeroComponent() {
  return (
    <div className="md:grid md:grid-cols-2 my-2 md:my-0">
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
