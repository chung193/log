'use client';
import React, { useEffect, useRef, useState } from 'react';
import './Solution.css';

const Solution: React.FC = () => {
    const viewerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const movingIconRef = useRef<SVGSVGElement>(null);
    const pathRef = useRef<SVGPathElement>(null);
    const [currentFrame, setCurrentFrame] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !viewerRef.current) return;

            const section = sectionRef.current;
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Tính toán khi section nằm trong viewport
            if (rect.top < windowHeight && rect.bottom > 0) {
                // Tính % scroll qua section này
                const scrollProgress = Math.max(0, Math.min(1,
                    (windowHeight - rect.top) / (windowHeight + rect.height)
                ));

                // 72 frames (101-172) cho container
                const totalFrames = 72;
                const frameIndex = Math.floor(scrollProgress * (totalFrames - 1));
                setCurrentFrame(frameIndex);

                // Animation cho moving-icon và đường vàng
                if (pathRef.current && movingIconRef.current) {
                    const path = pathRef.current;
                    const pathLength = path.getTotalLength();
                    const currentLength = scrollProgress * pathLength;
                    const targetPoint = path.getPointAtLength(currentLength);

                    // Tính góc xoay
                    const delta = 10;
                    const prevLength = Math.max(0, currentLength - delta);
                    const prevPoint = path.getPointAtLength(prevLength);
                    const angle = Math.atan2(targetPoint.y - prevPoint.y, targetPoint.x - prevPoint.x) * (180 / Math.PI);

                    // Cập nhật vị trí icon
                    const icon = movingIconRef.current;
                    icon.style.left = `${targetPoint.x}px`;
                    icon.style.top = `${targetPoint.y}px`;
                    icon.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

                    // Cập nhật đường vàng - chỉ vẽ từ đầu đến icon
                    const remainingLength = pathLength - currentLength;
                    path.style.strokeDasharray = `${pathLength}`;
                    path.style.strokeDashoffset = `${remainingLength}`;
                }
            }
        };

        // Khởi tạo strokeDasharray ban đầu
        if (pathRef.current) {
            const pathLength = pathRef.current.getTotalLength();
            pathRef.current.style.strokeDasharray = `${pathLength}`;
            pathRef.current.style.strokeDashoffset = `${pathLength}`;
        }

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Chạy lần đầu

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="sec-homes-solv" ref={sectionRef}>
            <div className="homes-solv ss-pd-t splitCardJS">
                <div className="homes-solv-svg">
                    <svg className="main-svg" viewBox="0 0 1728 259" xmlns="http://www.w3.org/2000/svg">
                        {/* Đường mờ - luôn hiện full */}
                        <path
                            className="main-line"
                            opacity="0.2"
                            d="M2 256C2 256 307.173 3 862.861 3C1418.55 3 1726 256 1726 256"
                            stroke="black"
                            strokeWidth="6"
                            fill="none"
                        />
                        {/* Đường vàng - animated */}
                        <path
                            ref={pathRef}
                            className="animated-line"
                            d="M2 256C2 256 307.173 3 862.861 3C1418.55 3 1726 256 1726 256"
                            stroke="#FBAE17"
                            strokeWidth="6"
                            fill="none"
                        />
                    </svg>
                    {/* Icon di chuyển */}
                    <svg
                        ref={movingIconRef}
                        className="moving-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 81 40"
                        height="40"
                        width="81"
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
                        <div className="img-inner" id="viewer" ref={viewerRef}>
                            {Array.from({ length: 72 }, (_, i) => i + 101).map((num, index) => (
                                <img
                                    key={num}
                                    src={`https://vietnampostlogistics.com/template/assets/images/container_${num}.png`}
                                    alt=""
                                    className={index === currentFrame ? 'active' : ''}
                                    style={{ display: index === currentFrame ? 'block' : 'none' }}
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

                                    {/* Các slide khác tương tự... */}
                                </div>
                                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solution;