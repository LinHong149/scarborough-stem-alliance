import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import CloudBackground from '../assets/CloudBackground.png'

import Image from 'next/image'

import Stats from '../components/Stats'
import Workshop from '../components/Workshop'
import Event from '../components/Event';
import Sponsor from '../components/Sponsor';
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

const style = {
  container: 'flex items-center justify-center h-screen bg-gray-200',
  button: 'border-2',
};




export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [theme, setTheme] = useState('');
  const [viewRef, inView] = useInView({
    triggerOnce: false, // Only trigger once when the component enters the viewport
  });

  const test = "text-stroke-white text-white"

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  useEffect(() => {
    if (inView) {  
      // setTheme(() => {
        const newTheme = "text-stroke-white text-white"
        setTheme(newTheme)
      // })
    }
    else {
      setTheme(() => {
        const theme = ""
      })
    }
  })

  return (
    <main className={`Body px-20 w-screen overflow-hidden transition-bg duration-500 ${isVisible ? 'bg-blue-background opacity-100' : 'bg-white opacity-100'}`}>

      <div className={`Hero h-[80vh] flex items-end pb-36`}>
        <h1 className={`Hero-title h0 z-10`}>Hello! <br/> We are SSA</h1>
      </div>

      <Stats/>

      <div className={`Workshop pb-36 z-10 h-[100vh] flex flex-col justify-center gap-50`}>
        <h1 className={`Workshop-title z-10 h1 ${theme} transition-bg duration-500`}>Workshops for You</h1>
        <Workshop inView={inView} />
      </div>

      <Image className='absolute top-0 w-screen left-0 -z-1 h-[150vh] object-cover object-bottom'
      src={CloudBackground}/>


      <div
      ref={viewRef}
      // className={isVisible? "Events bg-gradient-to-r from-black to-grey w-[100vw] px-[75px] flex flex-col gap-50 py-52 rounded-t-50 -translate-x-[75px] z-0!" : ""}
      >
        <div
        className="Events flex flex-col gap-50">
          <h2 className={`Events-title h1 ${theme} text-white w-full`}>Our events</h2>
          <Event/>
        </div>

        <div className={`Sponsors flex flex-col items-center w-full gap-50 py-72`}>
          <h1 className={`Sponsors-title h1 text-white text-stroke-white`}>Inspiring youth with sponsors</h1>
          <Sponsor></Sponsor>
          <button className={`Sponsors-button bg-gradient-to-r from-blue-dark to-blue-normal button px-32 py-9 rounded-full shadow-xs bg-white w-fit`}>
            <p className={`Sponsor-CTA `}>Sponsor Now</p>
          </button>
        </div>

        <div className={`FAQ flex flex-col gap-50`}>
          <h2 className={`FAQ-title h1 ${theme} text-white`}>Frequently asked questions</h2>
          {/* Component */}
          <FAQ/>
        </div>

        {/* <div className={`Mailing`}>
          <h3 className={`Mailing-title h3`}>Join our mailing list!</h3>
          <p className={`Mailing-text`}>Be the first to know about our workshops and events!</p>
          <input className={`Mailing-input`} type='text' placeholder='Email' />
          <button className={`Mailing-button`}>
            <p className={`Mailing-CTA`}>Submit</p>
          </button>
        </div> */}

        <div className={`Footer bg-blue-background w-screen h-screen -translate-x-[75px] bg-gray-900 text-white py-8 rounded-t-50`}>
          <Footer/>
        </div>
      </div>

    </main>
  )
}

