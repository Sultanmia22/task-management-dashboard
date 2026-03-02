import React, { use, useState } from 'react'
import SearchBar from './SearchBar'
import { IoNotificationsOutline } from 'react-icons/io5'
import { FaBarsStaggered, FaRegUser } from 'react-icons/fa6'
import GlovalContext from '../../contexts/GlobalContext'
import { MdOutlineEmail } from 'react-icons/md'
import { RxCross1 } from 'react-icons/rx'
import { Link } from 'react-router'
const Navbar = () => {

    const {user} = use(GlovalContext)

    console.log(user)

    const { isOpenSlider, setIsOpenSlider } = use(GlovalContext)

    const [openProfile, setOpenProfile] = useState(false)

    const handleOpenSlider = () => {
        setIsOpenSlider(!isOpenSlider)
    }

    //! Profile Menu Function 
    const openProfileMenu = () => {
        setOpenProfile(!openProfile)
    }


    return (
        <div>
            <div className='bg-gray-100 p-3 flex justify-between items-center rounded-2xl'>
                <div>
                    <SearchBar />
                </div>

                <div className='flex  items-center gap-3'>

                    <div className='flex items-center gap-1'>
                        <div className='w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex justify-center items-center'>
                            <MdOutlineEmail />
                        </div>

                        <div className='w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex justify-center items-center'>
                            <IoNotificationsOutline />
                        </div>
                    </div>

                    {/* Profile section */}

                    <div className='flex items-center gap-1 relative'>
                        <div onClick={openProfileMenu} className='w-14 h-14 p-1 rounded-full'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL_91vRc9J5F_5ihw8mHZYRSnmSRmng91vew&s" alt="" className='rounded-full' />
                        </div>

                        {
                            openProfile &&
                            <div className='md:hidden absolute top-17 right-0 border rounded-lg border-gray-200 shadow-xl transition-all  duration-300 translate-y-0'>
                                <div className='bg-white px-5 py-3 rounded-xl space-y-2'>
                                    <div className='flex flex-col'>
                                        <span className='font-bold text-sm'>MD Sultan</span>
                                        <span className='text-gray-400 text-sm'>sultan5732@gmail.com</span>
                                    </div>

                                    <div>
                                        <Link className='flex items-center gap-1 font-medium text-gray-700'> <FaRegUser /> <span >Profile</span> </Link>

                                      
                                    </div>
                                </div>
                            </div>
                        }

                        <div className='hidden  md:flex flex-col'>
                            <span className='text-bold'>MD Sultan</span>
                            <span className='text-gray-400 text-sm'>sultan5732@gmail.com</span>
                        </div>

                        <div className='xl:hidden'>
                            <button onClick={handleOpenSlider}>

                                {
                                    isOpenSlider === true ?
                                        <RxCross1 />
                                        :
                                        <FaBarsStaggered />
                                }

                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar