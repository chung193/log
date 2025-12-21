'use client';

import React from 'react';

const LogisticsStats = () => {
    return (
        <div style={{
            padding: '40px 20px',
            backgroundColor: '#0D2840',
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
                {/* Grid Container - 2 hàng */}
                <div style={{
                    display: 'grid',
                    gap: '20px'
                }}>
                    {/* Hàng 1 - 2 card: 1 card lớn bên trái + 1 card nhỏ bên phải */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1.3fr 1fr',
                        gap: '20px',
                        height: '330px'
                    }}>
                        {/* Card 1 - Vận chuyển tới 230 - CARD LỚN */}
                        <div style={{
                            position: 'relative',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            backgroundColor: '#0A5A99',
                            padding: '50px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                        }}>
                            {/* Globe Image - ở phần phải */}
                            <div style={{
                                position: 'absolute',
                                right: '-50px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                width: '380px',
                                height: '380px',
                                backgroundImage: 'url(https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&q=80)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '50%',
                                opacity: 0.95,
                                zIndex: 0
                            }} />

                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <p style={{
                                    margin: '0 0 15px 0',
                                    fontSize: '18px',
                                    fontWeight: '600',
                                    color: '#FFF',
                                    opacity: 0.95
                                }}>
                                    Vận chuyển tới
                                </p>
                                <h2 style={{
                                    margin: '0 0 15px 0',
                                    fontSize: '90px',
                                    fontWeight: 'bold',
                                    color: '#FFA500',
                                    lineHeight: '1',
                                    letterSpacing: '-2px'
                                }}>
                                    230
                                </h2>
                                <p style={{
                                    margin: 0,
                                    fontSize: '17px',
                                    fontWeight: '600',
                                    color: '#FFF',
                                    opacity: 0.95
                                }}>
                                    Quốc gia & vùng lãnh thổ
                                </p>
                            </div>
                        </div>

                        {/* Card 2 - Vận chuyển 50,000 Container - CARD NHỎ */}
                        <div style={{
                            position: 'relative',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            backgroundColor: '#FFA500',
                            padding: '40px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                        }}>
                            {/* Container Image - góc dưới phải */}
                            <div style={{
                                position: 'absolute',
                                right: '20px',
                                bottom: '20px',
                                width: '200px',
                                height: '140px',
                                backgroundImage: 'url(https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80)',
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                zIndex: 0,
                                filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.4))'
                            }} />

                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <p style={{
                                    margin: '0 0 10px 0',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    color: '#FFF',
                                    opacity: 0.95
                                }}>
                                    Vận chuyển
                                </p>
                                <h2 style={{
                                    margin: '0 0 10px 0',
                                    fontSize: '60px',
                                    fontWeight: 'bold',
                                    color: '#FFF',
                                    lineHeight: '1',
                                    letterSpacing: '-1px'
                                }}>
                                    50,000
                                </h2>
                                <p style={{
                                    margin: 0,
                                    fontSize: '15px',
                                    fontWeight: '600',
                                    color: '#FFF',
                                    opacity: 0.95
                                }}>
                                    Container mỗi tháng
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Hàng 2 - 2 card ngang bằng nhau */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '20px',
                        height: '320px'
                    }}>
                        {/* Card 3 - Xuất khẩu 1,200,000 */}
                        <div style={{
                            position: 'relative',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            backgroundColor: '#1B8FAD',
                            padding: '40px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                        }}>
                            {/* Ship Image - chiếm phần dưới */}
                            <div style={{
                                position: 'absolute',
                                left: '0',
                                bottom: '-20px',
                                right: '0',
                                height: '170px',
                                backgroundImage: 'url(https://images.unsplash.com/photo-1571610818339-45bebb3682a4?w=800&q=80)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center top',
                                opacity: 0.9,
                                zIndex: 0
                            }} />

                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <p style={{
                                    margin: '0 0 10px 0',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    color: '#FFF',
                                    opacity: 0.95,
                                    textAlign: 'right'
                                }}>
                                    Xuất khẩu
                                </p>
                                <h2 style={{
                                    margin: '0 0 10px 0',
                                    fontSize: '70px',
                                    fontWeight: 'bold',
                                    color: '#FFF',
                                    lineHeight: '1',
                                    textAlign: 'right',
                                    letterSpacing: '-1px'
                                }}>
                                    1,200,000
                                </h2>
                                <p style={{
                                    margin: 0,
                                    fontSize: '15px',
                                    fontWeight: '600',
                                    color: '#FFF',
                                    opacity: 0.95,
                                    textAlign: 'right'
                                }}>
                                    Tấn hàng mỗi tháng
                                </p>
                            </div>
                        </div>

                        {/* Card 4 - Tổng diện tích 500,000 */}
                        <div style={{
                            position: 'relative',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            backgroundColor: '#4A4A4A',
                            padding: '40px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                        }}>
                            {/* Warehouse/Boxes Image - góc dưới phải */}
                            <div style={{
                                position: 'absolute',
                                right: '0',
                                bottom: '0',
                                width: '320px',
                                height: '220px',
                                backgroundImage: 'url(https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                opacity: 0.85,
                                zIndex: 0
                            }} />

                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <p style={{
                                    margin: '0 0 10px 0',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    color: '#FFF',
                                    opacity: 0.95
                                }}>
                                    Tổng diện tích
                                </p>
                                <h2 style={{
                                    margin: '0 0 10px 0',
                                    fontSize: '70px',
                                    fontWeight: 'bold',
                                    color: '#FFA500',
                                    lineHeight: '1',
                                    letterSpacing: '-1px'
                                }}>
                                    500,000
                                </h2>
                                <p style={{
                                    margin: 0,
                                    fontSize: '15px',
                                    fontWeight: '600',
                                    color: '#FFF',
                                    opacity: 0.95
                                }}>
                                    m2 kho bãi
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogisticsStats;