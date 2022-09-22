import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SpecLogo from '../public/spec_logo.svg'
import SpecLogoWord from '../public/SPEC.svg'


function Navbar() {
  // Need to add Poppins font after extensions are merged.
  return (
    <div className='flex justify-evenly place-items-center h-20 bg-black text-white'>
      <div className='flex h-16 flex-shrink-0 pr-40'>
        <Link href='/'><Image src={SpecLogo} alt="logo" /></Link>
        <Link href='/'><Image src={SpecLogoWord} alt="logoWord" /></Link>
      </div>

      <div className='relative inline-block text-left'>
        <button type='button' onClick={''} className='inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none' id="menu-button">About Us</button>
      </div>

      <div className='relative inline-block text-left'>
        <button type='button' onClick={''}  className='inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none'>Get Involved</button>
      </div>

      <div className='relative inline-block text-left'>
        <a className='inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none' href="https://docs.specollective.org/introduction/"
          target="_blank"
          rel="noopener noreferrer">
            Docs
          </a>
      </div>

      <div className='relative inline-block text-left'>
        <button type='button' onClick={''} className='inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none' id="menu-button">Partnerships</button>
      </div>

      <input className="border-2 p-1 border-yellow-400 rounded bg-black text-white focus:outline-none" type="search" id="site-search" placeholder="Search" name="q" />
    </div>
  )
}

export default Navbar