'use client';

import React, { useState } from 'react';

const NewsBlogSection = () => {
    const [activeTab, setActiveTab] = useState('all');

    const articles = [
        {
            id: 1,
            category: 'Blog',
            date: '9 December, 2025',
            title: 'Thuê kho tại Đồng Nai: Chi phí thuê, Loại Kho & Kinh nghiệm chọn Nhà Kho cho...',
            image: '/images/article-1.jpg',
            author: 'Vietnam Post Logistics',
            type: 'blog'
        },
        {
            id: 2,
            category: 'Bản tin Việt Nam Logistics',
            date: '8 December, 2025',
            title: 'Hội Thảo Quantum Leap 2026 - Bước Nhảy Chiến Lược Của Vietnam Post...',
            image: '/images/article-2.jpg',
            author: 'Vietnam Post Logistics',
            type: 'news'
        },
        {
            id: 3,
            category: 'Blog',
            date: '25 November, 2025',
            title: 'Chuyển Phát Nhanh Quốc Tế: Quy Trình, Quy Định & Những Điều Doanh Nghiệp...',
            image: '/images/article-3.jpg',
            author: 'Vietnam Post Logistics',
            type: 'blog'
        },
        {
            id: 4,
            category: 'Blog',
            date: '21 October, 2025',
            title: 'Gửi hàng đi Mỹ tại Hà Nội: Dịch vụ ePacket tối ưu dành cho seller & doanh nghiệp',
            image: '/images/article-4.jpg',
            author: 'Vietnam Post Logistics',
            type: 'blog'
        },
        {
            id: 5,
            category: 'Bản tin',
            date: '15 October, 2025',
            title: 'Hướng ứng lại của BĐTVNP & ảnh hưởng b...',
            image: '/images/article-5.jpg',
            author: 'Vietnam Post Logistics',
            type: 'news'
        }
    ];

    const filteredArticles = activeTab === 'all'
        ? articles
        : articles.filter(article => article.type === activeTab);

    return (
        <div style={{
            padding: '80px 20px',
            backgroundColor: '#0D2840',
            minHeight: '100vh'
        }}>
            <div style={{
                maxWidth: '1600px',
                margin: '0 auto'
            }}>
                {/* Header with Tabs */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '50px',
                    flexWrap: 'wrap',
                    gap: '20px'
                }}>
                    <h2 style={{
                        fontSize: '42px',
                        fontWeight: 'bold',
                        color: '#FFF',
                        margin: 0
                    }}>
                        Vietnam Post Logistics Tin tức
                    </h2>

                    {/* Tab Buttons */}
                    <div style={{
                        display: 'flex',
                        gap: '15px'
                    }}>
                        <button
                            onClick={() => setActiveTab('blog')}
                            style={{
                                padding: '12px 30px',
                                borderRadius: '25px',
                                border: 'none',
                                backgroundColor: activeTab === 'blog' ? '#FFF' : 'transparent',
                                color: activeTab === 'blog' ? '#0D2840' : '#FFF',
                                fontSize: '15px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                border: activeTab === 'blog' ? 'none' : '2px solid rgba(255,255,255,0.3)'
                            }}
                            onMouseEnter={(e) => {
                                if (activeTab !== 'blog') {
                                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (activeTab !== 'blog') {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                }
                            }}
                        >
                            Blog
                        </button>
                        <button
                            onClick={() => setActiveTab('news')}
                            style={{
                                padding: '12px 30px',
                                borderRadius: '25px',
                                border: 'none',
                                backgroundColor: activeTab === 'news' ? '#FFF' : 'transparent',
                                color: activeTab === 'news' ? '#0D2840' : '#FFF',
                                fontSize: '15px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                border: activeTab === 'news' ? 'none' : '2px solid rgba(255,255,255,0.3)'
                            }}
                            onMouseEnter={(e) => {
                                if (activeTab !== 'news') {
                                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (activeTab !== 'news') {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                }
                            }}
                        >
                            News
                        </button>
                        <button
                            onClick={() => setActiveTab('all')}
                            style={{
                                padding: '12px 30px',
                                borderRadius: '25px',
                                border: 'none',
                                backgroundColor: activeTab === 'all' ? '#FFF' : 'transparent',
                                color: activeTab === 'all' ? '#0D2840' : '#FFF',
                                fontSize: '15px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                border: activeTab === 'all' ? 'none' : '2px solid rgba(255,255,255,0.3)'
                            }}
                            onMouseEnter={(e) => {
                                if (activeTab !== 'all') {
                                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (activeTab !== 'all') {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                }
                            }}
                        >
                            Bản tin Việt Nam Logistics
                        </button>
                    </div>
                </div>

                {/* Articles Grid with Horizontal Scroll */}
                <div style={{
                    position: 'relative',
                    marginBottom: '40px'
                }}>
                    <div style={{
                        display: 'flex',
                        gap: '20px',
                        overflowX: 'auto',
                        scrollBehavior: 'smooth',
                        paddingBottom: '20px'
                    }}>
                        {filteredArticles.map((article) => (
                            <div
                                key={article.id}
                                style={{
                                    flex: '0 0 auto',
                                    width: '380px',
                                    backgroundColor: '#FFF',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.2)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
                                }}
                            >
                                {/* Image */}
                                <div style={{
                                    position: 'relative',
                                    height: '240px',
                                    backgroundColor: '#e0e0e0',
                                    backgroundImage: `url(${article.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}>
                                    {/* Category Badge */}
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '15px',
                                        right: '15px',
                                        padding: '8px 20px',
                                        borderRadius: '20px',
                                        backgroundColor: '#FFA500',
                                        color: '#FFF',
                                        fontSize: '13px',
                                        fontWeight: 'bold'
                                    }}>
                                        {article.category === 'Blog' ? 'Blog' : 'Bản tin'}
                                    </div>
                                </div>

                                {/* Content */}
                                <div style={{
                                    padding: '25px'
                                }}>
                                    {/* Date */}
                                    <p style={{
                                        fontSize: '13px',
                                        color: '#999',
                                        margin: '0 0 12px 0'
                                    }}>
                                        {article.date}
                                    </p>

                                    {/* Title */}
                                    <h3 style={{
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        color: '#1a3b5c',
                                        margin: '0 0 15px 0',
                                        lineHeight: '1.4',
                                        minHeight: '50px'
                                    }}>
                                        {article.title}
                                    </h3>

                                    {/* Author */}
                                    <p style={{
                                        fontSize: '14px',
                                        color: '#666',
                                        margin: 0
                                    }}>
                                        {article.author}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* View All Button */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <button
                        style={{
                            padding: '15px 40px',
                            borderRadius: '30px',
                            border: 'none',
                            backgroundColor: '#0A5A99',
                            color: '#FFF',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#084a7d';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#0A5A99';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                        }}
                    >
                        <span>XEM TẤT CẢ TIN</span>
                        <span style={{
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(255,255,255,0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '18px'
                        }}>
                            →
                        </span>
                    </button>
                </div>
            </div>

            {/* Custom Scrollbar CSS */}
            <style jsx>{`
        div::-webkit-scrollbar {
          height: 8px;
        }
        div::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.1);
          border-radius: 10px;
        }
        div::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.3);
          border-radius: 10px;
        }
        div::-webkit-scrollbar-thumb:hover {
          background: rgba(255,255,255,0.5);
        }
      `}</style>
        </div>
    );
};

export default NewsBlogSection;