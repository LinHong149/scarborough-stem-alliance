import { teamPeople } from '@/constants'
import React from 'react'
import Image from 'next/image'
import SSA from '../assets/SSA.png'

// import eventBackground1 from '../assets/eventBackground1.png';
// import eventBackground2 from '../assets/eventBackground2.png';
// import eventBackground3 from '../assets/eventBackground3.png';

const TeamItem = ({PersonImage, PersonName}) => {
  return (
    <div className={`Teams-Teamflex w-[15%] flex-col flex justify-center items-center gap-6`}>
        <Image className={`relative w-full h-full object-cover aspect-square rounded-full`} src={PersonImage}></Image>
        <h3 className='text-white'>{PersonName}</h3>
    </div>
  )
}

const Team = () => {
  return (
    <div className={`Teams-container items-center justify-center w-full h-fit flex flex-wrap gap-50`}>
        {teamPeople.map((index) => (
            <TeamItem PersonImage={index.image} PersonName={index.name}/>
        ))}
    </div>
  )
}

export default Team