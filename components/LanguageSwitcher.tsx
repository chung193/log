'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState, useMemo } from 'react';
import { Locale } from '@/lib/i18n';

const LANGS: { code: Locale; label: string; icon: string }[] = [
    { code: 'vi', label: 'VIE', icon: '/images/ic-vn(1).svg' },
    { code: 'en', label: 'ENG', icon: '/images/ic-en(1).svg' },
];

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [open, setOpen] = useState(false);

    const currentLang = (searchParams.get('lang') as Locale) || 'vi';

    const switchLanguage = (lang: Locale) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('lang', lang);
        router.push(`${pathname}?${params.toString()}`);
        setOpen(false);
    };

    const orderedLangs = useMemo(() => {
        return [...LANGS].sort((a, b) => (a.code === currentLang ? -1 : b.code === currentLang ? 1 : 0));
    }, [currentLang]);

    const current = orderedLangs[0];
    const others = orderedLangs.slice(1);

    return (
        <div className="hd-lg">
            {/* current */}
            <div className="hd-lg-item" onClick={() => setOpen(o => !o)}>
                <img src={current.icon} alt={current.label} />
                <span className="txt">{current.label}</span>
                <span className="ic">
                    <i className={`fas fa-chevron-${open ? 'up' : 'down'}`} />
                </span>
            </div>

            {/* dropdown */}
            {open && (
                <div className="hd-lg-drop">
                    {others.map(lang => (
                        <div
                            key={lang.code}
                            className="hd-lg-item"
                            onClick={() => switchLanguage(lang.code)}
                        >
                            <img src={lang.icon} alt={lang.label} />
                            <span className="txt">{lang.label}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
