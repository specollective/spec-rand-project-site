import React from 'react'
import Image from 'next/image'
import SpecLogo from '../public/spec_logo.svg'
import Facebook from '../public/facebook.svg'
import Twitter from '../public/twitter.svg'
import LinkedIn from '../public/LinkedIn.svg'
import GitHub from '../public/github.svg'

function Footer() {
  return (
    <div className='h-72 w-screen font-Poppins bg-spec-yellow-600'>
      <div className='flex justify-evenly'>
        <div className='pt-14 w-44 text-center'>
          <div className='text-center'>
            <Image src={SpecLogo} />
          </div>
          <div className='inline p-1'>
            <Image className='' src={Facebook} />
          </div>
          <div className='inline p-1'>
            <Image className='' src={Twitter} />
          </div>
          <div className='inline p-1'>
            <Image className='' src={GitHub} />
          </div>
          <div className='inline p-1'>
            <Image className='' src={LinkedIn} />
          </div>
      </div>
        <div className='h-60 space-y-10 pt-14'>
          <a className='block'>About Us</a>
          <a className='block'>Contact Us</a>
          <a className='block'>Get Involved</a>
        </div>
        <div className='h-60 space-y-10 pt-14'>
          <a className='block'>Blog</a>
          <a className='block'>JoER Us</a>
          <a className='block'>Documentation</a>
        </div>
        <div className='h-60 space-y-10 pt-14'>
          <a className='block'>Terms of Use</a>
          <a className='block'>Code of Conduct</a>
          <a className='block'>Privacy Policy</a>
        </div>
      </div>
        <div className='text-center'>
          <p className='block font-bold pt-2'>© 2022 Sustailable Progress & Equality Collective </p>
        </div>
    </div>
  )
}

export default Footer