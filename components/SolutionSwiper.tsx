'use client'
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper as SwiperType } from 'swiper'; // Đây là type import
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useSearchParams } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import { Locale } from '@/lib/i18n';

const SolutionSwiper = () => {
    const navigationPrevRef = useRef<HTMLDivElement>(null);
    const navigationNextRef = useRef<HTMLDivElement>(null);

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
            title: "",
            image: "/images/storage1.jpg",
            link: "/dich-vu-van-chuyen-noi-dia/",
            description: t("components.solution-swiper.title1")
        },
        {
            id: 2,
            title: "",
            image: "/images/storage2.jpg",
            link: "/van-chuyen-xuyen-bien-gioi-asean/",
            description: t("components.solution-swiper.title2")
        },
        {
            id: 3,
            title: "",
            image: "/images/storage3.jpg",
            link: "/giai-phap-van-tai-duong-bo-da-dang-linh-hoat-theo-yeu-cau/",
            description: t("components.solution-swiper.title3")
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
                onSwiper={(swiper: SwiperType) => { // Thêm type ở đây
                    // Delay để đảm bảo refs đã được set
                    setTimeout(() => {
                        if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                        }
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