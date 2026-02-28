import React from 'react'
import { FaCaretUp } from 'react-icons/fa6'
import { IoIosArrowRoundForward } from 'react-icons/io'

const Products = () => {
  return (
    <div className='flex flex-col gap-4'>
        <div className='text-gray-50 flex justify-between items-center'>
            <h2 className=' font-bold'>Total Products</h2>
            <button className='flex items-center justify-center bg-white text-center text-gray-800 w-8 h-8 rounded-full -rotate-45'><IoIosArrowRoundForward size={20} /></button>
        </div>

        <div>
            <span className='text-4xl text-gray-50 font-semibold'>24</span>
        </div>

        <div className='text-white/70 flex items-center gap-2'>
            <div className='flex items-center border rounded-sm w-6 text-center px-1 py-0.5'>
                <span className='text-[10px]'>5</span> 
                <span className=''><FaCaretUp size={10} /></span>
            </div>

            <p className='text-[11px] font-semibold'>Increased of the last month</p>
        </div>
    </div>
  )
}

export default Products