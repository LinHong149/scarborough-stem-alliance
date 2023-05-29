import React from 'react'
import Image from 'next/image'
import SSA from '../assets/SSa.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faSchool } from '@fortawesome/free-solid-svg-icons'

const WorkshopItem = ({ isActive, isSchool }) => {
    const active = 'bg-gradient-to-r from-pink-dark to-pink-normal text-white';
    const notActive = 'bg-none text-black';
    return (
        <div className={`Workshop-topic rounded-50 p-64 w-full flex gap-25 items-center ${isActive ? active : notActive }`}>
            <FontAwesomeIcon className='Workshop-icon h3' icon={isSchool? faSchool : faBook }/>
            <h3 className={`Workshop-name h3 ${isActive ? 'text-white' : 'text-black' }`}>{isSchool? 'Feeder School': 'TPL'}</h3>
        </div>
    )
}

const Workshop = () => {
    return (
        <div className={`Workshop-section flex gap-25 h-min border-grey items-center`}>
            <div className={`Workshop-nav w-1/2 flex flex-col gap-16 h-fit`}>
                <WorkshopItem isActive={true} isSchool={true}/>
                <WorkshopItem isActive={false} isSchool={false}/>
            </div>
            <Image src={SSA} className={`Workshop-image border-black w-1/2 h-[60vh] rounded-50 object-contain border-2`}></Image>
        </div>
    )
}

export default Workshop