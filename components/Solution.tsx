'use client';
import React, { useEffect, useRef, useState } from 'react';
import './Solution.css';

const Solution: React.FC = () => {

    return (
        <div className="homes-solv-slide ss-pd">
            <div className="container">
                <div className="head-verti center mb-32">
                    <div className="line aos-init aos-animate" data-aos="fade-up-cus">
                        <h2 className="title title-48 add-className text-verti is-inview">
                            Giải pháp toàn diện
                        </h2>
                    </div>
                    <div className="line aos-init aos-animate" data-aos="fade-up-cus" data-aos-delay="400">
                        <p className="desc">
                            Là hệ sinh thái Logistics toàn diện hàng đầu Việt Nam, chúng tôi luôn tập trung hướng đến sự chuyên nghiệp, nhanh chóng và tiện lợi, nhằm cung cấp cho khách hàng những dịch vụ chất lượng nhất.<br />
                            Vietnam Post Logistics đã và đang mang đến một hệ sinh thái Logistics bao gồm 5 giải pháp toàn diện dành cho khách hàng từ nội địa đến Quốc tế.
                        </p>
                    </div>
                </div>
            </div>
            <div className="homes-solv-swiper">
                <div className="homes-solv-swiper-box">
                    <div className="swiper row rows-5 gap-res swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                        <div
                            className="swiper-wrapper"
                            id="swiper-wrapper-4717ac6636d3a127"
                            aria-live="polite"
                            style={{ transform: 'translate3d(0px, 0px, 0px)' }}
                        >
                            {/* Slide 1 - Kho vận */}
                            <div className="swiper-slide col splitCardItemJS swiper-slide-visible swiper-slide-active" role="group" aria-label="1 / 5" style={{ minHeight: '785px' }}>
                                <div className="homes-solv-it">
                                    <div className="inner">
                                        <div className="bg">
                                            <img
                                                width="954"
                                                height="1226"
                                                src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/kv.jpg"
                                                className="attachment-full size-full"
                                                alt="Vận hành bên trong kho Vietnam Post Logistics"
                                                decoding="async"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="info">
                                            <div className="info-tags"></div>
                                            <h4>
                                                <a className="info-tt" href="https://vietnampostlogistics.com/giai-phap/giai-phap-kho-van/">
                                                    Kho vận
                                                </a>
                                            </h4>
                                            <p className="info-des">
                                                Giải pháp kho vận thông minh, giúp doanh nghiệp tối ưu hoạt động và nguồn vốn.
                                            </p>
                                            <div className="btn-box">
                                                <a className="btn full white" href="https://vietnampostlogistics.com/giai-phap/giai-phap-kho-van/">
                                                    <span className="txt">
                                                        <span className="txt-inner">Xem chi tiết</span>
                                                        <span className="txt-icon">
                                                            <img src="https://vietnampostlogistics.com/template/assets/images/ic-arrow.svg" alt="" />
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Slide 2 - Logistics Quốc tế */}
                            <div className="swiper-slide col splitCardItemJS swiper-slide-visible swiper-slide-next" role="group" aria-label="2 / 5">
                                <div className="homes-solv-it">
                                    <div className="inner">
                                        <div className="bg">
                                            <img
                                                width="954"
                                                height="1226"
                                                src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/Untitled-1-1.jpg"
                                                className="attachment-full size-full"
                                                alt="Vận chuyển đường biển và hàng không"
                                                decoding="async"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="info">
                                            <div className="info-tags"></div>
                                            <h4>
                                                <a className="info-tt" href="https://vietnampostlogistics.com/giai-phap/giai-phap-sea-freight/">
                                                    Logistics Quốc tế
                                                </a>
                                            </h4>
                                            <p className="info-des">
                                                Cung cấp giải pháp Logistics toàn diện từ đường biển, hàng không, đường bộ, đường sắt và hơn thế nữa.
                                            </p>
                                            <div className="btn-box">
                                                <a className="btn full white" href="https://vietnampostlogistics.com/giai-phap/giai-phap-sea-freight/">
                                                    <span className="txt">
                                                        <span className="txt-inner">Xem chi tiết</span>
                                                        <span className="txt-icon">
                                                            <img src="https://vietnampostlogistics.com/template/assets/images/ic-arrow.svg" alt="" />
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Các slide khác tương tự... */}
                        </div>
                        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solution;