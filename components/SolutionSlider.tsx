'use client'
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./SolutionSlider.css";

const SolutionSlider = () => {
    const swiperRef = useRef(null);

    const slides = [
        {
            id: 1,
            title: "Vận chuyển T11/T01",
            image: "storage1.jpg",
            link: "/giai-phap-thuong-mai-dien-tu-t86/",
            alt: "Vận chuyển T11/T01",
            description: "Vận chuyển qua hình thức T11/T01"
        },
        {
            id: 2,
            title: "Vận chuyển FEDEX/UPS/DHL",
            image: "storage2.jpg",
            link: "/giai-phap-van-chuyen-thuong-mai-dien-tu-quoc-te/",
            alt: "Vận chuyển FEDEX/UPS/DHL",
            description: "Vận chuyến qua các đơn vị chuyển phát nhanh toàn cầu FEDEX/UPS/DHL"
        },
        {
            id: 3,
            title: "Vận chuyển ECCF",
            image: "storage3.jpg",
            link: "/van-chuyen-eccf/",
            alt: "Vận chuyển ECCF",
            description: "Vận chuyển qua hình thức ECCF."
        }
    ];

    const filterButtons = [
        { id: 1, text: "Việt Nam - Mỹ", href: "#" },
        { id: 2, text: "Việt Nam - Châu Âu", href: "#" },
        { id: 3, text: "Việt Nam - Canada", href: "#" },
        { id: 4, text: "Việt Nam – Úc", href: "#" },
        { id: 5, text: "Trung Quốc – Việt Nam", href: "#" }
    ];

    return (
        <div className="sec-solv-ecom">
            <div className="solv-ecom ss-pd">
                <div className="container">
                    <div className="head-verti center mb-32">
                        <h1 className="title title-48 add-class text-verti is-inview">
                            Cung cấp giải pháp toàn diện
                        </h1>
                    </div>

                    {/* Filter Buttons */}
                    <div className="cpn-faq-filter scrollContainer">
                        {filterButtons.map((button) => (
                            <a
                                key={button.id}
                                className="cpn-faq-filter-it buttons"
                                href={button.href}
                            >
                                {button.text}
                            </a>
                        ))}
                    </div>

                    <div className="head-verti center mb-32">
                        <div className="line aos-init aos-animate" data-aos="fade-up-cus">
                            <div className="desc">
                                <p><strong>Cung cấp giải pháp toàn diện từ khâu lấy hàng, xử lý hàng hóa, đóng gói đến giao hàng đích danh tại các quốc gia trên thế giới.</strong></p>
                                <p>&nbsp;</p>
                                <p>Chúng tôi kết hợp với các hàng không hàng đầu thế giới để vận chuyển hàng hóa từ Việt Nam đi khắp thế giới, đặc biệt là Korean Air.</p>
                            </div>
                        </div>
                    </div>

                    {/* Solution Slider với Swiper */}
                    <div className="store-ser-swiper">
                        <Swiper
                            ref={swiperRef}
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={24}
                            slidesPerView={1}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                                1200: {
                                    slidesPerView: 4,
                                }
                            }}
                            navigation={{
                                nextEl: '.swiper-next',
                                prevEl: '.swiper-prev',
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
                            className="swiper row rows-4 gap-res"
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
                                                        alt={slide.alt}
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
                                                        alt="Chi tiết"
                                                    />
                                                </a>
                                                <p className="info-des">
                                                    {slide.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Navigation Buttons */}
                        <div className="swiper-control posi midle">
                            <div className="swiper-control-btn swiper-prev" role="button" aria-label="Previous slide">
                                <i className="fa-solid fa-arrow-left"></i>
                            </div>
                            <div className="swiper-control-btn swiper-next" role="button" aria-label="Next slide">
                                <i className="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SolutionSlider;