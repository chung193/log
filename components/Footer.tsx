'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import { Locale } from '@/lib/i18n';
const Footer = (initialLocale = "en") => {
    const searchParams = useSearchParams();
    const langParam = searchParams.get('lang');

    const locale: Locale =
        langParam === 'en' || langParam === 'vi'
            ? langParam
            : initialLocale;

    const { t } = useTranslations(locale);
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
                            {t('footer.office_hp')}
                        </h3>
                        <div style={{ fontSize: '1.8rem', color: '#4a5568', lineHeight: '1.8' }}>
                            <p style={{ margin: '0 0 15px 0' }}>
                                <p style={{ color: '#1a3b5c', fontWeight: 700, fontSize: '1.8rem' }}>Trụ sở chính:</p>
                                {t('footer.office_hp_detail')}
                            </p>
                            <p style={{ margin: '0 0 15px 0' }}>
                                <p style={{ color: '#1a3b5c', fontWeight: 700, fontSize: '1.8rem' }}>Văn phòng Hải Phòng:</p>
                                {t('footer.office_hn')}
                            </p>
                            <p style={{ margin: '0' }}>
                                <p style={{ color: '#1a3b5c', fontWeight: 700, fontSize: '1.8rem' }}>Văn phòng HCM:</p>
                                {t('footer.office_hn_detail')}
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
                            {t('footer.contact')}
                        </h3>
                        <div style={{ fontSize: '1.8rem', color: '#4a5568', lineHeight: '1.8' }}>
                            <p style={{ margin: '0 0 10px 0' }}>
                                <p style={{ color: '#1a3b5c', fontWeight: 700, fontSize: '1.8rem' }}>Hotline:</p>
                                {t('footer.phone')}
                            </p>
                            <p style={{ margin: '0' }}>
                                <p style={{ color: '#1a3b5c', fontWeight: 700, fontSize: '1.8rem' }}>
                                    {t('footer.email')}
                                </p>
                                <a href="mailto:marketinglogistics@vnpost.vn" style={{
                                    color: '#4a5568',
                                    textDecoration: 'none'
                                }}>
                                    {t('footer.email_address')}
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
                            {t('footer.company')}
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
                                    {t('footer.about_us')}
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
                                    {t('footer.careers')}
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
                                    {t('footer.recruitment')}
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
                                    {t('footer.contact')}
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
                            {t('footer.solution')}
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
                                    {t('footer.services.ocean_freight')}
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
                                    {t('footer.services.air_freight')}
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
                                    {t('footer.services.customers_partner')}
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
                                    {t('footer.services.contract_logistics_warehousing')}
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
                                    {t('footer.services.customers_partner')}
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
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '8px'
                        }}>
                            {/* Logo placeholder - replace with actual logo */}
                            <img src='/images/logo.svg' alt='Company Logo' style={{ maxWidth: '100%', maxHeight: '100%' }} />
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
                                {/* EXPEDITORS GLOBAL */}
                            </div>
                            <div style={{ color: '#4a5568' }}>
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
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textDecoration: 'none',
                            transition: 'background-color 0.3s'
                        }}
                        >
                            <img src='/images/ic-fb.svg' alt='Facebook' style={{ width: '100%' }} />
                        </a>
                        <a href="#" style={{
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textDecoration: 'none',
                            transition: 'background-color 0.3s'
                        }}
                        >
                            <img src='/images/ic-ins.svg' alt='LinkedIn' style={{ width: '100' }} />
                        </a>
                        <a href="#" style={{
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#FFF',
                            textDecoration: 'none',
                            transition: 'background-color 0.3s'
                        }}
                        >
                            <img src='/images/ic-tiktok.svg' alt='tiktok' style={{ width: '100' }} />
                        </a>
                        <div style={{
                            width: '120px',
                            borderRadius: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#FFF',
                            fontSize: '11px',
                            fontWeight: 'bold'
                        }}>
                            <img src='/images/bct.png' alt='BCT Logo'
                                style={{ width: '100%', marginRight: '8px' }} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;