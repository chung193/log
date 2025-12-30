"use client";

import React, { useEffect, useRef } from "react";
import './TopStrong.css';

const TopStrong = () => {
    const swiperRef = useRef<HTMLDivElement>(null);
    const swiperInstance = useRef<any>(null);

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
                                L
                            </span>
                            <span className="char" data-char="ĩ" style={{ '--char-index': 1 } as React.CSSProperties}>
                                ĩ
                            </span>
                            <span className="char" data-char="n" style={{ '--char-index': 2 } as React.CSSProperties}>
                                n
                            </span>
                            <span className="char" data-char="h" style={{ '--char-index': 3 } as React.CSSProperties}>
                                h
                            </span>
                        </span>
                        <span className="whitespace"> </span>
                        <span className="word" data-word="vực" style={{ '--word-index': 1 } as React.CSSProperties}>
                            <span className="char" data-char="v" style={{ '--char-index': 4 } as React.CSSProperties}>
                                v
                            </span>
                            <span className="char" data-char="ự" style={{ '--char-index': 5 } as React.CSSProperties}>
                                ự
                            </span>
                            <span className="char" data-char="c" style={{ '--char-index': 6 } as React.CSSProperties}>
                                c
                            </span>
                        </span>
                        <span className="whitespace"> </span>
                        <span className="word" data-word="thế" style={{ '--word-index': 2 } as React.CSSProperties}>
                            <span className="char" data-char="t" style={{ '--char-index': 7 } as React.CSSProperties}>
                                t
                            </span>
                            <span className="char" data-char="h" style={{ '--char-index': 8 } as React.CSSProperties}>
                                h
                            </span>
                            <span className="char" data-char="ế" style={{ '--char-index': 9 } as React.CSSProperties}>
                                ế
                            </span>
                        </span>
                        <span className="whitespace"> </span>
                        <span className="word" data-word="mạnh" style={{ '--word-index': 3 } as React.CSSProperties}>
                            <span className="char" data-char="m" style={{ '--char-index': 10 } as React.CSSProperties}>
                                m
                            </span>
                            <span className="char" data-char="ạ" style={{ '--char-index': 11 } as React.CSSProperties}>
                                ạ
                            </span>
                            <span className="char" data-char="n" style={{ '--char-index': 12 } as React.CSSProperties}>
                                n
                            </span>
                            <span className="char" data-char="h" style={{ '--char-index': 13 } as React.CSSProperties}>
                                h
                            </span>
                        </span>
                    </h3>
                </div>
                <div className="line aos-init" data-aos="fade-up-cus">
                    <p className="desc">
                        Với kinh nghiệm dày dặn và đội ngũ nhân viên chuyên nghiệp, chúng tôi tự tin chinh phục những khách hàng khó tính nhất, đặc biệt trong các
                        lĩnh vực:
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
                                                src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/Screenshot_2025-04-24_141744-removebg-preview.png"
                                                className="attachment-full size-full"
                                                alt="Sản phẩm công nghệ"
                                                decoding="async"
                                                loading="lazy"
                                                srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/Screenshot_2025-04-24_141744-removebg-preview.png 605w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/Screenshot_2025-04-24_141744-removebg-preview-300x204.png 300w"
                                            />
                                        </a>
                                    </div>
                                    <div className="info">
                                        <h4>
                                            <a className="info-tt" href="#">
                                                Sản phẩm công nghệ
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
                                                src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hydraulic-ironworker-sw132-removebg-preview.png"
                                                className="attachment-full size-full"
                                                alt="Thiết bị công nghiệp"
                                                decoding="async"
                                                loading="lazy"
                                                srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hydraulic-ironworker-sw132-removebg-preview.png 436w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/hydraulic-ironworker-sw132-removebg-preview-228x300.png 228w"
                                            />
                                        </a>
                                    </div>
                                    <div className="info">
                                        <h4>
                                            <a className="info-tt" href="#">
                                                Thiết bị công nghiệp
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
                                                src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/pngtree-advanced-medical-equipment-png-image_17293421-removebg-preview.png"
                                                className="attachment-full size-full"
                                                alt="Thiết bị y tế"
                                                decoding="async"
                                                loading="lazy"
                                                srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/pngtree-advanced-medical-equipment-png-image_17293421-removebg-preview.png 500w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/pngtree-advanced-medical-equipment-png-image_17293421-removebg-preview-300x300.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/pngtree-advanced-medical-equipment-png-image_17293421-removebg-preview-150x150.png 150w"
                                            />
                                        </a>
                                    </div>
                                    <div className="info">
                                        <h4>
                                            <a className="info-tt" href="#">
                                                Thiết bị y tế
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
                                                src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/Construction-Materials-Are-Used-for-Buildings-removebg-preview.png"
                                                className="attachment-full size-full"
                                                alt="Vật liệu xây dựng"
                                                decoding="async"
                                                loading="lazy"
                                                srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/Construction-Materials-Are-Used-for-Buildings-removebg-preview.png 667w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/Construction-Materials-Are-Used-for-Buildings-removebg-preview-300x168.png 300w"
                                            />
                                        </a>
                                    </div>
                                    <div className="info">
                                        <h4>
                                            <a className="info-tt" href="#">
                                                Vật liệu xây dựng
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