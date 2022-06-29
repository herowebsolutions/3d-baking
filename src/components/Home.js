import React from 'react'
import content from '../content'

export default function Home () {
  return (
    <>
      <div
        className='min-h-screen font-face-garamond'
        style={{
          background: '#eee'
        }}
      >
        <div className=' p-8 max-w-7xl mx-auto py-auto sm:px-4 lg:px-8 gap-4 flex flex-col justify-center items-center md:flex-row md:w-10/12 md:justify-between lg:min-h-[620px] '>
          <div className='px-4 w-full md:w-2/5 text-left'>
            <h1 className='text-5xl font-face-garamond'>
              No artificial flavors. No GMO’s. Only the freshest ingredients.
            </h1>
          </div>
          <div className=' lg:w-3/5 lg:px-24 items-center'>

          <video className='rounded-t-full '
            autoPlay
            loop
            muted
            
            >
            <source src={content.nav.video} type='video/mp4'/>
            </video>
          </div>
        </div>
        
        {/* OUR BREAD */}
        <div className='relative bg-white overflow-hidden'>
          <div className='pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48'>
            <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static'>
              <div className='sm:max-w-lg'>
                <h1 className='text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl uppercase'>
                  Our Bread
                </h1>
                <p className='mt-4 text-xl text-gray-500'>
                  At 3D Baking, all our artisan breads, rolls, and buns are
                  handcrafted by our professional bakers – experts in the fine
                  art of mixing, fermenting, hand-shaping, proofing, and baking.
                  We are sincerely committed to producing the finest authentic
                  bread. We believe that less is more. No additives. No GMO’s.
                  Only the freshest ingredients. Because everyone deserves the
                  good stuff.
                </p>
              </div>
              <div>
                <div className='mt-10'>
                  {/* Decorative image grid */}
                  <div
                    aria-hidden='true'
                    className='pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full'
                  >
                    <div className='absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8'>
                      <div className='flex items-center  space-x-2 lg:space-x-4'>
                        <div className='flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8'>
                          <div className='w-44 h-44 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100 '>
                            <img
                              src='https://images.squarespace-cdn.com/content/v1/60002cdaebc4a249bd3be17a/1613931122078-345X9942L1HUAS5VOE7K/SUE_0295.jpg'
                              alt='Blind Barber Logo'
                              className='h-full bg-gray-300 w-full object-center object-cover text-center'
                            />
                          </div>
                          <div className='w-44 h-64 rounded-lg overflow-hidden '>
                            <img
                              src='https://media.istockphoto.com/photos/baker-man-picture-id498768929?k=20&m=498768929&s=612x612&w=0&h=Z5WTQbU2vY0IHAsPpY2KP-aLAVxHvSuNI9bb_JuSxeQ='
                              alt=''
                              className='h-full w-full object-center object-cover'
                            />
                          </div>
                        </div>
                        <div className='flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8'>
                          <div className='w-44 h-64 rounded-lg overflow-hidden '>
                            <img
                              src='http://img1.wsimg.com/isteam/stock/87316'
                              alt='Whole Foods'
                              className='w-full h-full object-center object-cover'
                            />
                          </div>
                          <div className='w-44 h-64 rounded-lg overflow-hidden '>
                            <img
                              src='https://ak.picdn.net/offset/photos/5e90e34cd164c0404ea4ca7e/medium/offset_927051.jpg'
                              alt=''
                              className='h-full w-full object-center object-cover'
                            />
                          </div>
                          <div className='w-44 h-64 rounded-lg overflow-hidden '>
                            <img
                              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW4F0i08G5yOkQIDiebvJNbIcFtFJa29zrssmLZObb2iTiPOpXQdp4RM7x9lF3mf8seSI&usqp=CAU'
                              alt='Boka'
                              className='w-full h-full object-center object-cover '
                            />
                          </div>
                        </div>
                        <div className='flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8'>
                          <div className='w-64 h-64 rounded-lg overflow-hidden '>
                            <img
                              src='https://northernwilds.com/wp-content/uploads/2021/04/Farmers_Rye.jpg'
                              alt='Lettuce'
                              className='w-full h-full object-center object-cover'
                            />
                          </div>
                          <div className='w-64 h-64 rounded-lg overflow-hidden '>
                            <img
                              src='https://img.huffingtonpost.com/asset/5e46a4c52200003100d1ce81.jpeg?cache=JPG9FoLeEL&ops=478_700%2Cquality_75'
                              alt='Gibsons'
                              className='w-full h-full object-center object-cover'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ABOUT 3D */}
        <div className=' bg-white min-h-screen'>
          <div className=' p-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static'>
            <div className='text-center lg:text-center'>
              
              <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl uppercase'>
                About 3D
              </p>
              <p className='mt-4 ms:mx-48 text-xl text-gray-500 '>
                Based out of Chicago, 3D Baking is a small business with a
                serious passion for all things bread. We bake over 100 varieties
                of bread for co-packaging, restaurants, hotels and grocers
                around the US.
              </p>
            </div>

            <div className='mt-10'>
              {/* <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
