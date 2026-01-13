'use client'
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./SolutionSlider.css";
import { useSearchParams } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import { Locale } from '@/lib/i18n';

const SolutionSlider = () => {
    const swiperRef = useRef(null);


    const searchParams = useSearchParams();
    const langParam = searchParams.get('lang');

    const locale: Locale =
        langParam === 'en' || langParam === 'vi'
            ? langParam
            : 'en';

    const { t } = useTranslations(locale);

    const slides = [
        {
            id: 1,
            title: "Vận chuyển T11/T01",
            image: "/images/storage1.webp",
            link: "/giai-phap-thuong-mai-dien-tu-t86/",
            alt: "Vận chuyển T11/T01",
            description: t("pages.e-commerce.item1")
        },
        {
            id: 2,
            title: "Vận chuyển FEDEX/UPS/DHL",
            image: "/images/storage2.webp",
            link: "/giai-phap-van-chuyen-thuong-mai-dien-tu-quoc-te/",
            alt: "Vận chuyển FEDEX/UPS/DHL",
            description: t("pages.e-commerce.item2")
        },
        {
            id: 3,
            title: "Vận chuyển ECCF",
            image: "/images/anhkhac.webp",
            link: "/van-chuyen-eccf/",
            alt: "Vận chuyển ECCF",
            description: t("pages.e-commerce.item3")
        },
        {
            id: 3,
            title: "Vận chuyển ECCF",
            image: "/images/storage3.webp",
            link: "/van-chuyen-eccf/",
            alt: "Vận chuyển ECCF",
            description: t("pages.e-commerce.item4")
        }
    ];

    const filterButtons = [
        { id: 1, text: t("components.solution-slider.btn1"), href: "#" },
        { id: 2, text: t("components.solution-slider.btn2"), href: "#" },
        { id: 3, text: t("components.solution-slider.btn3"), href: "#" },
        { id: 4, text: t("components.solution-slider.btn4"), href: "#" },
        { id: 5, text: t("components.solution-slider.btn5"), href: "#" }
    ];

    return (
        <div className="sec-solv-ecom">
            <div className="solv-ecom ss-pd">
                <div className="container">
                    <div className="head-verti center mb-32">
                        <h1 className="title title-48 add-class text-verti is-inview">
                            {t("components.solution-slider.title")}
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
                                <p><strong>
                                    {t("components.solution-slider.sub-title")}
                                </strong></p>
                                <p>&nbsp;</p>
                                <p>
                                    {t("components.solution-slider.des")}
                                </p>
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
                            // navigation={{
                            //     nextEl: '.swiper-next',
                            //     prevEl: '.swiper-prev',
                            // }}
                            // pagination={{
                            //     clickable: true,
                            //     el: '.swiper-pagination',
                            // }}
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
                                                        srcSet={`${slide.image} 286w, ${slide.image.replace('.webp', '-248x300.webp')} 248w`}
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
                        {/* <div className="swiper-control posi midle">
                            <div className="swiper-control-btn swiper-prev" role="button" aria-label="Previous slide">
                                <i className="fa-solid fa-arrow-left"></i>
                            </div>
                            <div className="swiper-control-btn swiper-next" role="button" aria-label="Next slide">
                                <i className="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>

                        {/* Pagination 
                        <div className="swiper-pagination"></div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SolutionSlider;