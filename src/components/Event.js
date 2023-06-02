import React from 'react'

const EventItem = () => {
  return (
    <div className={`Events-box border-pink-light bg-gradient-to-r from-blue-dark to-blue-normal grow min-w-[500px] rounded-50 p-40 aspect-event flex flex-col justify-end`}>
        <h3 className={`Event-name h3 text-white`}>Event Name</h3>
        <p className={`Event-date text-white`}>May 11, 2023</p>
    </div>
  )
}


const Event = () => {
  return (
    <div className={`Events-container flex gap-[20px] flex-wrap justify-center`}>
        <EventItem/>
        <EventItem/>
        <EventItem/>
        <EventItem/>
    </div>
  )
}

export default Event