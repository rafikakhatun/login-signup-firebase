import React from 'react';
import { FaFacebookF, FaGithub, FaGoogle, FaLinkedin } from 'react-icons/fa';

const LoginRegister = () => {
    return (
        <>
            {/*body section */}
            <div className='w-full h-screen flex justify-center items-center bg-gradient-to-l to-violet-50 from-violet-100'>
                {/*container */}
                <div className='w-11/12 max-w-3xl min-h-[500px] flex flex-col md:flex-row lg:flex-row bg-white '>
                    {/*sign in section  */}
                    <div className='w-full md:w-1/2 lg:w-1/2 p-6 flex flex-col justify-center items-center bg-violet-500 rounded-r-[60px] rounded-l-xl space-y-4'>
                        <h1 className='text-3xl text-white font-semibold'>Welcome back!</h1>
                        <p className='text-sm text-white text-center'>Enter your Personal details to used all of site <br className='hidden md:block ' /> features</p>
                        <button className='px-8 py-1 rounded-md border text-white border-white bg-violet-500 hover:bg-white hover:text-violet-500 hover:border-violet-500'>SIGN IN </button>

                    </div>
                    {/* sign up section*/}
                    <div className='w-full md:w-1/2 lg:w-1/2 p-6 flex flex-col justify-center items-center bg-white'>

                        <h1 className='text-2xl text-black font-semibold'>Create Account</h1>
                        {/* social link */}
                        <div className='flex gap-2'>
                            <div className='w-10 h-10 flex justify-center items-center'>
                                <FaGoogle />
                            </div>
                            <div>
                                <FaFacebookF />

                            </div>
                            <div>
                                <FaGithub />

                            </div>
                            <div>
                                <FaLinkedin />

                            </div>
                        </div>
                        {/* form section */}
                        <form className='flex flex-col'>
                            <input type="text" placeholder='name' />
                            <input type="email" placeholder='Email' />
                            <input type="password" placeholder='Password'  />
                            <button>SIGN UP</button>
                        </form>

                    </div>
                </div>

            </div>

        </>
    );
};

export default LoginRegister;


