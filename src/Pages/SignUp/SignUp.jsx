import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import image from '../../assets/5eeb5eb3-dc02-40f5-8ad6-17a945ddd1e5-Dolls.jpg'
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const SignUp = () => {
    return (
        <div>
            <Banner>
                <div className='relative w-full'>
                    <img src={image} className="w-full h-[200px] rounded-xl object-cover" />
                    <div className="absolute h-full w-full justify-center  flex items-center left-0 top-0  bg-gradient-to-tr from-[#d1d3d4] to-[rgba(21, 21, 21, 0)] rounded-xl">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h2 className='text-4xl text-[#20374d] md:text-6xl font-bold'>Register Account</h2>
                            <h2 className='text-4xl text-[#20374d] md:text-xl font-bold text-center'>Home/Register</h2>

                        </div>
                    </div>
                </div>
            </Banner>
            <div className='w-[95%] md:w-[90%] mx-auto mt-10'>
                <div className='text-center'>
                    <small><p className='text-black my-2'>If you already have an account with us, please login at the login page.<Link to={'/login'}><button className="btn btn-link">Log In</button></Link></p></small>
                </div>
                <div className="hero-content flex font-[Lobster]">
                    <div className="card  w-full max-w-sm  bg-base-100 border-dashed border-2 p-5">
                        <div className="card-body">
                            <form>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" className="input input-bordered border-dashed border-1 " required />
                                </div>
                                <div className="form-control my-4">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" placeholder="photo url" className="input input-bordered border-dashed border-1 " required />
                                </div>
                                <div className="form-control my-4">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered border-dashed border-1 " required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered border-dashed border-1" required />
                                </div>
                                <div className="form-control mt-8">
                                    <input className="btn btn-warning text-[#3f3e3e]" type="submit" value="Register" />
                                </div>
                            </form>
                            <div className="divider">OR</div>
                            <div className='text-center'>
                                <h4>Sign up with</h4>
                                <button className="btn btn-circle bg-blue-400 mt-2">
                                    <FaGoogle></FaGoogle>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default SignUp;