import enTranslations from '../locales/en.json';
import viTranslations from '../locales/vi.json';

export type Locale = 'en' | 'vi';

export const translations = {
    en: enTranslations,
    vi: viTranslations
} as const;

export type TranslationKey = keyof typeof enTranslations;

export function getTranslations(locale: Locale) {
    return translations[locale] || translations.en;
}

export function translate(locale: Locale, key: TranslationKey): string {
    return translations[locale]?.[key] || translations.en[key] || key;
}