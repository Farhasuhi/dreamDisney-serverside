import React from 'react';
import { Link } from 'react-router-dom';

const ToysRow = ({ toy }) => {
    const { toyName, subCategory, price, image, details,
        email, sellerName, rating, availableQuantity,_id } = toy
    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="w-20 h-[100px]">
                        <img src={image} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>
                <div className="font-bold">{subCategory}</div>

            </td>
            <td className="font-bold ">{price}</td>
            <td className="font-bold ">{sellerName}</td>
            <td className="font-bold ">{availableQuantity}</td>
            <td>
                <div className="font-bold">{toyName}</div>
            </td>
            <th>
                <div className='ml-10'>
                    <Link to={`/categories/${_id}`}><button className="btn btn-warning btn-xs">details</button></Link></div>
            </th>
        </tr>
    );
};

export default ToysRow;