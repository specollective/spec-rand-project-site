import React from 'react'
import Image from 'next/image'
import SpecLogo from "../public/spec_logo.svg";
import CAREP_logo from "../public/homepage_hero_assets/CAREP_logo.svg";
import collab from "../public/homepage_hero_assets/collab.png";

function TopHeroComponent() {
  return (
    <div className="grid grid-cols-2">

      <div className="">
        <div className="flex px-20">
          <Image src={SpecLogo} alt="spec logo" width={180} height={180} />
          <h1 className="justify-items-center text-5xl text-spec-white-600 font-Poppins md:pr-24">Sustainable Progress & Equality Collective </h1>
        </div>

        <div className="text-center text-2xl">
          <Image src={collab} alt="collab image" width={200} height={80} />
        </div>

        <div className="flex px-20">
          <h2 className="text-5xl text-spec-yellow-600 font-Lora pl-32 pr-1">
            Center to Advance Racial Equity Policy
          </h2>
          <Image src={CAREP_logo} alt="center for racial equity logo" width={150} height={150} />
        </div>
        <div className="text-right mr-48 mt-2 text-lg">
          <p>@ RAND</p>
        </div>

      </div>

      <div>
        
      </div>
    </div>
  )
}

export default TopHeroComponent;
