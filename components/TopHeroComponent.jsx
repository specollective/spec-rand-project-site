import React from 'react'
import Image from 'next/image'
import SpecCollab from '../public/SPECcollab.svg'
import RAND from '../public/@RAND.svg'

function TopHeroComponent() {
  return (
    <div className="bg-hero-img bg-cover xs:h-[625px] sm:h-[550px] bg-center text-center font-Poppins md:pt-4 lg:pt-10">
      <div className='xs:px-10 xs:pt-10 lg:px-20'>
        <div className=''>
          <Image className='object-scale-down' src={SpecCollab} alt="logo" />
        </div>
        <h2 className='text-white xs:text-2xl xs:px-10 lg:text-5xl font-bold lg:pb-4'>Center to Advance Racial Equity Policy </h2>
        <div className='text-right xs:pb-2 xs:pr-12 lg:pr-44 lg:pb-8 xl:px-96'>
          <Image className='object-scale-down' src={RAND} alt="randLogo" />
        </div>
        <div className='text-white xs:pb-4 lg:pb-8 md:text-xl xl:px-60'>
          <p>In February 2022, Sustainable Progress and Equality Collective (SPEC) announced a partnership with the RAND Center to Advance Racial Equity Policy to create and implement CAREP’s flagship Microcredential program. </p>
        </div>
        <div className='text-white md:text-xl xl:px-60'>
          <p>A special class of SPEC/RAND Research Associates was comprised of a diverse group of individuals with experience in academic, healthcare, corporate, government, and nonprofit settings to gain in-depth experience in research, educational technology, and organizational development. </p>
        </div>
      </div>
    </div>
  )
}

export default TopHeroComponent
