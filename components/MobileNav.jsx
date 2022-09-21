import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import SpecLogo from '../public/spec_logo.svg'
import HamReg from '../public/HamReg.svg'


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
          className="bg-du-deepPurple bg-teal-600 z-20 fixed top-0 right-0 pl-28 h-screen text-right w-4/5"
          style={{ overflowY: 'scroll' }}
        >
          <div className="text-white text-2xl grid grid-rows-11 gap-3 place-content-evenly">
            <button
              className="pb-12 pt-10 text-right"
              ref={closeButton}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              Close <img className="inline" />
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