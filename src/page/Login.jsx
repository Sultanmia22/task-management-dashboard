import React from 'react'
import { Link } from 'react-router'

const Login = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-300'>
        <div className='bg-white p-8 sm:p-10 rounded-2xl w-full max-w-md md:max-w-lg mx-4 sm:mx-0 shadow-lg'>
            <div className='space-y-3'>
                <h2 className='tex-2xl font-bold sm:text-3xl md:text-4xl text-gray-600'>Welcome back </h2>
                <p className='text-sm text-gray-600 sm:text-base md:text-lg'>Sign in to your account to continue</p>
            </div>
            <form className='my-8 space-y-3'>
                <div className='flex flex-col gap-2'>
                    <label className='block font-medium text-gray-700 text-sm sm:text-base md:text-lg'>Email</label>
                    <input 
                    type="email"
                    placeholder='example@email.com'
                    className='px-3.5 py-3 outline-none border-[1.5px] border-gray-200 rounded-xl  placeholder:text-gray-300  focus:border-green-600 focus:shadow-sm focus:shadow-green-200'
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='block font-medium text-gray-700 text-sm sm:text-base md:text-lg'> Password </label>
                    <input 
                    type="password"
                    placeholder='Enter your password'
                    className='px-3.5 py-3 outline-none border-[1.5px] border-gray-200 rounded-xl  placeholder:text-gray-300  focus:border-green-600 focus:shadow-sm focus:shadow-green-200'
                     />
                </div>

                <div className='flex justify-between'>
                    <div>
                        <input className='accent-green-800' type="checkbox" /> <span className='text-sm sm:text-sm md:text-[16px]'>Remember me</span>
                    </div>

                    <div>
                        <Link className='text-sm md:text-[16px] text-green-800 font-medium'>Forgot password?</Link>
                    </div>
                </div>

                <div>
                    <button className='py-3 px-4 bg-green-900 text-white w-full rounded-xl font-bold'>Sign In</button>
                </div>
            </form>

            <div className='text-center'>
                <span className='text-sm sm:text-sm md:text-[16px]'>Don't have an account? <Link className='font-semibold'>Sign Up</Link> </span>
            </div>
        </div>        
    </div>
  )
}

export default Login