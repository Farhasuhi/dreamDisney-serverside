


const TabsSection = ({ doll }) => {
    const { toyName, subCategory, _id, price, rating, image } = doll;
    console.log(doll);


    return (
        <div className="card w-96 mx-auto bg-base-100 drop-shadow-2xl">
            <figure className="mt-3"><img src={image} className="w-[300px] h-[300px]" /></figure>
            <div className="card-body">
                <h2 className="card-title">Toy Name:{toyName}</h2>
                <p>Sub-Category:{subCategory}</p>
                <p>Price:${price}</p>
                <p>Rating:{rating}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View details</button>
                </div>
            </div>
        </div>
    );
};

export default TabsSection;