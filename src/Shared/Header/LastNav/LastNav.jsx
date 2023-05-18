import React from 'react';
import { FaStarOfDavid } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LastNav = () => {
    const menu = <>
        <li><Link>Home</Link></li>
        <li><Link>All Toys</Link></li>
        <li><Link>My Toys</Link></li>
        <li><Link>Add a toys</Link></li>
        <li><Link>Blogs</Link></li>
    </>
    return (
        <div>
            <div className="w-[95%] md:w-[90%] mx-auto py-6">
                <div className="">
                    <ul className="hidden md:flex justify-around font-bold font-[Lobster] text-xl text-slate-700">
                        {menu}
                    </ul>
                </div>
                <div className="form-control flex md:hidden justify-center items-center">
                    <input type="text" placeholder="Search..." className="input input-bordered w-[300px] rounded-[100px] text-xl" />
                </div>

            </div>
        </div>
    );
};

export default LastNav;