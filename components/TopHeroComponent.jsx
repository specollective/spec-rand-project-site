import React from 'react'

function TopHeroComponent() {
  return (
    // <div className="bg-[url('/public/HeroImage.svg')] h-96 w-full bg-cover bg-center">
    <div className="bg-hero-img bg-cover xs:h-80 sm:h-96 lg:h-[600px] bg-center text-center">
        <h1 className='pt-8 text-white text-6xl font-bold'>Headline</h1>
        <h2 className='pt-8 text-white text-3xl font-light'>Subline</h2>
    </div>
  )
}

export default TopHeroComponent
