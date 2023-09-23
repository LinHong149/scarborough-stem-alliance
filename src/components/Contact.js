import React, { useState } from 'react';
import { contactsList } from '@/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = ({ inView, theTheme }) => {
  const gradient = 'bg-gradient-to-r from-blue-dark to-blue-normal';

  const handleItemClick = (isActive) => {
    setActivity(isActive);
  };

  return (
    <div className={`Contact z-10 py-12 flex flex-col items-center justify-center gap-10 ${gradient} rounded-50  contact-padding mb-4 px-12 relative`}>
        <div className='flex flex-col items-center'>
          <h1 className={`Contact-title z-10 h1 text-black transition-bg duration-500`}>Let's Inspire Together</h1>
          <p className='text-xl w-[75%] text-center'>We are open to partnerships and sponsorships. Contact us to dicuss how we can turn your ideas into actionable realities.</p>
        </div>
        <div className='flex flex-col items-center gap-8 min-w-[500px] max-w-[80vw] w-[50vw]'>
            <iframe className="rounded-[20px] aspect-[3/2] w-full flex grow " id="gmap_canvas" src="https://maps.google.com/maps?q=200%20Fundy%20Bay%20Blvd,%20Scarborough,%20ON%20M1W%203G1&t=&z=15&ie=UTF8&iwloc=&output=embed"></iframe>
            <div className='flex items-center gap-10'>
              {contactsList.map((info) => (
                <a className='hover:text-blue-darkest text-4xl' href={info.link}><FontAwesomeIcon icon={info.icon}/></a>
              ))}
            </div>
        </div>
    </div>
    
  );
};

export default Contact;
