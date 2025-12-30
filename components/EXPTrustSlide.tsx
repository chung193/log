'use client'
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const EXPTrustSlide = () => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    const slides = [
        {
            id: 1,
            title: "Ủy thác nhập khẩu",
            image: "https://vietnampostlogistics.com/wp-content/uploads/2025/03/exp1.jpg",
            link: "https://vietnampostlogistics.com/uy-thac-nhap-khau-vietnam-post-logistics/",
            alt: "Bãi containers",
            description: "Đảm bảo hàng hóa từ các quốc gia khác về Việt Nam nhanh chóng, thuận tiện."
        },
        {
            id: 2,
            title: "Ủy thác xuất khẩu",
            image: "https://vietnampostlogistics.com/wp-content/uploads/2025/03/exp2.jpg",
            link: "https://vietnampostlogistics.com/uy-thac-xuat-khau-vietnam-post-logistics/",
            alt: "thùng hàng carton và pallet",
            description: "Hỗ trợ đưa sản phẩm của bạn đến tay khách hàng quốc tế một cách chuyên nghiệp."
        },
        {
            id: 3,
            title: "Hỗ trợ khai báo hải quan",
            image: "https://vietnampostlogistics.com/wp-content/uploads/2025/03/exp3.jpg",
            link: "https://vietnampostlogistics.com/ho-tro-khai-bao-hai-quan-vietnam-post-logistics/",
            alt: "Bê thùng hàng",
            description: "Chuẩn bị và xử lý hồ sơ chính xác, giảm thiểu rủi ro sai sót."
        },
        {
            id: 4,
            title: "Tư vấn chính sách xuất nhập khẩu",
            image: "https://vietnampostlogistics.com/wp-content/uploads/2025/03/exp4.jpg",
            link: "https://vietnampostlogistics.com/tu-van-chinh-sach-xuat-nhap-khau-vietnam-post-logistics/",
            alt: "sân bay",
            description: "Giải đáp mọi thắc mắc và cập nhật thông tin mới nhất."
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
                                            src="https://vietnampostlogistics.com/template/assets/images/ic-arrow.svg"
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