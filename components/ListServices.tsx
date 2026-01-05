import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import { Locale } from '@/lib/i18n';

const ListServices = ({ initialLocale = 'en' }) => {
    const searchParams = useSearchParams();
    const langParam = searchParams.get('lang');

    const locale: Locale =
        langParam === 'en' || langParam === 'vi'
            ? langParam
            : initialLocale;

    const { t } = useTranslations(locale);
    return (
        <div className="inter-solve-side col">
            <div className="side-fixed">
                <div className="side-fixed-wrap">
                    <div className="wrapper">
                        <div className="inter-solve-menu">
                            <a className="inter-solve-menu-link active" href="/giai-phap/giai-phap-sea-freight/">
                                <img
                                    width="24"
                                    height="24"
                                    src="/images/menu1.svg"
                                    className="attachment-full size-full wp-post-image"
                                    alt=""
                                    decoding="async"
                                    loading="lazy"
                                />
                                <span className="txt">
                                    {t("components.services.item1")}
                                </span>
                            </a>
                            <a className="inter-solve-menu-link " href="/giai-phap/giai-phap-air-express/">
                                <img
                                    width="24"
                                    height="25"
                                    src="/images/menu2.svg"
                                    className="attachment-full size-full wp-post-image"
                                    alt=""
                                    decoding="async"
                                    loading="lazy"
                                />
                                <span className="txt">
                                    {t("components.services.item2")}
                                </span>
                            </a>
                            <a className="inter-solve-menu-link " href="/giai-phap/giai-phap-air-cargo/">
                                <img
                                    width="24"
                                    height="25"
                                    src="/images/menu3.svg"
                                    className="attachment-full size-full wp-post-image"
                                    alt=""
                                    decoding="async"
                                    loading="lazy"
                                />
                                <span className="txt">
                                    {t("components.services.item3")}
                                </span>
                            </a>
                            <a className="inter-solve-menu-link " href="/giai-phap/giai-phap-cross-border-trucking/">
                                <img
                                    width="24"
                                    height="24"
                                    src="/images/menu4.svg"
                                    className="attachment-full size-full wp-post-image"
                                    alt=""
                                    decoding="async"
                                    loading="lazy"
                                />
                                <span className="txt">
                                    {t("components.services.item4")}
                                </span>
                            </a>
                            <a className="inter-solve-menu-link " href="/giai-phap/giai-phap-railway/">
                                <img
                                    width="24"
                                    height="24"
                                    src="/images/menu5.svg"
                                    className="attachment-full size-full wp-post-image"
                                    alt=""
                                    decoding="async"
                                    loading="lazy"
                                />
                                <span className="txt">
                                    {t("components.services.item5")}
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="side-close">
                    <i className="fas fa-times close icon"></i>
                </div>
            </div>
            <div className="side-overlay"></div>
        </div>
    );
};
export default ListServices;