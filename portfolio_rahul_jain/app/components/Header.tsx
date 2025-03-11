'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full z-[1000] bg-white shadow-[0_10px_100px_rgba(0,0,0,0.1)]">
      <div className=" bg-orange flex items-center justify-between px-20 py-4 md:px-8">
        <div className="flex items-center cursor-pointer text-gray-800 hover:text-[#0062b9] transition-colors duration-300">
          <div className="w-20 h-20 rounded-[50px] overflow-hidden mr-6 bg-[#0062b9] md:w-[4.5rem] md:h-[4.5rem] md:mr-5">
            <Image
              src="/assets/jpeg/dp.jpg"
              alt="Rahul Jain Logo Image"
              className="w-full h-full object-cover object-center block"
              width={200}
              height={200}
            />
          </div>
          <span className="text-[1.8rem] uppercase font-bold tracking-[1px]">Rahul Jain</span>
        </div>
        <div className="flex">
          <ul className="flex sm:">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <li key={item} className="inline-block">
                <Link 
                  href={item === 'Home' ? '/' : `/#${item.toLowerCase()}`} 
                  className="py-[2.2rem] px-12 inline-block text-[1.6rem] text-gray-800 uppercase tracking-[1px] font-bold hover:text-[#0062b9] transition-colors duration-300 md:py-12 md:px-7 md:text-[1.5rem]"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <div 
            className="sm:hidden w-12 py-[2.2rem] sm:block cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Image
              src="/assets/svg/ham-menu.svg"
              alt="hamburger menu"
              className={`w-full ${isMenuOpen ? 'hidden' : 'block'}`}
              width={30}
              height={30}
            />
            <Image
              src="/assets/svg/ham-menu-close.svg"
              alt="hamburger menu close"
              className={`w-full ${!isMenuOpen ? 'hidden' : 'block'}`}
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`absolute w-full top-full bg-white ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'} transition-all duration-300 shadow-[0px_5px_5px_0px_rgba(0,0,0,0.1)]`}>
        <div className="w-full">
          <ul>
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <li key={item} className="border-b border-gray-200 last:border-b-0">
                <Link 
                  href={item === 'Home' ? '/' : `/#${item.toLowerCase()}`}
                  className="block py-10 px-12 text-[1.6rem] text-gray-800 text-right font-bold uppercase tracking-[2px] hover:text-[#0062b9] transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}