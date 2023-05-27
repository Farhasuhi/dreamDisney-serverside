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
            
        </div>
    );
};

export default Update;