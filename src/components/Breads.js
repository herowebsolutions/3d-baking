import React from 'react'
import content from '../content'
import {Link} from 'react-router-dom'
export default function Breads ({ categories }) {
  return (
    <>
      <div
        className='min-h-screen'
        style={{
          background: '#eee'
        }}
      >
        <div className='max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2'>

        <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            Our Breads
          </h2>
          <p className='mt-4 text-gray-500'>{content.breads.desc}</p>
        
        
        <div className='grid grid-cols-1 grid-rows-2 gap-4 sm:gap-6 lg:gap-8'>
          {categories.map(bread => (
            <div
              key={bread.id}
              className='flex-col text-gray-700 items-center justify-center transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none '
            >
              <Link to={`/categories/${bread.name}`}>
                <div className='flex '>
                  <img className='h-auto w-auto' src={bread.img}></img>
                </div>
              </Link>
              <div className='text-center'>
                <p className='text-sm font-medium text-gray-900'>{bread.name}</p>
                {/* <p className='text-sm text-gray-500'>{bread.desc}</p> */}
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </>
  )
}
