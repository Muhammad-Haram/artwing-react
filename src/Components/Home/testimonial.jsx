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
                        <div>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <p>I'm blown away by the Alpha team’s e-commerce solutions. They revamped our online
                            store & CRO, resulting in a 60% sales increase and a 45% boost in customer
                            engagement. Their dedication and seamless communication made it feel like a
                            partnership. Outstanding!</p>
                        <div className='flex'>
                            <img src={person1} alt="" />
                            <div>
                                <h4>Adam</h4>
                                <p>Product Manager</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, vitae culpa accusantium ad reprehenderit ea eaque nulla aut cupiditate officiis impedit maiores ducimus nobis veritatis unde architecto? Cumque, optio deleniti.
                    Voluptates earum necessitatibus fuga esse! Et est vitae quaerat dolorum voluptate soluta quibusdam quam odit. Quaerat nihil deleniti sapiente saepe! Aliquid illo soluta deserunt voluptas in autem iure incidunt aliquam!</SwiperSlide>
                <SwiperSlide>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, vitae culpa accusantium ad reprehenderit ea eaque nulla aut cupiditate officiis impedit maiores ducimus nobis veritatis unde architecto? Cumque, optio deleniti.
                    Voluptates earum necessitatibus fuga esse! Et est vitae quaerat dolorum voluptate soluta quibusdam quam odit. Quaerat nihil deleniti sapiente saepe! Aliquid illo soluta deserunt voluptas in autem iure incidunt aliquam!</SwiperSlide>
                <SwiperSlide>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, vitae culpa accusantium ad reprehenderit ea eaque nulla aut cupiditate officiis impedit maiores ducimus nobis veritatis unde architecto? Cumque, optio deleniti.
                    Voluptates earum necessitatibus fuga esse! Et est vitae quaerat dolorum voluptate soluta quibusdam quam odit. Quaerat nihil deleniti sapiente saepe! Aliquid illo soluta deserunt voluptas in autem iure incidunt aliquam!</SwiperSlide>
                <SwiperSlide>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, vitae culpa accusantium ad reprehenderit ea eaque nulla aut cupiditate officiis impedit maiores ducimus nobis veritatis unde architecto? Cumque, optio deleniti.
                    Voluptates earum necessitatibus fuga esse! Et est vitae quaerat dolorum voluptate soluta quibusdam quam odit. Quaerat nihil deleniti sapiente saepe! Aliquid illo soluta deserunt voluptas in autem iure incidunt aliquam!</SwiperSlide>
                <SwiperSlide>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, vitae culpa accusantium ad reprehenderit ea eaque nulla aut cupiditate officiis impedit maiores ducimus nobis veritatis unde architecto? Cumque, optio deleniti.
                    Voluptates earum necessitatibus fuga esse! Et est vitae quaerat dolorum voluptate soluta quibusdam quam odit. Quaerat nihil deleniti sapiente saepe! Aliquid illo soluta deserunt voluptas in autem iure incidunt aliquam!</SwiperSlide>
                <SwiperSlide>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, vitae culpa accusantium ad reprehenderit ea eaque nulla aut cupiditate officiis impedit maiores ducimus nobis veritatis unde architecto? Cumque, optio deleniti.
                    Voluptates earum necessitatibus fuga esse! Et est vitae quaerat dolorum voluptate soluta quibusdam quam odit. Quaerat nihil deleniti sapiente saepe! Aliquid illo soluta deserunt voluptas in autem iure incidunt aliquam!</SwiperSlide>
                <SwiperSlide>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, vitae culpa accusantium ad reprehenderit ea eaque nulla aut cupiditate officiis impedit maiores ducimus nobis veritatis unde architecto? Cumque, optio deleniti.
                    Voluptates earum necessitatibus fuga esse! Et est vitae quaerat dolorum voluptate soluta quibusdam quam odit. Quaerat nihil deleniti sapiente saepe! Aliquid illo soluta deserunt voluptas in autem iure incidunt aliquam!</SwiperSlide>
                <SwiperSlide>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, vitae culpa accusantium ad reprehenderit ea eaque nulla aut cupiditate officiis impedit maiores ducimus nobis veritatis unde architecto? Cumque, optio deleniti.
                    Voluptates earum necessitatibus fuga esse! Et est vitae quaerat dolorum voluptate soluta quibusdam quam odit. Quaerat nihil deleniti sapiente saepe! Aliquid illo soluta deserunt voluptas in autem iure incidunt aliquam!</SwiperSlide>
            </Swiper>
        </>
    );
}
