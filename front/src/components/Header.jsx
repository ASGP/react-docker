import React from 'react'

const Header = ({title}) => {
  return (
    <div>
      <header className='bg-gray-700 bg-opacity-40 shadow-md border-b border-gray-600'></header>
      <div className='max-w-7x1 mx-auto py-4 sm:px-6 lg:px-8 bg-blue-500'>
        <h1 className='text-2x1 font-semibold text-white'>{title}</h1>
      </div>
    </div>
  )
}

export default Header
