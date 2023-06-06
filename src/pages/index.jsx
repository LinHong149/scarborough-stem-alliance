import Image from 'next/image'

import Stat from '../components/Stat'
import Workshop from '../components/Workshop'
import Event from '../components/Event';
import Sponsor from '../components/Sponsor';
import FAQ from '../components/FAQ'

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

      <div className={`Sponsors flex flex-col gap-50 py-72`}>
        <h1 className={`Sponsors-title h1`}>Inspiring youth with sponsors</h1>
        <Sponsor></Sponsor>
        <button className={`Sponsors-button button border-black border-[3px] px-32 py-9 rounded-full shadow-xs bg-white w-fit`}>
          <p className={`Sponsor-CTA`}>Sponsor Now</p>
        </button>
      </div>

      <div className={`FAQ flex flex-col gap-50`}>
        <h2 className="FAQ-title h2">Frequently Asked Questions</h2>
        {/* Component */}
        <FAQ/>
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
