'use client';
import React, { useState } from 'react';
import FindMoreButton from './FindMoreButton';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import { Locale } from '@/lib/i18n';
import SolutionCarousel from './SolutionCarousel';

type SolutionProps = {
    initialLocale?: Locale;
};

const Solution: React.FC<SolutionProps> = ({ initialLocale = 'en' }) => {

    const searchParams = useSearchParams();
    const langParam = searchParams.get('lang');

    const locale: Locale =
        langParam === 'en' || langParam === 'vi'
            ? langParam
            : initialLocale;

    const { t } = useTranslations(locale);

    return (
        <>
            <div className="homes-solv-slide ss-pd" style={{ padding: '60px 20px' }}>
                <div className="container" style={{ maxWidth: '1230px', margin: '0 auto', padding: '0 15px' }}>
                    <div className="head-verti center mb-32" style={{ textAlign: 'center', marginBottom: '32px' }}>
                        <div className="line">
                            <h2 className="title title-48" style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: '700', marginBottom: '20px' }}>
                                {t('solution.title')}
                            </h2>
                        </div>
                        <div className="line">
                            <p className="desc" style={{ fontSize: '16px', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto', color: '#666' }}>
                                {t('solution.description')}
                            </p>
                        </div>
                    </div>
                </div>
            </div >
            <SolutionCarousel />
        </>
    );
};

export default Solution;