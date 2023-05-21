import React from 'react';



const Photos = () => {
    return (
        <div className='w-[90%] w-95% mx-auto'>
            <div className='text-center text-4xl font-extrabold'>
                <h3 className='mt-[100px] mb-[50px] text-[#082c4e]'>Photo ALbum</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                <img className='w-full md:w-[400px]  h-[200px] border-2 shadow-lg' src="https://w0.peakpx.com/wallpaper/221/728/HD-wallpaper-disney-princess-entertainment-movie.jpg" alt="" />
                <img className='w-full md:w-[400px]  h-[200px] border-2 shadow-lg' src="https://www.nicepng.com/png/full/54-547730_disney-prince-and-princess-png.png"  alt="" />
                <img className='w-full md:w-[400px]  h-[200px] border-2 shadow-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqEQhXdUk4GJ2F88s3pa9TIzAe8ipEVd2pce89iQoC-9zd8imPy1IU0kUjTxeZAOfJtDc&usqp=CAU" alt="" />
                <img className='w-full md:w-[400px]  h-[200px] border-2 shadow-lg'src="https://www.nicepng.com/png/full/54-547730_disney-prince-and-princess-png.png" alt="" />
                <img className='w-full md:w-[400px]  h-[200px] border-2 shadow-lg'src="https://www.nicepng.com/png/full/54-547730_disney-prince-and-princess-png.png" alt="" />
                <img className='w-full md:w-[400px]  h-[200px] border-2 shadow-lg'src="https://www.nicepng.com/png/full/54-547730_disney-prince-and-princess-png.png" alt="" />
            </div>
        </div>
    );
};

export default Photos;