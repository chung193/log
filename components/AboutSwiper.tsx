'use client';
// File: app/about/AboutSwiper.tsx
import React, { useEffect, useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import './AboutSwiper.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface AboutSwiperProps {
    lang?: 'vi' | 'en';
}

const AboutSwiper = ({ lang = 'en' }: AboutSwiperProps) => {
    const swiperRef = useRef<SwiperType | null>(null);

    const slides = {
        "vi":
            [
                {
                    src: "/images/abf1.jpg",
                    width: 307,
                    height: 307,
                    alt: ""
                },
                {
                    src: "/images/abf2.jpg",
                    width: 496,
                    height: 307,
                    alt: ""
                },
                {
                    src: "/images/abf3.jpg",
                    width: 803,
                    height: 307,
                    alt: ""
                },
                {
                    src: "/images/abf4.jpg",
                    width: 632,
                    height: 307,
                    alt: ""
                }
            ],
        "en":
            [
                {
                    src: "/images/Group-2144769119-1.webp",
                    width: 307,
                    height: 307,
                    alt: ""
                },
                {
                    src: "/images/Group-2144769121.webp",
                    width: 496,
                    height: 307,
                    alt: ""
                },
                {
                    src: "/images/Group-2144769120-1.webp",
                    width: 803,
                    height: 307,
                    alt: ""
                },
                {
                    src: "/images/Group-2144769122.webp",
                    width: 632,
                    height: 307,
                    alt: ""
                }
            ]
    };

    return (
        <div className="ab-first-slide">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={3}
                navigation
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
                {slides[lang].map((slide, index) => (
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