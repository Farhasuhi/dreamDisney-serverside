import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import MyToyRow from './MyToyRow';
import Swal from 'sweetalert2'
import { data } from 'autoprefixer';
const option = [
    { value: 'Price-Ascending' },
    { value: 'Price-Descending' },
]
const MyToy = () => {
    const { user } = useContext(AuthContext);
    const [myDolls, setMyDolls] = useState([]);

    useEffect(() => {
        fetch(`https://dream-disney-server-site-farhasuhi.vercel.app/myToys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMyDolls(data)
            })
    }, [user])

    

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
            if (result.isConfirmed){
                fetch(`https://dream-disney-server-site-farhasuhi.vercel.app/myToys/${_id}`,{
                    method:'DELETE',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify()
                })
                    .then(res => res.json())
                    .then(data=>{
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = myDolls.filter(md => md._id !== _id)
                            setMyDolls(remaining)

                        }
                    })
            }
        })
    }

    const ascending = () => {
        fetch(`https://dream-disney-server-site-farhasuhi.vercel.app/myToys/ascending?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyDolls(data)
            })

    }
    const descending = () => {
        fetch(`https://dream-disney-server-site-farhasuhi.vercel.app/myToys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyDolls(data)
            })
    }


    return (
        <div>
            <div className="overflow-x-auto w-full  mt-2">
                <div className='text-right'>

                    <form >
                        <label htmlFor="sort">
                            <select name="sort" id="sort">
                                <option value="Price-Ascending" onClick={ascending}>
                                    Price-Ascending
                                </option>
                                <option value="Price-Descending" onClick={descending}>
                                    Price-Descending
                                </option>
                            </select>
                        </label>
                    </form>

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
                        {myDolls.map(toy => <MyToyRow key={toy._id} handleDelete={handleDelete} setMyDolls={setMyDolls}  toy={toy}></MyToyRow>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToy;