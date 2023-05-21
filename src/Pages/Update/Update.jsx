import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Update = () => {
    // const toys=useLoaderData();
    const {user}=useContext(AuthContext)
    // const { toyName, subCategory, price, image, details,
    //     email, sellerName, rating, availableQuantity, _id } = toys;
    const url=`https://dream-disney-server-site-farhasuhi.vercel.app/myToys?${user?.email}/${_id}`;
    fetch()
    return (
        <div className="">
            <div className=" w-full h-full  relative">
                <div className=' h-full w-full justify-center flex items-center  to-[rgba(21, 21, 21, 0)] rounded'>
                    <div>
                        <div className='bg-white w-[80%] mx-auto p-6 rounded-2xl'>
                            <div className='flex items-center justify-between mb-5'>
                                <h4 className='font-bold text-2xl  text-amber-900'>Information changes</h4>
                            </div>
                            <div className='my-5'>
                                <p className='font-medium text-[18px]'>Toy Name: <span className='text-black'>{toyName}</span></p>
                            </div>
                            <form className='space-y-5' onSubmit={handleSubmit}>
                                <div className='flex justify-evenly'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold text-[18px] ">Price</span>
                                        </label>
                                        <input type="text" className="input input-bordered border-dashed border-1 w-full md:w-[50%] " name="price" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold text-[18px]">Available Quantity</span>
                                        </label>
                                        <input type="text" className="input input-bordered border-dashed border-1 w-full md:w-[50%] " name="quantity" required />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold text-[18px]">Details</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered  textarea-sm md:textarea-lg w-full border-dashed border-1 " name='description'></textarea>
                                </div>
                                <div className='mt-10 text-center'>
                                    <input type="submit" value="Update" className='btn btn-warning' />
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Update;