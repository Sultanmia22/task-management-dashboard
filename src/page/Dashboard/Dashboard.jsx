import React from 'react'

const Dashboard = () => {
  return (
    <div>
       <div className="bg-gray-100 min-h-screen p-6 flex flex-col gap-5">

        <div className='border-2 border-red-500 p-5'>

        </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">


        <div className="border-2 border-red-500 p-4 rounded-xl">Total Projects</div>

        <div className="border-2 border-red-500 p-4 rounded-xl">Ended Projects</div>

        <div className="border-2 border-red-500 p-4 rounded-xl">Running Projects</div>

        <div className="border-2 border-red-500 p-4 rounded-xl">Pending Project</div>



       

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