import React from "react";
import Image from "next/image";


import logo from "../public/favicon.png"

const Navbar = () => {
  return (
    <div className="navbar bg-pink-50 px-8 md:px-12 h-20 flex items-center justify-between">
      <div className="flex items-center">
      <div className="h-10 w-10 mr-3">
          <Image src={logo} alt="Chikun delveries"/>
      </div>
        <a className="text-xl font-semibold">
          Chikun
          <br />
          Deliveries
        </a>
        <div className="text-xl ml-20">Location</div>
      </div>
      <div className="flex items-center">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-48 md:w-64"
          />
        </div>
        <div className="flex ml-4 space-x-2">
          <button className="btn bg-cyan-400">Store</button>
          <button className="btn bg-cyan-400">Categories</button>
          <button className="btn bg-cyan-400">Cart</button>
          <button className="btn bg-cyan-400 mr-4">Login</button>
          <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-16 rounded-full bg-blue-400">
              <div className='mt-2 text-lg'>CR</div>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li><a>Address</a></li>
            <li><a>Notifications</a></li>
            <li><a>Payment Methods</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
        </div>
      </div>
    
  );
};

export default Navbar;
