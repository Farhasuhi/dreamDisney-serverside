import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterestSquare, FaStarOfDavid, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    const icon = <>

        <a className='text-xl text-blue-800'><FaFacebook></FaFacebook></a>
        <a className='text-xl text-blue-800'><FaTwitter></FaTwitter></a>
        <a className='text-xl text-blue-800'><FaInstagram></FaInstagram></a>
        <a className='text-xl text-blue-800'><FaPinterestSquare></FaPinterestSquare></a>
        <a className='text-xl text-blue-800'><FaLinkedin></FaLinkedin></a>

    </>
    return (
        <div className='p-10 bg-base-200 text-base-content mt-14'>
            <div className=' w-[95%] md:w-[90%] mx-auto '>
                <footer className="footer" >
                    <div>
                        <a className="btn btn-ghost normal-case text-[18px] flex"><FaStarOfDavid className='text-[#808ea8] mr-1'></FaStarOfDavid>  Dream <span className='font-[Lobster] italic ml-2 text-4xl font-bold text-[#043b6e]'>Disney</span></a>
                        <p className='text-[14px] text-bold text-[#1f1f20]'>Address:<span className='text-[14px] text-yellow-600 text-extrabold'>71 Pennington Lane Vernon Rockville, CT 06066</span></p>
                    </div>
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover ">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                    <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                        {icon}
                    </div>
                </footer>
                <div className='text-center mt-8'>
                    <p>Copyright © 2023 - All right reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;