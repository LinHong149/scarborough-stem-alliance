import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className='Hero'>
        <h1 className="Hero-title ">Hello! <br/> We are SSA</h1>
        {/* <Image>Image</Image> */}
      </div>

      <div className="Stats">
        <div className="Stat-container">
          <h3 className="Stat-number">50+</h3>
          <p className="Stat-topic">Youths Inspired</p>
        </div>
        <div className="Stat-container">
          <h3 className="Stat-number">50+</h3>
          <p className="Stat-topic">Youths Inspired</p>
        </div>
        <div className="Stat-container">
          <h3 className="Stat-number">50+</h3>
          <p className="Stat-topic">Youths Inspired</p>
        </div>
      </div>

      <div className="Workshop">
        <h1 className='Workshop-title'>Workshops for You</h1>
        <div className='Workshop-section'>
          <div className='Workshop-nav'>
            <div className="Workshop-topic">
              <h3 className='Workshop-name'>Feeder School</h3>
            </div>
            <div className="Workshop-topic">
              <h3 className='Workshop-name'>Feeder School</h3>
            </div>
          </div>
          <Image className='Workshop-image'></Image>
          <Image className='Workshop-image'></Image>
        </div>
      </div>

      <div className="Events">
        <h2 className="Events-title">Check out our events!</h2>
        <div className="Events-container">
          <div className="Events-box">
            <h3 className="Event-name">Event Name</h3>
            <p className="Event-date">May 11, 2023</p>
          </div>
          <div className="Events-box">
            <h3 className="Event-name">Event Name</h3>
            <p className="Event-date">May 11, 2023</p>
          </div>
          <div className="Events-box">
            <h3 className="Event-name">Event Name</h3>
            <p className="Event-date">May 11, 2023</p>
          </div>
          <div className="Events-box">
            <h3 className="Event-name">Event Name</h3>
            <p className="Event-date">May 11, 2023</p>
          </div>
        </div>
      </div>

      <div className="Sponsors">
        <h1 className="Sponsors-title">Inspiring Youth with Sponsors</h1>
        <div className="Sponsors-container">
          <div className="Sponsors-sponsor">
            <Image className='Sponsors-image'></Image>
          </div>
          <div className="Sponsors-sponsor">
            <Image className='Sponsors-image'></Image>
          </div>
          <div className="Sponsors-sponsor">
            <Image className='Sponsors-image'></Image>
          </div>
        </div>
        <button className="Sponsors-button">
          <p className="Sponsor-CTA">Sponsor Now</p>
        </button>
      </div>

      <div className="FAQ">
        {/* Component */}
        <div className="FAQ-container">
          <div className='FAQ-top'>
            <p className="FAQ-question">Lorem ipsum dolor sit amet consectetur.</p>
            {/* Icon */}
          </div>
          <p className="FAQ-answer">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis unde maxime perferendis optio, consectetur esse eius voluptatum eligendi quas laudantium.</p>
        </div>
      </div>

      <div className="Mailing">
        <h3 className="Mailing-title">Join our mailing list!</h3>
        <p className="Mailing-text">Be the first to know about our workshops and events!</p>
        <input className='Mailing-input' type="text" placeholder='Email' />
        <button className='Mailing-button'>
          <p className="Mailing-CTA">Submit</p>
        </button>
      </div>

      <div className="Footer">
        
      </div>

    </main>
  )
}
