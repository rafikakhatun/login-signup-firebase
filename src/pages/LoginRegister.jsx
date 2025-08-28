import React from 'react';
import { FaEye, FaFacebookF, FaGithub, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { SiGoogle } from 'react-icons/si';

const LoginRegister = () => {
    return (
        <>
            {/*body section */}
            <div className='w-full h-screen flex justify-center items-center bg-gradient-to-l to-violet-50 from-violet-100 font-serif p-6 md:p-0  overflow-hidden'>
                {/*container */}
                <div className='w-11/12 max-w-3xl min-h-[500px] flex flex-col md:flex-row lg:flex-row bg-white rounded-xl mt-14 md:mt-0'>
                    {/*sign in section  */}
                    <div className='w-full md:w-1/2 lg:w-1/2 p-6 flex flex-col justify-center items-center bg-violet-500 rounded-t-xl md:rounded-r-[150px]  space-y-6'>
                        <h1 className='text-3xl text-white font-semibold'>Welcome back!</h1>
                        <p className='text-sm text-white text-center'>Enter your Personal details to used all of site <br className='hidden md:block ' /> features</p>
                        <button className='px-8 py-1 rounded-md border text-white border-white bg-violet-500 hover:bg-white hover:text-violet-500 hover:border-violet-500'>SIGN IN </button>

                    </div>
                    {/* sign up section*/}
                    <div className='w-full md:w-1/2 lg:w-1/2 p-6 flex flex-col justify-center items-center bg-white rounded-r-2xl space-y-5'>

                        <h1 className='text-3xl text-black font-semibold'>Create Account</h1>
                        {/* social link */}
                        <div className='flex gap-4'>
                            <div className='w-10 h-10 flex justify-center items-center border border-gray-300 rounded-md shadow hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer text-xl'>
                                <FcGoogle />
                            </div>
                            <div className='w-10 h-10 flex justify-center items-center border border-gray-300 rounded-md shadow hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer text-blue-500 text-xl' >
                                <FaFacebookF />

                            </div>
                            <div className='w-10 h-10 flex justify-center items-center border border-gray-300 rounded-md shadow hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer text-xl'>
                                <FaGithub />

                            </div>
                            <div className='w-10 h-10 flex justify-center items-center border border-gray-300 rounded-md shadow hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer text-blue-900 text-xl'>
                                <FaLinkedin />

                            </div>
                        </div>
                        {/*email registration*/}
                        <h1 className='text-center text-sm text-gray-600 '>Or Use your email for registration</h1>
                        {/* form section */}
                        <form className='flex flex-col w-full space-y-5'>
                            <input className='px-4 py-3 outline-none rounded-lg border border-gray-200 shadow focus:ring ring-violet-300' type="text" placeholder='name' />
                            <input className='px-4 py-3 outline-none rounded-lg border border-gray-200 shadow focus:ring ring-violet-300' type="email" placeholder='Email' />
                            <div className="relative w-full">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full px-4 py-3 pr-10 outline-none rounded-lg border border-gray-200 shadow focus:ring ring-violet-300"
                                />
                                <FaEye className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-700 cursor-pointer" />
                            </div>

                            <button className='px-4 py-3 bg-violet-500 rounded-lg border text-white hover:bg-white hover:text-violet-600 hover:border-violet-600 cursor-pointer  '>SIGN UP</button>
                        </form>

                    </div>
                </div>

            </div>

        </>
    );
};

export default LoginRegister;


