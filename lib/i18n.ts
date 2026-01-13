import enTranslations from '../locales/en.json';
import viTranslations from '../locales/vi.json';

export type Locale = 'en' | 'vi';

export const translations = {
    en: enTranslations,
    vi: viTranslations
} as const;

export function translate(locale: Locale, key: string): string {
    const localeData = translations[locale] || translations.en;

    // Nested key support
    if (key.includes('.')) {
        const parts = key.split('.');
        let current: any = localeData;

        for (const part of parts) {
            if (current && typeof current === 'object' && part in current) {
                current = current[part];
            } else {
                return key;
            }
        }

        return typeof current === 'string' ? current : key;
    }

    const value = localeData[key as keyof typeof localeData];
    return typeof value === 'string' ? value : key;
}

// Basic helper functions
export const getTranslations = (locale: Locale) => translations[locale] || translations.en;
export const isValidLocale = (locale: string): locale is Locale =>
    locale === 'en' || locale === 'vi';