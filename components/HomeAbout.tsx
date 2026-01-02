'use client';

import './HomeAbout.css';
import FindMoreButton from './FindMoreButton';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import { Locale } from '@/lib/i18n';

type HomeAboutProps = {
    onButtonClick?: () => void;
    initialLocale?: Locale;
};

const HomeAbout: React.FC<HomeAboutProps> = ({
    onButtonClick,
    initialLocale = 'en',
}) => {
    const searchParams = useSearchParams();
    const langParam = searchParams.get('lang');

    const locale: Locale =
        langParam === 'en' || langParam === 'vi'
            ? langParam
            : initialLocale;

    const { t } = useTranslations(locale);

    return (
        <section className="business-section">
            <div className="business-content">
                <h2 className="business-title">{t('components.home-about.title')}</h2>
                <p className="business-subtitle">{t('components.home-about.sub-title')}</p>
                <p className="business-description">{t('components.home-about.content')}</p>

                <FindMoreButton onClick={onButtonClick} label={t('components.button.find-more')} />
            </div>
        </section>
    );
};

export default HomeAbout;
