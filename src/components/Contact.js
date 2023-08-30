import React, { useState } from 'react';
import { contactsList } from '@/constants';

const Contact = ({ inView, theTheme }) => {
  const gradient = 'bg-gradient-to-r from-blue-dark to-blue-normal';

  const handleItemClick = (isActive) => {
    setActivity(isActive);
  };

  return (
    <div className={`Contact border z-10 pt-12 pb-12 flex flex-col items-center justify-center gap-50 ${gradient} rounded-50 w-[calc(100vw-2rem)] mb-4 px-10 mr-auto ml-auto relative -left-20`}>
        <h1 className={`Contact-title z-10 h1 text-black transition-bg duration-500`}>Connect With Us</h1>
        <div className='flex flex-col sm:flex-row gap-10 w-full justify-center'>
            <iframe className="rounded-[20px] aspect-[3/2] w-full sm:max-w-[50%] flex grow " id="gmap_canvas" src="https://maps.google.com/maps?q=200%20Fundy%20Bay%20Blvd,%20Scarborough,%20ON%20M1W%203G1&t=&z=15&ie=UTF8&iwloc=&output=embed"></iframe>
            <div className='flex flex-col  w-fit sm:max-w-[50%] gap-4'>
              {contactsList.map((info) => (
                <a className='hover:text-blue-darkest text-2xl' src={info.link}>{info.diisplayName}</a>
              ))}
            </div>
        </div>
    </div>
    
  );
};

export default Contact;
