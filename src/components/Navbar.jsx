import React from 'react';
import Image from 'next/image';
import {CiHome} from "react-icons/ci"
import { FaShareAlt, FaPlus, FaChevronRight } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full'>
    <div className='p-2 border-b-2 flex-grow border-gray-300 flex justify-between items-center gap-4'>

      {/* Center: Breadcrumbs */}
      <div className=' flex justify-start items-center gap-3'>
        <CiHome />
        <FaChevronRight className='text-2sm'/>
        <p className='font-semibold text-gray-700'>A/B Testing</p>
      </div>

      {/* Right: Action Buttons */}
      <div className='flex gap-4'>
        <button className='flex items-center bg-blue-500 text-white px-4 rounded'> Share</button>
        <button className='flex items-center border-2 border-gray-500 px-2 rounded'>Create app</button>
      </div>
    </div>
    <div className='border-2 border-gray-300 p-2'>
        <Image width={27} height={27} src="/google.png" alt='user'></Image>
    </div>
    </div>
  );
}

export default Navbar;
