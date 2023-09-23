import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

// import CloudBackground from '../assets/CloudBackground.png'
import eventBackground1 from '../assets/eventBackground1.png'

import Image from 'next/image'
import Navbar from "@/components/Navbar";
import Stats from '../components/Stats'
import About from '../components/About'
import Workshop from '../components/Workshop'
import Volunteer from '../components/Volunteer'
import Team from '../components/Team'
import Event from '../components/Event';
import Sponsor from '../components/Sponsor';
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { CSSTransition } from 'react-transition-group'

const style = {
  container: 'flex items-center justify-center h-screen bg-gray-200',
};




export default function Home() {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const workshopsRef = useRef(null)
  const eventsRef = useRef(null)
  const teamRef = useRef(null)
  const faqRef = useRef(null)
  const contactRef = useRef(null)

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

  const scrollToRef = (ref) => {
    // ref.current.scrollIntoView({ behavior: 'smooth' });
    window.scrollTo({
      top: ref.current.offsetTop - 100,
      behavior: 'smooth'
    });
  };

  return (
    <main 
    ref={viewRef}
    className={`Body flex flex-col items-center border websitePadding w-screen overflow-hidden box-border transition-bg duration-500 gap-52 sm:gap-72 ${isVisible ? 'bg-blue-background opacity-100' : 'bg-white opacity-100'}`}>

      <Navbar 
        scrollToRefFun = {scrollToRef}
        homeRef = {homeRef}
        aboutRef = {aboutRef}
        workshopsRef = {workshopsRef}
        eventsRef = {eventsRef}
        teamRef = {teamRef}
        faqRef = {faqRef}
        contactRef = {contactRef}
      />

      <div className='w-full relative min-h-[90vh] flex flex-col justify-between pt-[15vh]'>
        <div ref={homeRef} className={`Hero items-end w-full flex items-center `}>
          <h1 className={`Hero-title ${theme} h0 z-10 h-fit`}>Hello! <br/> We are SSA</h1>
        </div>
        <Stats className="w-full bg-white"/>
      </div>

      <div ref={aboutRef} >
        <About theme={theme}/>
      </div>

      <div ref={workshopsRef} className="w-full">
        <Workshop theTheme={theme}/>
      </div>


      <div
      className='w-full flex flex-col  gap-52 sm:gap-72'
      // ref={viewRef}
      // className={isVisible? "Events bg-gradient-to-r from-black to-grey w-[100vw] px-[75px] flex flex-col gap-50 py-52 rounded-t-50 -translate-x-[75px] z-0!" : ""}
      >
        <div ref={eventsRef}
        className="Events flex flex-col gap-50">
          <h2 className={`Events-title h1 ${theme} text-white w-full`}>Past Events</h2>
          <Event/>
        </div>

        {/* <div ref={teamRef} className={`Sponsors flex flex-col items-center w-full gap-50`}>
          <h1 className={`Sponsors-title h1 text-white text-stroke-white`}>Our Team</h1>
          <Team/>
        </div> */}


        {/* <Volunteer theTheme={theme}/> */}

        <div ref={faqRef} className={`FAQ flex flex-col gap-50 w-full`}>
          <h2 className={`FAQ-title h1 ${theme} text-white`}>Frequently Asked Questions</h2>
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
        <div ref={contactRef}>
          <Contact/>
        </div>

        {/* <div className={`Footer bg-blue-background w-screen -translate-x-[75px] bg-gray-900 text-white py-8 rounded-t-50`}>
          <Footer/>
        </div> */}
      </div>

    </main>
  )
}

