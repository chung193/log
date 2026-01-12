import React from "react"
import { useSearchParams } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import { Locale } from '@/lib/i18n';

const StoreTime = ({ initialLocale = 'en' }) => {
    const searchParams = useSearchParams();
    const langParam = searchParams.get('lang');

    const locale: Locale =
        langParam === 'en' || langParam === 'vi'
            ? langParam
            : initialLocale;

    const { t } = useTranslations(locale);
    return (
        <div className="store-ser-time ss-pd-b">
            <div className="container">
                <div className="store-ser-time-top">
                    <div className="head-verti mb-32">
                        <div className="title-head text-verti">
                            <h3 className="title title-40 add-class text-hori is-inview">
                                {t("components.store-time.title")} <br /> {t("components.store-time.second-title")}
                            </h3>
                        </div>
                        <div className="line aos-init aos-animate" data-aos="fade-up-cus" data-aos-delay="400">
                            <div className="desc">
                                {t("components.store-time.sub-title")}  <br /> {t("components.store-time.second-sub-title")}
                            </div>
                        </div>
                    </div>
                    <div className="minibox aos-init aos-animate" data-aos="fade-up-cus" data-aos-delay="600">
                        <div className="icon">
                            <img width="48" height="48" src="/images/ic-1.svg" className="attachment-full size-full" alt="Hàng hóa" decoding="async" loading="lazy" />
                        </div>
                        <p className="desc">
                            {t("components.store-time.time")}
                        </p>
                    </div>
                </div>
                <div className="store-ser-time-bot aos-init aos-animate" data-aos="fade-right-cus">
                    <div className="img">
                        <img width="651" height="502" src="/images/car.webp" className="attachment-full size-full" alt="Xe chở container" decoding="async" loading="lazy" srcSet="/images/car.webp 651w, /images/car-300x231.webp 300w" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoreTime;