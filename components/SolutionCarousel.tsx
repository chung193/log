import React, { useState } from "react";
import { useSearchParams } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import { Locale } from '@/lib/i18n';
import FindMoreButton from "./FindMoreButton";
import './SolutionCarousel.css';

const SolutionCarousel: React.FC = ({ initialLocale = 'en' }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const searchParams = useSearchParams();
    const langParam = searchParams.get('lang');

    const locale: Locale =
        langParam === 'en' || langParam === 'vi'
            ? langParam
            : initialLocale;

    const { t } = useTranslations(locale);
    const slides = [
        {
            title: t('components.solution.slides.slide_1_title'),
            description: t('components.solution.slides.slide_1_desc'),
            image: '/wp-content/uploads/2025/04/kv.jpg',
            link: '/giai-phap/giai-phap-kho-van/'
        },
        {
            title: t('components.solution.slides.slide_2_title'),
            description: t('components.solution.slides.slide_2_desc'),
            image: '/wp-content/uploads/2025/04/Untitled-1-1.jpg',
            link: '/giai-phap/giai-phap-sea-freight/'
        },
        {
            title: t('components.solution.slides.slide_3_title'),
            description: t('components.solution.slides.slide_3_desc'),
            image: '/wp-content/uploads/2025/04/Untitled-1-1.jpg',
            link: '/giai-phap/giai-phap-sea-freight/'
        },
        {
            title: t('components.solution.slides.slide_4_title'),
            description: t('components.solution.slides.slide_4_desc'),
            image: '/wp-content/uploads/2025/04/Untitled-1-1.jpg',
            link: '/giai-phap/giai-phap-sea-freight/'
        },
        {
            title: t('components.solution.slides.slide_5_title'),
            description: t('components.solution.slides.slide_5_desc'),
            image: '/wp-content/uploads/2025/04/Untitled-1-1.jpg',
            link: '/giai-phap/giai-phap-sea-freight/'
        }
    ];
    return (
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
                                        display: activeIndex === index ? 'block' : 'none',
                                        maxHeight: activeIndex === index ? '7rem' : '0',
                                        margin: '0 0 20px 0',
                                        fontSize: '15px',
                                        lineHeight: '1.6',
                                        color: 'white',
                                        opacity: activeIndex === index ? 1 : 0,
                                        overflow: 'hidden',
                                    }}
                                >
                                    {slide.description}
                                </p>

                                <FindMoreButton link={slide.link} label={t("components.button.find-more")} />
                            </div>

                        </div>
                    </div>
                </div>
            ))
            }
        </div >
    );
}

export default SolutionCarousel;

