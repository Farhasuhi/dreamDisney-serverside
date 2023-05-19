import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import image from '../../assets/5eeb5eb3-dc02-40f5-8ad6-17a945ddd1e5-Dolls.jpg'
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    return (
        <div>
            <Banner>
                <div className='relative w-full'>
                    <img src={image} className="w-full h-[200px] rounded-xl object-cover" />
                    <div className="absolute h-full w-full justify-center  flex items-center left-0 top-0  bg-gradient-to-tr from-[#d1d3d4] to-[rgba(21, 21, 21, 0)] rounded-xl">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h2 className='text-4xl text-[#20374d] md:text-6xl font-bold'>Login page</h2>
                            <h2 className='text-4xl text-[#20374d] md:text-xl font-bold text-center'>Home/Login</h2>

                        </div>
                    </div>
                </div>
            </Banner>
            <div>
                <div className="hero min-h-screen w-[95%] md:w-[90%] mx-auto mt-10">
                    <div className="hero-content flex-col lg:flex-row gap-16 font-[Lobster]">
                        <div className="text-center lg:text-left">
                            <div className="card w-96 bg-base-100  border-dashed border-2">
                                <div className="card-body  text-[#2e2e2e]">
                                    <h2 className="card-title font-extrabold">New user?!</h2>
                                    <p className='font-semibold'>Register account</p>
                                    <p>By creating an account you will be able to adding your toy and keep track of the login you have previously made post.</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-warning text-[#3f3e3e]"><Link to={'/signUp'}>Register</Link></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm  bg-base-100 border-dashed border-2">
                            <div className="card-body">
                                <form>
                                    <div>
                                        <h5 className='font-extrabold text-black'>Returning User</h5>
                                        <p className='text-black my-2'>I am a returning user</p>
                                    </div>
                                    <div className="form-control">
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
                                    <div className="form-control mt-6">
                                        <input className="btn btn-warning text-[#3f3e3e]" type="submit" value="Login" />
                                    </div>
                                </form>
                                <div className="divider">OR</div>
                                <div className='text-center'>
                                    <h4>Login with</h4>
                                    <button className="btn btn-circle bg-blue-400 mt-2">
                                       <FaGoogle></FaGoogle>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;