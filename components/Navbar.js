import React from 'react'
import Image from 'next/image'
import SpecLogo from '../public/spec_logo.svg'
import SpecLogoWord from '../public/SPEC.svg'


function Navbar() {
  // Need to add Poppins font after extensions are merged.
  return (
    <div className='flex justify-evenly place-items-center h-20 bg-black text-white'>
      <div className='inline'>
        <Image src={SpecLogo} alt="logo" />
      </div>
      <div className='pr-40'>
        <Image src={SpecLogoWord} alt="logo" />
      </div>
      <div className='inline'>About Us</div>
      <div className='inline'>Get Involved</div>
      <div className='inline'>Docs</div>
      <div className='inline'>Partnerships</div>
      <input className="border-2 p-1 border-yellow-400 rounded bg-black text-white focus:outline-none" type="search" id="site-search" placeholder="Search" name="q" />
    </div>
  )
}

export default Navbar