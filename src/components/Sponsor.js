import React from 'react'
import Image from 'next/image'
import SSA from '../assets/SSA.png'

const SponsorItem = ({SponsorImage}) => {
  return (
    <div className={`Sponsors-sponsor min-w-1/4 max-w-1/3 aspect-2/1 bg-black grow shrink rounded-2xl flex justify-center align-center p-3.5`}>
        <Image className={`Sponsors-image w-48`} src={SponsorImage}></Image>
    </div>
  )
}

const Sponsor = () => {
  return (
    <div className={`Sponsors-container flex flex-wrap gap-25`}>
        <SponsorItem SponsorImage={SSA}/>
        <SponsorItem SponsorImage={SSA}/>
        <SponsorItem SponsorImage={SSA}/>
    </div>
  )
}

export default Sponsor