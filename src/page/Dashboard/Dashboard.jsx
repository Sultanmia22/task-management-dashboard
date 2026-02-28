import React, { use, useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import GlovalContext from '../../contexts/GlobalContext'
import { FaBarsStaggered } from 'react-icons/fa6'
import Products from '../../Components/Dashboard/Products'
import EndedProject from '../../Components/Dashboard/EndedProject'
import RunningProject from '../../Components/Dashboard/RunningProject'
import PendingProject from '../../Components/Dashboard/PendingProject'
import ProjectAnalytics from '../../Components/Dashboard/ProjectAnalytics'
import Reminder from '../../Components/Dashboard/Reminder'
import AllProducts from '../../Components/Dashboard/AllProducts'
import Teamcollaboration from '../../Components/Dashboard/Teamcollaboration'
import TimeTracker from '../../Components/Dashboard/TimeTracker'
import ProductProgess from '../../Components/Dashboard/ProductProgess'

const Dashboard = () => {

  const { setIsOpenSlider, isOpenSlider } = use(GlovalContext)

  const handleOpenSlider = () => {
    setIsOpenSlider(!isOpenSlider)
  }

  return (
    <div>
      <div className=" min-h-screen flex flex-col gap-5">

        <div className='border-2 border-red-500 p-5 flex justify-between'>
          <button>
            Dahsboard
          </button>

          <button onClick={handleOpenSlider}>
            <FaBarsStaggered />
          </button>
        </div>

        <div className='bg-gray-100 p-6 rounded-2xl'>
          <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-5 md:gap-0 mb-5'>
            <div>
              <h2 className='text-2xl font-bold text-gray-800'>Dashboard</h2>
              <p className='text-gray-400'>lan, prioritize, and accomplish your tasks with ease.</p>
            </div>
            <div className='flex items-center gap-4'>
              <button className='px-4 py-2 rounded-full gap-2 text-white bg-linear-to-t from-green-800 to-green-950 text-sm'>Add Project</button>
              <button className='px-2 py-1 md:px-4 md:py-2 border-2 border-green-800 rounded-full'>Import Data</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 w-full">

            <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-900 to-green-600 shadow-sm">
              <Products />
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm">
              <EndedProject />
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm">
              <RunningProject />
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm">
              <PendingProject />
            </div>

            <div className="bg-white p-4 rounded-xl md:col-span-2 xl:col-span-2 xl:row-span-2 shadow-sm">
              <ProjectAnalytics />
            </div>

            <div className="bg-white p-4 rounded-xl md:col-span-1 xl:col-span-1 xl:row-span-2 shadow-sm">
              <Reminder />
            </div>

            <div className="bg-white p-4 rounded-xl md:col-span-1 xl:col-span-1 xl:row-span-3 shadow-sm">
              <AllProducts />
            </div>

            <div className="bg-white p-4 rounded-xl md:col-span-2 xl:col-span-2 xl:row-span-2 shadow-sm">
              <Teamcollaboration />
            </div>

            <div className="bg-white p-4 rounded-xl md:col-span-1 xl:col-span-1 xl:row-span-2 shadow-sm">
              <ProductProgess />
            </div>

            <div className="bg-gradient-to-br from-[#0b3d2e] to-[#0f2e26] p-4 rounded-xl shadow-sm text-white">
              <TimeTracker />
            </div>

          </div>
        </div>


      </div>
    </div>
  )
}

export default Dashboard