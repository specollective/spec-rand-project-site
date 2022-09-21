import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SpecLogo from '../public/spec_logo.svg'
import HamReg from '../public/HamReg.svg'


function MobileNav() {
  return (
    <div className="flex place-items-center justify-between space-x-4 h-16 bg-du-gray bg-slate-700">
      <div className="flex">
        <Link
          href="/"
        >
          <Image
            className="object-scale-down object-center h-14 w-14"
            src={SpecLogo}
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex text-white">
        <p className="text-xs">Sustainable Progress & Equality Collective</p>
      </div>
      <div className="flex">
        <button className="flex pr-6" onClick={' '}>
          <Image
              className="object-center h-18 w-18"
              src={HamReg}
              alt="logo"
          />
        </button>
      </div>
    </div>

    
)
}

export default MobileNav