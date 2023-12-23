'use client'
import Image from 'next/image'
import { close, logo, menu } from '../assets'
import { navLinks } from '@/constants'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [toggle, setToggle] = useState(false)
  return (
    <div className='w-full flex py-6 justify-between items-center navbar'>
      <Image src={logo} alt='logo' className='w-[124px] h-[32px]' />

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) =>
          <li
            key={nav.id}
            className={`font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}
          >
            <Link href={`#${nav.id}`}>{nav.title}</Link>
          </li>
        )

        }
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <Image
          src={toggle ? close : menu} alt='menu'
          className='w-[28px] h-[28px] object-contain cursor-pointer z-50'
          onClick={() => setToggle((prev) => !prev)}
        />


        <div
          className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0   min-w-[200px] rounded-lg  sidebar  `}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) =>
              <li
                key={nav.id}
                className={`font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}
              >
                <Link href={`#${nav.id}`}>{nav.title}</Link>
              </li>
            )

            }
          </ul>
        </div>
      </div>
    </div>
  )
}

