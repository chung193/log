'use client';
import React, { useState } from 'react';
import FindMoreButton from './FindMoreButton';
const Solution: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Col đầu tiên active mặc định

    const slides = [
        {
            title: 'Kho vận',
            description: 'Giải pháp kho vận thông minh, giúp doanh nghiệp tối ưu hoạt động và nguồn vốn.',
            image: 'https://vietnampostlogistics.com/wp-content/uploads/2025/04/kv.jpg',
            link: 'https://vietnampostlogistics.com/giai-phap/giai-phap-kho-van/'
        },
        {
            title: 'Logistics Quốc tế',
            description: 'Cung cấp giải pháp Logistics toàn diện từ đường biển, hàng không, đường bộ, đường sắt và hơn thế nữa.',
            image: 'https://vietnampostlogistics.com/wp-content/uploads/2025/04/Untitled-1-1.jpg',
            link: 'https://vietnampostlogistics.com/giai-phap/giai-phap-sea-freight/'
        },
        {
            title: 'Vận tải đường bộ',
            description: 'Dịch vụ vận chuyển đường bộ nhanh chóng, an toàn trên toàn quốc.',
            image: 'https://vietnampostlogistics.com/wp-content/uploads/2025/04/Untitled-1-1.jpg',
            link: 'https://vietnampostlogistics.com/giai-phap/giai-phap-sea-freight/'
        },
        {
            title: 'E-commerce Logistics',
            description: 'Giải pháp logistics chuyên biệt cho thương mại điện tử.',
            image: 'https://vietnampostlogistics.com/wp-content/uploads/2025/04/Untitled-1-1.jpg',
            link: 'https://vietnampostlogistics.com/giai-phap/giai-phap-sea-freight/'
        },
        {
            title: 'Dịch vụ tùy chỉnh',
            description: 'Giải pháp logistics được thiết kế riêng theo nhu cầu doanh nghiệp.',
            image: 'https://vietnampostlogistics.com/wp-content/uploads/2025/04/Untitled-1-1.jpg',
            link: 'https://vietnampostlogistics.com/giai-phap/giai-phap-sea-freight/'
        }
    ];

    return (
        <div className="homes-solv-slide ss-pd" style={{ padding: '60px 20px' }}>
            <div className="container" style={{ maxWidth: '1230px', margin: '0 auto', padding: '0 15px' }}>
                <div className="head-verti center mb-32" style={{ textAlign: 'center', marginBottom: '32px' }}>
                    <div className="line">
                        <h2 className="title title-48" style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: '700', marginBottom: '20px' }}>
                            Giải pháp toàn diện
                        </h2>
                    </div>
                    <div className="line">
                        <p className="desc" style={{ fontSize: '16px', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto', color: '#666' }}>
                            Là hệ sinh thái Logistics toàn diện hàng đầu Việt Nam, chúng tôi luôn tập trung hướng đến sự chuyên nghiệp, nhanh chóng và tiện lợi, nhằm cung cấp cho khách hàng những dịch vụ chất lượng nhất.<br />
                            Vietnam Post Logistics đã và đang mang đến một hệ sinh thái Logistics bao gồm 5 giải pháp toàn diện dành cho khách hàng từ nội địa đến Quốc tế.
                        </p>
                    </div>
                </div>
            </div>

            <div
                className="row gap-res"
                style={{
                    display: 'flex',
                    gap: '0px',
                    width: '100%',
                    margin: '0 auto',
                    padding: '0 20px'
                }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="col"
                        onMouseEnter={() => setActiveIndex(index)}
                        style={{
                            width: activeIndex === index ? '27%' : '18%',
                            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                            cursor: 'pointer',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <div
                            className="homes-solv-it"
                            style={{
                                position: 'relative',
                                height: '600px',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                            }}
                        >
                            <div className="inner" style={{ position: 'relative', width: '100%', height: '100%' }}>
                                {/* Background Image */}
                                <div
                                    className="bg"
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        transition: 'transform 0.5s ease',
                                        transform: activeIndex === index ? 'scale(1)' : 'scale(1.1)'
                                    }}
                                >
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            filter: activeIndex === index ? 'brightness(0.6)' : 'brightness(0.4)'
                                        }}
                                        loading="lazy"
                                    />
                                </div>

                                {/* Info Content */}
                                <div
                                    className="test"
                                    style={{
                                        position: 'absolute',
                                        bottom: '0 !important',
                                        left: 0,
                                        width: '100%',
                                        top: 'auto !important',
                                        padding: '30px',
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
                                        color: 'white',
                                        transition: 'opacity 0.5s ease',
                                        opacity: activeIndex === index ? 1 : 0.9
                                    }}
                                >
                                    <h4 style={{ margin: '0 0 15px 0', fontSize: '24px', fontWeight: '700' }}>
                                        <a
                                            className="info-tt"
                                            href={slide.link}
                                            style={{
                                                color: 'white',
                                                textDecoration: 'none',
                                                //display: activeIndex === index ? 'block' : 'none'
                                            }}
                                        >
                                            {slide.title}
                                        </a>
                                    </h4>

                                    <p
                                        className="info-des"
                                        style={{
                                            margin: '0 0 20px 0',
                                            fontSize: '15px',
                                            lineHeight: '1.6',
                                            //opacity: activeIndex === index ? 1 : 0,
                                            // maxHeight: activeIndex === index ? '200px' : '0',
                                            overflow: 'hidden',
                                            transition: 'all 0.5s ease'
                                        }}
                                    >
                                        {slide.description}
                                    </p>

                                    <FindMoreButton link={slide.link} />
                                </div>

                                {/* Title cho col nhỏ */}
                                {/* {activeIndex !== index && (
                                    <div
                                        style={{
                                            position: 'absolute',
                                            bottom: '30px',
                                            left: '50%',
                                            transform: 'translateX(-50%) rotate(-90deg)',
                                            transformOrigin: 'center',
                                            whiteSpace: 'nowrap',
                                            color: 'white',
                                            fontSize: '18px',
                                            fontWeight: '700',
                                            textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                                        }}
                                    >
                                        {slide.title}
                                    </div>
                                )} */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default Solution;