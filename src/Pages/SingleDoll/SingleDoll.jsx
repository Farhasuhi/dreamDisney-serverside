import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';



const SingleDoll = () => {
    const doll = useLoaderData();
    const { toyName, subCategory, price, image, details,
        email, sellerName,rating,availableQuantity} = doll;
    console.log(doll);

    return (
        <div>
            <div className='w-[95%] md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 mt-14 mb-10 gap-8 items-center justify-center'>
                <div className='mt-16'>
                    <img src={image} className='w-[100%]md:w-[80%]' alt="" />
                </div>
                <div className="space-y-5">
                    <p className='text-blue-700 font-semibold'>toys by brand/{subCategory}</p>
                    <h1 className='text-5xl font-black'>{toyName}</h1>
                    <hr />
                    <div className='flex items-center'>
                        <Rating
                            style={{ maxWidth: 180}}
                            value={rating} 
                            readOnly
                        />
                        <h1 className='text-xl text-red-800 font-extrabold'>{rating}</h1>
                    </div>
                    <hr />
                    <div className='ml-4 space-y-5'>
                        <h3 className='text-xl font-semibold'>Seller Name : <span className='text-[#8f9192] ml-10'>{sellerName}</span></h3>
                        <h3 className='text-xl font-semibold'>Availability : <span className='text-[#8f9192] ml-14'>{availableQuantity}</span></h3>
                    </div>
                    <hr />
                    <div className='ml-6  space-y-5'>
                        <h5 className='text-xl font-semibold'>Price: <span className='text-red-600  ml-14'>${price}</span></h5>
                    </div>
                    <div className='pt-8 space-y-5'>
                        <p className='border-y-2 border-dashed border-yellow-600 py-3 text-center text-blue-950 font-bold text-2xl'>Description</p>
                        <p className='text-[#42484b] text-xl font-semibold'>{details}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleDoll;