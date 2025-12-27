'use client';
// File: app/about/AboutSwiper.tsx
import React, { useEffect, useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const AboutSwiper = () => {
    const swiperRef = useRef<SwiperType>();

    const slides = [
        {
            src: "https://vietnampostlogistics.com/wp-content/uploads/2025/04/Group-2144769120-1.png",
            width: 1000,
            height: 1000,
            alt: ""
        },
        {
            src: "https://vietnampostlogistics.com/wp-content/uploads/2025/04/Group-2144769121.png",
            width: 596,
            height: 389,
            alt: ""
        },
        {
            src: "https://vietnampostlogistics.com/wp-content/uploads/2025/04/Group-2144769119-1.png",
            width: 803,
            height: 389,
            alt: ""
        },
        {
            src: "https://vietnampostlogistics.com/wp-content/uploads/2025/04/Group-2144769122.png",
            width: 596,
            height: 389,
            alt: ""
        }
    ];

    return (
        <div className="ab-first-slide">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={3}
                navigation
                //pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className="swiper row gap-res"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="swiper-slide col">
                            <div className="ab-first-it">
                                <div className="img">
                                    <img
                                        width={slide.width}
                                        height={slide.height}
                                        src={slide.src}
                                        className="attachment-full size-full"
                                        alt={slide.alt}
                                        decoding="async"
                                        loading={index > 0 ? "lazy" : "eager"}
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default AboutSwiper;