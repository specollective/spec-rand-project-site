import React from 'react'
import Image from 'next/image'
import SpecLogo from '../public/spec_logo.svg'

function Footer() {
  return (
    <div className='h-72 w-screen bg-spec-yellow-600'>
      <div className='flex justify-evenly'>
        <div className='pt-14'>
          <div className='text-center'>
            <Image className='place-items-center' src={SpecLogo} />
          </div>
          <a className='p-2'>social</a>
          <a className='p-2'>social</a>
          <a className='p-2'>social</a>
          <a className='p-2'>social</a>
        </div>
        <div className='h-60 space-y-10 pt-6'>
          <a className='block'>About Us</a>
          <a className='block'>Contact Us</a>
          <a className='block'>Get Involved</a>
        </div>
        <div className='h-60 space-y-10 pt-6'>
          <a className='block'>Blog</a>
          <a className='block'>JoER Us</a>
          <a className='block'>Documentation</a>
        </div>
        <div className='h-60 space-y-10 pt-6'>
          <a className='block'>Terms of Use</a>
          <a className='block'>Code of Conduct</a>
          <a className='block'>Privacy Policy</a>
        </div>
      </div>
        <div className='text-center'>
          <p className='block'>© 2022 Sustailable Progress & Equality Collective </p>
        </div>
    </div>
  )
}

export default Footer