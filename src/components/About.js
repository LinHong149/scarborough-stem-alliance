import React, { useRef, useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useInView } from 'react-intersection-observer';
import AboutUs from '../assets/AboutUs.png'
import Image from 'next/image';


const About = ({theme}) => {
    const [isVisible, setIsVisible] = useState(true);
    const [aboutRef, inView] = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        setIsVisible(inView);
    }, [inView]);

    return (
        <div className={`${isVisible ? "card-active" : "card-inactive"} About-us flex flex-col h-fit gap-50 w-full`}>
            <h1 className={`h1 z-10 ${theme}`}>About Us</h1>
            <div className='flex flex-col items-center justify-between gap-25 z-10 flex-wrap '>
            <Image ref={aboutRef} className='w-full rounded-50 object-cover z-10' src={AboutUs}/>
            <p className={`w-full text-white max-w-[900px] text-center text-[20px] z-10`}>The Scarborough STEM Alliance is a student-run network of robotics teams. We give back to the community by hosting dynamic showcases, workshops, and scrimmages across the community through the cooperation of member teams. <br/> <br/> We pride ourselves on our extensive mentorship network across the Scarborough FLL teams. As a union of teams, we provide the perfect platform to share ideas, resources, and mentors no matter the level of experience. We forge lasting friendships and community bonds as we all learn together.</p>
            </div>
        </div>
    )
}

export default About