import React, { useRef, useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import Image from 'next/image'
import { eventInfo } from '../constants'

const EventItem = ({ eventTitle, eventDate, eventImage }) => {
  const [eventIsVisible, setEventIsVisible] = useState(false);
  const [eventRef, inView] = useInView({
      triggerOnce: true,
  });

  useEffect(() => {
    setEventIsVisible(inView);
  }, [inView]);

  console.log(eventTitle, eventIsVisible)
  return (
      <div ref={eventRef} className={`${eventIsVisible? "card-active": "card-inactive"} h-96 col-span-6 md:col-span-3 rounded-50 p-10 flex flex-col justify-end gap-4 overflow-hidden`}>
        <h3 className={`Event-name h3 text-white z-10 w-full`}>{eventTitle}</h3>
        <p className={`Event-date text-white z-10`}>{eventDate}</p>
        <Image className="absolute top-0 left-0 w-full h-full object-cover object-center h-full w-full -z-5" src={eventImage} alt={eventTitle} layout="fill" />
        <div class="absolute inset-0 bg-black opacity-20 z-5"></div>
      </div>
  )
}


const Event = () => {
  return (
    <div className={`Events-container w-full grid gap-[20px] grid-cols-6 wrap`}>
        {eventInfo.map((info) => (
          <EventItem eventTitle={info.title} eventDate={info.date} eventImage={info.image}/>
        ))}
    </div>
  )
}

export default Event