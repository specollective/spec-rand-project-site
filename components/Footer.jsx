import React from 'react'
import Image from 'next/image'
import SpecLogo from '../public/spec_logo.svg'
import Facebook from '../public/facebook.svg'
import Twitter from '../public/twitter.svg'
import LinkedIn from '../public/LinkedIn.svg'
import GitHub from '../public/github.svg'

function Footer() {
  return (
    <div className='h-60 w-screen font-Poppins bg-spec-yellow-600'>
      <div className='flex justify-evenly'>
        <div className='pt-14 w-44 text-center'>
          <div className='text-center'>
            <Image src={SpecLogo} />
          </div>
          <div className='inline p-1'>
            <a href='https://www.facebook.com/specollective'><Image src={Facebook} /></a>
          </div>
          <div className='inline p-1'>
            <a href='https://twitter.com/specollective'><Image src={Twitter} /></a>
          </div>
          <div className='inline p-1'>
            <a href='https://github.com/specollective'><Image src={GitHub} /></a>
          </div>
          <div className='inline p-1'>
            <a href='https://www.linkedin.com/company/specollective/'><Image src={LinkedIn} /></a>
          </div>
      </div>
        <div className='h-50 space-y-6 pt-10'>
          <a href='' className='block'>About Us</a>
          <a href='' className='block'>Contact Us</a>
          <a href='' className='block'>Get Involved</a>
        </div>
        <div className='h-50 space-y-6 pt-10'>
          <a href='' className='block'>Blog</a>
          <a href='' className='block'>JoER</a>
          <a href='' className='block'>Documentation</a>
        </div>
        <div className='h-50 space-y-6 pt-10'>
          <a href='' className='block'>Terms of Use</a>
          <a href='' className='block'>Code of Conduct</a>
          <a href='' className='block'>Privacy Policy</a>
        </div>
      </div>
        <div className='text-center'>
          <p className='block font-bold pt-4'>© 2022 Sustailable Progress & Equality Collective </p>
        </div>
    </div>
  )
}

export default Footer