import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Reviews = () => {
    return (
        <div className='w-[90%] w-95% mx-auto'>
            <div className='text-center text-4xl font-extrabold'>
                <h3 className='mt-[100px] mb-[50px] text-[#082c4e]'>Reviews</h3>
            </div>
            <div className='p-[50px] bg-rose-100'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 8000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"

                >
                    <SwiperSlide>
                        <div className='block md:flex justify-center items-center gap-6'>
                            <div className="card w-full bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src="https://xsgames.co/randomusers/avatar.php?g=female" className="w-2- h-20 rounded-full" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <p>This website very much helpful..My children loves disney cartoon thats why i have to visiting my online site ..bt this website grabs my attention..best wishes for dream disney..i recommend parents who searching toys for your children..  </p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">Last updated 3 mins ago</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-full bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src="https://xsgames.co/randomusers/avatar.php?g=female" className="w-2- h-20 rounded-full" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <p>This website very much helpful..My children loves disney cartoon thats why i have to visiting my online site ..bt this website grabs my attention..best wishes for dream disney..i recommend parents who searching toys for your children..  </p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">Last updated 3 mins ago</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-full bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src="https://xsgames.co/randomusers/avatar.php?g=female" className="w-2- h-20 rounded-full" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <p>This website very much helpful..My children loves disney cartoon thats why i have to visiting my online site ..bt this website grabs my attention..best wishes for dream disney..i recommend parents who searching toys for your children..  </p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">Last updated 3 mins ago</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='block md:flex justify-center items-center gap-6'>
                            <div className="card w-full bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src="https://xsgames.co/randomusers/avatar.php?g=female" className="w-2- h-20 rounded-full" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <p>This website very much helpful..My children loves disney cartoon thats why i have to visiting my online site ..bt this website grabs my attention..best wishes for dream disney..i recommend parents who searching toys for your children..  </p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">Last updated 3 mins ago</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-full bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src="https://xsgames.co/randomusers/avatar.php?g=female" className="w-2- h-20 rounded-full" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <p>This website very much helpful..My children loves disney cartoon thats why i have to visiting my online site ..bt this website grabs my attention..best wishes for dream disney..i recommend parents who searching toys for your children..  </p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">Last updated 3 mins ago</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-full bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src="https://xsgames.co/randomusers/avatar.php?g=female" className="w-2- h-20 rounded-full" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <p>This website very much helpful..My children loves disney cartoon thats why i have to visiting my online site ..bt this website grabs my attention..best wishes for dream disney..i recommend parents who searching toys for your children..  </p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">Last updated 3 mins ago</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='block md:flex justify-center items-center gap-6'>
                            <div className="card w-full bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src="https://xsgames.co/randomusers/avatar.php?g=female" className="w-2- h-20 rounded-full" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <p>This website very much helpful..My children loves disney cartoon thats why i have to visiting my online site ..bt this website grabs my attention..best wishes for dream disney..i recommend parents who searching toys for your children..  </p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">Last updated 3 mins ago</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-full bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src="https://xsgames.co/randomusers/avatar.php?g=female" className="w-2- h-20 rounded-full" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <p>This website very much helpful..My children loves disney cartoon thats why i have to visiting my online site ..bt this website grabs my attention..best wishes for dream disney..i recommend parents who searching toys for your children..  </p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">Last updated 3 mins ago</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-full bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src="https://xsgames.co/randomusers/avatar.php?g=female" className="w-2- h-20 rounded-full" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <p>This website very much helpful..My children loves disney cartoon thats why i have to visiting my online site ..bt this website grabs my attention..best wishes for dream disney..i recommend parents who searching toys for your children..  </p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">Last updated 3 mins ago</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='block md:flex justify-center items-center gap-6'>
                            <div className="card w-full bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src="https://xsgames.co/randomusers/avatar.php?g=female" className="w-2- h-20 rounded-full" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <p>This website very much helpful..My children loves disney cartoon thats why i have to visiting my online site ..bt this website grabs my attention..best wishes for dream disney..i recommend parents who searching toys for your children..  </p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">Last updated 3 mins ago</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-full bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src="https://xsgames.co/randomusers/avatar.php?g=female" className="w-2- h-20 rounded-full" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <p>This website very much helpful..My children loves disney cartoon thats why i have to visiting my online site ..bt this website grabs my attention..best wishes for dream disney..i recommend parents who searching toys for your children..  </p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">Last updated 3 mins ago</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-full bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src="https://xsgames.co/randomusers/avatar.php?g=female" className="w-2- h-20 rounded-full" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <p>This website very much helpful..My children loves disney cartoon thats why i have to visiting my online site ..bt this website grabs my attention..best wishes for dream disney..i recommend parents who searching toys for your children..  </p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">Last updated 3 mins ago</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    
                </Swiper>

            </div>

        </div>
    );
};

export default Reviews;