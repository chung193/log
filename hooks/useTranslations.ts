'use client';
import { getTranslations, Locale } from '@/lib/i18n';

function getByPath(obj: any, path: string) {
    return path.split('.').reduce((acc, key) => {
        if (acc && typeof acc === 'object') {
            return acc[key];
        }
        return undefined;
    }, obj);
}

export function useTranslations(locale: Locale = 'en') {
    const translations = getTranslations(locale);

    const t = (key: string): string => {
        const value = getByPath(translations, key);
        return typeof value === 'string' ? value : key;
    };

    return { t, translations };
}
