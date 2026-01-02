"use client";

import React, { useEffect, useRef } from "react";
import './Partners.css';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import { Locale } from '@/lib/i18n';

const Partners = () => {
    const swiperRef1 = useRef<HTMLDivElement>(null);
    const swiperRef2 = useRef<HTMLDivElement>(null);
    const swiperInstance1 = useRef<any>(null);
    const swiperInstance2 = useRef<any>(null);

    const searchParams = useSearchParams();
    const langParam = searchParams.get('lang');

    const locale: Locale =
        langParam === 'en' || langParam === 'vi'
            ? langParam
            : initialLocale;

    const { t } = useTranslations(locale);

    useEffect(() => {
        const initializeSwipers = async () => {
            if (typeof window !== "undefined") {
                const SwiperModule = await import("swiper");
                const Swiper = SwiperModule.default;

                const modules = await import("swiper/modules");
                const { Autoplay } = modules;

                // Khởi tạo Swiper 1
                if (swiperRef1.current && !swiperInstance1.current) {
                    swiperInstance1.current = new Swiper(swiperRef1.current, {
                        modules: [Autoplay],
                        slidesPerView: 5,
                        spaceBetween: 0,
                        loop: true,
                        autoplay: {
                            delay: 2000,
                            disableOnInteraction: false,
                            reverseDirection: false,
                        },
                        speed: 1000,
                        breakpoints: {
                            640: {
                                slidesPerView: 5,
                                spaceBetween: 0,
                            },
                            768: {
                                slidesPerView: 5,
                                spaceBetween: 0,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 0,
                            },
                        },
                    });
                }

                // Khởi tạo Swiper 2
                if (swiperRef2.current && !swiperInstance2.current) {
                    swiperInstance2.current = new Swiper(swiperRef2.current, {
                        modules: [Autoplay],
                        slidesPerView: 5,
                        spaceBetween: 0,
                        loop: true,
                        autoplay: {
                            delay: 2000,
                            disableOnInteraction: false,
                            reverseDirection: true, // Chạy ngược chiều với swiper 1
                        },
                        speed: 1000,
                        breakpoints: {
                            640: {
                                slidesPerView: 5,
                                spaceBetween: 0,
                            },
                            768: {
                                slidesPerView: 5,
                                spaceBetween: 0,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 0,
                            },
                        },
                    });
                }
            }
        };

        initializeSwipers();

        // Cleanup khi component unmount
        return () => {
            if (swiperInstance1.current) {
                swiperInstance1.current.destroy();
            }
            if (swiperInstance2.current) {
                swiperInstance2.current.destroy();
            }
        };
    }, []);

    return (
        <div className="solv-freight-partner">
            <div className="head-verti center mb-32">
                <h1 className="title title-48 add-class text-verti">
                    {t("components.partner.title")}
                </h1>
            </div>

            {/* Swiper 1 */}
            <div className="solv-our-slide">
                <div
                    ref={swiperRef1}
                    className="swiper row gap-res"
                >
                    <div
                        className="swiper-wrapper"
                        aria-live="polite"
                    >
                        {/* Slide 1 */}
                        <div className="swiper-slide col">
                            <div className="solv-our">
                                <a className="img" href="#">
                                    <img
                                        width="384"
                                        height="201"
                                        src="/images/aw2.webp"
                                        className="attachment-full size-full"
                                        alt="Logo VCCI"
                                        decoding="async"
                                        loading="lazy"
                                        srcSet="/images/aw2.webp 384w, /images/aw2-300x157.webp 300w"
                                    />
                                </a>
                            </div>
                        </div>

                        {/* Slide 2 */}
                        <div className="swiper-slide col">
                            <div className="solv-our">
                                <a className="img" href="#">
                                    <img
                                        width="384"
                                        height="201"
                                        src="/images/aw3.webp"
                                        className="attachment-full size-full"
                                        alt="Logo JC TRANS"
                                        decoding="async"
                                        loading="lazy"
                                        srcSet="/images/aw3.webp 384w, /images/aw3-300x157.webp 300w"
                                    />
                                </a>
                            </div>
                        </div>

                        {/* Slide 3 */}
                        <div className="swiper-slide col">
                            <div className="solv-our">
                                <a className="img" href="#">
                                    <img
                                        width="384"
                                        height="201"
                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw4.jpg"
                                        className="attachment-full size-full"
                                        alt="Logo Postal Service - United States"
                                        decoding="async"
                                        loading="lazy"
                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw4.jpg 384w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw4-300x157.jpg 300w"
                                    />
                                </a>
                            </div>
                        </div>

                        {/* Slide 4 */}
                        <div className="swiper-slide col">
                            <div className="solv-our">
                                <a className="img" href="#">
                                    <img
                                        width="384"
                                        height="201"
                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw5.jpg"
                                        className="attachment-full size-full"
                                        alt="Logo Vietjet Air"
                                        decoding="async"
                                        loading="lazy"
                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw5.jpg 384w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw5-300x157.jpg 300w"
                                    />
                                </a>
                            </div>
                        </div>

                        {/* Slide 5 */}
                        <div className="swiper-slide col">
                            <div className="solv-our">
                                <a className="img" href="#">
                                    <img
                                        width="384"
                                        height="200"
                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw6.jpg"
                                        className="attachment-full size-full"
                                        alt="Logo Korean Air"
                                        decoding="async"
                                        loading="lazy"
                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw6.jpg 384w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw6-300x156.jpg 300w"
                                    />
                                </a>
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

            {/* Swiper 2 */}
            <div className="solv-our-slide">
                <div
                    ref={swiperRef2}
                    className="swiper row gap-res"
                >
                    <div
                        className="swiper-wrapper"
                        aria-live="polite"
                    >
                        {/* Slide 1 */}
                        <div className="swiper-slide col">
                            <div className="solv-our">
                                <a className="img" href="#">
                                    <img
                                        width="384"
                                        height="200"
                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw6-1.jpg"
                                        className="attachment-full size-full"
                                        alt="Partner logo"
                                        decoding="async"
                                        loading="lazy"
                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw6-1.jpg 384w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw6-1-300x156.jpg 300w"
                                    />
                                </a>
                            </div>
                        </div>

                        {/* Slide 2 */}
                        <div className="swiper-slide col">
                            <div className="solv-our">
                                <a className="img" href="#">
                                    <img
                                        width="384"
                                        height="201"
                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw5-1.jpg"
                                        className="attachment-full size-full"
                                        alt="Partner logo"
                                        decoding="async"
                                        loading="lazy"
                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw5-1.jpg 384w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw5-1-300x157.jpg 300w"
                                    />
                                </a>
                            </div>
                        </div>

                        {/* Slide 3 */}
                        <div className="swiper-slide col">
                            <div className="solv-our">
                                <a className="img" href="#">
                                    <img
                                        width="384"
                                        height="201"
                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw4-1.jpg"
                                        className="attachment-full size-full"
                                        alt="Partner logo"
                                        decoding="async"
                                        loading="lazy"
                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw4-1.jpg 384w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw4-1-300x157.jpg 300w"
                                    />
                                </a>
                            </div>
                        </div>

                        {/* Slide 4 */}
                        <div className="swiper-slide col">
                            <div className="solv-our">
                                <a className="img" href="#">
                                    <img
                                        width="384"
                                        height="201"
                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw3-1.jpg"
                                        className="attachment-full size-full"
                                        alt="Partner logo"
                                        decoding="async"
                                        loading="lazy"
                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw3-1.jpg 384w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw3-1-300x157.jpg 300w"
                                    />
                                </a>
                            </div>
                        </div>

                        {/* Slide 5 */}
                        <div className="swiper-slide col">
                            <div className="solv-our">
                                <a className="img" href="#">
                                    <img
                                        width="384"
                                        height="201"
                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw2-1.jpg"
                                        className="attachment-full size-full"
                                        alt="Partner logo"
                                        decoding="async"
                                        loading="lazy"
                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw2-1.jpg 384w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw2-1-300x157.jpg 300w"
                                    />
                                </a>
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

export default Partners;