import React from 'react';
import img from '../../assets/sorry-stitch.gif'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex justify-center items-center mt-[100px]'>
            <img src={img} alt="" />
            <Link to={'/'}><button className='btn'>Back Home</button></Link>
        </div>
    );
};

export default Error;