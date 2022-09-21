import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SpecLogo from '../public/spec_logo.svg'
import HamReg from '../public/HamReg.svg'


function MobileNav() {
  return (
    <div className="flex place-items-center justify-between space-x-4 h-16 bg-du-gray bg-slate-700">
      <section className="flex">
        <Link
          href="/"
        >
          <Image
            className="object-scale-down object-center h-14 w-16"
            src={SpecLogo}
            alt="logo"
          />
        </Link>
      </section>

      <div className="flex text-white">
        <p className="text-xs">Sustainable Progress & Equality Collective</p>
      </div>

      <button className="flex pr-6" onClick={' '}>
        <Image
            className="object-scale-down object-center h-14 w-16"
            src={HamReg}
            alt="logo"
        />
      </button>

    </div>
)
}

export default MobileNav