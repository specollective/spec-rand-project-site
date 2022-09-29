import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RESEARCH_ASSOCIATES } from "../constants/research-associates";

function MeetTheResearchAssociatesSection() {
  let [count] = useState(0);

  return (
    <section className="w-screen bg-spec-teal-600 pt-24">
      <div className="min-h-screen align-content-center justify-center md:px-24 pb-24">
        <div className="align-content-center justify-items-center">
          <div className='md:grid grid-rows-2 grid-cols-2 gap-x-32'>
            <h1 className='text-4xl md:text-6xl row-start-1 font-bold leading-relaxed pr-8'>
              SPEC / CAREP <br/> Research Associates (RA)
            </h1>
            <h2 className='xs:text-base md:text-xl row-start-2 text-spec-yellow-600 py-5 leading-relaxed'>
              CAREP Pillar III - Policy Leadership
            </h2>
            <p className='text-base md:text-lg tracking-wide col-start-2'>
              During the 2021-2022 Fiscal Year, SPEC / CAREP research associates, 
              project staff and collaborators worked together throughout the 
              project-building process. All are excited to continue to share knowledge, 
              and resources, and collaboratively innovate to create systemic change in 
              their communities. Funding for this research was provided by unrestricted 
              gifts from RAND supporters and income from operations, with which RAND 
              established the Center to Advance Racial Equity Policy in 2020.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 align-content-center gap-2 p-2 md:mx-4 justify-items-center lg:grid-cols-4">
          { RESEARCH_ASSOCIATES.map((user, id) => (
            <div key={id} className="relative">
              <div className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 md:hover:opacity-80 md:hover:bg-stone-900 md:bg-opacity-0 md:duration-300">
                <h1 className="tracking-wider font-bold text-white text-xl">
                  {user.name}
                </h1>
                <p className="mx-auto">{user.hover_title}</p>
                <br></br>
                <Link href="/research-associates">
                  <a className="mx-auto text-sm">Learn More {">>"}</a>
                </Link>
              </div>
              <Image alt={user.name} src={user.pic} />
              <div className="md:hidden text-black text-base font-bold text-center">
                {user.name}
              </div>
              <div className="md:hidden text-black text-xs text-center">
                {user.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MeetTheResearchAssociatesSection;
