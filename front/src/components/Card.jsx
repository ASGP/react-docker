import React from 'react';

const Card = ({ name, icon: Icon, value }) => {
  return (
    <div className='bg-gray-600 bg-opacity-20 backdrop-blur-md rounded-xl shadow-2xl'>
      <div className='px-4 py-5 sm:p-6'>
        <span className='flex items-center text-white font-semibold text-xl'>
          <Icon size={20} className='mr-2' />
          {name}
        </span>
        <p className='pt-2 mt-1 ml-7 text-3xl text-gray-200'>
          {value}
        </p>
      </div>
    </div>
  );
};

export default Card;
