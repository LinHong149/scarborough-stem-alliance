import React, { useState } from 'react';
import Image from 'next/image';
import eventBackground1 from '../assets/eventBackground1.png';
import eventBackground2 from '../assets/eventBackground2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faSchool } from '@fortawesome/free-solid-svg-icons';

const VolunteerItem = ({ isActive, isSchool, inView, onClick }) => {
  const active = 'bg-gradient-to-r from-blue-dark to-blue-normal';
  const notActive = 'bg-none text-black border-2 border-blue-dark';

  return (
    <div
      className={`Volunteer-topic box-border cursor-pointer rounded-50 p-64 w-full flex gap-25 items-center ${
        isActive ? active : notActive
      }`}
      onClick={onClick}
    >
      <FontAwesomeIcon
        className={`Volunteer-icon h3  ${
          isActive ? 'text-black' : inView ? 'text-white' : 'text-black'
        }`}
        icon={isSchool ? faSchool : faBook}
      />
      <h3
        className={`Volunteer-name h3 ${
          isActive ? 'text-black' : inView ? 'text-white' : 'text-black'
        }`}
      >
        {isSchool ? 'Feeder School' : 'TPL'}
      </h3>
    </div>
  );
};

const VolunteerV1 = () => {
  <div className={`Volunteer-section flex gap-25 h-min border-grey items-center flex-wrap`}>
      <div className={`Volunteer-nav relative z-10 min-w-[300px] flex flex-col gap-16 h-fit`}>
        <VolunteerItem className=' cursor-pointer'
          isActive={activity}
          isSchool={true}
          inView={inView}
          onClick={() => handleItemClick(true)}
        />
        <VolunteerItem
          isActive={!activity}
          isSchool={false}
          inView={inView}
          onClick={() => handleItemClick(false)}
        />
      </div>
      <div className='relative z-10 grow min-w-[300px] h-[60vh]'>
        <Image
            src={eventBackground1}
            className={`Volunteer-image absolute w-full h-full object-cover rounded-50 object-contain border-2 transition-all duration-500
            ${ activity ? 'opacity-100' : 'opacity-0' }`}
        />
        <Image
            src={eventBackground2}
            className={`Volunteer-image absolute w-full h-full object-cover rounded-50 object-contain border-2 transition-all duration-500
            ${ !activity ? 'opacity-100' : 'opacity-0' }`}
        />
      </div>
    </div>
}

const Volunteer = ({ inView, theTheme }) => {
  const [activity, setActivity] = useState(true);
  const gradient = 'bg-gradient-to-r from-blue-dark to-blue-normal';

  const handleItemClick = (isActive) => {
    setActivity(isActive);
  };

  return (
    <div className={`Volunteer border z-10 mt-32 mb-32 pt-12 pb-12 flex flex-col items-center justify-center gap-50 ${gradient} rounded-50`}>
      <h1 className={`Volunteer-title z-10 h1 text-black transition-bg duration-500`}>Volunteers for you</h1>
      <h2 className='h3 w-[80%] text-center'>We offer 1 - 3 hour long Volunteers in P5Js, EV3, Python for students from grades 3-12</h2>
      <button className='bg-black text-xl rounded-50 p-2 pl-6 pr-6 w-fit text-blue-normal'>Learn More</button>
    </div>
    
  );
};

export default Volunteer;
