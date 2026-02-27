import React, { use, useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import GlovalContext from '../../contexts/GlobalContext'
import { FaBarsStaggered } from 'react-icons/fa6'
import Products from '../../Components/Dashboard/Products'
import EndedProject from '../../Components/Dashboard/EndedProject'
import RunningProject from '../../Components/Dashboard/RunningProject'
import PendingProject from '../../Components/Dashboard/PendingProject'

const Dashboard = () => {

 const {setIsOpenSlider,isOpenSlider} = use(GlovalContext)

 const handleOpenSlider = () => {
  setIsOpenSlider(!isOpenSlider)
 }

  return (
    <div>
       <div className="bg-gray-100 min-h-screen p-6 flex flex-col gap-5">

          <div className='border-2 border-red-500 p-5 flex justify-between'>
          <button>
            Dahsboard
          </button>

            <button onClick={handleOpenSlider}>
              <FaBarsStaggered />
            </button>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">


        <div className=" p-4 rounded-xl bg-linear-to-br from-emerald-900 to-green-600">
          <Products/>
        </div>

        <div className="bg-white p-4 rounded-xl">
          <EndedProject/>
        </div>

        <div className="bg-white p-4 rounded-xl">
          <RunningProject/>
        </div>

        <div className="bg-white p-4 rounded-xl">
          <PendingProject/>
        </div>



       

        <div className="border-2 border-red-500 p-4 rounded-xl lg:col-span-2 row-span-2">Project Analytics</div>

        <div className="border-2 border-red-500 p-4 rounded-xl lg:row-span-2">Reminder</div>

        <div className="border-2 border-red-500 p-4 rounded-xl lg:row-span-3">Project</div>



      



        

        <div className="border-2 border-red-500 p-4 rounded-xl lg:col-span-2 row-span-2">Team Collaboration</div>

        <div className="border-2 border-red-500 p-4 rounded-xl lg:row-span-2">Project Progress</div>

        <div className="border-2 border-red-500 p-4 rounded-xl">Time Tracker</div>



      </div>

  </div>
    </div>
  )
}

export default Dashboard