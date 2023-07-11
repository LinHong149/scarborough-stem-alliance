import React from 'react'
import Image from 'next/image'
import SSA from '../assets/SSA.png'

const SponsorItem = ({SponsorImage}) => {
  return (
    <a src="" className={`Sponsors-sponsor min-w-1/4 max-w-1/3 aspect-2/1 bg-blue-background grow shrink rounded-2xl flex justify-center align-center p-3.5`}>
        <Image className={`Sponsors-image w-48`} src={SponsorImage}></Image>
    </a>
  )
}

const Sponsor = () => {
  return (
    <div className={`Sponsors-container w-full flex flex-wrap gap-25`}>
        <SponsorItem SponsorImage={SSA}/>
        <SponsorItem SponsorImage={SSA}/>
        <SponsorItem SponsorImage={SSA}/>
    </div>
  )
}

export default Sponsor