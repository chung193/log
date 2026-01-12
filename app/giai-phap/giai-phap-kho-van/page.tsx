'use client';

import React from 'react';
import Breadcrumb from '@/components/SiteBreadcrumb';
import WhyChoose from '@/components/WhyChoose';
import WareHouse from '@/components/WareHouse';
import WareHouseEXP from '@/components/WareHouseEXP';
import SiteBreadcrumb from '@/components/SiteBreadcrumb';
import StoreSwiper from '@/components/StoreSwiper';
import StoreTime from '@/components/StoreTime';
import StoreSolution from '@/components/StoreSolution';
import StoreImportant from '@/components/StoreImportant';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import { Locale } from '@/lib/i18n';

const ContractLogisticsWarehousingPage = ({ initialLocale = 'en' }) => {
    const searchParams = useSearchParams();
    const langParam = searchParams.get('lang');

    const locale: Locale =
        langParam === 'en' || langParam === 'vi'
            ? langParam
            : initialLocale;

    const { t } = useTranslations(locale);

    const breadcrumbItems = {
        'vi': [
            { text: "Giải pháp", link: "/giai-phap" },
            { text: "Giải pháp Kho vận", link: "/giai-phap/giai-phap-kho-van", isActive: true }
        ],
        'en': [
            { text: "Solutions", link: "/solutions" },
            {
                text: "Contract Logistics", link: "/solutions/warehouse", isActive: true
            }
        ]
    };
    return (
        <main className="main page-storage hd-sticky">
            <div className="bn-big white">
                <div className="bn-big-bg">
                    <img
                        width="1728"
                        height="800"
                        src="/images/banner2.jpg"
                        className="attachment-full size-full"
                        alt="Containers xuất nhập khẩu - EXPEDITORS GLOBAL"
                        decoding="async"
                        fetchPriority="high"
                        srcSet="/images/banner2.jpg 1728w, /images/banner2-300x139.jpg 300w, /images/banner2-1024x474.jpg 1024w, /images/banner2-768x356.jpg 768w, /images/banner2-1536x711.jpg 1536w"
                    />
                </div>
                <div className="container">
                    <div className="bn-big-ctn">
                        <SiteBreadcrumb
                            initialLocale={initialLocale}
                            className=''
                            language={initialLocale}
                            items={breadcrumbItems[initialLocale as 'vi' | 'en']}
                            currentPage="Giải pháp Kho vận"
                        />

                        <h1 className="bn-big-tt add-class text-verti mb-24 is-inview">
                            {t("pages.warehouse.title")}
                        </h1>
                        <div className="bn-count aos-init aos-animate" data-aos="fade-up-cus" data-aos-delay="400">
                            <div className="bn-count-row row gap-res">
                                <div className="bn-count-it col">
                                    <div className="inner">
                                        <div className="num">
                                            <span className="num-txt countNum is-inview">500</span>
                                            <span className="num-sym">K+</span>
                                        </div>
                                        <p className="txt">
                                            {t("pages.warehouse.total-area")}
                                        </p>
                                    </div>
                                </div>
                                <div className="bn-count-it col">
                                    <div className="inner">
                                        <div className="num">
                                            <span className="num-txt countNum is-inview">5</span>
                                            <span className="num-sym">K+</span>
                                        </div>
                                        <p className="txt">
                                            {t("pages.warehouse.total-cargo")}
                                        </p>
                                    </div>
                                </div>
                                <div className="bn-count-it col">
                                    <div className="inner">
                                        <div className="num">
                                            <span className="num-txt countNum is-inview">16</span>
                                            <span className="num-sym">h</span>
                                        </div>
                                        <p className="txt">
                                            {t("pages.warehouse.time")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bn-box aos-init aos-animate" data-aos="fade-up-cus" data-aos-delay="600">
                            <div className="bn-box-row row gap-res">
                                <div className="bn-box-it col">
                                    <div className="inner">
                                        <div className="icon">
                                            <img width="24" height="24" src="/images/ic-bn1.svg" className="attachment-full size-full" alt="Icon TMĐT" decoding="async" />
                                        </div>
                                        <p className="des">
                                            {t("pages.warehouse.item-1")}
                                        </p>
                                    </div>
                                </div>
                                <div className="bn-box-it col">
                                    <div className="inner">
                                        <div className="icon">
                                            <img width="24" height="24" src="/images/ic-bn2.svg" className="attachment-full size-full" alt="KẾT NỐI HÀNH TRÌNH" decoding="async" />
                                        </div>
                                        <p className="des">
                                            {t("pages.warehouse.item-2")}
                                        </p>
                                    </div>
                                </div>
                                <div className="bn-box-it col">
                                    <div className="inner">
                                        <div className="icon">
                                            <img width="24" height="24" src="/images/ic-bn3.svg" className="attachment-full size-full" alt="LIÊN KẾT" decoding="async" loading="lazy" />
                                        </div>
                                        <p className="des">
                                            {t("pages.warehouse.item-3")}
                                        </p>
                                    </div>
                                </div>
                                <div className="bn-box-it col">
                                    <div className="inner">
                                        <div className="icon">
                                            <img width="24" height="24" src="/images/ic-bn4.svg" className="attachment-full size-full" alt="tmđt" decoding="async" loading="lazy" />
                                        </div>
                                        <p className="des">
                                            {t("pages.warehouse.item-4")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="sec-store-ser">
                <div className="store-ser">
                    <div className="container">
                        <div className="store-ser-para ss-pd">
                            <div className="store-ser-para-wrap">
                                <p>
                                    <div dangerouslySetInnerHTML={{ __html: t("pages.warehouse.store-para") }} />
                                </p>
                            </div>
                        </div>
                    </div>

                    <WareHouse lang={initialLocale} />

                    <div className="store-ser-swiper ss-pd">
                        <div className="container">
                            <div className="store-ser-des">
                                <p>
                                    {t("pages.warehouse.store-ser-des")}                                    </p>
                            </div>

                            <StoreSwiper initialLocale={initialLocale} />
                        </div>
                    </div>

                    <StoreTime initialLocale={initialLocale} />
                </div>
            </section>

            <StoreSolution initialLocale={initialLocale} />
            <WhyChoose initialLocale={initialLocale} />
            <WareHouseEXP initialLocale={initialLocale} />
            <StoreImportant initialLocale={initialLocale} />

        </main>
    );
};

export default ContractLogisticsWarehousingPage;