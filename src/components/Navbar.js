import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SSA from '../assets/SSA.png';



const Navbar = () => {
  const NavItemStyle = 'flex justify-between items-center h-min text-white flex flex-col'
  const NavItemTextStyle = 'h-full px-1 text-p16 after:transition after:duration-200 hover:text-white after:bg-white after:w-0 after:aspect-square hover:after:w-1 hover:after:rounded-full'
  const NavItemImageStyle = 'w-12 aspect-square p-0 object-contain my-1'
  
  const [smallScreen, setSmallScreen] = useState(window.innerWidth <= 750);
  console.log('smallScreen =', smallScreen)


  return (
    <div className={`navbar w-full px-16 mt-4 fixed`}>
      <nav className={`flex justify-between items-center px-8 rounded-full bg-transparent backdrop-blur-md transition-300`}>
        <Link className={`${NavItemStyle} ${NavItemImageStyle} `} href="/" alt="ssalogo">
          <Image className={`${NavItemImageStyle}`} src={SSA} />
        </Link>
        <div className='flex flex-row w-fit h-fit gap-10 items-center hover:align-end ' >
          <Link className={`${NavItemStyle} ${NavItemTextStyle}`} href="/">Home</Link>
          <Link className={`${NavItemStyle} ${NavItemTextStyle}`} href="/works">Our Works</Link>
          <Link className={`${NavItemStyle} ${NavItemTextStyle}`} href="/partners">Partners</Link>
          <Link className={`${NavItemStyle} ${NavItemTextStyle}`} href="/team">Team</Link>
          <Link className={`${NavItemStyle} ${NavItemTextStyle}`} href="/contact">Contact</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
