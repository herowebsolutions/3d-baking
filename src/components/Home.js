import React from 'react'
import content from '../content'
import Partners from './Partners'
export default function Home () {
  return (
    <>
      <div
        className='min-h-screen font-face-garamond'
        style={{
          background: '#eee'
        }}
      >
        <div className='pt-6 lg:p-4 max-w-5xl  mx-auto py-auto md:px-8 lg:px-8 lg:gap-4 sm:gap-6 md:gap-6 flex flex-col justify-around items-center md:flex-row md:w-11/12 md:min-h-screen md:justify-center lg:min-h-[620px] '>
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
              src={content.about.img}
              alt=''
              placeholder=''
              className='brightness-125 drop-shadow-xl '
            />
          </div>
        </div>
        {/* Services */}

        <div className='bg-white '>
          <h1 className='text-center font-bold pt-16 text-gray-700'>
            DISCOVER ALL THE POSSIBILITIES
          </h1>
          <p className='text-center pt-4 px-10 text-gray-700'>
            Whatever your business needs, 3d Baking has a wide range of breads
            that are as delicious as they are versatile.
          </p>

          <div className='lg:grid grid-cols-2 gap-2 sm:gap-2 md:grid-cols-2 py-16 lg:justify-around items-center max-w-7xl px-4 '>
            <div className='flex lg:py-10 lg:px-10 border-2 border-gray-200 lg:mx-10 drop-shadow-xl shadow-lg rounded-lg p-4'>
              <div className='mr-4 flex-shrink-0 self-center'>
                <svg
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
                </svg>
              </div>

              <div>
                <h4 className='text-lg font-bold'>Dock to Door</h4>
                <p className='mt-1'>
                  Every morning our trucks are loaded with fresh bread
                  delivering to some of the finest hotels and restaurants in the
                  Chicagoland area.
                </p>
              </div>
            </div>
            <div className='flex lg:py-10 lg:px-10 border-2 border-gray-200 lg:mx-10 drop-shadow-xl shadow-lg rounded-lg p-4 my-6'>
              <div className='mr-4 flex-shrink-0 self-center'>
                <svg
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
                </svg>
              </div>

              <div>
                <h4 className='text-lg font-bold'>
                  Frozen Food Service
                </h4>
                <p className='mt-1'>
                  Through
                  our Frozen Foodservice program, we work with you to offer a
                  variety of our quality bread, buns, and rolls nationwide.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Partners />
        {/* OUR BREAD */}
        <div
          className='min-h-screen p-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static flex flex-col justify-center items-center lg:m-10 rounded-2xl shadow-xl '
          style={{ background: '#DFB995' }}
        >
          {/* <div className=' pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48'> */}
          <div className='max-w-7xl mx-auto py-auto px-4 sm:px-6 flex flex-col  md:min-h-screen items-center justify-center gap-6 '>
            <h1 className='text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl uppercase'>
              Our Bread
            </h1>
            <p className='mt-4 text-xl text-gray-900 sm:px-32 text-center'>
              At 3D Baking, all our artisan breads, rolls, and buns are
              handcrafted by our professional bakers – experts in the fine art
              of mixing, fermenting, hand-shaping, proofing, and baking. We are
              sincerely committed to producing the finest authentic bread. We
              believe that less is more. No additives. No GMO’s. Only the
              freshest ingredients. Because everyone deserves the good stuff.
            </p>
          </div>
          {/* <div className='text-center items-center justify-center'>
                
                <img src={content.ourBread.img} className='sm:w-2/6 md:w-2/6 lg:w-4/6'/>
              </div> */}
        </div>
        {/* ABOUT 3D */}
        <div
          className='min-h-screen p-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static flex flex-col justify-center items-center'
          style={{ background: '#eee' }}
        >
          <div className='text-center'>
            <img
              src={content.header.img}
              alt=''
              placeholder=''
              className='h-48 w-40 text-center -rotate-45'
            />
          </div>
          <div
            className='text-center lg:text-center relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static m-10  rounded-xl'
            style={{ color: '#0f393b' }}
          >
            {/* <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl uppercase'>
              About 3D
            </p> */}
            <p className='mt-4 md:mx-32 text-2xl'>
              Based out of Chicago, 3D Baking is a small business with a serious
              passion for all things bread. We bake over 100 varieties of bread
              for co-packaging, restaurants, hotels and grocers around the US.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
