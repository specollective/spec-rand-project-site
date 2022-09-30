import React from 'react'
import Image from 'next/image'
import SpecCollab from '../public/SPECcollab.svg'
import RAND from '../public/@RAND.svg'

function TopHeroComponent() {
  return (
    <div className="bg-hero-img bg-cover h-auto md:pt-4 lg:pt-10 bg-center text-center font-Poppins lg:pb-32 pb-16">
      <div className='xs:px-10 xs:pt-10 lg:px-20'>
        <div>
          <Image className='object-scale-down' src={SpecCollab} alt="logo" />
        </div>
        <h2 className='xs:text-2xl xs:px-10 lg:text-5xl lg:pb-4 font-bold text-white'>Center to Advance Racial Equity Policy </h2>
        <div className='text-right xs:pb-2 xs:pr-12 lg:pr-44 xl:px-60 2xl:pr-96 lg:pb-8'>
          <Image className='object-scale-down' src={RAND} alt="randLogo" />
        </div>
        <div className='xs:pb-4 md:text-xl lg:pb-8 xl:px-40 2xl:px-60 text-white'>
          <p>In February 2022, Sustainable Progress and Equality Collective (SPEC) announced a partnership with the RAND Center to Advance Racial Equity Policy to create and implement CAREP’s flagship Microcredential program. </p>
        </div>
        <div className='md:text-xl xl:px-40 2xl:px-60 text-white'>
          <p>A special class of SPEC/RAND Research Associates was comprised of a diverse group of individuals with experience in academic, healthcare, corporate, government, and nonprofit settings to gain in-depth experience in research, educational technology, and organizational development. </p>
        </div>
      </div>
    </div>
  )
}

export default TopHeroComponent
