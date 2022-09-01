import React from 'react'

function Header() {
  return (
    <div><header className='bg-[#142e5f] p-5 font-semibold flex justify-between items-center '>
    <p className='text-[#bdbdbd] text-[1.5rem] '>Expense Manager</p>
    <div className="  w-[9rem] flex justify-between ">
        <p className='text-[#295fa5] w-[3rem] cursor-pointer h-[2rem] flex items-center justify-center rounded-[3px] bg-[#fff] bg-opacity-10'> INFO</p>
        <p onClick={()=> {window.location ='/'}} className='text-[#295fa5] w-[5rem] cursor-pointer h-[2rem] flex items-center justify-center rounded-[3px]  bg-[#fff] bg-opacity-10'> LOGOUT</p>   
    </div>
    </header></div>
  )
}

export default Header