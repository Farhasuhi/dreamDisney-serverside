import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";



const MyToyRow = ({ toy, handleDelete, setMyDolls, myDolls ,handleUpload }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext)
    const { toyName, subCategory, price, image, details,
        email, sellerName, rating, availableQuantity, _id } = toy;
        

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const availableQuantity = form.quantity.value;
    //     const price = form.price.value;
    //     const details = form.description.value;
    //     const updatedData = {
    //         availableQuantity, price, details
    //     }
    //     fetch(`https://dream-disney-server-site-farhasuhi.vercel.app/myToys/${_id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(updatedData)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             if (data.modifiedCount > 0) {
    //                 Swal.fire({
    //                     title: 'Success!',
    //                     text: 'Dolls updated successfully',
    //                     icon: 'success',
    //                     confirmButtonText: 'Cool'
    //                 })
    //                 const remaining = myDolls.filter(md => md._id !== _id)
    //                 const updated = bookings.find(md => md._id === _id)
    //                 const newUpdated = [updated, ...remaining]
    //                 setMyDolls(newUpdated)
    //                 form.reset()
    //             }
    //         })
    // }
    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="w-20 h-[100px]">
                        <img src={image} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td className="font-bold ">{price}</td>
            <td className="font-bold ">{sellerName}</td>
            <td className="font-bold ">{availableQuantity}</td>
            <td>
                <div className="font-bold">{toyName}</div>
            </td>
            <th>
                <div className='ml-10'>
                    {/* <Link to={`/myDolls/${_id}`}><button className="btn btn-warning btn-xs font-bold text-grey-700">Update</button></Link> */}
                    <label htmlFor="my-modal-6" className="btn btn-warning btn-xs font-bold text-grey-700">Update</label>
                    <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box  w-full h-full  relative bg-[url('./5eeb5eb3-dc02-40f5-8ad6-17a945ddd1e5-Dolls.jpg')] bg-cover">
                            <div className=' absolute h-full w-full justify-start flex items-center left-0 top-0  bg-gradient-to-tr from-[#9CA3AF] to-[rgba(21, 21, 21, 0)] rounded-xl'>
                                <div>

                                    <div className='bg-white w-[80%] mx-auto p-6 rounded-2xl'>
                                        <div className='flex items-center justify-between mb-5'>
                                            <h4 className='font-bold text-2xl  text-amber-900'>Information changes</h4>
                                            <div className="modal-action">
                                                <label htmlFor="my-modal-6" className="text-white font-black bg-red-700  btn btn-circle  border-none "><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></label>
                                            </div>
                                        </div>
                                        <div className='my-5'>
                                            <p className='font-medium text-[18px]'>Toy Name: <span className='text-rose-900'>{toyName}</span></p>
                                        </div>
                                        {/* <form className='space-y-5' onSubmit={handleSubmit}>
                                            <div className='flex justify-evenly'>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text font-bold text-[18px]">Price</span>
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
                                        </form> */}
                                        <form onSubmit={handleSubmit(handleUpload)}>
                                            <div className='flex justify-evenly'>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text font-bold text-[18px]">Price</span>
                                                    </label>
                                                    <input type="text" className="input input-bordered border-dashed border-1 w-full md:w-[50%] "  {...register("price", { required: true })} defaultValue={price} />
                                                </div>
                                                <div className="form-control">
                                                    <input type="text" className="input input-bordered border-dashed border-1 w-full md:w-[50%] hidden"  {...register("_id", { required: true })} defaultValue={_id}/>
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text font-bold text-[18px]">Available Quantity</span>
                                                    </label>
                                                    <input type="text" className="input input-bordered border-dashed border-1 w-full md:w-[50%] "
                                                        {...register("availableQuantity", { required: true })} 
                                                        defaultValue={availableQuantity}/>
                                                </div>
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text font-bold text-[18px]">Details</span>
                                                </label>
                                                <textarea className="textarea textarea-bordered  textarea-sm md:textarea-lg w-full border-dashed border-1 " 
                                                {...register("details", { required: true })}
                                                 defaultValue={details}></textarea>
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
                </div>
            </th>
            <th>
                <div className='ml-10'>
                    <Link><button className="btn btn-circle bg-red-700 border-none" onClick={() => handleDelete(_id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button></Link></div>
            </th>

        </tr>
    );
};

export default MyToyRow;
