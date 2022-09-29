import React from 'react'
import Image from 'next/image'
import DropdownArrow from '../public/dropdownArrow.svg'
import { useState } from 'react'

function RAsDropdown() {
  const [menuToggle, setMenuToggle] = useState(false)
  
  return (
    <div className="relative inline-block text-left py-6">
      <div>
        <button type="button" onClick={() => setMenuToggle(!menuToggle)} className="inline-flex w-full justify-center rounded-lg border-spec-yellow-600 border-2 px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-spec-yellow-600" id="menu-button" aria-expanded="true" aria-haspopup="true">
          Jump To
          <div className='pl-24'>
            <Image width={12} height={12} src={DropdownArrow} />
          </div>
        </button>
      </div>

      <div className={menuToggle ? "absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-spec-black-600 border-2 border-spec-yellow-600 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" : 'hidden'} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
        <div className="py-1" role="none">
          <a href="#" class="text-white block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">RA One</a>
          <a href="#" class="text-white block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">RA Two</a>
          <a href="#" class="text-white block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">RA Three</a>
        </div>
      </div>
    </div>
  )
}

export default RAsDropdown