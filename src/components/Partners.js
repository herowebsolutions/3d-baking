import React, {useEffect} from 'react'
import Marquee from 'react-fast-marquee'
import content from '../content'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Partners () {
    useEffect(() => {
        AOS.init()
      }, [])
  return (
    <>
      <div className=''
      data-aos='fade-zoom-in'
      data-aos-easing='ease-in-sine'>
        <h1 className='text-center text-3xl lg:px-24 px-3 pt-16 text-gray-600'>
          Join hundreds of companies that trust 3d Baking 
        </h1>
        <Marquee
          gradient={false}
          speed={60}
          className='min-w-30 py-16'
          
        >
            
          <div className=' w-full aspect-w-16 aspect-h-7 rounded-lg mx-4'>
            <img src={content.partners.wholeFoods.img} alt={content.partners.wholeFoods.name} placeholder='' className='object-cover h-56 w-32  rounded-full' />
          </div>
          <div className=' w-full aspect-w-16 aspect-h-7 rounded-lg mx-4'>
            <img src={content.partners.lettuce.img} alt={content.partners.lettuce.name} placeholder='' className='object-cover h-56 w-32  rounded-full' />
          </div>
          <div className=' w-full aspect-w-16 aspect-h-7 rounded-lg mx-4'>
            <img src={content.partners.boka.img} alt={content.partners.boka.name} placeholder='' className='object-cover h-56 w-32  rounded-full' />
          </div>
          <div className=' w-full aspect-w-16 aspect-h-7 rounded-lg mx-4'>
            <img src={content.partners.joes.img} alt={content.partners.joes.name} placeholder='' className='object-cover h-56 w-32  rounded-full' />
          </div>
          <div className=' w-full aspect-w-16 aspect-h-7 rounded-lg mx-4'>
            <img src={content.partners.langham.img} alt={content.partners.langham.name} placeholder='' className='object-cover h-56 w-32  rounded-full' />
          </div>
          <div className=' w-full aspect-w-16 aspect-h-7 rounded-lg mx-4'>
            <img src={content.partners.ritz.img} alt={content.partners.ritz.name} placeholder='' className='object-cover h-56 w-32  rounded-full' />
          </div>
          <div className=' w-full aspect-w-16 aspect-h-7 rounded-lg mx-4'>
            <img src={content.partners.rpm.img} alt={content.partners.rpm.name} placeholder='' className='object-cover h-56 w-32  rounded-full' />
          </div>
          <div className=' w-full aspect-w-16 aspect-h-7 rounded-lg mx-4'>
            <img src={content.partners.waldorf.img} alt={content.partners.waldorf.name} placeholder='' className='object-cover h-56 w-32  rounded-full' />
          </div>
          <div className=' w-full aspect-w-16 aspect-h-7 rounded-lg mx-4'>
            <img src={content.partners.avendra.img} alt={content.partners.avendra.name} placeholder='' className='object-cover h-56 w-32  rounded-full' />
          </div>
          
        </Marquee>
      </div>
    </>
  )
}
