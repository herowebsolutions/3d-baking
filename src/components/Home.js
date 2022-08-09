import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import content from '../content'
import Partners from './Partners'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Home () {
  const navigate = useNavigate()
  const [animated, setAnimated] = useState(false)
  useEffect(() => {
    setAnimated(true)
    AOS.init()
  }, [])
  return (
    <>
      <div
        className='min-h-screen font-face-garamond'
        style={{
          background: '#DFB995'
        }}
      >
        <div className='pt-10 lg:p-4 max-w-7xl mx-auto py-auto md:px-8 lg:px-8 lg:gap-4 sm:gap-6 md:gap-6 flex flex-col justify-around items-center md:flex-row md:w-11/12 md:min-h-screen md:justify-center lg:min-h-[620px] '>
          <div className={`${animated ? '' : 'translate-y-5 opacity-0'} transform transition duration-1000 ease-in-out px-2 sm:w-10/12 md:w-7/12 text-center lg:text-left`}>
            <h1 className='text-5xl font-face-garamond tracking-wide '>
              No artificial flavors.
              <br />
              No GMO’s.
              <br />
              Only the good
              stuff.
            </h1>
          </div>

         
          <div className={`${animated ? '' : 'translate-y-5 opacity-0'} transform transition duration-1000 ease-in-out sm:w-2/6 md:w-2/6 lg:w-3/6 translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg) `}>
            <img
              src={content.header.headerImg}
              alt=''
              placeholder={content.header.imgPlaceholder}
              className='brightness-125 drop-shadow-xl '
            />
          </div>
        </div>
        {/* Services */}

        <div className='' style={{backgroundColor: '#fff'}}
        data-aos='fade-zoom-in'
        data-aos-easing='ease-in-sine'
        
        >
          <h1 className='text-center pt-16 text-gray-800 tracking-wider'
          data-aos='fade-zoom-in'
          data-aos-easing='ease-in-sine'
          data-aos-delay="100">
            DISCOVER ALL THE POSSIBILITIES
          </h1>
          <p className='text-center pt-4 px-10 text-gray-700 lg:mx-32'
          data-aos='fade-zoom-in'
          data-aos-easing='ease-in-sine'
          data-aos-delay="100">
            Whatever your business needs, 3d Baking has a wide range of breads
            that are as delicious as they are versatile.
          </p>

          <div className='lg:grid grid-cols-2 gap-2 sm:gap-2 md:grid-cols-2 py-16 lg:justify-around items-center max-w-8xl px-2 '
           data-aos='fade-zoom-in'
           data-aos-easing='ease-in-sine'
          >
            <div className='flex lg:py-10 py-6 border-2 border-gray-100 lg:mx-10 shadow-lg rounded-sm p-2 bg-white'>
              <div className='mr-2 flex-shrink-0 self-center'>
                
                <img
                  src={content.header.deliveryImg}
                  alt=''
                  placeholder=''
                  className='h-auto w-32'
                />
              </div>

              <div className=' px-4'>
                <h4 className='text-lg'>Dock to Door</h4>
                <p className=' text-sm text-gray-700'>
                  Every morning our trucks are loaded with fresh bread
                  delivering to some of the finest hotels and restaurants in the
                  Chicagoland area.
                </p>
                <div className='py-4'>
                <button
                 onClick={() => navigate('/services')}
                  className=' text-center text-gray-600  transition duration-150 ease-in-out rounded-md hover:text-gray-700 '
                >
                  <span className='lg:text-xs lg:hover:underline underline underline-offset-1'>
                    See details
                  </span>
                </button>
              </div>
              </div>
            </div>
            <div className='flex lg:py-10 py-6 bg-white border-2 border-gray-100 lg:mx-10 drop-shadow-xl shadow-lg rounded-sm lg:p-4 p-2'>
              <div className='mr-2 flex-shrink-0 self-center  '>
                
                <img
                  src={content.header.img}
                  alt=''
                  placeholder='https://via.placeholder.com/300/09f.png/fff

                  C/O https://placeholder.com/'
                  className='h-auto w-32 bg-white'
                />
              </div>

              <div className=' px-4'>
                <h4 className='text-lg'>Frozen Food Service</h4>
                <p className=' text-sm text-gray-700'>
                  Through our Frozen Foodservice program, we work with you to
                  offer a variety of our quality bread, buns, and rolls
                  nationwide.
                </p>
                <div className='py-4'>
                <button
                 onClick={() => navigate('/services')}
                  className=' text-center text-gray-600 transition duration-150 ease-in-out rounded-md hover:text-gray-700 '
                >
                  <span className='lg:text-xs lg:hover:underline underline underline-offset-1'>
                    See details
                  </span>
                </button>
              </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* PARTNERS */}

        <Partners />

        {/* OUR BREAD */}
        <div
          className='min-h-screen p-8  mx-auto px-4 sm:px-6 lg:px-8 sm:static flex flex-col justify-center items-center lg:m-10 rounded-t-2xl shadow-xl '
          style={{ background: '#fff' }}
        >
          {/* <div className=' pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48'> */}
          
            <div className='text-center'>
              <img
                src={content.about.img}
                alt=''
                placeholder='https://via.placeholder.com/300/09f.png/fff

                C/O https://placeholder.com/'
                className='h-auto w-40 text-center '
              />
            </div>
            <div
              className='text-center lg:text-center relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static m-10  rounded-t-xl'
              style={{ color: '#0f393b' }}
            >
              
              <p className='mt-4 md:mx-32 text-2xl'>
                Based out of Chicago, 3D Baking is a small business with a
                serious passion for all things bread. We bake over 100 varieties
                of bread for co-packaging, restaurants, hotels and grocers
                around the US.
              </p>
            </div>
        
         
        </div>
        
      </div>
    </>
  )
}
