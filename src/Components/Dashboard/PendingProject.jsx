import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

const PendingProject = () => {
  return (
    <div>
         <div className='flex flex-col gap-4'>
                                <div className='text-gray-800 flex justify-between items-center'>
                                    <h2 className=' font-bold'>Pending Product</h2>
                                    <button className='flex items-center justify-center border text-center text-gray-800 w-8 h-8 rounded-full -rotate-45'><IoIosArrowRoundForward size={20} /></button>
                                </div>
                        
                                <div>
                                    <span className='text-4xl text-gray-800 font-semibold'>2</span>
                                </div>
                        
                                <div className='text-green-700 flex items-center gap-2'>                        
                                    <p className='text-[10px] font-semibold'>On Discuss</p>
                                </div>
                </div>
    </div>
  )
}

export default PendingProject