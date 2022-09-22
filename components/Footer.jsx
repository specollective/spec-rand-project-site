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
        <div className='bg-slate-200'>
          <a>About Us</a>
          <a>Contact Us</a>
          <a>Get Involved</a>
        </div>
        <div className='bg-slate-300'>
          <a>Blog</a>
          <a>JoER Us</a>
          <a>Documentation</a>
        </div>
        <div className='bg-slate-400'>
          <a>Terms of Use</a>
          <a>Code of Conduct</a>
          <a>Privacy Policy</a>
        </div>
      </div>
      <div>
        <span>© 2022 Sustailable Progress & Equality Collective </span>
      </div>
    </div>
  )
}

export default Footer