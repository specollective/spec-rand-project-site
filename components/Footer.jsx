import React from 'react'
import Image from 'next/image'
import SpecLogo from '../public/spec_logo.svg'

function Footer() {
  return (
    <div className='h-72 w-screen bg-spec-yellow-600'>
      <div className='flex justify-evenly'>
        <div className='pt-14 bg-slate-100'>
          <div className='block'>
            <Image className='h-16 w-16' src={SpecLogo} />
          </div>
          <a className='p-2'>social</a>
          <a className='p-2'>social</a>
          <a className='p-2'>social</a>
          <a className='p-2'>social</a>
        </div>
        <div className='h-72 space-y-10 pt-6'>
          <a className='block'>About Us</a>
          <a className='block'>Contact Us</a>
          <a className='block'>Get Involved</a>
        </div>
        <div className='h-72 space-y-10 pt-6'>
          <a className='block'>Blog</a>
          <a className='block'>JoER Us</a>
          <a className='block'>Documentation</a>
        </div>
        <div className='h-72 space-y-10 pt-6 bg-slate-400'>
          <a className='block'>Terms of Use</a>
          <a className='block'>Code of Conduct</a>
          <a className='block'>Privacy Policy</a>
        </div>
      </div>
      <div>
        <span>© 2022 Sustailable Progress & Equality Collective </span>
      </div>
    </div>
  )
}

export default Footer