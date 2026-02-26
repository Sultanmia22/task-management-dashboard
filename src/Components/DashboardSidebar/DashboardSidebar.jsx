import React from 'react'
import { Link } from 'react-router'

const DashboardSidebar = () => {
  return (
    <div className=''>
       <div className='text-center flex flex-col bg-gray-100 p-5 min-h-screen rounded-2xl'>
        
        <div>
          <h2 className='text-2xl font-bold'>Donezo</h2>
        </div>

        <div>
        <h2>MENU</h2>
        <div className='flex flex-col gap-2'>
          <Link>Dashboard</Link>
          <Link>Task</Link>
          <Link>Calender</Link>
          <Link>Analytisc</Link>
          <Link>Team</Link>
        </div>
       </div>

       <div>
        <h2>GENERAL</h2>
        <div className='flex flex-col gap-2'>
          <Link>Setting</Link>
          <Link>Help</Link>
          <Link>Logout</Link>
        </div>
       </div>
       </div>
    </div>
  )
}

export default DashboardSidebar