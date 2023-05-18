import React from 'react';
import image1 from '../../assets/1.gif'
import image2 from '../../assets/2.gif'
import image3 from '../../assets/3.gif'
import image4 from '../../assets/5.gif'
import image5 from '../../assets/6.gif'
import image6 from '../../assets/7.gif'
import image7 from '../../assets/8.gif'
import image8 from '../../assets/shinden.gif'

const Sticker = () => {
    return (
        <div className="mx-auto w-[95%] md:w-[90%] mt-10 mb-10">
            <div className="carousel rounded-box space-x-24">
                <div className="carousel-item">
                    <img src={image1} className='w-[150px] h-[150px]' />
                </div>
                <div className="carousel-item">
                    <img src={image2} className='w-[150px] h-[150px]' />
                </div>
                <div className="carousel-item">
                    <img src={image3} className='w-[150px] h-[150px]'/>
                </div>
                <div className="carousel-item">
                    <img src={image4} className='w-[150px] h-[150px]' />
                </div>
                <div className="carousel-item">
                    <img src={image5} className='w-[150px] h-[150px]'/>
                </div>
                <div className="carousel-item">
                    <img src={image6} className='w-[150px] h-[150px]' />
                </div>
                <div className="carousel-item">
                    <img src={image7} className='w-[150px] h-[150px]' />
                </div>
                <div className="carousel-item">
                    <img src={image8} className='w-[150px] h-[150px]' />
                </div>
                <div className="carousel-item">
                    <img src={image4} className='w-[150px] h-[150px]' />
                </div>
                <div className="carousel-item">
                    <img src={image4} className='w-[150px] h-[150px]' />
                </div>
            </div>
        </div>
    );
};

export default Sticker;