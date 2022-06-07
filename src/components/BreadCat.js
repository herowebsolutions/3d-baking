import React from 'react'
import content from '../content'
import { Link, useParams } from 'react-router-dom'

const BreadCat = ({ breads }) => {
  const { id } = useParams()
  let newId = breads.filter((bread) => bread.category === id)
  console.log('in breadCat', newId)
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
            {id}
          </h2>
          <p className='mt-4 text-gray-500'>{content.work.desc}</p>
        </div>
        {/* when clicked on a category, have a hook that changes to tech of bread to pass it to the component as props */}
        <div className='grid grid-cols-1 grid-rows-2 gap-4 sm:gap-6 lg:gap-8'>
          {newId.map(bread => (
            <Link to={`/bread-details/${bread.name}`}
            key={bread.id}
            >
              <img
                
                src={bread.img}
                alt='Walnut card tray with white powder coated steel divider and 3 punchout holes.'
                className='h-auto w-auto'
              />
              <div className='text-center'>

              <h1>{bread.name}</h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BreadCat
