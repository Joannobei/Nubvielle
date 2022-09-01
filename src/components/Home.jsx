import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

function Home() {
    const [open, setOpen] = useState(false)
    const toogle = () => {
        setOpen(!open)
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        sessionStorage.setItem('userDetails', JSON.stringify({ data }))
        window.location = '/dashboard'
    }

    return (
        <div className='bg-[#233348] h-screen '>
            <div className="pt-[10rem] lg:pt-[15%]">
                <p className='w-[18rem] m-auto  text-white text-[1.5rem]'>Expense Manager</p>
                <p className='bg-[#2a7fef80] w-full h-[2px] my-6'> </p>

                <form className='w-[18rem] m-auto' action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="" className='w-full text-[#bdbdbd]'>Username</label> <br />
                        <input className='w-full h-[2.3rem] outline-none px-4 text-[#bdbdbd] rounded-md bg-[#3b4a84]  ' type="text" name="" id=""
                            {...register("Username", {
                                required: {
                                    value: true,
                                    message: 'Can not be blank'
                                },

                            })} />
                        {errors.Username && (
                            <p className="text-[#e03434] text-sm">{errors.Username.message}</p>
                        )}
                    </div>

                    <label htmlFor="" className='w-full  text-[#bdbdbd] '>Password</label>


                    <div className='relative '>
                        <div>
                            <input className='w-full h-[2.3rem] px-4 text-[#bdbdbd] outline-none rounded-md bg-[#3b4a84] '
                                type={!open ? 'password' : 'text'}
                                name="" id=""   {...register("Password", {
                                    required: {
                                        value: true,
                                        message: 'Can not be blank'
                                    },

                                })} />
                        </div>

                        <div className="eye absolute top-3 right-2   text-white">
                            {(!open) ? <AiFillEye onClick={toogle} /> : <AiFillEyeInvisible onClick={toogle} />}


                        </div>
                    </div>

                    {errors.Password && (
                        <p className="text-[#e03434] text-sm">{errors.Password.message}</p>
                    )}
                    <input type="submit" value="Login" className=' text-white w-[7rem] h-[3rem] rounded-md mt-6  bg-[#295fa5]' />
                </form>
            </div>
        </div>

    )
}

export default Home