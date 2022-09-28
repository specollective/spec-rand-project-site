import React from 'react'
import { useState } from 'react'

function RAsDropdown() {
  const [menuToggle, setMenuToggle] = useState(false)
  
  return (
    <div className="relative inline-block text-left py-6">
      <div>
        <button type="button" onClick={() => setMenuToggle(!menuToggle)} className="inline-flex w-full justify-center rounded-lg border-spec-yellow-600 border-2 px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-spec-yellow-600" id="menu-button" aria-expanded="true" aria-haspopup="true">
          Jump To
          <div className='pl-24'>
            <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </div>
        </button>
      </div>

      <div className={menuToggle ? "absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" : 'hidden'} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
        <div className="py-1" role="none">
          <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
          <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
          <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
          <form method="POST" action="#" role="none">
            <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RAsDropdown