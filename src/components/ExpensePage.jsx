import React from 'react'
import Expenses from './Expenses'
import Filter from './Filter'
import Header from './Header'
import Sidebar from './Sidebar'

function ExpensePage() {
  return (
    <div>
<Header />

<div className="flex mt-[6rem] bg-[#F9FAFA] ">

<div className="  h-[100%] hidden lg:block sidebar_prt pt-8">
    <Sidebar />
</div>
<div className='lg:w-[984px] w-[327px] m-auto   '>
    <div className=" ">
    <div className=" border-2"> <Expenses /> </div>
       
    </div>

</div>

</div>
{/* <body className='flex w-100vw bg- '>
    <div className="w-1/4 border-2">
    <Filter />
    </div>
    <div className="w-1/4 border-2 ">Total</div>

</body> */}
    </div>
  )
}

export default ExpensePage