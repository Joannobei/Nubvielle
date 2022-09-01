import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdOutlineLocationOn } from "react-icons/md";
import Avatar from 'react-avatar'

function EmployeeInfo() {
    let userDetails = JSON.parse(sessionStorage.getItem('userDetails'))

    return (
        <div>

            <div className=" flex w-[326px] lg:w-[984px]  ">
                <div className=" lg:w-[984px] w-[326px] ">

                    <div className="story-status   rounded-xl bg-white "            >
                            <div className=" w-[284px] lg:w-[892px] m-auto">

                                <div className="pic-not  flex  gap-2   ">
                                    <div className=" ">

                                        <img
                                            loading="lazy"
                                            decoding="async"
                                            className=" feed-image max-w-[60px] h-[60px] lg:max-w-[4rem] lg:h-[4rem] p-[2.6px] rounded-full"
                                            src=''
                                            alt=""
                                        />
                                        <div className="rounded-full lg:mt-[-43px] "> <Avatar color='#295fa5' size="60" round={true} name={userDetails.data.Username} /> </div>

                                    </div>

                                    <div className="lg:w-[42rem] mt-[1rem] sm:w-[17rem] md:w-[23rem] ml-5">

                                        <p className="font-[700] text-[24px] ">{userDetails.data.Username}</p>
                                        <p className="text-[#BDBDBD] text-sm ">@{userDetails.data.Username}</p>
                                        <p className="icons text-[#828282] mt-4 mb-5  ">
                                            {/* {profiles.description} */}
                                        </p>
                                        <div className="location flex justify-between  pr-5 text-gray text-sm ">
                                            <p className="md:text-[13px] sm:text-[0.4rem] text-[#BDBDBD] font-[100] flex items-center">
                                                <span>
                                                    <MdOutlineLocationOn color="" />
                                                </span>
                                                {/* {profile.country.name}, */}
                                                {/* {profile.city.name} */}
                                                Lagos, Nigeria
                                            </p>
                                        </div>

                                        <div className="buttons mt-9 text-sm space-x-5 space-y-7 pb-4  hidden lg:block">
                                            <NavLink to='/edit_profile'> <button className=' w-[8rem] text-sm  lg:w-[8rem] px-2 lg:px-6 py-[0.6rem] bg-[#142e5f] text-white rounded-lg ' type="submit">Edit Profile</button> </NavLink>
                                            <NavLink to='/share'>  <button className=' w-[5rem] text-sm lg:text-base lg:w-[8rem] lg:px-6 py-[7px] text-[#142e5f] border-[1px] border-[#142e5f] rounded-lg ' type="submit">Share</button> </NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="buttons flex items-center justify-center  py-[2rem] space-x-5 lg:space-y-7   lg:hidden block">
                                    <NavLink to='/edit_profile'>  <button className=' w-[130px] h-[42px] bg-[#142e5f] text-white rounded-lg ' type="submit">Edit Profile</button> </NavLink>
                                    <NavLink to='/share'>  <button className=' w-[130px] h-[42px] text-[#142e5f] border-[1px] border-[#142e5f] rounded-lg ' type="submit">Share</button> </NavLink>
                                </div>
                            </div>
                        
                    </div>


                </div>

            </div>
        </div>
    )
}

export default EmployeeInfo