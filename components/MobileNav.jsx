import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import SpecLogo from '../public/spec_logo.svg'
import HamReg from '../public/HamReg.svg'
import HamX from '../public/HamX.png'


function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeButton = useRef(null);
  const router = useRouter()

  useEffect(() => {
    setMenuOpen(false);
  }, [router]);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('no-scroll');
      closeButton.current.scrollIntoView();
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [menuOpen]);

  return (
    <>
      <div className="flex place-items-center justify-between h-16 bg-du-gray bg-slate-700">
        <div className="flex p-4 w-1/5">
          <Link
            href="/"
          >
            <Image
              className="object-scale-down object-center"
              src={SpecLogo}
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex justify-center text-white w-3/5">
          <p className="text-xs md:text-base">Sustainable Progress & Equality Collective</p>
        </div>
        <div className="flex justify-center w-1/5">
          <button className="flex pr-6" onClick={() => setMenuOpen((prev) => !prev)}>
            <Image
                className="object-center h-18 w-18"
                src={HamReg}
                alt="logo"
            />
          </button>
        </div>
      </div>

      <div className={menuOpen ? 'relative' : 'invisible'}>
        <div
          className="fixed top-0 right-0 pl-28 h-screen z-20 w-4/5 text-right bg-teal-700"
          style={{ overflowY: 'scroll' }}
        >
          <div className="grid grid-rows-11 gap-3 place-content-evenly text-white text-2xl">
            <button
              className="pb-12 pt-10 text-right"
              ref={closeButton}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              Close <Image src={HamX} className="inline" />
            </button>
            <Link href="/">About Us</Link><br />            
            <Link href="/">Get Involved</Link><br />
            <Link href="https://docs.specollective.org/introduction/">Docs</Link><br />
            <Link href="/">Partnerships</Link><br/>
          </div>
        </div>
    </div>
  </>
)
}

export default MobileNav