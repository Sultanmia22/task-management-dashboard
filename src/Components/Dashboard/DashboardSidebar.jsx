import React from 'react'
import { AiOutlineTeam } from 'react-icons/ai'
import { IoMdCalendar } from 'react-icons/io'
import { IoHelpBuoyOutline, IoSettingsOutline } from 'react-icons/io5'
import { MdDashboard, MdOutlineTask } from 'react-icons/md'
import { TbBrandGoogleAnalytics, TbLogout } from 'react-icons/tb'
import { Link, NavLink } from 'react-router'
import logoIcon from '../../assets/drooble.svg'
import { BiAward } from 'react-icons/bi'
import { FaAward } from 'react-icons/fa6'
const DashboardSidebar = () => {
  return (
    <div className='h-full'>
      <div className=' bg-gray-100 p-5 min-h-screen rounded-2xl'>

        <div className='flex items-center gap-2'>
          <img src={logoIcon} alt="" className='text-green-800' />
          <h2 className='text-2xl font-bold'>Donezo</h2>
        </div>

        <div className='my-10'>
          <div className='flex flex-col gap-4'>
            <p className='text-gray-400'>MENU</p>


            <NavLink to="/dashboard">
              {({ isActive }) => (
                <div className="flex items-center gap-2">

                  {/* Icon */}
                  <MdDashboard
                    className={`text-xl transition-all ${isActive ? "text-green-800 scale-110" : "text-gray-400"
                      }`}
                  />

                  {/* Text */}
                  <span
                    className={`transition-all ${isActive
                      ? "text-black font-bold"
                      : "text-gray-500"
                      }`}
                  >
                    Dashboard
                  </span>

                </div>
              )}
            </NavLink>


            <NavLink to={'/task'}>
              {({ isActive }) => (
                <div className="flex items-center gap-2">

                  {/* Icon */}
                  <MdOutlineTask
                    className={`text-xl transition-all ${isActive ? "text-green-800 scale-110" : "text-gray-400"
                      }`}
                  />

                  {/* Text */}
                  <span
                    className={`transition-all ${isActive
                      ? "text-black font-bold"
                      : "text-gray-500"
                      }`}
                  >
                    Task
                  </span>

                </div>
              )}
            </NavLink>



            <NavLink to="/calendar">
              {({ isActive }) => (
                <div className="flex items-center gap-2">

                  {/* Icon */}
                  <IoMdCalendar
                    className={`text-xl transition-all ${isActive ? "text-green-800 scale-110" : "text-gray-400"
                      }`}
                  />

                  {/* Text */}
                  <span
                    className={`transition-all ${isActive
                      ? "text-black font-bold"
                      : "text-gray-500"
                      }`}
                  >
                    Calendar
                  </span>

                </div>
              )}
            </NavLink>



            <NavLink to="/analytics">
              {({ isActive }) => (
                <div className="flex items-center gap-2">

                  {/* Icon */}
                  <TbBrandGoogleAnalytics
                    className={`text-xl transition-all ${isActive ? "text-green-800 scale-110" : "text-gray-400"
                      }`}
                  />

                  {/* Text */}
                  <span
                    className={`transition-all ${isActive
                      ? "text-black font-bold"
                      : "text-gray-500"
                      }`}
                  >
                    Analytics
                  </span>

                </div>
              )}
            </NavLink>


            <NavLink to="/team">
              {({ isActive }) => (
                <div className="flex items-center gap-2">

                  {/* Icon */}
                  <AiOutlineTeam
                    className={`text-xl transition-all ${isActive ? "text-green-800 scale-110" : "text-gray-400"
                      }`}
                  />

                  {/* Text */}
                  <span
                    className={`transition-all ${isActive
                      ? "text-black font-bold"
                      : "text-gray-500"
                      }`}
                  >
                    Team
                  </span>

                </div>
              )}
            </NavLink>


          </div>
        </div>

        <div>

          <div className='flex flex-col gap-4'>
            <p className='text-gray-400'>GENERAL</p>

            <NavLink to="/settings">
              {({ isActive }) => (
                <div className="flex items-center gap-2">

                  {/* Icon */}
                  <IoSettingsOutline
                    className={`text-xl transition-all ${isActive ? "text-green-800 scale-110" : "text-gray-400"
                      }`}
                  />

                  {/* Text */}
                  <span
                    className={`transition-all ${isActive
                      ? "text-black font-bold"
                      : "text-gray-500"
                      }`}
                  >
                    Settings
                  </span>

                </div>
              )}
            </NavLink>


            <NavLink to="/help">
              {({ isActive }) => (
                <div className="flex items-center gap-2">

                  {/* Icon */}
                  <IoHelpBuoyOutline
                    className={`text-xl transition-all ${isActive ? "text-green-800 scale-110" : "text-gray-400"
                      }`}
                  />

                  {/* Text */}
                  <span
                    className={`transition-all ${isActive
                      ? "text-black font-bold"
                      : "text-gray-500"
                      }`}
                  >
                    Help
                  </span>

                </div>
              )}
            </NavLink>


            <NavLink to="/help">
              {({ isActive }) => (
                <div className="flex items-center gap-2">

                  {/* Icon */}
                  <TbLogout
                    className={`text-xl transition-all ${isActive ? "text-green-800 scale-110" : "text-gray-400"
                      }`}
                  />

                  {/* Text */}
                  <span
                    className={`transition-all ${isActive
                      ? "text-black font-bold"
                      : "text-gray-500"
                      }`}
                  >
                    Logout
                  </span>

                </div>
              )}
            </NavLink>
          </div>
        </div>

        <div className='bg-green-900 p-5 space-y-4 rounded-xl mt-5'>
          <div className='bg-white w-5 h-5 rounded-full flex items-center justify-center'>
            <FaAward className='text-gray-800' size={16} />
          </div>

          <div className='text-white'>
            <h2 className='font-bold'>Download Our Mobile App</h2>
            <p className='text-sm'>Get easy and another way</p>
          </div>

          <div className='flex justify-center '>
            <button className='bg-green-950 text-white font-bold text-center py-2 px-4 rounded-full'>Download</button>
          </div>
        </div>


      </div>
    </div>
  )
}

export default DashboardSidebar