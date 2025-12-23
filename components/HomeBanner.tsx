'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import FindMoreButton from './FindMoreButton'
import './HomeBanner.css' // Import file CSS riêng cho component
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