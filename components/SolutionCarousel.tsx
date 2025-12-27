import React, { useState } from "react";
import { useSearchParams } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import { Locale } from '@/lib/i18n';
import FindMoreButton from "./FindMoreButton";

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
            title: t('solution.slides.slide_1_title'),
            description: t('solution.slides.slide_1_desc'),
            image: 'https://vietnampostlogistics.com/wp-content/uploads/2025/04/kv.jpg',
            link: 'https://vietnampostlogistics.com/giai-phap/giai-phap-kho-van/'
        },
        {
            title: t('solution.slides.slide_2_title'),
            description: t('solution.slides.slide_2_desc'),
            image: 'https://vietnampostlogistics.com/wp-content/uploads/2025/04/Untitled-1-1.jpg',
            link: 'https://vietnampostlogistics.com/giai-phap/giai-phap-sea-freight/'
        },
        {
            title: t('solution.slides.slide_3_title'),
            description: t('solution.slides.slide_3_desc'),
            image: 'https://vietnampostlogistics.com/wp-content/uploads/2025/04/Untitled-1-1.jpg',
            link: 'https://vietnampostlogistics.com/giai-phap/giai-phap-sea-freight/'
        },
        {
            title: t('solution.slides.slide_4_title'),
            description: t('solution.slides.slide_4_desc'),
            image: 'https://vietnampostlogistics.com/wp-content/uploads/2025/04/Untitled-1-1.jpg',
            link: 'https://vietnampostlogistics.com/giai-phap/giai-phap-sea-freight/'
        },
        {
            title: t('solution.slides.slide_4_title'),
            description: t('solution.slides.slide_4_desc'),
            image: 'https://vietnampostlogistics.com/wp-content/uploads/2025/04/Untitled-1-1.jpg',
            link: 'https://vietnampostlogistics.com/giai-phap/giai-phap-sea-freight/'
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
    );
}

export default SolutionCarousel;

