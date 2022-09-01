import React from 'react'
import { useSelector } from 'react-redux';
import ReactSearchBox from "react-search-box";
import Sidebar from './Sidebar';
import Header from './Header';
import EmployeeInfo from './EmployeeInfo';
import EmployeeDetails from './EmployeeDetails';



function Dashboard() {
  // const  expenses = useSelector(state => state.expenses)

  let userDetails = JSON.parse(sessionStorage.getItem('userDetails'))
  return (
    <div>
<Header />

<div className="flex mt-[6rem] bg-[#F9FAFA] ">

<div className="  h-[100%] hidden lg:block sidebar_prt pt-8">
    <Sidebar />
</div>
<div className='lg:w-[984px] w-[327px] m-auto   '>
    <div className=" ">
       <EmployeeInfo />
       <EmployeeDetails />
    </div>

</div>

</div>



    </div>
  )
}

export default Dashboard