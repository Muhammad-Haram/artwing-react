import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './tesStyle.css';

// import required modules
import { Pagination } from 'swiper/modules';

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
