'use client';

import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#f8f9fa',
            padding: '60px 20px 40px',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }}>
            <div style={{
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                {/* Top Section - 4 Columns */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '40px',
                    marginBottom: '60px',
                    paddingBottom: '40px',
                    borderBottom: '1px solid #e0e0e0'
                }}>
                    {/* Column 1 - Văn phòng */}
                    <div>
                        <h3 style={{
                            fontSize: '2rem',
                            fontWeight: 'bold',
                            color: '#1a3b5c',
                            marginBottom: '20px'
                        }}>
                            Văn phòng
                        </h3>
                        <div style={{ fontSize: '1.8rem', color: '#4a5568', lineHeight: '1.8' }}>
                            <p style={{ margin: '0 0 15px 0' }}>
                                <p style={{ color: '#1a3b5c', fontWeight: 700, fontSize: '1.8rem' }}>Trụ sở chính:</p>
                                Số 5 Phạm Hùng, Phường Cầu Giấy, Hà Nội
                            </p>
                            <p style={{ margin: '0 0 15px 0' }}>
                                <p style={{ color: '#1a3b5c', fontWeight: 700, fontSize: '1.8rem' }}>Văn phòng Hải Phòng:</p>
                                Số 5 Đường Nguyễn Trị Phương, Phường
                                Hồng Bàng, TP. Hải Phòng
                            </p>
                            <p style={{ margin: '0' }}>
                                <p style={{ color: '#1a3b5c', fontWeight: 700, fontSize: '1.8rem' }}>Văn phòng HCM:</p>
                                Số 8 Phan Đình Giót, Phường Tân Sơn Hòa,
                                TP. Hồ Chí Minh
                            </p>
                        </div>
                    </div>

                    {/* Column 2 - Liên Hệ */}
                    <div>
                        <h3 style={{
                            fontSize: '2rem',
                            fontWeight: 'bold',
                            color: '#1a3b5c',
                            marginBottom: '20px'
                        }}>
                            Liên Hệ
                        </h3>
                        <div style={{ fontSize: '1.8rem', color: '#4a5568', lineHeight: '1.8' }}>
                            <p style={{ margin: '0 0 10px 0' }}>
                                <p style={{ color: '#1a3b5c', fontWeight: 700, fontSize: '1.8rem' }}>Hotline:</p>
                                024 3685 5333
                            </p>
                            <p style={{ margin: '0' }}>
                                <p style={{ color: '#1a3b5c', fontWeight: 700, fontSize: '1.8rem' }}>Email:</p>
                                <a href="mailto:marketinglogistics@vnpost.vn" style={{
                                    color: '#4a5568',
                                    textDecoration: 'none'
                                }}>
                                    marketinglogistics@vnpost.vn
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Column 3 - Công ty */}
                    <div>
                        <h3 style={{
                            fontSize: '2rem',
                            fontWeight: 'bold',
                            color: '#1a3b5c',
                            marginBottom: '20px'
                        }}>
                            Công ty
                        </h3>
                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                            fontSize: '1.8rem',
                            lineHeight: '2'
                        }}>
                            <li>
                                <a href="#" style={{
                                    color: '#4a5568',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = '#0A5A99'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = '#4a5568'}
                                >
                                    Về chúng tôi
                                </a>
                            </li>
                            <li>
                                <a href="#" style={{
                                    color: '#4a5568',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = '#0A5A99'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = '#4a5568'}
                                >
                                    Cơ sở vật chất
                                </a>
                            </li>
                            <li>
                                <a href="#" style={{
                                    color: '#4a5568',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = '#0A5A99'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = '#4a5568'}
                                >
                                    Tuyển dụng
                                </a>
                            </li>
                            <li>
                                <a href="#" style={{
                                    color: '#4a5568',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = '#0A5A99'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = '#4a5568'}
                                >
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" style={{
                                    color: '#4a5568',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = '#0A5A99'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = '#4a5568'}
                                >
                                    FAQS
                                </a>
                            </li>
                            <li>
                                <a href="#" style={{
                                    color: '#4a5568',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = '#0A5A99'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = '#4a5568'}
                                >
                                    Liên hệ
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4 - Giải pháp */}
                    <div>
                        <h3 style={{
                            fontSize: '2rem',
                            fontWeight: 'bold',
                            color: '#1a3b5c',
                            marginBottom: '20px'
                        }}>
                            Giải pháp
                        </h3>
                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                            fontSize: '1.8rem',
                            lineHeight: '2'
                        }}>
                            <li>
                                <a href="#" style={{
                                    color: '#4a5568',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = '#0A5A99'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = '#4a5568'}
                                >
                                    TMĐT Quốc tế
                                </a>
                            </li>
                            <li>
                                <a href="#" style={{
                                    color: '#4a5568',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = '#0A5A99'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = '#4a5568'}
                                >
                                    Logistics quốc tế
                                </a>
                            </li>
                            <li>
                                <a href="#" style={{
                                    color: '#4a5568',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = '#0A5A99'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = '#4a5568'}
                                >
                                    Logistics nội địa
                                </a>
                            </li>
                            <li>
                                <a href="#" style={{
                                    color: '#4a5568',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = '#0A5A99'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = '#4a5568'}
                                >
                                    Kho vận
                                </a>
                            </li>
                            <li>
                                <a href="#" style={{
                                    color: '#4a5568',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = '#0A5A99'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = '#4a5568'}
                                >
                                    Xuất nhập khẩu
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section - Logo and Social */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '20px'
                }}>
                    {/* Logo and Company Info */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px'
                    }}>
                        <div style={{
                            width: '200px',
                            height: '60px',
                            backgroundColor: '#f0f0f0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '8px'
                        }}>
                            {/* Logo placeholder - replace with actual logo */}
                            <div style={{
                                fontSize: '24px',
                                fontWeight: 'bold',
                                color: '#0A5A99'
                            }}>
                                VNP LOGISTICS
                            </div>
                        </div>
                        <div style={{
                            fontSize: '14px',
                            lineHeight: '1.6'
                        }}>
                            <div style={{
                                fontWeight: 'bold',
                                color: '#1a3b5c',
                                marginBottom: '4px'
                            }}>
                                CÔNG TY LOGISTICS
                            </div>
                            <div style={{ color: '#4a5568' }}>
                                TỔNG CÔNG TY BƯU ĐIỆN VIỆT NAM
                            </div>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px'
                    }}>
                        <a href="#" style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            backgroundColor: '#1a3b5c',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#FFF',
                            textDecoration: 'none',
                            transition: 'background-color 0.3s'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0A5A99'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1a3b5c'}
                        >
                            <span style={{ fontSize: '20px' }}>f</span>
                        </a>
                        <a href="#" style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            backgroundColor: '#1a3b5c',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#FFF',
                            textDecoration: 'none',
                            transition: 'background-color 0.3s'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0A5A99'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1a3b5c'}
                        >
                            <span style={{ fontSize: '20px' }}>in</span>
                        </a>
                        <a href="#" style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            backgroundColor: '#1a3b5c',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#FFF',
                            textDecoration: 'none',
                            transition: 'background-color 0.3s'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0A5A99'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1a3b5c'}
                        >
                            <span style={{ fontSize: '20px' }}>♪</span>
                        </a>
                        <div style={{
                            width: '120px',
                            height: '40px',
                            backgroundColor: '#0A5A99',
                            borderRadius: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#FFF',
                            fontSize: '11px',
                            fontWeight: 'bold'
                        }}>
                            ĐÃ THÔNG BÁOBỘ CÔNG THƯƠNG
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;