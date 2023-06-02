import Image from 'next/image'

import Stat from '../components/Stat'
import Workshop from '../components/Workshop'
import Event from '../components/Event';

const style = {
  container: 'flex items-center justify-center h-screen bg-gray-200',
  button: 'border-2',
};

export default function Home() {
  return (
    <main className='Body mx-75 overflow-visible w-[calc(100vw-150px)]'>
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
        <h1 className={`Workshop-title h1`}>Workshops for You</h1>
        <Workshop/>
      </div>

      <div className={`Events bg-gradient-to-r from-black to-grey w-[100vw] px-[75px] flex flex-col gap-50 py-52 rounded-t-50 -translate-x-[75px] z-0`}>
        <h2 className={`Events-title h2 text-white`}>Check out our events!</h2>
        <Event/>
      </div>

      <div className={`Sponsors`}>
        <h1 className={`Sponsors-title h1`}>Inspiring Youth with Sponsors</h1>
        <div className={`Sponsors-container`}>
          <div className={`Sponsors-sponsor`}>
            <Image className={`Sponsors-image`}></Image>
          </div>
          <div className={`Sponsors-sponsor`}>
            <Image className={`Sponsors-image`}></Image>
          </div>
          <div className={`Sponsors-sponsor`}>
            <Image className={`Sponsors-image`}></Image>
          </div>
        </div>
        <button className={`Sponsors-button`}>
          <p className={`Sponsor-CTA`}>Sponsor Now</p>
        </button>
      </div>

      <div className={`FAQ`}>
        <h2 className="FAQ-title h2">Frequently Asked Questions</h2>
        {/* Component */}
        <div className={`FAQ-container`}>
          <div className={`FAQ-top`}>
            <p className={`FAQ-question`}>Lorem ipsum dolor sit amet consectetur.</p>
            {/* Icon */}
          </div>
          <p className={`FAQ-answer`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis unde maxime perferendis optio, consectetur esse eius voluptatum eligendi quas laudantium.</p>
        </div>
      </div>

      <div className={`Mailing`}>
        <h3 className={`Mailing-title h3`}>Join our mailing list!</h3>
        <p className={`Mailing-text`}>Be the first to know about our workshops and events!</p>
        <input className={`Mailing-input`} type='text' placeholder='Email' />
        <button className={`Mailing-button`}>
          <p className={`Mailing-CTA`}>Submit</p>
        </button>
      </div>

      <div className={`Footer`}>
        
      </div>

    </main>
  )
}
