"use client"
import { useState } from 'react'
import React from 'react'
import Image from 'next/image'
import { FaChevronDown, FaBars, FaPlus, FaSearch, FaDatabase, FaTerminal, FaPowerOff } from 'react-icons/fa'
import { BsThreeDots } from "react-icons/bs";
import { LuNotebookText, LuFiles } from 'react-icons/lu'

const Sidebar = ({ mainPages }) => {
  mainPages = false;
  const [machine, setMachine] = useState("Basic 2v CPUs, 5GB Memory ");
  const [language, setLanguage] = useState("Python 3.8");

  return (
    <div className="flex flex-col border-r-2 border-gray-300 h-screen w-full">
      <div className="flex justify-between items-center p-2 border-b-2 border-gray-300">
        <div className="flex justify-center items-center gap-2">
          <Image width={30} height={30} src="/google.png" alt="profile" />
          <h3 className="font-black font-bold">Raul</h3>
          <FaChevronDown />
        </div>
        <div className="flex justify-center items-center gap-3">
          <FaSearch className="border-2 border-gray-500 px-1 rounded text-3xl" />
          {!mainPages && <FaBars className="border-2 border-gray-500 p-1 rounded text-3xl" />}
        </div>
      </div>

      <div className="flex-grow overflow-y-auto">
        <div className="w-full border-gray-300 border-b-2">
          <div className="flex justify-between items-center w-full p-4">
            <h3 className="font-bold">Notebooks</h3>
            <FaPlus />
          </div>
          <div className="flex justify-start items-center px-4 pb-2">
            <p>notebook</p>
          </div>
        </div>
        <div className="w-full border-gray-300 border-b-2">
          <div className="flex justify-between items-center w-full p-4">
            <h3 className="font-bold">Integrations</h3>
            <FaPlus />
          </div>
          <div className="flex flex-col justify-center items-center px-4 pb-2">
            <FaDatabase className="border-2 border-gray-500 px-1 rounded text-3xl" />
            <p className="font-bold">Connect an Integration</p>
            <p className="text-center">Select from existing ones, or create a new one. View its schema or query it with SQL.</p>
          </div>
        </div>
        <div className="w-full border-gray-300 border-b-2">
          <div className="flex justify-between items-center w-full p-4">
            <h3 className="font-bold">Files</h3>
            <FaPlus />
          </div>
          <div className="flex flex-col justify-center items-center px-4 pb-2">
            <LuFiles className="border-2 border-gray-500 px-1 rounded text-3xl" />
            <p className="font-bold">Import Files</p>
            <p className="text-center">Import CSVs, Parquet files, or Images. Files are shared with notebooks in this project.</p>
          </div>
        </div>
        <div className="w-full border-gray-300 border-b-2">
          <div className="flex justify-between items-center w-full p-4">
            <h3 className="font-bold">Terminals</h3>
            <FaPlus />
          </div>
          <div className="flex flex-col justify-center items-center px-4 pb-2">
            <FaTerminal className="border-2 border-gray-500 px-1 rounded text-3xl" />
            <p className="font-bold">No Terminal</p>
            <p className="text-center">Create a terminal to connect to the underlying project's machine.</p>
          </div>
        </div>
        <div className="w-full border-gray-300 border-b-2">
          <div className="flex justify-between items-center w-full p-4">
            <h3 className="font-bold">Table of Contents</h3>
          </div>
          <div className="flex flex-col justify-center items-start px-4 pb-2">
            <p>1. A/B Testing</p>
            <ul className="px-4">
              <li> a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, accusantium.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Fixed bottom section */}
      <div className="flex flex-col justify-center items-start w-full p-4 gap-4 bg-white sticky bottom-0">
        <h3 className="font-bold">Machine</h3>
        <select value={machine} onChange={(e) => {setMachine(e.target.value)}}>
          <option value="basic" className="flex flex-col justify-center items-start font-bold w-50%">
            Basic 2v CPUs, 5GB Memory 
          </option>
          <option value="professional" className="flex flex-col justify-center items-start font-bold">
            Professional 2v CPUs, 10GB Memory
            
          </option>
          <option value="advanced" className="flex flex-col justify-center items-start font-bold">
            Advanced 4v CPUs, 15GB Memory
          </option>
        </select>
        <select value={"basic"} onChange={(e) => {setLanguage(e.target.value)}}>
          <option value="basic" className="flex flex-col justify-center items-start font-bold">
            Python 3.11 for data sciences
          </option>
          <option value="professional" className="flex flex-col justify-center items-start font-bold">
            Anaconda-Python 3.8
          </option>
          <option value="advanced" className="flex flex-col justify-center items-start font-bold">
            Python 3.8
          </option>
        </select>
        <div className='flex justify-between items-center w-full '>
          <button className='flex justify-center items-center gap-3 border-2 border-blue-300 rounded px-4 py-2 text-blue-500'>
            <FaPowerOff />
            <h3>Start Machine</h3>
          </button>
          <BsThreeDots className="border-2 border-gray-500 px-1 rounded text-3xl"  />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
