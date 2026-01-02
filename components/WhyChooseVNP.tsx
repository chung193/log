'use client';
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import { Locale } from '@/lib/i18n';

const why_choose_us = ({ initialLocale = 'en' }) => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    const searchParams = useSearchParams();
    const langParam = searchParams.get('lang');

    const locale: Locale =
        langParam === 'en' || langParam === 'vi'
            ? langParam
            : initialLocale;

    const { t } = useTranslations(locale);

    const reasons = [
        {
            id: 1,
            icon: '⚡',
            title: t('components.why_choose_us.reason_1_title'),
            description: t('components.why_choose_us.reason_1_description'),
            hasArrow: true
        },
        {
            id: 2,
            icon: '✱',
            title: t('components.why_choose_us.reason_2_title'),
            description: t('components.why_choose_us.reason_2_description'),
            hasArrow: true
        },
        {
            id: 3,
            icon: '🎁',
            title: t('components.why_choose_us.reason_3_title'),
            description: t('components.why_choose_us.reason_3_description'),
            hasArrow: true
        },
        {
            id: 4,
            icon: '⚡',
            title: t('components.why_choose_us.reason_4_title'),
            description: t('components.why_choose_us.reason_4_description'),
            hasArrow: true
        },
        {
            id: 5,
            icon: '💰',
            title: t('components.why_choose_us.reason_5_title'),
            description: t('components.why_choose_us.reason_5_description'),
            hasArrow: true
        },
        {
            id: 6,
            icon: '🔒',
            title: t('components.why_choose_us.reason_6_title'),
            description: t('components.why_choose_us.reason_6_description'),
            hasArrow: true
        },
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
                        {t('components.why_choose_us.title-1')}
                    </h2>
                    <h2 style={{
                        fontSize: '48px',
                        fontWeight: 'bold',
                        color: '#FFF',
                        margin: 0,
                        lineHeight: '1.2'
                    }}>
                        {t('components.why_choose_us.title-2')}
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
                            onMouseEnter={() => setHoveredId(reason.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            style={{
                                position: 'relative',
                                backgroundColor: '#FFF',
                                borderRadius: '20px',
                                padding: '40px 35px',
                                minHeight: '280px',
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                transform: hoveredId === reason.id ? 'translateY(-8px)' : 'translateY(0)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                cursor: 'pointer'
                            }}
                        >
                            {/* Icon */}
                            <div style={{
                                fontSize: '48px',
                                marginBottom: '10px',
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

                            {/* Arrow Button - Chỉ hiện khi hover */}
                            {reason.hasArrow && (
                                <div
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#004687';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = '#FBAE17';
                                    }}
                                    style={{
                                        position: 'absolute',
                                        bottom: '30px',
                                        right: '30px',
                                        width: '50px',
                                        height: '50px',
                                        backgroundColor: '#FBAE17',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        opacity: hoveredId === reason.id ? 1 : 0,
                                        transform: hoveredId === reason.id ? 'scale(1)' : 'scale(0.8)',
                                        transition: 'all 0.3s ease'
                                    }}>
                                    <img src="/images/ic-arrow.svg" alt="" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default why_choose_us;