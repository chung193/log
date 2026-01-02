'use client';

import React, { useEffect, useRef, useState } from 'react';
import FindMoreButton from './FindMoreButton';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import { Locale } from '@/lib/i18n';

const ContactHeroSection = ({ initialLocale = 'en' }) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const lastScrollY = useRef(0);
    const [flyOffset, setFlyOffset] = useState(0);

    const searchParams = useSearchParams();
    const langParam = searchParams.get('lang');

    const locale: Locale =
        langParam === 'en' || langParam === 'vi'
            ? langParam
            : initialLocale;

    const { t } = useTranslations(locale);

    useEffect(() => {
        lastScrollY.current = window.scrollY;

        const handleScroll = () => {
            const current = window.scrollY;
            const delta = current - lastScrollY.current;

            lastScrollY.current = current;

            setFlyOffset(prev => {
                let next = prev - delta * 0.3; // đảo chiều: scroll xuống -> ảnh đi lên

                // clamp trong khoảng [-200, 0]
                if (next < -200) next = -200;
                if (next > 0) next = 0;

                return next;
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            ref={sectionRef}
            style={{
                position: 'relative',
                height: '700px',
                background: 'linear-gradient(180deg, #003d75 0%, #012c57 100%)',
                overflow: 'hidden'
            }}
        >
            {/* Content */}
            <div
                style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '120px 40px',
                    position: 'relative',
                    zIndex: 2,
                    color: '#fff'
                }}
            >
                <h2 style={{ fontSize: 48, fontWeight: 700, marginBottom: 40 }}>
                    {t('components.contact.title')}
                </h2>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: 20,
                        maxWidth: 700
                    }}>
                    <Input label={t('components.contact.name')} placeholder={t('components.contact.name')} />
                    <Input label={t('components.contact.company')} placeholder={t('components.contact.company')} />
                    <Input label={t('components.contact.email')} placeholder={t('components.contact.email')} />
                    <Input label={t('components.contact.phone')} placeholder={t('components.contact.phone')} />
                </div>

                <div style={{ marginTop: 40 }}>
                    <FindMoreButton label={t('components.button.contact-us')} />
                </div>
            </div>

            {/* Fly image */}
            <img
                src="/images/fly.png"
                alt="fly"
                style={{
                    position: 'absolute',
                    right: -120,
                    bottom: -200,
                    width: 820,
                    transform: `translateY(${flyOffset}px)`,
                    transition: 'transform 0.05s linear',
                    willChange: 'transform',
                    zIndex: 1,
                    pointerEvents: 'none'
                }}
            />
        </div>
    );
};

const Input = ({ label, placeholder }: { label: string; placeholder: string }) => (
    <div>
        <label style={{ fontSize: 14, fontWeight: 600 }}>{label}</label>
        <input
            placeholder={placeholder}
            style={{
                marginTop: 6,
                width: '100%',
                padding: '14px 18px',
                borderRadius: 12,
                border: 'none',
                fontSize: 15
            }}
        />
    </div>
);

export default ContactHeroSection;
