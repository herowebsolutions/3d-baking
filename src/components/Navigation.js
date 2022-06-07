import React from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'
import { Link, useNavigate } from 'react-router-dom'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Our Breads', href: '/breads', current: true },
  { name: 'About Us', href: '/about', current: false },
  { name: 'Services', href: '/services', current: false },
  { name: 'Contact Us', href: '/contact', current: false }
]
function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation ({ categories }) {
  const navigate = useNavigate()

  return (
    <Popover as='nav' className='bg-blue-200 shadow'>
      <div className='mx-auto px-2 sm:px-6 lg:px-8 bg-gray-100'>
        <div className='relative flex justify-between h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            {/* Mobile menu button */}
            <Popover className='relative'>
              {({ open }) => (
                <>
                  <Popover.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XIcon className='block h-6 w-6' aria-hidden='true' />
                    ) : (
                      <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                    )}
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-300'
                    enterFrom='opacity-0 -translate-y-1'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in duration-150'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 translate-y-1'
                  >
                    <Popover.Panel className='absolute z-10 w-screen transform -translate-x-2 mt-3 sm:px-0 lg:max-w-2xl'>
                      <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                        <div className=' flex flex-col items-center py-6 text-center bg-gray-100'>
                          <button
                            className=' text-gray-700 border-gray-500 my-4 px-1 pt-1 text-md font-medium uppercase focus:outline-none'
                            onClick={() => navigate('/breads')}
                          >
                            Our Breads
                          </button>

                          <button
                            className=' text-gray-700 border-gray-500 my-4 px-1 pt-1 text-md font-medium uppercase focus:outline-none'
                            onClick={() => navigate('/about')}
                          >
                            About Us
                          </button>
                          <button
                            className=' text-gray-700 border-gray-500 my-4 px-1 pt-1 text-md font-medium uppercase focus:outline-none'
                            onClick={() => navigate('/services')}
                          >
                            Services
                          </button>
                          <button
                            className=' text-gray-700 border-gray-500 my-4 px-1 pt-1 text-md font-medium uppercase focus:outline-none'
                            onClick={() => navigate('/contact')}
                          >
                            Contact Us
                          </button>
                        </div>
                        <div className='flex justify-around p-4 bg-blue-100 items center'>
                          <span>Sample text here</span>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
          <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex-shrink-0 flex items-center'>
              <button onClick={() => navigate('/')} className='focus:outline-none'>
                <img
                  className='block lg:hidden h-8 w-auto'
                  src='https://ehrapy.readthedocs.io/en/latest/_static/placeholder.png'
                  alt='Workflow'
                />
              </button>
              <button onClick={() => navigate('/')} className='focus:outline-none'>
                <img
                  className='hidden lg:block h-8 w-auto focus:outline-none ring-0'
                  src='https://4m4you.com/wp-content/uploads/2020/06/logo-placeholder.png'
                  alt='Workflow'
                />
              </button>
            </div>
            {/* Desktop */}
            <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
              <Popover className='inline-flex'>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className='
                text-gray-800 group inline-flex items-center pt-1 px-1 border-b-2 border-gray-800 text-sm font-medium ring-0 focus:outline-none uppercase'
                    >
                      Our Breads
                      {open ? (
                        <ChevronUpIcon
                          className='
                      ml-2 h-5 w-5 text-gray-900 transition ease-in duration-150'
                          aria-hidden='true'
                        />
                      ) : (
                        <ChevronDownIcon
                          className='
                          ml-2 h-5 w-5 text-gray-900 transition ease-in duration-150'
                          aria-hidden='true'
                        />
                      )}
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-200'
                      enterFrom='opacity-0 -translate-y-1'
                      enterTo='opacity-100 translate-y-0'
                      leave='transition ease-in duration-150'
                      leaveFrom='opacity-100 translate-y-0'
                      leaveTo='opacity-0 translate-y-1'
                    >
                      <Popover.Panel className='absolute z-10 w-screen max-w-sm px-4 pt-6 mt-10 sm:px-0 md:max-w-2xl lg:max-w-3xl'>
                        <div className='overflow-hidden rounded-lg shadow-xl flex'>
                          <div className='bg-white p-4'>
                            <div className='flex justify-between text-left text-gray-700 text-sm font-medium pt-6 border-b-2 border-gray-300'>
                              Categories
                              <div>
                                <button
                                  className='text-gray-700 text-sm font-medium'
                                  onClick={() => navigate('/breads')}
                                >
                                  View All
                                </button>
                              </div>
                            </div>
                            <div className='relative grid gap-2 bg-white text-center lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 mt-6'>
                              {categories.map(bread => (
                                <div
                                  key={bread.id}
                                  className='flex-col text-gray-700 items-center justify-center transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none '
                                >
                                  <Link to={`/categories/${bread.name}`}>
                                    <div className=' '>
                                      <img
                                        className='h-auto w-auto'
                                        src={bread.img}
                                      ></img>
                                    </div>
                                  </Link>
                                  <div className=''>
                                    <p className='text-sm font-medium text-gray-900'>
                                      {bread.name}
                                    </p>
                                    <p className='text-sm text-gray-500'></p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className='bg-blue-100 p-4'>
                            <div className='text-left text-gray-700 text-sm font-medium pt-6 border-b-2 border-gray-300'>
                              Services
                            </div>

                            <div className='flex flex-col justify-between pt-6 items-center'>
                              <a
                                href='##'
                                className='flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'
                              >
                                <span className='flex items-center'>
                                  <span className='text-sm font-medium text-gray-900'>
                                    Documentation
                                  </span>
                                </span>
                                <span className='block text-sm text-gray-600'>
                                  Start integrating products and tools
                                </span>
                              </a>
                              <a
                                href='##'
                                className='flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'
                              >
                                <span className='flex items-center'>
                                  <span className='text-sm font-medium text-gray-900'>
                                    Documentation
                                  </span>
                                </span>
                                <span className='block text-sm text-gray-600'>
                                  Start integrating products and tools
                                </span>
                              </a>
                              <a
                                href='##'
                                className='flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'
                              >
                                <span className='flex items-center'>
                                  <span className='text-sm font-medium text-gray-900'>
                                    Documentation
                                  </span>
                                </span>
                                <span className='block text-sm text-gray-600'>
                                  Start integrating products and tools
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <button
                onClick={() => navigate('/about')}
                className={classNames(
                  navigation.current
                    ? 'bg-gray-900 text-white'
                    : 'border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium uppercase focus:outline-none'
                )}
                aria-current={navigation.current ? 'page' : undefined}
              >
                About Us
              </button>
              <button
                onClick={() => navigate('/services')}
                className='border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium uppercase focus:outline-none'
              >
                Services
              </button>

              <button
                onClick={() => navigate('/contact')}
                className='border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium uppercase focus:outline-none'
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className='absolute inline-flex inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            <button
              onClick={() => navigate('/order-online')}
              className='text-gray-900 group items-center justify-center hover:text-gray-700 pt-1 text-sm font-medium ring-0 focus:outline-none uppercase'
            >
              Order Online
            </button>
          </div>
        </div>
      </div>
    </Popover>
  )
}
