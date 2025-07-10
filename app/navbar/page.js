import React from 'react';

const Page = () => {
  return (
    <div className='bg-white shadow-md h-16 flex items-center justify-between px-6'>
      {/* Left section: Logo + Title */}
      <div className='flex items-center space-x-4'>
        <a href='/'>
          <img src='OIP.jpeg' alt='Logo' className='object-contain h-10' />
        </a>
        <span className='font-semibold text-lg'>buy com</span>
      </div>

      {/* Right section: Navigation links */}
      <div className='flex space-x-6'>
        <a href='/' className='hover:text-blue-600'>Home</a>
        <a href='/cart' className='hover:text-blue-600'>Cart</a>
        <a href='/help' className='hover:text-blue-600'>Help</a>
        <a href='/search' className='hover:text-blue-600'>Search</a>
      </div>
    </div>
  );
};

export default Page;
