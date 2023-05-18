import React from 'react';
import image from '../../assets/5eeb5eb3-dc02-40f5-8ad6-17a945ddd1e5-Dolls.jpg'


const Banner = () => {
    return (
        <div className='relative w-full'>
            <img src={image} className="w-full rounded-xl" />
            <div className="absolute h-full w-full justify-start flex items-center left-0 top-0  bg-gradient-to-tr from-[#d1d3d4] to-[rgba(21, 21, 21, 0)] rounded-xl">
                <div className='text-white space-y-7 pl-12 w-1/2'>
                    <h2 className='text-4xl text-[#20374d] md:text-6xl font-bold'>Dolls</h2>
                    <p className='text-[#3f4142] text-[16px] font-medium'>Its endless possibilities with these dolls.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;