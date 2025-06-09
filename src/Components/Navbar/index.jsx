import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import User from "../../assets/user.png";
const Navbar = ({toggleSidebar}) => {
  return (
    <nav className='bg-primary1 shadow-md px-2 '>
     <div className='flex justify-between items-center  mx-auto gap-2'>
    <button onClick={toggleSidebar} className='md:hidden cursor-pointer'>
      <FiMenu />
    </button>
    <div className='flex bg-primary2 text-grayText  
    items-center gap-2 justify-center py-1.5 px-1.5 md:py-2.5 md:px-3 min-w-[200px] max-w-xl rounded-md w-[100%] '>
      <CiSearch className='text-xl'/>
      <input type="text" placeholder='Search for something...' className='bg-transparent outline-none text-sm md:text-base w-full border-none text-gray-300 placeholder:text-gray-50' >
      
      </input>
    </div>

    <div className='flex items-center justify-content gap-x-2'>
     <div className='relative cursor-pointer'>
       <div className='absolute bg-red-500 rounded-full w-2 h-2 t0p-[3px] right-[5px]'></div>
        <IoMdNotificationsOutline className='text-2xl md:text-[30px] text-grayText' />
     </div>
    
      <img src={User} alt="" className='mr-5'/>



    </div>
     </div>
    </nav>
  )
}

export default Navbar
