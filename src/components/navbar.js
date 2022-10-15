import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="relative bg-orange-500">
        
        <div className="flex flex-col space-y-4 items-center">
       
        <NavLink to="/"> 
        <div className="flex flex-row group pl-2 pr-2 items-center cursor-pointer space-x-4">
            <h1 className="outlined group-hover:text-white">SPICE</h1>
            <h1 className="blocked group-hover:text-black text-white ">HUT</h1>
        </div>
         </NavLink>
        <div className="flex flex-row space-x-40">
        <div className="flex flex-row space-x-10">
          <NavLink to="/menus">

            <button className="p-2 hover:bg-black text-white">
                MENUS
            </button>
          </NavLink>

          <NavLink to="/locations">
            <button className="p-2 hover:bg-black text-white">
                LOCATIONS
            </button>

          </NavLink>
          <NavLink to="/about">

            <button className="p-2 hover:bg-black text-white">
                ABOUT
            </button>
          </NavLink>
          
        </div>
          <NavLink to="/contact">
        <button className="p-2 border hover:bg-black text-white">
                CONTACT US
            </button>
          </NavLink>
           
            </div>
          </div>
         
      </div>
    );
};
export default Navbar;