import React from "react";
import { useSearchParams } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import { Locale } from '@/lib/i18n';

const WhyChoose = () => {
    const searchParams = useSearchParams();
    const langParam = searchParams.get('lang');

    const locale: Locale =
        langParam === 'en' || langParam === 'vi'
            ? langParam
            : 'en';

    const { t } = useTranslations(locale);
    return (
        <section className="sec-store-why">
            <div className="store-why ss-pd">
                <div className="container">
                    <div className="head-verti mb-32 center">
                        <h1 className="title title-48 add-class text-verti is-inview">
                            {t("components.why-choose.title")}
                        </h1>
                    </div>
                    <div className="store-why-list row">
                        <div className="col">
                            <div className="store-why-it">
                                <div className="icon-item">
                                    <div className="icon">
                                        <img width="101" height="100" src="/images/ic-home.svg" className="attachment-full size-full" alt="Nhà kho" decoding="async" loading="lazy" />
                                    </div>
                                    <div className="ctn">
                                        <p className="tt">
                                            {t("components.why-choose.item1")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="store-why-it">
                                <div className="icon-item">
                                    <div className="icon">
                                        <img width="101" height="100" src="/images/icon-car.svg" className="attachment-full size-full" alt="" decoding="async" loading="lazy" />
                                    </div>
                                    <div className="ctn">
                                        <p className="tt">
                                            {t("components.why-choose.item2")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="store-why-it">
                                <div className="icon-item">
                                    <div className="icon">
                                        <img width="100" height="100" src="/images/ic-trip.svg" className="attachment-full size-full" alt="Khách hàng" decoding="async" loading="lazy" />
                                    </div>
                                    <div className="ctn">
                                        <p className="tt">
                                            {t("components.why-choose.item3")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="store-why-it">
                                <div className="icon-item">
                                    <div className="icon">
                                        <img width="101" height="100" src="/images/ic-flame.svg" className="attachment-full size-full" alt="PCCC" decoding="async" loading="lazy" />
                                    </div>
                                    <div className="ctn">
                                        <p className="tt">
                                            {t("components.why-choose.item4")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="store-why-it">
                                <div className="icon-item">
                                    <div className="icon">
                                        <img width="101" height="100" src="/images/ic-camera.svg" className="attachment-full size-full" alt="CCTV" decoding="async" loading="lazy" />
                                    </div>
                                    <div className="ctn">
                                        <p className="tt">
                                            {t("components.why-choose.item5")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="store-why-it">
                                <div className="icon-item">
                                    <div className="icon">
                                        <img width="100" height="100" src="/images/ic-increase.svg" className="attachment-full size-full" alt="vận hành phát triển" decoding="async" loading="lazy" />
                                    </div>
                                    <div className="ctn">
                                        <p className="tt">
                                            {t("components.why-choose.item6")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default WhyChoose;