import React from 'react'
import { BiVideoRecording } from 'react-icons/bi'

const Reminder = () => {
  return (
    <div>
        <div className='flex flex-col gap-4'>
                                       <div className='text-gray-800 flex justify-between items-center'>
                                           <h2 className=' font-bold'>Reminders</h2>
                            
                                       </div>
                               
                                       <div>
                                           <h2 className='text-xl font-bold text-green-900'>Meeting With Arc Companay</h2>
                                           <h2 className='text-sm text-gray-400'>Time : 02.00 pm - 04.00 pm</h2>
                                       </div>
                               
                                       <div className=' flex items-center justify-center gap-2'>                        
                                           <button className='flex items-center justify-center w-full  py-2 rounded-full gap-2 text-white bg-linear-to-t from-green-800 to-green-950 text-sm'> <span><BiVideoRecording size={20}/></span> Start Meeting</button>
                                       </div>
                 </div>
    </div>
  )
}

export default Reminder