import React, { useContext } from 'react';
import Banner from '../../Shared/Banner/Banner';
import image from '../../assets/5eeb5eb3-dc02-40f5-8ad6-17a945ddd1e5-Dolls.jpg'
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2'


const AddToys = () => {
    const { user } = useContext(AuthContext);
    const handleAddingToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const image = form.photoUrl.value;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const email = form.email.value;
        const subCategory = form.categoryName.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const availableQuantity = form.quantity.value;
        const details = form.description.value;
        const toy = {
            image, toyName, sellerName, email, subCategory, price, rating, availableQuantity, details
        }
        console.log(toy)
        fetch(`https://dream-disney-server-site-farhasuhi.vercel.app/addToys`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire('Your post has been updated..')
                    form.reset();
                }
            })

    }
    return (
        <div className='font-[Lobster]'>
            <div>
                <Banner>
                    <div className='relative w-full'>
                        <img src={image} className="w-full h-[200px] rounded-xl object-cover" />
                        <div className="absolute h-full w-full justify-center  flex items-center left-0 top-0  bg-gradient-to-tr from-[#d1d3d4] to-[rgba(21, 21, 21, 0)] rounded-xl">
                            <div className='text-white space-y-7 pl-12 w-1/2'>
                                <h2 className='text-4xl text-[#20374d] md:text-6xl font-bold'>Adding your toy</h2>
                                <h2 className='text-[15px] text-[#20374d] md:text-xl font-bold text-center'>Home/addToy</h2>

                            </div>
                        </div>
                    </div>
                </Banner>
            </div>
            <div className='w-[95%] md:w-[70%] mx-auto  mt-10'>
                <form className='space-y-5' onSubmit={handleAddingToy}>
                    <div className='block md:flex gap-10 '>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-xl">Picture url of toy</span>
                            </label>
                            <input type="text" placeholder="The picture of toy" className="input input-bordered border-dashed border-1 w-[500px] " name="photoUrl" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-xl">Toy Name</span>
                            </label>
                            <input type="text" placeholder="Toy name" className="input input-bordered border-dashed border-1 w-[500px] " name="toyName" required />
                        </div>
                    </div>
                    <div className='block md:flex gap-10 '>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-xl">Seller Name</span>
                            </label>
                            <input type="text" placeholder="Seller Name" className="input input-bordered border-dashed border-1 w-[500px] " name="sellerName" value={user?.displayName} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-xl">Seller Email</span>
                            </label>
                            <input type="email" placeholder="Seller Email" className="input input-bordered border-dashed border-1 w-[500px] " name="email" value={user?.email} required />
                        </div>
                    </div>
                    <div className='block md:flex gap-10 '>
                        <div className="form-control">
                            <label className="label font-bold text-xl">
                                <span className="label-text font-bold text-xl">Category Name</span>
                            </label>
                            <input type="text" placeholder="Category Name" className="input input-bordered border-dashed border-1 w-[500px] " name="categoryName" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-xl">Price</span>
                            </label>
                            <input type="text" placeholder="Doll price" className="input input-bordered border-dashed border-1 w-[500px] " name="price" required />
                        </div>
                    </div>
                    <div className='block md:flex gap-10 '>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-xl">Ratings</span>
                            </label>
                            <input type="text" placeholder="Ratings" className="input input-bordered border-dashed border-1 w-[500px] " name="rating" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-xl">Available Quantity</span>
                            </label>
                            <input type="number" placeholder="Available quantity" className="input input-bordered border-dashed border-1 w-[500px] " name="quantity" required />
                        </div>
                    </div>
                    <div className='pb-5'>
                        <label className="label">
                            <span className="label-text font-bold text-xl">Description</span>
                        </label>
                        <textarea placeholder="Toy's Description" className="textarea textarea-bordered  textarea-sm md:textarea-lg w-full border-dashed border-1 " name='description'></textarea>
                    </div>
                    <div className='text-center'>
                        <input type="submit" className='w-[200px] bg-blue-400 py-3 rounded-3xl text-2xl font-bold text-white' value="Add Toy" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToys;