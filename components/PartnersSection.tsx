'use client';

import React from 'react';

const PartnersSection = () => {
    // Danh sách logo đối tác hiệp hội
    const associations = [
        { id: 1, name: 'VCCI', logo: '/logos/vcci.png' },
        { id: 2, name: 'JCTRANS', logo: '/logos/jctrans.png' },
        { id: 3, name: 'IATA', logo: '/logos/iata.png' },
        { id: 4, name: 'WCA', logo: '/logos/wca.png' },
        { id: 5, name: 'VCCI', logo: '/logos/vcci.png' },
        { id: 6, name: 'JCTRANS', logo: '/logos/jctrans.png' },
        { id: 7, name: 'IATA', logo: '/logos/iata.png' },
        { id: 8, name: 'WCA', logo: '/logos/wca.png' },
        { id: 9, name: 'VCCI', logo: '/logos/vcci.png' },
        { id: 10, name: 'JCTRANS', logo: '/logos/jctrans.png' }
    ];

    // Danh sách logo mạng lưới đối tác
    const partners = [
        { id: 1, name: 'Korean Air', logo: '/logos/korean-air.png' },
        { id: 2, name: 'USPS', logo: '/logos/usps.png' },
        { id: 3, name: 'Vietnam Airlines', logo: '/logos/vietnam-airlines.png' },
        { id: 4, name: 'ZIM', logo: '/logos/zim.png' },
        { id: 5, name: 'Hapag-Lloyd', logo: '/logos/hapag-lloyd.png' },
        { id: 6, name: 'Cargolux', logo: '/logos/cargolux.png' },
        { id: 7, name: 'VietJet Air', logo: '/logos/vietjet.png' },
        { id: 8, name: 'Qatar Airways', logo: '/logos/qatar.png' },
        { id: 9, name: 'Korean Air', logo: '/logos/korean-air.png' },
        { id: 10, name: 'China Air', logo: '/logos/china-air.png' },
        { id: 11, name: 'HMM', logo: '/logos/hmm.png' },
        { id: 12, name: 'MSC', logo: '/logos/msc.png' },
        { id: 13, name: 'ONE', logo: '/logos/one.png' },
        { id: 14, name: 'Bamboo Airways', logo: '/logos/bamboo.png' },
        { id: 15, name: 'Maersk', logo: '/logos/maersk.png' },
        { id: 16, name: 'Cosco', logo: '/logos/cosco.png' },
        { id: 17, name: 'China Air', logo: '/logos/china-air.png' },
        { id: 18, name: 'HMM', logo: '/logos/hmm.png' }
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
                        Các hiệp hội tham gia
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
                                        filter: 'grayscale(100%)',
                                        opacity: 0.7,
                                        transition: 'all 0.3s ease'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.filter = 'grayscale(0%)';
                                            e.currentTarget.style.opacity = '1';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.filter = 'grayscale(100%)';
                                            e.currentTarget.style.opacity = '0.7';
                                        }}
                                    >
                                        {/* Placeholder - thay bằng <img src={item.logo} alt={item.name} /> */}
                                        <div style={{
                                            width: '100%',
                                            height: '100%',
                                            backgroundColor: '#e0e0e0',
                                            borderRadius: '8px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '12px',
                                            color: '#666',
                                            fontWeight: 'bold'
                                        }}>
                                            {item.name}
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
                        Mạng lưới đối tác
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
                                        width: '140px',
                                        height: '80px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '10px',
                                        filter: 'grayscale(100%)',
                                        opacity: 0.7,
                                        transition: 'all 0.3s ease'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.filter = 'grayscale(0%)';
                                            e.currentTarget.style.opacity = '1';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.filter = 'grayscale(100%)';
                                            e.currentTarget.style.opacity = '0.7';
                                        }}
                                    >
                                        {/* Placeholder - thay bằng <img src={item.logo} alt={item.name} /> */}
                                        <div style={{
                                            width: '100%',
                                            height: '100%',
                                            backgroundColor: '#e0e0e0',
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
                                            {item.name}
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