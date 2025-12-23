'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import FindMoreButton from './FindMoreButton'

const slides = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&h=900&fit=crop',
        title: 'Giới thiệu',
        link: '/giai-phap/giai-phap-cross-border-truck/'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&h=900&fit=crop',
        title: 'Hệ sinh thái',
        link: '/giai-phap/giai-phap-cross-border-truck/'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1600&h=900&fit=crop',
        title: 'Giải pháp',
        link: '/giai-phap/thuong-mai-dien-tu-quoc-te/'
    }
]

export default function HomeBanner() {
    const [activeIndex, setActiveIndex] = useState(0)

    const handleNext = () => {
        setActiveIndex((activeIndex + 1) % slides.length)
    }

    const handlePrev = () => {
        setActiveIndex((activeIndex - 1 + slides.length) % slides.length)
    }

    // Click trực tiếp vào preview slide để set nó thành active
    const handlePreviewClick = (index) => {
        setActiveIndex(index)
    }

    // Lấy slide tiếp theo dựa trên offset
    const getSlideAtOffset = (offset) => {
        return slides[(activeIndex + offset) % slides.length]
    }

    return (
        <section className="relative w-full h-[640px] bg-black overflow-hidden">
            <style jsx>{`
                .banner-grid {
                    display: grid;
                    grid-template-columns: 1fr 255px 255px;
                    grid-template-rows: 1fr;
                    gap: 0px;
                    max-height: 622px;
                    padding: 0;
                }

                .main-slide {
                    grid-column: 1;
                    grid-row: 1;
                    position: relative;
                    overflow: hidden;
                }

                .preview-slide {
                    position: relative;
                    overflow: hidden;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .preview-slide:hover {
                    opacity: 0.9;
                }

                .preview-slide::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: rgba(0, 0, 0, 0.4);
                }

                .slide-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }

                .main-slide .slide-image {
                    transform: scale(1.05);
                }

                .main-overlay {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 50%;
                    background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%);
                }

                .preview-overlay {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 50%;
                    background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%);
                }

                .preview-title {
                    position: absolute;
                    bottom: 20px;
                    left: 20px;
                    color: white;
                    font-size: 24px;
                    font-weight: 700;
                    z-index: 10;
                    text-shadow: 0 2px 8px rgba(0,0,0,0.5);
                }

                .main-title {
                    position: absolute;
                    bottom: 100px;
                    left: 20px;
                    color: white;
                    font-size: 32px;
                    font-weight: 700;
                    z-index: 10;
                    text-shadow: 0 2px 8px rgba(0,0,0,0.5);
                }

                .nav-btn {
                    position: absolute;
                    width: 4rem;
                    height: 4rem;
                    background: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    z-index: 30;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
                }

                .nav-btn:hover {
                    box-shadow: 0 6px 16px rgba(0,0,0,0.3);
                }

                .nav-next {
                    position: absolute;
                    top: 50%;
                    right: 5%;
                    overflow: hidden;
                    transform: translateY(-50%);
                }

                .nav-next::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: #ff8c00;
                    border-radius: 50%;
                    z-index: -1;
                    transition: left 0.4s ease;
                }

                .nav-next:hover::before {
                    left: 0;
                }

                .nav-next:hover {
                    color: white;
                }

                .find-more-button {
                    animation: fadeInUp 0.5s ease-out;
                    margin-top: 15px;
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>

            <div className="banner-grid">
                {/* Main Slide - Luôn hiển thị slide active */}
                <div className="main-slide">
                    <img
                        src={slides[activeIndex].image}
                        alt={slides[activeIndex].title}
                        className="slide-image"
                    />
                    <div className="main-overlay"></div>

                    <div className="main-title">
                        {slides[activeIndex].title}
                        <div className="find-more-button">
                            <FindMoreButton
                                href={slides[activeIndex].link}
                                label="Tìm hiểu thêm"
                            />
                        </div>
                    </div>

                    {/* Nút Next nằm trong main slide */}
                    <div className="nav-next nav-btn" onClick={handleNext}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>

                {/* Preview Slide 1 */}
                <div
                    className="preview-slide"
                    onClick={() => handlePreviewClick((activeIndex + 1) % slides.length)}
                    style={{ gridColumn: '2', gridRow: '1' }}
                >
                    <img
                        src={getSlideAtOffset(1).image}
                        alt={getSlideAtOffset(1).title}
                        className="slide-image"
                    />
                    <div className="preview-overlay"></div>
                    <div className="preview-title">
                        {getSlideAtOffset(1).title}
                    </div>
                </div>

                {/* Preview Slide 2 */}
                <div
                    className="preview-slide"
                    onClick={() => handlePreviewClick((activeIndex + 2) % slides.length)}
                    style={{ gridColumn: '3', gridRow: '1' }}
                >
                    <img
                        src={getSlideAtOffset(2).image}
                        alt={getSlideAtOffset(2).title}
                        className="slide-image"
                    />
                    <div className="preview-overlay"></div>
                    <div className="preview-title">
                        {getSlideAtOffset(2).title}
                    </div>
                </div>
            </div>
        </section>
    )
}