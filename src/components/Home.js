import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import content from '../content'
import Partners from './Partners'
export default function Home () {
  const navigate = useNavigate()
  return (
    <>
      <div
        className='min-h-screen font-face-garamond'
        style={{
          background: '#DFB995'
        }}
      >
        <div className='pt-6 lg:p-4 max-w-7xl mx-auto py-auto md:px-8 lg:px-8 lg:gap-4 sm:gap-6 md:gap-6 flex flex-col justify-around items-center md:flex-row md:w-11/12 md:min-h-screen md:justify-center lg:min-h-[620px] '>
          <div className='px-2 sm:w-10/12 md:w-7/12 text-center lg:text-left'>
            <h1 className='text-5xl font-face-garamond tracking-wide '>
              No artificial flavors.
              <br />
              No GMO’s.
              <br />
              Only the{' '}
              <span className='uppercase underline decoration-gray-400/[.33] hover:decoration-gray-600 cursor-auto'>
                good
              </span>{' '}
              stuff.
            </h1>
          </div>

          {/* VUDEO */}

          {/* <div className='sm:h-1/5 md:w-2/6 sm:rounded-lg lg:w-1/4 lg:rounded-t-full shadow-2xl md:rounded-t-full bg-gray-900'>

          <video className='lg:rounded-t-full sm:rounded-lg md:rounded-t-full md:p-1 lg:p-1 '
            autoPlay='autoPlay'
            
            loop
            muted
            controls={false}
            playsInline
            style={{
              position: 'relative',
              width: '100%',
              
              objectFit: 'cover'

          }}
            >
            <source src={content.nav.video} type='video/mp4'/>
            </video>
          </div> */}
          <div className='sm:w-2/6 md:w-2/6 lg:w-4/6 translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg) '>
            <img
              src={content.header.headerImg}
              alt=''
              placeholder=''
              className='brightness-125 drop-shadow-xl '
            />
          </div>
        </div>
        {/* Services */}

        <div className='bg-white '>
          <h1 className='text-center pt-16 text-gray-800 tracking-wider'>
            DISCOVER ALL THE POSSIBILITIES
          </h1>
          <p className='text-center pt-4 px-10 text-gray-700 lg:mx-32'>
            Whatever your business needs, 3d Baking has a wide range of breads
            that are as delicious as they are versatile.
          </p>

          <div className='lg:grid grid-cols-2 gap-2 sm:gap-2 md:grid-cols-2 py-16 lg:justify-around items-center max-w-8xl px-2 '>
            <div className='flex lg:py-10 py-6  lg:mx-10 shadow-lg rounded-sm p-2'>
              <div className='mr-2 flex-shrink-0 self-center'>
                {/* <svg
                  className='h-24 w-24 border border-gray-300 bg-white text-gray-300'
                  preserveAspectRatio='none'
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 200 200'
                  aria-hidden='true'
                >
                  <path
                    vectorEffect='non-scaling-stroke'
                    strokeWidth={1}
                    d='M0 0l200 200M0 200L200 0'
                  />
                </svg> */}
                <img
                  src={content.header.deliveryImg}
                  alt=''
                  placeholder=''
                  className='h-auto w-32 bg-transparent'
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
            <div className='flex lg:py-10 py-6 bg-white  lg:mx-10 drop-shadow-xl shadow-lg rounded-sm lg:p-4 p-2'>
              <div className='mr-2 flex-shrink-0 self-center  '>
                {/* <svg
                  className='h-24 w-24 border border-gray-300 bg-white text-gray-300'
                  preserveAspectRatio='none'
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 200 200'
                  aria-hidden='true'
                >
                  <path
                    vectorEffect='non-scaling-stroke'
                    strokeWidth={1}
                    d='M0 0l200 200M0 200L200 0'
                  />
                </svg> */}
                <img
                  src={content.header.img}
                  alt=''
                  placeholder=''
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
                placeholder=''
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
