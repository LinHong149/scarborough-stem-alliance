import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SSA from '../assets/SSA.png';

const Navbar = ({scrollToRefFun, homeRef, aboutRef, workshopsRef, eventsRef, teamRef, faqRef, contactRef}) => {
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
      <div className={`navbar flex flex-col gap-2 w-full px-4 mt-4 fixed`}>
        <nav className={`flex justify-between items-center px-8 rounded-full bg-white bg-opacity-10 backdrop-blur-md transition-300`}>
          <p className={`${NavItemStyle} ${NavItemImageStyle} `} href="/" alt="ssalogo">
            <Image className={`${NavItemImageStyle}`} src={SSA} />
          </p>
          <svg
          onClick={() => toggleNavMobile()}
          fill='#F6F6F6'
          xmlns="http://www.w3.org/2000/svg" height="1.8em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
        </nav>
        {mobileNav ? 
        <div className='popup-nav flex flex-col justify-around w-full h-fit gap-8 py-8 items-center rounded-[40px]  bg-white bg-opacity-10 backdrop-blur-md transition-300 transition-all' >
          <p className={`${NavItemStyle} ${NavItemTextStyleMobile}`}>Home</p>
          <p className={`${NavItemStyle} ${NavItemTextStyleMobile}`}>About Us</p>
          <p className={`${NavItemStyle} ${NavItemTextStyleMobile}`}>Workshops</p>
          <p className={`${NavItemStyle} ${NavItemTextStyleMobile}`}>Events</p>
          {/* <p className={`${NavItemStyle} ${NavItemTextStyleMobile}`}>Team</p> */}
          <p className={`${NavItemStyle} ${NavItemTextStyleMobile}`}>FAQ</p>
          <p className={`${NavItemStyle} ${NavItemTextStyleMobile}`}>Contact</p>
        </div>:
        <div className='popup-nav flex flex-col justify-around w-full h-fit gap-8 py-8 items-center rounded-[40px] bg-white bg-opacity-10 backdrop-blur-md transition-300 transition-all hidden' >
          <p onClick={() => scrollToRefFun(homeRef)}  className={`${NavItemStyle} ${NavItemTextStyleMobile}`}>Home</p>
          <p onClick={() => scrollToRefFun(aboutRef)} className={`${NavItemStyle} ${NavItemTextStyleMobile}`}>About Us</p>
          <p onClick={() => scrollToRefFun(workshopsRef)} className={`${NavItemStyle} ${NavItemTextStyleMobile}`}>Workshops</p>
          <p onClick={() => scrollToRefFun(eventsRef)} className={`${NavItemStyle} ${NavItemTextStyleMobile}`}>Events</p>
          {/* <p onClick={() => scrollToRefFun(teamRef)}  className={`${NavItemStyle} ${NavItemTextStyleMobile}`}>Team</p> */}
          <p onClick={() => scrollToRefFun(faqRef)}  className={`${NavItemStyle} ${NavItemTextStyleMobile}`}>FAQ</p>
          <p onClick={() => scrollToRefFun(contactRef)}  className={`${NavItemStyle} ${NavItemTextStyleMobile}`}>Contact</p>
        </div>}

        
      </div>
    );
  }

  return (
    <div className={`navbar w-full px-16 mt-4 fixed`}>
      <nav className={`flex justify-between items-center px-8 rounded-full bg-white bg-opacity-10 backdrop-blur-md transition-300`}>
        <p className={`${NavItemStyle} ${NavItemImageStyle} `}>
          <Image className={`${NavItemImageStyle}`} src={SSA} />
        </p>
        <div className='flex flex-row w-fit h-fit gap-10 items-center hover:align-end ' >
          <p onClick={() => scrollToRefFun(homeRef)} className={`${NavItemStyle} ${NavItemTextStyle}`}>Home</p>
          <p onClick={() => scrollToRefFun(aboutRef)} className={`${NavItemStyle} ${NavItemTextStyle}`}>About Us</p>
          <p onClick={() => scrollToRefFun(workshopsRef)} className={`${NavItemStyle} ${NavItemTextStyle}`}>Workshops</p>
          <p onClick={() => scrollToRefFun(eventsRef)} className={`${NavItemStyle} ${NavItemTextStyle}`}>Events</p>
          {/* <p onClick={() => scrollToRefFun(teamRef)} className={`${NavItemStyle} ${NavItemTextStyle}`}>Team</p> */}
          <p onClick={() => scrollToRefFun(faqRef)} className={`${NavItemStyle} ${NavItemTextStyle}`}>FAQ</p>
          <p onClick={() => scrollToRefFun(contactRef)} className={`${NavItemStyle} ${NavItemTextStyle}`}>Contact</p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
