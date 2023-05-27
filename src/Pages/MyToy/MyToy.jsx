import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import MyToyRow from './MyToyRow';
import Swal from 'sweetalert2'
import { data } from 'autoprefixer';
import useTittle from '../../hooks/useTittle';
import { Navigate, useNavigate } from 'react-router-dom';
const option = [
    { value: 'Price-Ascending' },
    { value: 'Price-Descending' },
]
const MyToy = () => {
    const { user } = useContext(AuthContext);
    const [myDolls, setMyDolls] = useState([]);
    const [myDoll, setMyDoll] = useState(myDolls);
    const [control, setControl] = useState(false);
    const [sortOrder,setOrder] = useState('asc');
    useTittle('myToys');
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://dream-disney-server-site-farhasuhi.vercel.app/myToys?email=${user?.email}&sort=${sortOrder}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMyDolls(data)
            })
    }, [user,sortOrder])

    const handleUpload = (data) => {
        console.log(data)
        fetch(`https://dream-disney-server-site.vercel.app/myToys/${data._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Dolls updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    setControl(!control);
                    const remaining = myDolls.filter(myDoll => myDoll._id !== data._id)
                    const updated = myDolls.find(md => md._id === data._id)
                    const newUpdated = [...remaining, updated];
                    setMyDolls(newUpdated);

                }
            })
    }



    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://dream-disney-server-site-farhasuhi.vercel.app/myToys/${_id}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify()
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = myDolls.filter(md => md._id !== data._id)
                            setMyDolls(remaining)

                        }
                    })
            }
        })
    }

    const handleSort=(event)=>{
        console.log(event.target.value)
        setOrder(event.target.value)
    }



    return (
        <div>
            <div className="overflow-x-auto w-full  mt-2">
                <div className='text-center my-5'>
                    <select name="sort" id="sort" className='p-2 bg-red-400 text-yellow-100 border-none rounded-3xl' value={sortOrder} onChange={handleSort}>
                        <option value="asc" className='p-2 bg-red-400 text-yellow-100 border-none rounded-3xl'>
                            Price: High to low
                        </option>
                        <option value="desc" className='p-2 bg-red-400 text-yellow-100 border-none rounded-3xl'>
                            Price:Low to high
                        </option>
                    </select>
                </div>
                <table className="table-fixed md:table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Seller Name</th>
                            <th>Available quantity</th>
                            <th>Toy Name</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {myDolls.map(toy => <MyToyRow key={toy._id} handleDelete={handleDelete} toy={toy} handleUpload={handleUpload}></MyToyRow>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToy;