import React from 'react'
import { Outlet } from 'react-router'
import DashboardSidebar from '../Components/DashboardSidebar/DashboardSidebar'
import { HiMenuAlt3 } from 'react-icons/hi';

const MainLayout = () => {
  return (
    <div>

   <div className='flex lg:hidden'>
     <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm border-b w-full">
      
      {/* Left side: Dashboard Text */}
      <h1 className="text-xl font-bold text-gray-800">
        Dashboard
      </h1>

      {/* Right side: Sidebar Icon */}
      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
        <HiMenuAlt3 className="text-2xl text-gray-700" />
      </button>

    </nav>
   </div>

      <div className="grid lg:grid-cols-12 min-h-screen gap-5 p-5">

        {/* Sidebar */}
        <div className="hidden lg:block col-span-3 w-full">
          <DashboardSidebar />
        </div>

        {/* Main content */}
        <div className="col-span-12 lg:col-span-9 w-full">
          <Outlet />
        </div>

      </div>
    </div>
  )
}

export default MainLayout