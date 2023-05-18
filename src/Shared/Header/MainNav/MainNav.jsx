import React from 'react';
import { Link } from 'react-router-dom';
import {FaStarOfDavid} from 'react-icons/fa'

const MainNav = () => {
    const menu = <>
        <li><a>Item 1</a></li>
        <li><a></a></li>
        <li><a>Item 3</a></li>
    </>
    return (
        <div className='bg-blue-200 py-5 '>
            <div className="navbar w-[95%] md:w-[90%] mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#474b42]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-[18px] hidden md:flex"><FaStarOfDavid className='text-[#808ea8] mr-1'></FaStarOfDavid>  Dream <span className='font-[Lobster] italic ml-2 text-4xl font-bold text-[#043b6e]'>Disney</span></a>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost normal-case  text-[18px] flex md:hidden"><FaStarOfDavid className='text-[#808ea8] mr-1'></FaStarOfDavid> Dream <span className='font-[Lobster] italic ml-2 text-2xl md:text-4xl font-bold text-[#043b6e]'>Disney</span></a>
                    <div className="form-control hidden md:flex">
                        <input type="text" placeholder="Search..." className="input input-bordered w-[300px] rounded-[100px] text-xl" />
                    </div>
                </div>
                <div className="navbar-end">
                    <Link><button className="btn btn-active btn-ghost mr-2">Login</button></Link>
                    <Link><button className="btn btn-active btn-ghost">Log Out</button></Link>
                </div>
            </div>
        </div>
    );
};

export default MainNav;