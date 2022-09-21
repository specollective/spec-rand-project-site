import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import SpecLogo from '../public/spec_logo.svg'
import SpecLogoWord from '../public/SPEC.svg'


function Navbar() {
  const [aboutButton, setAboutButton] = useState(false)
  const [involvedButton, setInvolvedButton] = useState(false)
  const [partnerButton, setPartnerButton] = useState(false)

  // Need to add Poppins font after extensions are merged.
  return (
    <div className='flex justify-evenly place-items-center h-20 bg-black text-white'>
      <div className='inline h-16 w-16'>
        <Image src={SpecLogo} alt="logo" />
      </div>
      <div className='pr-40'>
        <Image src={SpecLogoWord} alt="logo" />
      </div>

      {/* About Us button dropdown */}
      <div className='relative inline-block text-left'>
        <button type='button' onClick={() => setAboutButton(!aboutButton)} className='inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100' id="menu-button" aria-expanded="true" aria-haspopup="true">About Us</button>
        <div className={aboutButton ? "absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" : "hidden"} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
          <div className="py-1" role="none">
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Link 1</a>
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Link 2</a>
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Link 3</a>
            <form method="POST" action="#" role="none">
              <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
            </form>
          </div>
        </div>
      </div>

      {/* Get Involved Button dropdown */}
      <div className='relative inline-block text-left'>
        <button type='button' onClick={() => setInvolvedButton(!involvedButton)}  className='inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100' id="menu-button" aria-expanded="true" aria-haspopup="true">Get Involved</button>
        <div className={involvedButton ? "absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" : "hidden"} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
          <div className="py-1" role="none">
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Link 1</a>
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Link 2</a>
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Link 3</a>
            <form method="POST" action="#" role="none">
              <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
            </form>
          </div>
        </div>
      </div>

      <div className='relative inline-block text-left'>
        <button type='button' className='inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100' id="menu-button" aria-expanded="true" aria-haspopup="true">Docs</button>
      </div>

      {/* Partnerships dropdown button */}
      <div className='relative inline-block text-left'>
        <button type='button' onClick={() => setPartnerButton(!partnerButton)} className='inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100' id="menu-button" aria-expanded="true" aria-haspopup="true">Partnerships</button>
        <div className={partnerButton ? "absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" : "hidden"} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
          <div className="py-1" role="none">
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Link 1</a>
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Link 2</a>
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Link 3</a>
            <form method="POST" action="#" role="none">
              <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
            </form>
          </div>
        </div>
      </div>

      <input className="border-2 p-1 border-yellow-400 rounded bg-black text-white focus:outline-none" type="search" id="site-search" placeholder="Search" name="q" />
    </div>
  )
}

export default Navbar