import React from 'react'
import content from '../content'

export default function Services () {
  return (
    <>
      <div
        className='font-face-garamond lg:min-h-[660px]'
        style={{
          background: '#DFB995'
        }}
      >
        <div className='pt-16 p-8 max-w-7xl mx-auto py-auto sm:px-4 lg:px-8  '>
          <div className=' sm:px-48 text-center'>
            <h1 className='text-6xl items-center text-center justify-center font-face-garamond'>
              Services
            </h1>
            <p className='mt-4 text-gray-500 mx-w-md text-center'>
              3D Baking is a wholesale bakery that provides custom bread
              solutions using only the finest, purest ingredients to make
              artisan breads and rolls that satisfy the needs of every
              lifestyle.
            </p>
          </div>
          {/* <div className=' w-full sm:w-2/5  items-center'>
            <img
              src={content.header.img}
              alt='header profile'
              className='py-12'
            ></img>
          </div> */}
          <div className='pt-20 sm:px-4 lg:px-8 gap-4 md:flex-row  mx-auto py-auto md:justify-between '>
            <dl className=' grid max-w-7xl justify-between lg:grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-1 sm:gap-y-16 lg:gap-x-8'>
              <div className='border-t border-gray-500 pt-4'>
                <dt className='font-medium text-gray-900'>Dock to Door</dt>
                <dd className='mt-2 text-sm text-gray-500'>
                  Our breads are prepared overnight and baked every day. Every
                  morning our trucks are loaded with fresh bread delivering to
                  some of the finest hotels and restaurants in the Chicagoland
                  area. As bakers with a passion for what we do, we are
                  dedicated to bringing you one-of-a-kind bread with the utmost
                  quality every day.
                </dd>
              </div>
              <div className='border-t border-gray-500 pt-4'>
                <dt className='font-medium text-gray-900'>
                  Frozen Food Service
                </dt>

                <dd className='mt-2 text-sm text-gray-500'>
                  At 3D Baking, we find ways to make artisan accessible. Through
                  our Frozen Foodservice program, we work with you to offer a
                  variety of our quality bread, buns, and rolls nationwide. Most
                  importantly, we do it without sacrificing taste.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}
