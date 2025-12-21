import React from 'react';
import './Solution.css';

const Solution: React.FC = () => {
    return (
        <div className="sec-homes-solv">
            <div className="homes-solv ss-pd-t splitCardJS">
                <div className="homes-solv-svg">
                    <svg className="main-svg" viewBox="0 0 1728 259" xmlns="http://www.w3.org/2000/svg">
                        <path
                            className="main-line"
                            opacity="0.2"
                            d="M2 256C2 256 307.173 3 862.861 3C1418.55 3 1726 256 1726 256"
                            stroke="black"
                            strokeWidth="6"
                            fill="none"
                        />
                        <path
                            className="animated-line"
                            d="M2 256C2 256 307.173 3 862.861 3C1418.55 3 1726 256 1726 256"
                            stroke="#FBAE17"
                            strokeWidth="6"
                            fill="none"
                            style={{
                                strokeDashoffset: '1454px',
                                strokeDasharray: '1826px'
                            }}
                        />
                    </svg>
                    <svg
                        className="moving-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 81 40"
                        height="40"
                        width="81"
                        style={{
                            translate: 'none',
                            rotate: 'none',
                            scale: 'none',
                            transformOrigin: '50% 50%',
                            transform: 'translate3d(-708.562px, -55.0349px, 0px) rotate(-18.8426deg)'
                        }}
                    >
                        <path
                            strokeWidth="6"
                            stroke="#FBAE17"
                            fill="white"
                            d="M59.2802 2.99219H3.78271V36.9702H59.2802L76.2692 19.9812L59.2802 2.99219Z"
                        />
                    </svg>
                </div>
                <div className="homes-solv-con">
                    <div className="img">
                        <div className="img-inner" id="viewer">
                            {Array.from({ length: 72 }, (_, i) => i + 101).map((num) => (
                                <img
                                    key={num}
                                    src={`https://vietnampostlogistics.com/template/assets/images/container_${num}.png`}
                                    alt=""
                                    className={num === 112 ? 'active' : ''}
                                />
                            ))}
                        </div>
                    </div>
                </div>
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

                                    {/* Slide 3 - TMĐT Quốc tế */}
                                    <div className="swiper-slide col splitCardItemJS swiper-slide-visible" role="group" aria-label="3 / 5">
                                        <div className="homes-solv-it">
                                            <div className="inner">
                                                <div className="bg">
                                                    <img
                                                        width="954"
                                                        height="1226"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/tmdt.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Dịch vụ TMĐT Xuyên biên giới"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <div className="info">
                                                    <div className="info-tags"></div>
                                                    <h4>
                                                        <a className="info-tt" href="https://vietnampostlogistics.com/giai-phap/thuong-mai-dien-tu-quoc-te/">
                                                            Thương mại điện tử Quốc tế
                                                        </a>
                                                    </h4>
                                                    <p className="info-des">
                                                        Nhanh chóng và uy tín, đảm bảo chất lượng giao nhận hai đầu.
                                                    </p>
                                                    <div className="btn-box">
                                                        <a className="btn full white" href="https://vietnampostlogistics.com/giai-phap/thuong-mai-dien-tu-quoc-te/">
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

                                    {/* Slide 4 - Logistics Nội địa */}
                                    <div className="swiper-slide col splitCardItemJS swiper-slide-visible" role="group" aria-label="4 / 5">
                                        <div className="homes-solv-it">
                                            <div className="inner">
                                                <div className="bg">
                                                    <img
                                                        width="954"
                                                        height="1226"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/nd.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Xe tải vận chuyển hàng hóa của Vietnam Post Logistics"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <div className="info">
                                                    <div className="info-tags"></div>
                                                    <h4>
                                                        <a className="info-tt" href="https://vietnampostlogistics.com/giai-phap/logistics-noi-dia/">
                                                            Logistics Nội địa
                                                        </a>
                                                    </h4>
                                                    <p className="info-des">
                                                        Đội ngũ xe chuyên nghiệp và chất lượng cao.
                                                    </p>
                                                    <div className="btn-box">
                                                        <a className="btn full white" href="https://vietnampostlogistics.com/giai-phap/logistics-noi-dia/">
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

                                    {/* Slide 5 - Xuất Nhập khẩu */}
                                    <div className="swiper-slide col splitCardItemJS active swiper-slide-visible" role="group" aria-label="5 / 5">
                                        <div className="homes-solv-it">
                                            <div className="inner">
                                                <div className="bg">
                                                    <img
                                                        width="954"
                                                        height="1226"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/xnk.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Xuất nhập khẩu hàng hóa Vietnam Post Logistics"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <div className="info">
                                                    <div className="info-tags"></div>
                                                    <h4>
                                                        <a className="info-tt" href="https://vietnampostlogistics.com/giai-phap/tai-chinh-chuoi-cung-ung/">
                                                            Xuất - Nhập khẩu
                                                        </a>
                                                    </h4>
                                                    <p className="info-des">
                                                        Giải pháp xuất nhập khẩu và tài chính chuỗi cung ứng.
                                                    </p>
                                                    <div className="btn-box">
                                                        <a className="btn full white" href="https://vietnampostlogistics.com/giai-phap/tai-chinh-chuoi-cung-ung/">
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
                                </div>
                                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                            </div>
                            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-lock">
                                <span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex={0} role="button" aria-label="Go to slide 1" aria-current="true"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solution;