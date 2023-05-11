import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className='Hero'>
        <h1 className="Hero-title">Hello! <br/> We are SSA</h1>
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

      <div className="Workshops">
        h1
      </div>

    </main>
  )
}
