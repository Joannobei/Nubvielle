import React, { useState } from 'react';
// import Info from '../Info/Info'
// import About from '../About/About'

function EmployeeDetails(props) {


  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (tab) => {
    setToggleState(tab);
  };

  const activeTabs = " text-[#295fa5] bg-white "
  const tabs = "  text-[#BDBDBD] bg-[#F9FAFA] ";

  const activeContent = " ";
  const content = "  hidden  cursor-pointer ";

  return (
    <div>
      <div className="  mt-5 m-auto lg:w-[984px] w-[352px] ">
        <div
          className={`${toggleState === 1
              ? activeTabs : tabs
            } flex h-[3rem]  `}
        >
          <div
            onClick={() => toggleTab(1)}
            className={`${toggleState === 1 ? activeTabs : tabs
              }  py-[0.7rem] px-[23%]  w-1/2 self-center  `}
          >

            <div>
              <p  >Info</p>
            </div>
          </div>
          <div
            onClick={() => toggleTab(2)}
            className={`${toggleState === 2 ? activeTabs : tabs
              }  py-[0.7rem] px-[23%]  w-1/2 self-center `}
          >

            <div>
              <p className='' >About</p>
            </div>
          </div>
        </div>
      </div>

      <div className={toggleState === 1 ? (content, activeContent) : content}>
      <div className=" notify flex flex-col justify-center  h-[14rem] bg-white sm:items-center lg:w-[984px] w-[352px]  ">
    
          <div
            
            className="inner-content w-[20.5rem] md:w-[40rem] m-auto text-sm rounded-xl px-5 bg-white border-[1px] border-[#295fa5] py-4 space-y-5"
          >
            <div className="flex justify-evenly">
              <div className="flex flex-col ">
                City <span className="text-sm text-[#828282]"> Lagos </span>
              </div>
              <div className="flex flex-col ">
                Profession
                <span className="text-sm text-[#828282]"> Developer </span>
              </div>
              <div className="flex flex-col ">
                Hobby <span className="text-sm text-[#828282]">Dancing </span>
              </div>
            </div>

            <div className="flex justify-evenly ">
              <div className="flex flex-col">
                Age <span className="text-sm text-[#828282]">Lagos </span>
              </div>
              <div className="flex flex-col  ">
                Language
                <span className="text-sm text-[#828282]">Yoruba </span>
              </div>
              <div className="flex flex-col mr-[-1.7rem] ">
                <div>
                  Height <span className="text-xs text-[#828282]">(cm)</span>
                </div>
                <span className="text-sm text-[#828282]">140 </span>
              </div>
            </div>
          </div>
       
  </div>
      </div>

      <div className={toggleState === 2 ? (content, activeContent) : content}>
      <div className=" notify flex flex-col  justify-center h-[14rem] bg-white sm:items-center lg:w-[984px] w-[352px] ">
      
     
            <div
              
              className="inner-content lg:w-[40rem] rounded-[2rem] m-auto px-8 bg-white border-[1px] border-[#295fa5] py-4  "            >
                 
                <p className="content p-5">
                    I am a soft easy going person a Frontend Devloper that is very passionate about her work.
                </p>
              </div>

          


    </div>
      </div>



    </div>
  );
}

export default EmployeeDetails;