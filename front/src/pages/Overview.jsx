import React from 'react';
import Header from '../components/Header';

const Overview = () => {
  return (
    <div className='flex-1 bg-blue-600 p-6 '>
      <Header title='Overview' />
      <div className='mt-4 '>
        <p className='text-white'>
          Welcome to the Overview page! Adjust the sidebar to see how content dynamically changes.
        </p>
      </div>
    </div>
  );
};

export default Overview;
