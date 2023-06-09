import React from 'react'
import Image from 'next/image'
import { eventInfo } from '../constants'
import eventBackground1 from '../assets/eventBackground1.png';
import eventBackground2 from '../assets/eventBackground2.png';
import eventBackground3 from '../assets/eventBackground3.png';
import eventBackground4 from '../assets/eventBackground4.png';
import eventBackground5 from '../assets/eventBackground5.png';


const EventItem = ({ eventTitle, eventDate, eventImage }) => {
  return (
    <div className={`Events-box h-52 grow min-w-[500px] rounded-50 p-10 flex flex-col justify-end relative overflow-hidden`}>
      <h3 className={`Event-name h3 text-white z-10`}>{eventTitle}</h3>
      <p className={`Event-date text-white z-10`}>{eventDate}</p>
      <Image className="absolute top-0 left-0 w-full h-full object-cover object-center h-full w-full -z-5" src={eventImage} alt={eventTitle} layout="fill" />
      <div class="absolute inset-0 bg-black opacity-30 z-5"></div>
    </div>
  )
}


const Event = () => {
  return (
    <div className={`Events-container flex gap-[20px] flex-wrap justify-center`}>
        {eventInfo.map((info) => (
          <EventItem eventTitle={info.title} eventDate={info.date} eventImage={info.image}/>
        ))}
    </div>
  )
}

export default Event