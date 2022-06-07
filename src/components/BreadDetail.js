import React from 'react'
import { Link, useParams } from 'react-router-dom'
import content from '../content'
function BreadDetail ({ breads }) {
  const { id } = useParams()
  console.log('id', id)

  let newId = breads.filter(bread => bread.name === id)

  console.log('newId', newId[0].name)

  return (
    <div
      className='min-h-screen'
      style={{
        background: '#eee'
      }}
    >
      <div className='max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2'>
        <div>
          <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            {newId[0].name}
          </h2>
          <p className='mt-4 text-gray-500'>{content.breads.desc}</p>
        </div>
        {/* when clicked on a category, have a hook that changes to tech of bread to pass it to the component as props */}
        <div
          className='grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8'
         
        >
          {newId.map(bread => (
            <div className='text-center lg:p-0 sm:p-24' key={bread.id}>
              <img
                src={bread.img}
                alt='Walnut card tray with white powder coated steel divider and 3 punchout holes.'
                className='transform rotate-90 '
              />
              
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BreadDetail
