import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SSA from '../assets/SSA.png';

const Navbar = () => {
  const NavItemStyle = 'flex justify-between items-center h-min text-white flex flex-col'
  const NavItemTextStyle = 'h-full px-1 text-p16 after:transition after:duration-200 hover:text-white after:bg-white after:w-0 after:aspect-square hover:after:w-1 hover:after:rounded-full'
  const NavItemTextStyleMobile = 'h-full px-1 text-p16'
  const NavItemImageStyle = 'w-12 aspect-square p-0 object-contain my-1'
  
  const [windowWidth, setWindowWidth] = useState(null);
  const [mobileNav, setMobileNav] = useState(false);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const toggleNavMobile = () => {
    setMobileNav(!mobileNav)
  }

  useEffect(() => {
    // Check if running in a browser environment
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  if (windowWidth <= 800) {
    return (
      <div className={`navbar flex flex-col gap-2 w-full px-16 mt-4 fixed`}>
        <nav className={`flex justify-between items-center px-8 rounded-full bg-transparent backdrop-blur-md transition-300`}>
          <Link className={`${NavItemStyle} ${NavItemImageStyle} `} href="/" alt="ssalogo">
            <Image className={`${NavItemImageStyle}`} src={SSA} />
          </Link>
          <svg
          onClick={() => toggleNavMobile()}
          fill='#F6F6F6'
          xmlns="http://www.w3.org/2000/svg" height="1.8em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
        </nav>
        {mobileNav ? 
        <div className='popup-nav flex flex-col justify-around w-full h-fit gap-8 py-8 items-center rounded-[40px] bg-transparent backdrop-blur-md transition-300 transition-all' >
          <Link className={`${NavItemStyle} ${NavItemTextStyleMobile}`} href="/">Home</Link>
          <Link className={`${NavItemStyle} ${NavItemTextStyleMobile}`} href="/works">Our Works</Link>
          <Link className={`${NavItemStyle} ${NavItemTextStyleMobile}`} href="/partners">Partners</Link>
          <Link className={`${NavItemStyle} ${NavItemTextStyleMobile}`} href="/team">Team</Link>
          <Link className={`${NavItemStyle} ${NavItemTextStyleMobile}`} href="/contact">Contact</Link>
        </div>:
        <div className='popup-nav flex flex-col justify-around w-full h-fit gap-8 py-8 items-center rounded-[40px] bg-transparent backdrop-blur-md transition-300 transition-all hidden' >
          <Link className={`${NavItemStyle} ${NavItemTextStyleMobile}`} href="/">Home</Link>
          <Link className={`${NavItemStyle} ${NavItemTextStyleMobile}`} href="/works">Our Works</Link>
          <Link className={`${NavItemStyle} ${NavItemTextStyleMobile}`} href="/partners">Partners</Link>
          <Link className={`${NavItemStyle} ${NavItemTextStyleMobile}`} href="/team">Team</Link>
          <Link className={`${NavItemStyle} ${NavItemTextStyleMobile}`} href="/contact">Contact</Link>
        </div>}

        
      </div>
    );
  }

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
