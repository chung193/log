'use client'
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const SolutionSwiper = () => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    const slides = [
        {
            id: 1,
            title: "Vận chuyển nội địa",
            image: "storage1.jpg",
            link: "/dich-vu-van-chuyen-noi-dia/",
            description: "Vận chuyển hàng hóa từ kho đến các điểm giao hàng trong nước."
        },
        {
            id: 2,
            title: "Vận chuyển xuyên biên giới ASEAN",
            image: "storage2.jpg",
            link: "/van-chuyen-xuyen-bien-gioi-asean/",
            description: "Vận chuyển xuyên biên giới qua các nước trong khu vực ASEAN."
        },
        {
            id: 3,
            title: "Vận tải đường bộ",
            image: "storage3.jpg",
            link: "/giai-phap-van-tai-duong-bo-da-dang-linh-hoat-theo-yeu-cau/",
            description: "Cung cấp giải pháp vận tải đường bộ đa dạng, linh hoạt theo yêu cầu của khách hàng."
        }
    ];

    return (
        <div className="store-ser-swiper ss-pd-b">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    }
                }}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination',
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                onSwiper={(swiper) => {
                    // Delay để đảm bảo refs đã được set
                    setTimeout(() => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    });
                }}
                className="swiper row rows-3 gap-res"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="col">
                        <div className="store-ser-swiper-it">
                            <div className="inner">
                                <div className="img">
                                    <a className="img-inner" href={slide.link}>
                                        <img
                                            width="286"
                                            height="346"
                                            src={slide.image}
                                            className="attachment-full size-full"
                                            alt={slide.title}
                                            decoding="async"
                                            loading="lazy"
                                            srcSet={`${slide.image} 286w, ${slide.image.replace('.jpg', '-248x300.jpg')} 248w`}
                                        />
                                    </a>
                                </div>
                                <div className="info">
                                    <a className="btn-circle" href={slide.link}>
                                        <img
                                            src="/template/assets/images/ic-arrow.svg"
                                            alt={slide.title}
                                        />
                                    </a>
                                    <p className="info-des">{slide.description}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="swiper-control posi midle">
                <div
                    ref={navigationPrevRef}
                    className="swiper-control-btn swiper-prev"
                    role="button"
                    aria-label="Previous slide"
                >
                    <i className="fa-solid fa-arrow-left"></i>
                </div>
                <div
                    ref={navigationNextRef}
                    className="swiper-control-btn swiper-next"
                    role="button"
                    aria-label="Next slide"
                >
                    <i className="fa-solid fa-arrow-right"></i>
                </div>
            </div>

            {/* Pagination */}
            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
        </div>
    );
};

export default SolutionSwiper;