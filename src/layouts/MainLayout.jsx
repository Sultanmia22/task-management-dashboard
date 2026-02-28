
import { Outlet } from 'react-router'
import { use } from 'react'
import GlovalContext from '../contexts/GlobalContext'
import DashboardSidebar from '../Components/Dashboard/DashboardSidebar'


const MainLayout = () => {
 const {setIsOpenSlider,isOpenSlider} = use(GlovalContext)
 

  return (
    <div className='min-h-screen'>

    {
      isOpenSlider && 
      <div className='bg-white xl:hidden fixed top-0 left-0 inset-0 shadow w-4/5 max-w-[250px] md:max-w-[360px] min-h-screen'>
        <div className='col-span-3 w-full'>
          <DashboardSidebar />
        </div>
      </div>
    }   

      <div className="grid xl:grid-cols-12 min-h-screen gap-5 p-5">

        {/* Sidebar */}
        <div className="hidden xl:block col-span-3 w-full min-h-screen">
          <DashboardSidebar />
        </div>

        {/* Main content */}
        <div className="col-span-12 xl:col-span-9 w-full">
          <Outlet />
        </div>

      </div>
    </div>
  )
}

export default MainLayout