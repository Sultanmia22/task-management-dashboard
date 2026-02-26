import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router'
import { toast } from 'react-toastify'

const Login = () => {

    const navigate = useNavigate()

const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
} = useForm()


const onsubmit = async (data) => {
    try{
        const response = await axios.post(`https://task-api-eight-flax.vercel.app/api/login`,data)

        if(response.status === 200){
            const data = response.data;
            localStorage.setItem('token',data.token)
            toast.success('Login Successfully!')
            navigate('/app')
        }
    }

    catch(er){
        toast.error(er.message)
    }
}

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-300'>
        <div className='bg-white p-8 sm:p-10 rounded-2xl w-full max-w-md md:max-w-lg mx-4 sm:mx-0 shadow-lg'>
            <div className='space-y-3'>
                <h2 className='tex-2xl font-bold sm:text-3xl md:text-4xl text-gray-600'>Welcome back </h2>
                <p className='text-sm text-gray-600 sm:text-base md:text-lg'>Sign in to your account to continue</p>
            </div>
            <form onSubmit={handleSubmit(onsubmit)} className='my-8 space-y-3'>
                <div className='flex flex-col gap-2'>
                    <label className='block font-medium text-gray-700 text-sm sm:text-base md:text-lg'>Email</label>
                    <input 
                    {...register('email',{required: "Email is required"})}
                    type="email"
                    placeholder='example@email.com'
                    className='px-3.5 py-3 outline-none border-[1.5px] border-gray-200 rounded-xl  placeholder:text-gray-300  focus:border-green-600 focus:shadow-sm focus:shadow-green-200'
                    />
                    {errors.email && <span className='text-red-500 text-sm'>{errors.email.message}</span> }
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='block font-medium text-gray-700 text-sm sm:text-base md:text-lg'> Password </label>
                    <input 
                    {...register('password',{required: "Password is required"})}
                    type="password"
                    placeholder='Enter your password'
                    className='px-3.5 py-3 outline-none border-[1.5px] border-gray-200 rounded-xl  placeholder:text-gray-300  focus:border-green-600 focus:shadow-sm focus:shadow-green-200'
                     />
                     {errors.password && <span className='text-red-500 text-sm'>{errors.password.message}</span> }
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