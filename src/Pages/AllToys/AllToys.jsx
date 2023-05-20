import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ToysRow from './ToysRow/ToysRow';
import { FaSistrix } from 'react-icons/fa';

const AllToys = () => {
    // const allToys = useLoaderData();
    const [searchText, setSearchText] = useState("");
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`https://dream-disney-server-site.vercel.app/categories`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [])

    const handleSearch = () => {

        fetch(`https://dream-disney-server-site.vercel.app/getdollsbytext/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }
    return (
        <div className=''>

            <div className='flex justify-center items-center my-14'>
                <div className="form-control flex  justify-center items-center relative">

                    <input type="text" placeholder="Finding toy by toy name..." className="input input-bordered w-[315px] rounded-[100px] text-xl" onChange={(e) => setSearchText(e.target.value)} />
                    <button onClick={handleSearch} className='bg-blue-400  p-4 rounded-full absolute right-0 text-white'><FaSistrix className='text-[18px]'></FaSistrix></button>

                </div>
            </div>
            <div className="overflow-x-auto w-full  mt-2">
                <table className="table-fixed md:table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Seller Name</th>
                            <th>Available quantity</th>
                            <th>Toy Name</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {toys.map(toy => <ToysRow key={toy._id} toy={toy}></ToysRow>)}
                        {/* row 1 */}
                        {/* <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr> */}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllToys;