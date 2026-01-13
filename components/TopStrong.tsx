"use client";

import React, { useEffect, useRef } from "react";
import './TopStrong.css';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import { Locale } from '@/lib/i18n';
const TopStrong = () => {
    const swiperRef = useRef<HTMLDivElement>(null);
    const swiperInstance = useRef<any>(null);
    const searchParams = useSearchParams();
    const langParam = searchParams.get('lang');

    const locale: Locale =
        langParam === 'en' || langParam === 'vi'
            ? langParam
            : 'en';

    const { t } = useTranslations(locale);
    useEffect(() => {
        const initializeSwiper = async () => {
            if (typeof window !== "undefined" && swiperRef.current) {
                try {
                    const SwiperModule = await import("swiper");
                    const Swiper = SwiperModule.default;

                    const modules = await import("swiper/modules");
                    const { Navigation, Pagination, Autoplay } = modules;

                    // Khởi tạo Swiper
                    swiperInstance.current = new Swiper(swiperRef.current, {
                        modules: [Navigation, Pagination, Autoplay],
                        slidesPerView: 4,
                        spaceBetween: 0,
                        loop: true,
                        autoplay: {
                            delay: 3000,
                            disableOnInteraction: false,
                        },
                        navigation: {
                            nextEl: ".inter-solve-top-slide .swiper-next",
                            prevEl: ".inter-solve-top-slide .swiper-prev",
                        },
                        pagination: {
                            el: ".inter-solve-top-slide .swiper-pagination",
                            clickable: true,
                            dynamicBullets: true,
                        },
                        breakpoints: {
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 0,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 0,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 0,
                            },
                        },
                        on: {
                            init: function () {
                                console.log("Swiper initialized");
                            },
                        },
                    });
                } catch (error) {
                    console.error("Failed to initialize Swiper:", error);
                }
            }
        };

        initializeSwiper();

        // Cleanup khi component unmount
        return () => {
            if (swiperInstance.current) {
                swiperInstance.current.destroy();
            }
        };
    }, []);

    return (
        <div className="inter-solve-top">
            <div className="head-verti mb-32">
                <div className="title-head text-verti">
                    <h3
                        className="title title-40 add-class text-hori words chars splitting"
                        data-spl="data-spl"
                        style={{ '--word-total': 4, '--char-total': 14 } as React.CSSProperties}
                    >
                        <span className="word" data-word="Lĩnh" style={{ '--word-index': 0 } as React.CSSProperties}>
                            <span className="char" data-char="L" style={{ '--char-index': 0 } as React.CSSProperties}>
                                {t('components.strong.title')}
                            </span>

                        </span>
                    </h3>
                </div>
                <div className="line aos-init" data-aos="fade-up-cus">
                    <p className="desc">
                        {t('components.strong.second-title')}
                    </p>
                </div>
            </div>

            <div className="inter-solve-top-slide">
                <div
                    ref={swiperRef}
                    className="swiper row rows-4 gap-res"
                >
                    <div
                        className="swiper-wrapper"
                        aria-live="polite"
                    >
                        {/* Slide 1 */}
                        <div className="swiper-slide col">
                            <div className="inter-solve-top-it">
                                <div className="inner">
                                    <div className="img">
                                        <a className="img-inner" href="#">
                                            <img
                                                width="605"
                                                height="412"
                                                src="/images/Screenshot_2025-04-24_141744-removebg-preview-1.webp"
                                                className="attachment-full size-full"
                                                alt="Sản phẩm công nghệ"
                                                decoding="async"
                                                loading="lazy"
                                                srcSet="/images/Screenshot_2025-04-24_141744-removebg-preview-1.webp 605w, /images/Screenshot_2025-04-24_141744-removebg-preview-300x204.webp 300w"
                                            />
                                        </a>
                                    </div>
                                    <div className="info">
                                        <h4>
                                            <a className="info-tt" href="#">
                                                {t('components.strong.item1')}
                                            </a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Slide 2 */}
                        <div className="swiper-slide col">
                            <div className="inter-solve-top-it">
                                <div className="inner">
                                    <div className="img">
                                        <a className="img-inner" href="#">
                                            <img
                                                width="436"
                                                height="573"
                                                src="/images/hydraulic-ironworker-sw132-removebg-preview.webp"
                                                className="attachment-full size-full"
                                                alt="Thiết bị công nghiệp"
                                                decoding="async"
                                                loading="lazy"
                                                srcSet="/images/hydraulic-ironworker-sw132-removebg-preview.webp 436w, /images/hydraulic-ironworker-sw132-removebg-preview-228x300.webp 228w"
                                            />
                                        </a>
                                    </div>
                                    <div className="info">
                                        <h4>
                                            <a className="info-tt" href="#">
                                                {t('components.strong.item2')}
                                            </a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Slide 3 */}
                        <div className="swiper-slide col">
                            <div className="inter-solve-top-it">
                                <div className="inner">
                                    <div className="img">
                                        <a className="img-inner" href="#">
                                            <img
                                                width="500"
                                                height="500"
                                                src="/images/pngtree-advanced-medical-equipment-png-image_17293421-removebg-preview.webp"
                                                className="attachment-full size-full"
                                                alt="Thiết bị y tế"
                                                decoding="async"
                                                loading="lazy"
                                                srcSet="/images/pngtree-advanced-medical-equipment-png-image_17293421-removebg-preview.webp 500w, /images/pngtree-advanced-medical-equipment-png-image_17293421-removebg-preview-300x300.webp 300w, pngtree-advanced-medical-equipment-png-image_17293421-removebg-preview-150x150.webp 150w"
                                            />
                                        </a>
                                    </div>
                                    <div className="info">
                                        <h4>
                                            <a className="info-tt" href="#">
                                                {t('components.strong.item3')}
                                            </a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Slide 4 */}
                        <div className="swiper-slide col">
                            <div className="inter-solve-top-it">
                                <div className="inner">
                                    <div className="img">
                                        <a className="img-inner" href="#">
                                            <img
                                                width="667"
                                                height="374"
                                                src="/images/Construction-Materials-Are-Used-for-Buildings-removebg-preview.webp"
                                                className="attachment-full size-full"
                                                alt="Vật liệu xây dựng"
                                                decoding="async"
                                                loading="lazy"
                                                srcSet="/images/Construction-Materials-Are-Used-for-Buildings-removebg-preview.webp 667w, /images/Construction-Materials-Are-Used-for-Buildings-removebg-preview-300x168.webp 300w"
                                            />
                                        </a>
                                    </div>
                                    <div className="info">
                                        <h4>
                                            <a className="info-tt" href="#">
                                                {t('components.strong.item4')}
                                            </a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <span
                        className="swiper-notification"
                        aria-live="assertive"
                        aria-atomic="true"
                    ></span>
                </div>

            </div>
        </div>
    );
};

export default TopStrong;