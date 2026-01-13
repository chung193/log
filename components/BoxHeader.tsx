import React from "react"
import { useSearchParams } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import { Locale } from '@/lib/i18n';

const BoxHeader = () => {
    const searchParams = useSearchParams();
    const langParam = searchParams.get('lang');

    const locale: Locale =
        langParam === 'en' || langParam === 'vi'
            ? langParam
            : 'en';

    const { t } = useTranslations(locale);
    return (
        <div className="bn-box aos-init aos-animate" data-aos="fade-up-cus" data-aos-delay="600">
            <div className="bn-box-row row gap-res">
                <div className="bn-box-it col">
                    <div className="inner">
                        <div className="icon">
                            <img
                                width="24"
                                height="24"
                                src="/images/ic-bn1.svg"
                                className="attachment-full size-full"
                                alt="Icon TMĐT"
                                decoding="async"
                            />
                        </div>
                        <p className="des"> {t("pages.sea-freight.item1")}</p>
                    </div>
                </div>
                <div className="bn-box-it col">
                    <div className="inner">
                        <div className="icon">
                            <img
                                width="24"
                                height="24"
                                src="/images/ic-bn2.svg"
                                className="attachment-full size-full"
                                alt="KẾT NỐI HÀNH TRÌNH"
                                decoding="async"
                            />
                        </div>
                        <p className="des"> {t("pages.sea-freight.item2")}</p>
                    </div>
                </div>
                <div className="bn-box-it col">
                    <div className="inner">
                        <div className="icon">
                            <img
                                width="24"
                                height="24"
                                src="/images/ic-bn3.svg"
                                className="attachment-full size-full"
                                alt="LIÊN KẾT"
                                decoding="async"
                                loading="lazy"
                            />
                        </div>
                        <p className="des"> {t("pages.sea-freight.item3")}</p>
                    </div>
                </div>
                <div className="bn-box-it col">
                    <div className="inner">
                        <div className="icon">
                            <img
                                width="24"
                                height="24"
                                src="/images/ic-bn4.svg"
                                className="attachment-full size-full"
                                alt="tmđt"
                                decoding="async"
                                loading="lazy"
                            />
                        </div>
                        <p className="des"> {t("pages.sea-freight.item4")}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BoxHeader