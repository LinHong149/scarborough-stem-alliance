import React, { useRef, useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

import { workshopsList } from '@/constants';
import Image from 'next/image';
import eventBackground1 from '../assets/eventBackground1.png';
import eventBackground2 from '../assets/eventBackground2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';


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

const WorkshopV1 = () => {
  <div className={`Workshop-section flex gap-25 h-min border-grey items-center flex-wrap`}>
      <div className={`Workshop-nav relative z-10 min-w-[300px] flex flex-col gap-16 h-fit`}>
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
      <div className='relative z-10 grow min-w-[300px] h-[60vh]'>
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
}



// const Card = ({title, text}) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [cardRef, inView] = useInView({
//       triggerOnce: false,
//   });

//   useEffect(() => {
//   setIsVisible(inView);
//   }, [inView]);

//   console.log("isvis",isVisible)
//   return(
//     <div ref={cardRef} className={`min-w-[200px] grow shrink bg-black rounded-2xl w-1/4 text-white flex flex-col items-center p-8   transition-all duration-100 delay-100 ease-in-out gap-4 h-min`}>
//       <h3 className='h3'>{title}</h3>
//       <p className={` transition-all duration-2000 delay-100 ease-in-out text-white bg-white ${isVisible ? 'grid grid-cols-[minmax(20vh, auto)]' : 'flex opacity-0 max-h-0 h-0 overflow-hidden'} `}>{text}</p>
//       {/* <a className={`flex transition delay-2000 duration-1000 ease-in text-black rounded-50 p-2 pl-6 pr-6 w-max bg-blue-normal hover:bg-blue-dark flex items-center justify-center `}>Request Workshop</a> */}
//     </div>
//   )
// }

const Card = ({title, text}) => {

  const [isVisible, setIsVisible] = useState(true);
  const [cardRef, inView] = useInView({
      triggerOnce: true,
  });
  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  return (
      <div className={`${isVisible? "card-active": "card-inactive"} min-w-[250px] flex flex-grow shrink bg-black rounded-2xl w-1/4 text-white flex flex-col items-center p-8 transition-all duration-100 delay-2000 ease-in-out gap-4 h-min`}>
        <h3 className='h3'>{title}</h3>
        <p ref={cardRef} className={` transition-all duration-2000 delay-100 ease-in-out text-white text-center grid grid-cols-[minmax(20vh, auto)]`}>{text}</p>
        <a className={`flex transition delay-2000 duration-1000 ease-in text-black rounded-50 p-2 pl-6 pr-6 w-max bg-blue-normal hover:bg-blue-dark flex items-center justify-center `}>Request Workshop</a>
      </div>
  )
}


const Workshop = ({ theTheme }) => {
  const [activity, setActivity] = useState(true);
  const gradient = 'bg-gradient-to-r from-blue-dark to-blue-normal';
  const handleItemClick = (isActive) => {
    setActivity(isActive);
  };

  return (
    <div className={`Workshop relative px-[5%] w-full flex z-10 pt-12 pb-12 flex flex-col items-center justify-center gap-50 ${gradient} rounded-50`}>
      <h1 className={`Workshop-title z-10 h1 text-black transition-bg duration-500`}>Request a Workshop</h1>
      <div className='flex flex-wrap gap-10 box-border items-center justify-center'>
        {workshopsList.map((info) => (
          <Card title={info.title} text={info.text}/>
        ))}
      </div>
    </div>
    
  );
};

export default Workshop;
