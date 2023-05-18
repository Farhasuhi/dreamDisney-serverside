import React from 'react';
import { FaFacebook,FaTwitter,FaInstagram,FaPinterestSquare,FaLinkedin } from 'react-icons/fa';

const TopNav = () => {
    const icon = <>
        <li>
            <a className='text-2xl'><FaFacebook></FaFacebook></a>
            <a className='text-2xl'><FaTwitter></FaTwitter></a>
            <a className='text-2xl'><FaInstagram></FaInstagram></a>
            <a className='text-2xl'><FaPinterestSquare></FaPinterestSquare></a>
            <a className='text-2xl'><FaLinkedin></FaLinkedin></a>
        </li>
    </>
    return (
        <div className='bg-yellow-500'>
            <div className="w-[90%] mx-auto flex flex-col justify-center items-center md:flex-row md:justify-between p-5">
                <div>
                    <div className="flex">
                        <ul className="menu menu-horizontal px-1">
                            {icon}
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='flex gap-2'>
                        <p className='font-bold border-r-4 pr-2'><small>Call us : +01755555555</small></p>
                        <p className='font-bold'><small>Email : dreamDisney@gmail.com</small></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TopNav;