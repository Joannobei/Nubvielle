import React from "react";
import { BsHouseDoor, BsGrid1X2 } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import {FiLogOut  } from "react-icons/fi";



export const sideList = [
 
  {
    id: 1,
    link: "Profile",
    path: "/dashboard",
    icon: <BsHouseDoor />,
  },

  {
    id: 2,
    link: "Expenses",
    path: "/expenses",
    icon: <BsGrid1X2 />,
  },

  {
    id: 4,
    link: "Logout",
    path: "/",
    icon: <FiLogOut />,
  },
 
];
