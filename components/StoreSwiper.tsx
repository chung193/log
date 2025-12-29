"use client";

import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import './StoreSwiper.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const StoreSwiper = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        // Khởi tạo Swiper sau khi component mount
        if (swiperRef.current) {
            const swiperInstance = new Swiper(swiperRef.current, {
                modules: [Navigation, Pagination, Autoplay],
                slidesPerView: 1,
                spaceBetween: 0,
                breakpoints: {
                    640: { slidesPerView: 2, spaceBetween: 0 },
                    768: { slidesPerView: 3, spaceBetween: 0 },
                    1024: { slidesPerView: 4, spaceBetween: 0 },
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                loop: true,
            });

            // Cleanup
            return () => {
                if (swiperInstance) {
                    swiperInstance.destroy();
                }
            };
        }
    }, []);

    return (
        <>
            {/* Thêm navigation buttons nếu cần */}
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>

            <div
                ref={swiperRef}
                className="swiper row rows-4 gap-res swiper-initialized swiper-horizontal swiper-pointer-events"
            >
                <div className="swiper-wrapper">
                    {/* Slide 1 */}
                    <div className="swiper-slide col">
                        <div className="store-ser-swiper-it">
                            <div className="inner">
                                <div className="img">
                                    <a className="img-inner" href="https://vietnampostlogistics.com/dich-vu-cho-thue-kho-bai-uy-tin-chat-luong-hang-dau-viet-nam/">
                                        <img
                                            width="286"
                                            height="346"
                                            src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/storage1.jpg"
                                            alt="Dịch vụ cho thuê kho bãi"
                                        />
                                    </a>
                                </div>
                                <div className="info">
                                    <a className="btn-circle" href="https://vietnampostlogistics.com/dich-vu-cho-thue-kho-bai-uy-tin-chat-luong-hang-dau-viet-nam/">
                                        <img src="https://vietnampostlogistics.com/template/assets/images/ic-arrow.svg" alt="arrow" />
                                    </a>
                                    <p className="info-des">Dịch vụ cho thuê kho bãi</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="swiper-slide col">
                        <div className="store-ser-swiper-it">
                            <div className="inner">
                                <div className="img">
                                    <a className="img-inner" href="https://vietnampostlogistics.com/dich-vu-gia-tri-gia-tang/">
                                        <img
                                            width="286"
                                            height="346"
                                            src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/storage2.jpg"
                                            alt="Dịch vụ gia tăng"
                                        />
                                    </a>
                                </div>
                                <div className="info">
                                    <a className="btn-circle" href="https://vietnampostlogistics.com/dich-vu-gia-tri-gia-tang/">
                                        <img src="https://vietnampostlogistics.com/template/assets/images/ic-arrow.svg" alt="arrow" />
                                    </a>
                                    <p className="info-des">Dịch vụ gia tăng: phân loại, chia chọn và soạn theo đơn hàng, in, dán tem.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div className="swiper-slide col">
                        <div className="store-ser-swiper-it">
                            <div className="inner">
                                <div className="img">
                                    <a className="img-inner" href="https://vietnampostlogistics.com/giai-phap-xuat-nhap-khau-tai-kho-va-quan-ly-hang-hoa/">
                                        <img
                                            width="286"
                                            height="346"
                                            src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/storage3.jpg"
                                            alt="Dịch vụ xuất nhập khẩu"
                                        />
                                    </a>
                                </div>
                                <div className="info">
                                    <a className="btn-circle" href="https://vietnampostlogistics.com/giai-phap-xuat-nhap-khau-tai-kho-va-quan-ly-hang-hoa/">
                                        <img src="https://vietnampostlogistics.com/template/assets/images/ic-arrow.svg" alt="arrow" />
                                    </a>
                                    <p className="info-des">Dịch vụ xuất nhập khẩu tại kho và quản lý hàng hóa.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slide 4 */}
                    <div className="swiper-slide col">
                        <div className="store-ser-swiper-it">
                            <div className="inner">
                                <div className="img">
                                    <a className="img-inner" href="https://vietnampostlogistics.com/dich-vu-hai-quan-cua-vietnam-post-logistics/">
                                        <img
                                            width="286"
                                            height="346"
                                            src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/storage4.jpg"
                                            alt="Dịch vụ hải quan"
                                        />
                                    </a>
                                </div>
                                <div className="info">
                                    <a className="btn-circle" href="https://vietnampostlogistics.com/dich-vu-hai-quan-cua-vietnam-post-logistics/">
                                        <img src="https://vietnampostlogistics.com/template/assets/images/ic-arrow.svg" alt="arrow" />
                                    </a>
                                    <p className="info-des">Dịch vụ hải quan: thông quan và giám sát hải quan nhập kho.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pagination */}
                <div className="swiper-pagination"></div>
            </div>
        </>
    );
};

export default StoreSwiper;