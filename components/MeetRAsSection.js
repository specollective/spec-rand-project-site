import { profileData } from "./content/profileContent"
import RaSquares from "./RaSquares"

export default function MeetRAs() {
  return (
    <div className='xs:px-5 md:px-36 lg:px-40 bg-spec-teal-600 xs:py-4 md:py-20 text-Poppins'>
      <section className='md:grid grid-rows-2 grid-cols-2 auto-rows-min xs:px-4 md:px-20'>
        <h1 className='text-4xl md:text-6xl row-start-1 font-bold leading-relaxed pr-8'>
          SPEC / CAREP <br/> Research Associates (RA)
        </h1>
        <h2 className='xs:text-base md:text-xl row-start-2 text-spec-yellow-600 py-5 leading-relaxed'>
          CAREP Pillar III - Policy Leadership
        </h2>
        <p className='row-span-2 text-base md:text-lg tracking-wide'>
          During the 2021-2022 Fiscal Year, SPEC / CAREP research associates, 
          project staff and collaborators worked together throughout the 
          project-building process. All are excited to continue to share knowledge, 
          and resources, and collaboratively innovate to create systemic change in 
          their communities. Funding for this research was provided by unrestricted 
          gifts from RAND supporters and income from operations, with which RAND 
          established the Center to Advance Racial Equity Policy in 2020.
        </p>
      </section>
      <RaSquares profileData={profileData}/>
    </div>
  )
};