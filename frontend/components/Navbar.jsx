"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "../public/favicon.png";
import Login from "./Login.jsx";
import { useState } from "react";


const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div className="navbar bg-pink-50 px-8 md:px-12 h-20 flex items-center justify-between">
      <div className="flex items-center">
        <div className="h-10 w-10 mr-3">
          <Image src={logo} alt="Chikun delveries" />
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
          <Link href="/stores">
            <button className="btn text-white bg-blue-600 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center">Shops</button>
          </Link>
          <button className="dropdown dropdown-bottom ">
            <div tabIndex={0} role="button" className="btn text-white bg-blue-600 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center">
              Categories
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a>Chicken</a>
              </li>
              <li>
                <a>Mutton</a>
              </li>
              <li>
                <a>Fish & Seafood</a>
              </li>
              <li>
                <a>Prawn & Crabs</a>
              </li>
              <li>
                <a>Mushrooms</a>
              </li>
              <li>
                <a>Paneer</a>
              </li>
            </ul>
          </button>
          <button className="btn text-white bg-blue-600 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center">Cart</button>
          <div className="text-center">
        <button
          className="btn text-white bg-blue-600 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5"
          onClick={() => setShowModal(true)}
        >
          Login
        </button>
        <Login isVisible={showModal} onClose={() => setShowModal(false)}>
        <div className="py-6 px-6 lg:px-8 text-left">
          <h3 className="mb-4 text-xl font-medium text-gray-900 text-center">Login</h3>
          <form className="space-y-6" action="#">
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Mobile Number
              </label>
              <input
                type="text"
                name="number"
                id="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-400  block w-full p-2.5"
                placeholder="123xxxx789"
                required
              />
            </div>
            <div>
              <label 
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input 
                 type="password"
                 name="password"
                 id="password"
                 placeholder="******"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-400  block w-full p-2.5"
                 required
                 />
            </div>
            <div className="text-right text-sm text-red-500">
              <a href="">
                Forget Password? 
              </a>
            </div>
            <div className="flex justify-center">
            <button 
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >Login to your account</button>
            </div>
            <div className="text-left text-sm">
              <h2 className="text-gray-800">Not registered? <a className="text-blue-700" href="">
                Create account
              </a></h2>

            </div>
          </form>
        </div>
      </Login>
      </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-16 rounded-full bg-blue-400">
                <div className="mt-2 text-lg">CR</div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Address</a>
              </li>
              <li>
                <a>Notifications</a>
              </li>
              <li>
                <a>Payment Methods</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
