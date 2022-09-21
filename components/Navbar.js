import React from 'react'
import Image from 'next/image'
import SpecLogo from '../public/spec_logo.svg'


function Navbar() {
  return (
    <div className='flex justify-evenly place-items-center h-20 bg-black text-white'>
      <div className='inline pr-44'>
        <Image src={SpecLogo} alt="logo" />
      </div>
      <div className='inline'>About Us</div>
      <div className='inline'>Get Involved</div>
      <div className='inline'>Docs</div>
      <div className='inline'>Partnerships</div>
      <input className="border-gold rounded bg-black text-white" type="search" id="site-search" placeholder="Search" name="q" />
    </div>
  )
}

export default Navbar