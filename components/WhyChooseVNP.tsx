'use client';

import React from 'react';

const WhyChooseVNP = () => {
    const reasons = [
        {
            id: 1,
            icon: '⚡',
            title: 'Thương hiệu uy tín',
            description: 'Kế thừa thương hiệu uy tín Quốc gia của Tổng Công ty Bưu điện Việt Nam, Vietnam Post Logistics xứng đáng là người bạn đồng hành đáng tin cậy của mọi khách hàng.',
            hasArrow: true
        },
        {
            id: 2,
            icon: '✱',
            title: 'Nhân sự chuyên nghiệp',
            description: 'Sở hữu một đội ngũ nhân lực tinh nhuệ, chuyên nghiệp và tận tâm, luôn sẵn sàng phục vụ, giải đáp mọi nhu cầu khách hàng và đội tác 24/7.',
            hasArrow: false
        },
        {
            id: 3,
            icon: '🎁',
            title: 'Dịch vụ đa dạng',
            description: 'Chúng tôi cung cấp hệ sinh thái Logistics toàn diện bao gồm: Kho vận, Logistics quốc tế, Thương mại điện tử quốc tế, Logistics nội địa và giải pháp xuất nhập khẩu.',
            hasArrow: false
        },
        {
            id: 4,
            icon: '⚡',
            title: 'Nhanh chóng linh hoạt',
            description: 'Với mạng lưới phủ sóng toàn quốc và năng lực vận chuyển lên tới 230 Quốc gia và vùng lãnh thổ, chúng tôi cam kết mang đến những giải pháp vận chuyển nhanh chóng, linh hoạt.',
            hasArrow: false
        },
        {
            id: 5,
            icon: '💰',
            title: 'Tối ưu chi phí',
            description: 'Tại Vietnam Post Logistics, khách hàng được trải nghiệm các dịch vụ Logistics từ đó giúp bạn tối ưu chi phí, thiết kế những giải pháp phù hợp nhất với doanh nghiệp.',
            hasArrow: false
        },
        {
            id: 6,
            icon: '🔒',
            title: 'An toàn - bảo mật',
            description: 'Chúng tôi cũng tuân thủ các tiêu chuẩn và quy định về bảo mật thông tin khách hàng và hàng hóa, đảm bảo sự tin cậy và an tâm cho người sử dụng dịch vụ.',
            hasArrow: false
        }
    ];

    return (
        <div style={{
            padding: '80px 20px',
            backgroundColor: '#0A5A99',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{
                maxWidth: '1400px',
                width: '100%',
                margin: '0 auto'
            }}>
                {/* Header */}
                <div style={{
                    textAlign: 'center',
                    marginBottom: '60px'
                }}>
                    <h2 style={{
                        fontSize: '48px',
                        fontWeight: 'bold',
                        color: '#FFF',
                        margin: '0 0 10px 0',
                        lineHeight: '1.2'
                    }}>
                        Tại sao nên chọn
                    </h2>
                    <h2 style={{
                        fontSize: '48px',
                        fontWeight: 'bold',
                        color: '#FFF',
                        margin: 0,
                        lineHeight: '1.2'
                    }}>
                        Vietnam Post Logistics
                    </h2>
                </div>

                {/* Grid Cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '20px'
                }}>
                    {reasons.map((reason) => (
                        <div
                            key={reason.id}
                            style={{
                                position: 'relative',
                                backgroundColor: '#FFF',
                                borderRadius: '20px',
                                padding: '40px 35px',
                                minHeight: '280px',
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
                            }}
                        >
                            {/* Icon */}
                            <div style={{
                                fontSize: '48px',
                                marginBottom: '20px',
                                color: '#FFA500'
                            }}>
                                {reason.icon}
                            </div>

                            {/* Title */}
                            <h3 style={{
                                fontSize: '22px',
                                fontWeight: 'bold',
                                color: '#1a3b5c',
                                margin: '0 0 15px 0',
                                lineHeight: '1.3'
                            }}>
                                {reason.title}
                            </h3>

                            {/* Description */}
                            <p style={{
                                fontSize: '15px',
                                lineHeight: '1.7',
                                color: '#4a5568',
                                margin: '0',
                                flexGrow: 1
                            }}>
                                {reason.description}
                            </p>

                            {/* Arrow Button (only for first card) */}
                            {reason.hasArrow && (
                                <div style={{
                                    position: 'absolute',
                                    bottom: '30px',
                                    right: '30px',
                                    width: '50px',
                                    height: '50px',
                                    backgroundColor: '#FFF4E6',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s ease'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#FFE4B3';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = '#FFF4E6';
                                    }}
                                >
                                    <span style={{
                                        fontSize: '24px',
                                        color: '#FFA500',
                                        fontWeight: 'bold'
                                    }}>→</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseVNP;