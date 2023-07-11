import React, { useState } from 'react';
import Image from 'next/image';
import eventBackground1 from '../assets/eventBackground1.png';
import eventBackground2 from '../assets/eventBackground2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faSchool } from '@fortawesome/free-solid-svg-icons';

const WorkshopItem = ({ isActive, isSchool, inView, onClick }) => {
  const active = 'bg-gradient-to-r from-blue-dark to-blue-normal';
  const notActive = 'bg-none text-black border-2 border-blue-dark';

  return (
    <div
      className={`Workshop-topic box-border cursor-pointer rounded-50 p-64 w-full flex gap-25 items-center ${
        isActive ? active : notActive
      }`}
      onClick={onClick}
    >
      <FontAwesomeIcon
        className={`Workshop-icon h3  ${
          isActive ? 'text-black' : inView ? 'text-white' : 'text-black'
        }`}
        icon={isSchool ? faSchool : faBook}
      />
      <h3
        className={`Workshop-name h3 ${
          isActive ? 'text-black' : inView ? 'text-white' : 'text-black'
        }`}
      >
        {isSchool ? 'Feeder School' : 'TPL'}
      </h3>
    </div>
  );
};

const Workshop = ({ inView }) => {
  const [activity, setActivity] = useState(true);

  const handleItemClick = (isActive) => {
    setActivity(isActive);
  };

  return (
    <div className={`Workshop-section flex gap-25 h-min border-grey items-center`}>
      <div className={`Workshop-nav z-10 w-1/2 flex flex-col gap-16 h-fit`}>
        <WorkshopItem className=' cursor-pointer'
          isActive={activity}
          isSchool={true}
          inView={inView}
          onClick={() => handleItemClick(true)}
        />
        <WorkshopItem
          isActive={!activity}
          isSchool={false}
          inView={inView}
          onClick={() => handleItemClick(false)}
        />
      </div>
      <div className='relative z-10 w-1/2 h-[60vh]'>
        <Image
            src={eventBackground1}
            className={`Workshop-image absolute w-full h-full object-cover rounded-50 object-contain border-2 transition-all duration-500
            ${ activity ? 'opacity-100' : 'opacity-0' }`}
        />
        <Image
            src={eventBackground2}
            className={`Workshop-image absolute w-full h-full object-cover rounded-50 object-contain border-2 transition-all duration-500
            ${ !activity ? 'opacity-100' : 'opacity-0' }`}
        />
      </div>
    </div>
  );
};

export default Workshop;
