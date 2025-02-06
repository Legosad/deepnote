import React from 'react'
import { CiHome, CiSettings, CiLock, CiMonitor, CiCalendar } from "react-icons/ci";
import { GrIntegration } from "react-icons/gr";
import { FaPlus } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";


const HomeSideList = () => {
  return (
      <div>
          <div className= 'border-b-2 border-gray-300 p-4'>
              <ul className='flex flex-col items-start justify-center gap-3'>
                  <li className='flex justify-start items-center gap-3'>
                    <CiHome className='text-2xl'/>
                    <p>Home</p>
                  </li>
                  <li className='flex justify-start items-center gap-3'>
                      <GrIntegration className='text-2xl' />
                    <p>Integrations</p>
                  </li>
                  <li className='flex justify-start items-center gap-3'>
                      <CiSettings className='text-2xl' />
                    <p>Settings & Members</p>
                  </li>
              </ul>
          </div>
          <div className='border-b-2 border-gray-300 p-4'>
          <ul className='flex flex-col items-start justify-center gap-3'>
                  <li className='flex justify-start items-center gap-3'>
                    <IoIosTimer className='text-2xl'/>
                    <p>Recents</p>
                  </li>
                  <li className='flex justify-start items-center gap-3'>
                      <CiLock className='text-2xl' />
                    <p>Private Projects</p>
                  </li>
                  <li className='flex justify-start items-center gap-3'>
                      <CiMonitor className='text-2xl' />
                    <p>Data Apps</p>
                  </li>
                  <li className='flex justify-start items-center gap-3'>
                      <CiCalendar className='text-2xl' />
                    <p>Scheduled Projects</p>
                  </li>
              </ul>
          </div>
          <div className='flex flex-col jutify-center items-start p-4 w-full'>
              <div className="flex justify-between items-center w-full">
                  <p>Projects</p>
                  <FaPlus />
              </div>
                <p>A/B Testing</p>
          </div>
    </div>
  )
}

export default HomeSideList