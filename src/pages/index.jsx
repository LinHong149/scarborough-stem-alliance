import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

// import CloudBackground from '../assets/CloudBackground.png'
import eventBackground1 from '../assets/eventBackground1.png'

import Image from 'next/image'
import Navbar from "@/components/Navbar";
import Stats from '../components/Stats'
import Workshop from '../components/Workshop'
import Volunteer from '../components/Volunteer'
import Team from '../components/Team'
import Event from '../components/Event';
import Sponsor from '../components/Sponsor';
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

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
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <main 
    ref={viewRef}
    className={`Body flex flex-col items-center border px-24 w-screen overflow-hidden box-border transition-bg duration-500 gap-52 sm:gap-72 ${isVisible ? 'bg-blue-background opacity-100' : 'bg-white opacity-100'}`}>

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

      <div className='w-full h-100vh'>
        <div ref={homeRef} className={`Hero h-[80vh] flex items-end pb-36 w-full`}>
          <h1 className={`Hero-title ${theme} h0 z-10`}>Hello! <br/> We are SSA</h1>
        </div>
        <Stats className="w-full"/>
      </div>


      <div ref={aboutRef} className="About-us flex flex-col h-fit gap-50 w-full">
        <h1 className={`h1 z-10 ${theme}`}>About Us</h1>
        <div className='flex flex-col items-center justify-between gap-25 z-10 flex-wrap '>
          <Image className='w-full max-w-[750px] rounded-50 aspect-video object-cover z-10' src={eventBackground1}/>
          <p className={`w-full text-white max-w-[900px] text-center text-[20px] z-10`}>The Scarborough STEM Alliance is a student-run network of robotics teams. We give back to the community by hosting dynamic showcases, workshops, and scrimmages across the community through the cooperation of member teams. <br/> <br/> We pride ourselves on our extensive mentorship network across the Scarborough FLL teams. As a union of teams, we provide the perfect platform to share ideas, resources, and mentors no matter the level of experience. We forge lasting friendships and community bonds as we all learn together.</p>
        </div>
      </div>

      <div ref={workshopsRef}>
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

        <div ref={teamRef} className={`Sponsors flex flex-col items-center w-full gap-50`}>
          <h1 className={`Sponsors-title h1 text-white text-stroke-white`}>Our Team</h1>
          {/* <Sponsor></Sponsor> */}
          <Team/>
          {/* <button className={`Sponsors-button bg-gradient-to-r from-blue-dark to-blue-normal button px-32 py-9 rounded-full shadow-xs bg-white w-fit`}>
            <p className={`Sponsor-CTA `}>Sponsor Now</p>
          </button> */}
        </div>


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

