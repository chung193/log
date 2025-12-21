'use client';
import { getTranslations, Locale, TranslationKey } from '@/lib/i18n';

export function useTranslations(locale: Locale = 'en') {
    const t = (key: TranslationKey): string => {
        const translations = getTranslations(locale);
        return translations[key] || key;
    };

    return { t };
}