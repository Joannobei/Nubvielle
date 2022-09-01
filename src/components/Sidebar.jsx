import React, { useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import Avatar from 'react-avatar'
import { sideList } from "./sideList";
import { FiLogOut } from "react-icons/fi";





const Sidebar = () => {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const onLogout = () => {

  };

  let userDetails = JSON.parse(sessionStorage.getItem('userDetails'))

  return (
    <div className="  max-w-full">

      <div className=" ">

        <div >

          <div className="ml-10 bg-white items-center px-5 py-7 mb-8 w-[19rem] h-[7rem] ">

            <h1 className="text-center font-bold text-[30px]"> Hi, {userDetails.data.Username} </h1>



          </div>
        </div>


        <div className="side_list ml-10  h-[440px] bg-white w-[19rem] divide-y divide-opacity-50  divide-gray-300">
          <div className="flex ml-7 py-12">

            <div className="">

              {/* <img
    className="w-[4rem] h-[4rem] p-[2.7px] cursor-pointer hover:scale-110 transition transform duration-200 ease-out rounded-full"
    src=''
    alt="icon"
  /> */}
              <div className="rounded-full "> <Avatar color='#295fa5' size="60" round={true} name={userDetails.data.Username} /> </div>

            </div>

            <div className=" ml-4 ">
              <h5 className="font-bold text-[#2E2357]">
                {userDetails.data.Username}
              </h5>
              <h5 className="text-sm text-[#828282]">@{userDetails.data.Username}</h5>
            </div>
          </div>





          {sideList.map((side) => (
            <div
              key={side.id}
              className="ml-5 pt-5 items-center text-sm text-gray"
            >
              <NavLink
                to={side.path}
                className={`${window.location.pathname === side.path ? "active" : null
                  }  flex items-center w-full h-[3.5rem] pl-5 text-[#828282] hover:text-[#295fa5] `}
                onClick={side.handleClick}
              >
                <span className="mr-3 ">{side.icon}</span>
                {side.link}
              </NavLink>
            </div>
          ))}
          <div
            className="ml-5 pt-5 items-center text-sm text-gray"
            onClick={() => window.location.reload(true)}
          >
          </div>

        </div>
      </div>
    </div>
  );
};

export default Sidebar;
