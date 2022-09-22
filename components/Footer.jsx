import React from 'react'

function Footer() {
  return (
    <div className='h-72 w-screen bg-spec-yellow-600'>
      <div className='flex justify-evenly'>
        <div>
          <a>LOGO</a>
          <a>social</a>
          <a>social</a>
          <a>social</a>
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