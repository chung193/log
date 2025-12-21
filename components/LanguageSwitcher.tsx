'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Locale } from '@/lib/i18n';

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const switchLanguage = (lang: Locale) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('lang', lang);

        // Giữ nguyên pathname, chỉ thay đổi query parameter
        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="hd-lg">
            <div className="hd-lg-item"
                onClick={() => switchLanguage('vi')}>
                <img src="/images/ic-vn(1).svg" alt="VIE" />
                <span className="txt">VIE</span>
                <span className="ic"><i className="fas fa-chevron-down"></i></span>
            </div>
            <div className="hd-lg-drop"
                onClick={() => switchLanguage('en')}>
                <a className="hd-lg-item" href="/en/">
                    <img src="/images/ic-en(1).svg" alt="ENG" />
                    <span className="txt">ENG</span>
                </a>
            </div>
        </div>
    );
}