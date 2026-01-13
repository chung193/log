'use client'
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useSearchParams } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import { Locale } from '@/lib/i18n';
const EXPTrustSlide = () => {
    const searchParams = useSearchParams();
    const langParam = searchParams.get('lang');

    const locale: Locale =
        langParam === 'en' || langParam === 'vi'
            ? langParam
            : 'en';

    const { t } = useTranslations(locale);
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    const slides = [
        {
            id: 1,
            title: t("components.exp-trust.sl1-title"),
            image: "/images/exp1.jpg",
            link: "/uy-thac-nhap-khau-vietnam-post-logistics/",
            alt: "Bãi containers",
            description: t("components.exp-trust.sl1")
        },
        {
            id: 2,
            title: t("components.exp-trust.sl2-title"),
            image: "/images/exp2.jpg",
            link: "/uy-thac-xuat-khau-vietnam-post-logistics/",
            alt: "thùng hàng carton và pallet",
            description: t("components.exp-trust.sl2")
        },
        {
            id: 3,
            title: t("components.exp-trust.sl3-title"),
            image: "/images/exp3.webp",
            link: "/ho-tro-khai-bao-hai-quan-vietnam-post-logistics/",
            alt: "Bê thùng hàng",
            description: t("components.exp-trust.sl3")
        },
        {
            id: 4,
            title: t("components.exp-trust.sl4-title"),
            image: "/images/exp4.webp",
            link: "/tu-van-chinh-sach-xuat-nhap-khau-vietnam-post-logistics/",
            alt: "sân bay",
            description: t("components.exp-trust.sl4")
        }
    ];

    return (
        <div className="exp-entrust-slide">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 0,
                    }
                }}
                pagination={{
                    clickable: true,
                    el: '.exp-entrust-slide .swiper-pagination',
                }}
                navigation={{
                    prevEl: '.exp-entrust-slide .swiper-prev',
                    nextEl: '.exp-entrust-slide .swiper-next',
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                loop={true}
                onSwiper={(swiper) => {
                    // Update navigation after swiper is initialized
                    setTimeout(() => {
                        swiper.navigation.init();
                        swiper.navigation.update();
                    });
                }}
                className="swiper row rows-4 gap-res"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="col">
                        <div className="entrust-item">
                            <div className="inner">
                                <div className="img hover-img-rotate">
                                    <a className="img-inner" href={slide.link}>
                                        <img
                                            width="274"
                                            height="296"
                                            src={slide.image}
                                            className="attachment-full size-full"
                                            alt={slide.alt}
                                            decoding="async"
                                            loading="lazy"
                                        />
                                    </a>
                                    <a className="btn-circle" href={slide.link}>
                                        <img
                                            src="/template/assets/images/ic-arrow.svg"
                                            alt={`Xem chi tiết ${slide.title}`}
                                        />
                                    </a>
                                </div>
                                <div className="info">
                                    <h4>
                                        <a className="info-tt" href={slide.link}>
                                            {slide.title}
                                        </a>
                                    </h4>
                                    <p className="info-des">{slide.description}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>


            {/* Pagination */}
            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
        </div>
    );
};

export default EXPTrustSlide;