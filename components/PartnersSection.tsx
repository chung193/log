'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import { Locale } from '@/lib/i18n';
const PartnersSection = ({ initialLocale = 'en' }) => {
    const searchParams = useSearchParams();
    const langParam = searchParams.get('lang');

    const locale: Locale =
        langParam === 'en' || langParam === 'vi'
            ? langParam
            : initialLocale;

    const { t } = useTranslations(locale);
    // Danh sách logo đối tác hiệp hội
    const associations = [
        { id: 1, name: 'VCCI', logo: '/images/logo-bamboo-airways-inkythuatso-1.png' },
        { id: 2, name: 'JCTRANS', logo: '/images/logo-bamboo-airways-inkythuatso-1.png' },
        { id: 3, name: 'IATA', logo: '/images/logo-bamboo-airways-inkythuatso-1.png' },
        { id: 4, name: 'WCA', logo: '/images/logo-bamboo-airways-inkythuatso-1.png' },
        { id: 5, name: 'VCCI', logo: '/images/logo-bamboo-airways-inkythuatso-1.png' },
        { id: 6, name: 'JCTRANS', logo: '/images/logo-bamboo-airways-inkythuatso-1.png' },
        { id: 7, name: 'IATA', logo: '/images/logo-bamboo-airways-inkythuatso-1.png' },
        { id: 8, name: 'WCA', logo: '/images/logo-bamboo-airways-inkythuatso-1.png' },
        { id: 9, name: 'VCCI', logo: '/images/logo-bamboo-airways-inkythuatso-1.png' },
        { id: 10, name: 'JCTRANS', logo: '/images/logo-bamboo-airways-inkythuatso-1.png' }
    ];

    // Danh sách logo mạng lưới đối tác
    const partners = [
        { id: 1, name: 'Korean Air', logo: '/images/logo-bamboo-airways-inkythuatso-1.png' },
        { id: 2, name: 'USPS', logo: '/images/logo-bamboo-airways-inkythuatso-1.png' },
        { id: 3, name: 'Vietnam Airlines', logo: '/images/logo-bamboo-airways-inkythuatso-1.png' },
        { id: 4, name: 'ZIM', logo: '/images/logo-bamboo-airways-inkythuatso-1.png' },
        { id: 5, name: 'Hapag-Lloyd', logo: '/images/logo-bamboo-airways-inkythuatso-1.png' },
        { id: 6, name: 'Cargolux', logo: '/images/logo-bamboo-airways-inkythuatso-1.png' },
        { id: 7, name: 'VietJet Air', logo: '/images/logo-bamboo-airways-inkythuatso-1.png' },
        { id: 8, name: 'Qatar Airways', logo: '/images/logo-bamboo-airways-inkythuatso-1.png' },
        { id: 9, name: 'Korean Air', logo: '/images/logo-bamboo-airways-inkythuatso-1.png' },
        { id: 10, name: 'China Air', logo: '/images/logo-bamboo-airways-inkythuatso-1.png' },
        { id: 11, name: 'HMM', logo: '/images/logo-bamboo-airways-inkythuatso-1.png' },
        { id: 12, name: 'MSC', logo: '/images/logo-bamboo-airways-inkythuatso-1.png' },
        { id: 13, name: 'ONE', logo: '/images/logo-bamboo-airways-inkythuatso-1.png' },
        { id: 14, name: 'Bamboo Airways', logo: '/images/logo-bamboo-airways-inkythuatso-1.png' },
        { id: 15, name: 'Maersk', logo: '/images/logo-bamboo-airways-inkythuatso-1.png' },
        { id: 16, name: 'Cosco', logo: '/images/logo-bamboo-airways-inkythuatso-1.png' },
        { id: 17, name: 'China Air', logo: '/images/logo-bamboo-airways-inkythuatso-1.png' },
        { id: 18, name: 'HMM', logo: '/images/logo-bamboo-airways-inkythuatso-1.png' }
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
                {/* Section 1 - Các hiệp hội tham gia */}
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

                    {/* Swiper Container */}
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
                                        {/* Placeholder - thay bằng <img src={item.logo} alt={item.name} /> */}
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

                    {/* Swiper Container */}
                    <div className="swiper" style={{ overflow: 'hidden' }}>
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
                                        {/* Placeholder - thay bằng <img src={item.logo} alt={item.name} /> */}
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

            {/* CSS Animation */}
            <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
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