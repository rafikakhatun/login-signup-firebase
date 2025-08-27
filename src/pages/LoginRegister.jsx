import React from 'react';

const LoginRegister = () => {
    return (
        <>
            {/*body section */}
            <div className='w-full h-screen flex justify-center items-center'>
                {/*container */}
                <div className='w-full max-w-xl p-10 flex flex-col md:flex-row lg:flex-row bg-white'>
                    {/*sign in section  */}
                    <div className='w-full md:w-1/2 lg:w-1/2 p-10 flex flex-col justify-between items-center bg-violet-500 rounded-r-[60px] space-y-5 '>
                        <h1 className='text-2xl text-white font-semibold'>Welcome back!</h1>
                        <p className='text-sm text-white'>Enter your Personal details to used all of site <br className='hidden md:block'/> features</p>
                        <button className='px-8 py-1 rounded-md border text-white border-white bg-violet-500 hover:bg-white hover:text-violet-500 hover:border-violet-500'>SIGN IN </button>

                    </div>
                    {/* sign up section*/}
                    <div>

                        <h1></h1>

                    </div>
                </div>

            </div>

        </>
    );
};

export default LoginRegister;


