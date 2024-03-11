import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './tesStyle.css';

// import required modules
import { Pagination } from 'swiper/modules';
import person1 from '../../assets/images/testimonial/Adam-Barlene.png'

export default function App() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        <div className="text-start mb-3">
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                        </div>
                        <p className="text-[18px] text-[#6D787D] text-start mb-5">I'm blown away by the Alpha team’s e-commerce solutions. They revamped our online
                            store & CRO, resulting in a 60% sales increase and a 45% boost in customer
                            engagement. Their dedication and seamless communication made it feel like a
                            partnership. Outstanding!</p>
                        <div className='flex'>
                            <img src={person1} alt="" />
                            <div className='flex-row text-left text-white ml-4'>
                                <h4 className='text-base font-semibold'>Adam</h4>
                                <p className='text-[#6D787D] text-[16px]'>Product Manager</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="text-start mb-3">
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                        </div>
                        <p className="text-[18px] text-[#6D787D] text-start mb-5">Hats off to Artwing Alpha for their SEO expertise! Our online visibility saw a
                            phenomenal boost, resulting in a 60% increase in website traffic and a 40% rise
                            in search engine rankings. What sets them apart is their collaborative approach
                            – it felt like we were part of one unstoppable team. Can't thank them enough!
                        </p>
                        <div className='flex'>
                            <img src={person1} alt="" />
                            <div className='flex-row text-left text-white ml-4'>
                                <h4 className='text-base font-semibold'>Adam</h4>
                                <p className='text-[#6D787D] text-[16px]'>Product Manager</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="text-start mb-3">
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                        </div>
                        <p className="text-[18px] text-[#6D787D] text-start mb-5">I'm blown away by the Alpha team’s e-commerce solutions. They revamped our online
                            store & CRO, resulting in a 60% sales increase and a 45% boost in customer
                            engagement. Their dedication and seamless communication made it feel like a
                            partnership. Outstanding!</p>
                        <div className='flex'>
                            <img src={person1} alt="" />
                            <div className='flex-row text-left text-white ml-4'>
                                <h4 className='text-base font-semibold'>Adam</h4>
                                <p className='text-[#6D787D] text-[16px]'>Product Manager</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide><SwiperSlide>
                    <div>
                        <div className="text-start mb-3">
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                        </div>
                        <p className="text-[18px] text-[#6D787D] text-start mb-5">I'm blown away by the Alpha team’s e-commerce solutions. They revamped our online
                            store & CRO, resulting in a 60% sales increase and a 45% boost in customer
                            engagement. Their dedication and seamless communication made it feel like a
                            partnership. Outstanding!</p>
                        <div className='flex'>
                            <img src={person1} alt="" />
                            <div className='flex-row text-left text-white ml-4'>
                                <h4 className='text-base font-semibold'>Adam</h4>
                                <p className='text-[#6D787D] text-[16px]'>Product Manager</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide><SwiperSlide>
                    <div>
                        <div className="text-start mb-3">
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                        </div>
                        <p className="text-[18px] text-[#6D787D] text-start mb-5">I'm blown away by the Alpha team’s e-commerce solutions. They revamped our online
                            store & CRO, resulting in a 60% sales increase and a 45% boost in customer
                            engagement. Their dedication and seamless communication made it feel like a
                            partnership. Outstanding!</p>
                        <div className='flex'>
                            <img src={person1} alt="" />
                            <div className='flex-row text-left text-white ml-4'>
                                <h4 className='text-base font-semibold'>Adam</h4>
                                <p className='text-[#6D787D] text-[16px]'>Product Manager</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide><SwiperSlide>
                    <div>
                        <div className="text-start mb-3">
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                        </div>
                        <p className="text-[18px] text-[#6D787D] text-start mb-5">I'm blown away by the Alpha team’s e-commerce solutions. They revamped our online
                            store & CRO, resulting in a 60% sales increase and a 45% boost in customer
                            engagement. Their dedication and seamless communication made it feel like a
                            partnership. Outstanding!</p>
                        <div className='flex'>
                            <img src={person1} alt="" />
                            <div className='flex-row text-left text-white ml-4'>
                                <h4 className='text-base font-semibold'>Adam</h4>
                                <p className='text-[#6D787D] text-[16px]'>Product Manager</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide><SwiperSlide>
                    <div>
                        <div className="text-start mb-3">
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                        </div>
                        <p className="text-[18px] text-[#6D787D] text-start mb-5">I'm blown away by the Alpha team’s e-commerce solutions. They revamped our online
                            store & CRO, resulting in a 60% sales increase and a 45% boost in customer
                            engagement. Their dedication and seamless communication made it feel like a
                            partnership. Outstanding!</p>
                        <div className='flex'>
                            <img src={person1} alt="" />
                            <div className='flex-row text-left text-white ml-4'>
                                <h4 className='text-base font-semibold'>Adam</h4>
                                <p className='text-[#6D787D] text-[16px]'>Product Manager</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide><SwiperSlide>
                    <div>
                        <div className="text-start mb-3">
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                        </div>
                        <p className="text-[18px] text-[#6D787D] text-start mb-5">I'm blown away by the Alpha team’s e-commerce solutions. They revamped our online
                            store & CRO, resulting in a 60% sales increase and a 45% boost in customer
                            engagement. Their dedication and seamless communication made it feel like a
                            partnership. Outstanding!</p>
                        <div className='flex'>
                            <img src={person1} alt="" />
                            <div className='flex-row text-left text-white ml-4'>
                                <h4 className='text-base font-semibold'>Adam</h4>
                                <p className='text-[#6D787D] text-[16px]'>Product Manager</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide><SwiperSlide>
                    <div>
                        <div className="text-start mb-3">
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                            <i className="fa-solid fa-star text-[#FCE383] text-[12px] m-2"></i>
                        </div>
                        <p className="text-[18px] text-[#6D787D] text-start mb-5">I'm blown away by the Alpha team’s e-commerce solutions. They revamped our online
                            store & CRO, resulting in a 60% sales increase and a 45% boost in customer
                            engagement. Their dedication and seamless communication made it feel like a
                            partnership. Outstanding!</p>
                        <div className='flex'>
                            <img src={person1} alt="" />
                            <div className='flex-row text-left text-white ml-4'>
                                <h4 className='text-base font-semibold'>Adam</h4>
                                <p className='text-[#6D787D] text-[16px]'>Product Manager</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
