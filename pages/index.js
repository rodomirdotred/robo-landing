import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Swiper from '../components/swiper'
import LabTabs from '../components/tap'
import SocialIcon from '../components/socialIcon'
import Video from '../components/video'
export default function Home() {
  return (
    <>
    <Head>
      <title>
        Cactus - کاکتوس
      </title>

    </Head>
    <div
      className='flex flex-col h-screen bg-green-300 bg-opacity-50'
    >
      <div
        className=' basis-1/3 flex flex-col items-center justify-center bg-purple-400 bg-opacity-50'
      >
        <span
          className=' text-2xl'
          style={{
            fontFamily: "'Vazirmatn', sans-serif"
          }}

        >
          شرکت روباتیک کاکتوس 
        </span>
        <br />
        <span
          className=' text-3xl'
        >

         
            Cactus Robotic Co.

          
        </span>
        <br />
        <SocialIcon />
        <br />
      </div>
      <div
        className=' w-full '
        // style={{backgroundColor: "#39ff14"}}
      >
        <div
          className='h-1/2'
        >
          <Swiper
            items={['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg']}
          />

        </div>
        <div
          className=''
        >
          <LabTabs 
        />

        </div>
          
      </div>
      

    </div>
    </>
  )
}
