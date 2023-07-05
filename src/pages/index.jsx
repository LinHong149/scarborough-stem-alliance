import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import Image from 'next/image'

import Stat from '../components/Stat'
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
    <main className={`Body px-20 w-screen overflow-hidden transition-bg duration-1000 ${isVisible ? 'bg-black opacity-100' : 'bg-white opacity-100'}`}>
      <div className={`Hero h-[80vh] flex items-end pb-36`}>
        <h1 className={`Hero-title h1`}>Hello! <br/> We are SSA</h1>
        {/* <Image>Image</Image> */}
      </div>

      <div className={`Stats w-100 flex space-between gap-25 h-[20vh] mb-[20vh]`}>
        <Stat Number="50+" Topic='Youths Inspired' />
        <Stat Number="50+" Topic='Youths Inspired' />
        <Stat Number="50+" Topic='Youths Inspired' />
      </div>

      <div className={`Workshop h-[100vh] flex flex-col justify-center gap-50`}>
        <h1 className={`Workshop-title h1 ${theme} transition-bg duration-1000`}>Workshops for You</h1>
        <Workshop inView={inView} />
      </div>


      <div
      ref={viewRef}
      // className={isVisible? "Events bg-gradient-to-r from-black to-grey w-[100vw] px-[75px] flex flex-col gap-50 py-52 rounded-t-50 -translate-x-[75px] z-0!" : ""}
      >
        <div 
        className="Events flex flex-col gap-50">
          <h2 className={`Events-title h2 text-white`}>Check out our events!</h2>
          <Event/>
        </div>

        <div className={`Sponsors flex flex-col gap-50 py-72`}>
          <h1 className={`Sponsors-title h1 text-white text-stroke-white`}>Inspiring youth with sponsors</h1>
          <Sponsor></Sponsor>
          <button className={`Sponsors-button button border-black border-[3px] px-32 py-9 rounded-full shadow-xs bg-white w-fit`}>
            <p className={`Sponsor-CTA`}>Sponsor Now</p>
          </button>
        </div>

        <div className={`FAQ flex flex-col gap-50`}>
          <h2 className="FAQ-title h2 text-white">Frequently Asked Questions</h2>
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

        <div className={`Footer bg-black w-screen h-screen -translate-x-[75px] bg-gray-900 text-white py-8 rounded-t-50`}>
          <Footer/>
        </div>
      </div>

    </main>
  )
}

