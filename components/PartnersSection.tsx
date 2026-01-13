'use client';

import React, { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import { Locale } from '@/lib/i18n';

const PartnersSection = () => {
    const searchParams = useSearchParams();
    const langParam = searchParams.get('lang');

    const locale: Locale =
        langParam === 'en' || langParam === 'vi'
            ? langParam
            : 'en';

    const { t } = useTranslations(locale);

    // Danh sách logo đối tác hiệp hội
    const associations = [
        { id: 1, name: 'VCCI', logo: '/images/hh2.webp' },
        { id: 2, name: 'JCTRANS', logo: '/images/hh3.webp' },
        { id: 3, name: 'IATA', logo: '/images/hh4.webp' },
        { id: 4, name: 'WCA', logo: '/images/hh1.webp' },
    ];

    // Danh sách logo mạng lưới đối tác
    const partners = [
        { id: 1, name: 'ZIM', logo: '/images/zim@logotyp.us_.webp' },
        { id: 2, name: 'hapag-lloyd', logo: '/images/hapag-lloyd@logotyp.us_.webp' },
        { id: 3, name: 'Cargolux', logo: '/images/pn6.webp' },
        { id: 4, name: 'Vietjet Air', logo: '/images/pn5.webp' },
        { id: 5, name: 'Qatar Airways', logo: '/images/pn4.webp' },
        { id: 6, name: 'Korean Air', logo: '/images/pn3.webp' },
        { id: 7, name: 'United States', logo: '/images/pn2.webp' }
    ];

    const partners2 = [
        { id: 1, name: 'Maersk', logo: '/images/Maersk-Logo-500x313-1.png' },
        { id: 2, name: 'Maersk', logo: '/images/cosco@logotyp.us_.webp' },
        { id: 3, name: 'Cargolux', logo: '/images/50b7b3c77c77a142b07c8a371bdd487f (1).png' },
        { id: 4, name: 'Vietjet Air', logo: '/images/hmm@logotyp.us_.webp' },
        { id: 5, name: 'Qatar Airways', logo: '/images/ocean-network-express-one-vector-logo-01-2048x2048.png' },
        { id: 6, name: 'Korean Air', logo: '/images/logo-bamboo-airways-inkythuatso-1 (1).png' },
    ];

    return (
        <div style={{
            padding: '80px 20px',
            backgroundColor: '#f8f9fa'
        }}>
            <div style={{
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                {/* Section 1 - Các hiệp hội tham gia - SCROLL LEFT */}
                <div style={{ marginBottom: '80px' }}>
                    <h2 style={{
                        fontSize: '36px',
                        fontWeight: 'bold',
                        color: '#1a3b5c',
                        textAlign: 'center',
                        marginBottom: '50px'
                    }}>
                        {t("components.partner.title")}
                    </h2>

                    {/* Swiper Container - Scroll Left */}
                    <div className="swiper" style={{ overflow: 'hidden' }}>
                        <div className="swiper-wrapper" style={{
                            display: 'flex',
                            gap: '60px',
                            animation: 'scroll-left 20s linear infinite'
                        }}>
                            {[...associations, ...associations].map((item, index) => (
                                <div
                                    key={`assoc-${index}`}
                                    className="swiper-slide"
                                    style={{
                                        flex: '0 0 auto',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        minWidth: '150px'
                                    }}
                                >
                                    <div style={{
                                        width: '140px',
                                        height: '80px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '10px',
                                        opacity: 0.7,
                                        transition: 'all 0.3s ease'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.opacity = '1';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.opacity = '0.7';
                                        }}
                                    >
                                        <div style={{
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: '8px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '12px',
                                            color: '#666',
                                            fontWeight: 'bold'
                                        }}>
                                            <img src={item.logo} alt={item.name} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Section 2 - Mạng lưới đối tác */}
                <div>
                    <h2 style={{
                        fontSize: '36px',
                        fontWeight: 'bold',
                        color: '#1a3b5c',
                        textAlign: 'center',
                        marginBottom: '50px'
                    }}>
                        {t("components.associations.title")}
                    </h2>

                    {/* Swiper Container - Partners 1 - SCROLL LEFT */}
                    <div className="swiper" style={{ overflow: 'hidden', marginBottom: '30px' }}>
                        <div className="swiper-wrapper" style={{
                            display: 'flex',
                            gap: '60px',
                            animation: 'scroll-left 30s linear infinite'
                        }}>
                            {[...partners, ...partners].map((item, index) => (
                                <div
                                    key={`partner-${index}`}
                                    className="swiper-slide"
                                    style={{
                                        flex: '0 0 auto',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        minWidth: '150px'
                                    }}
                                >
                                    <div style={{
                                        width: '150px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '10px',
                                        opacity: 0.7,
                                        transition: 'all 0.3s ease'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.opacity = '1';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.opacity = '0.7';
                                        }}
                                    >
                                        <div style={{
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: '8px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '11px',
                                            color: '#666',
                                            fontWeight: 'bold',
                                            textAlign: 'center',
                                            padding: '5px'
                                        }}>
                                            <img src={item.logo} alt={item.name} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Swiper Container - Partners 2 - SCROLL RIGHT (hàng cuối cùng) */}
                    <div className="swiper" style={{ overflow: 'hidden' }}>
                        <div className="swiper-wrapper" style={{
                            display: 'flex',
                            gap: '60px',
                            animation: 'scroll-right 30s linear infinite' // Đổi thành scroll-right
                        }}>
                            {[...partners2, ...partners2].map((item, index) => (
                                <div
                                    key={`partner-${index}`}
                                    className="swiper-slide"
                                    style={{
                                        flex: '0 0 auto',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        minWidth: '150px'
                                    }}
                                >
                                    <div style={{
                                        width: '150px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '10px',
                                        opacity: 0.7,
                                        transition: 'all 0.3s ease'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.opacity = '1';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.opacity = '0.7';
                                        }}
                                    >
                                        <div style={{
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: '8px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '11px',
                                            color: '#666',
                                            fontWeight: 'bold',
                                            textAlign: 'center',
                                            padding: '5px'
                                        }}>
                                            <img src={item.logo} alt={item.name} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS Animation - THÊM ANIMATION SCROLL-RIGHT */}
            <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .swiper-wrapper:hover {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    );
};

export default PartnersSection;