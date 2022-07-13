import React from 'react'
import Marquee from 'react-fast-marquee'

export default function Partners () {
  return (
    <>
      <div className=''>
        <h1 className='text-center text-3xl lg:px-24 px-3 pt-16 text-gray-600'>
          Join hundreds of companies that trust 3d Baking 
        </h1>
        <Marquee
          gradient={false}
          speed={70}
          className='min-w-30 py-16'
        >
          <div className='px-10 py-10 rounded-full border-2 mx-10'>
            <img src='' alt='' placeholder='' className='' />
          </div>
          <div className='px-10 py-10 rounded-full border-2 mx-10'>
            <img src='' alt='' placeholder='' className='' />
          </div>
          <div className='px-10 py-10 rounded-full border-2 mx-10'>
            <img src='' alt='' placeholder='' className='' />
          </div>
          <div className='px-10 py-10 rounded-full border-2 mx-10'>
            <img src='' alt='' placeholder='' className='' />
          </div>
          <div className='px-10 py-10 rounded-full border-2 mx-10'>
            <img src='' alt='' placeholder='' className='' />
          </div>
          <div className='px-10 py-10 rounded-full border-2 mx-10'>
            <img src='' alt='' placeholder='' className='' />
          </div>
        </Marquee>
      </div>
    </>
  )
}
