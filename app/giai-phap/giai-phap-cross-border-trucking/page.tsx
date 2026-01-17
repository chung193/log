'use client'
import PartnersSection from '@/components/PartnersSection';
import ContactFormSection from '@/components/ContactFormSection';
import SiteBreadcrumb from '@/components/SiteBreadcrumb';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import { Locale } from '@/lib/i18n';
import ListServices from '@/components/ListServices';

const CrossBorderTruckingPage: React.FC = () => {
    const breadcrumbItems = {
        'vi': [
            { text: "Giải pháp", link: "javascript:;" },
            { text: "Giải pháp Kho vận", link: "javascript:;", isActive: true }
        ],
        'en': [
            { text: "Solutions", link: "javascript:;" },
            { text: "Warehouse Solutions", link: "javascript:;", isActive: true }
        ]
    };

    const searchParams = useSearchParams();
    const langParam = searchParams.get('lang');

    const locale: Locale =
        langParam === 'en' || langParam === 'vi'
            ? langParam
            : 'en';

    const { t } = useTranslations(locale);
    return (
        <main className="main page-inter">
            <div className="bn-big white">
                <div className="bn-big-bg">
                    <img
                        width="1728"
                        height="800"
                        src="/images/banner4.jpg"
                        className="attachment-full size-full"
                        alt="Sea Freight EXPEDITORS GLOBAL"
                        decoding="async"

                        srcSet="/images/banner4.jpg 1728w, /images/banner4-300x139.jpg 300w, /images/banner4-1024x474.jpg 1024w, /images/banner4-768x356.jpg 768w, /images/banner4-1536x711.jpg 1536w"
                    />
                </div>
                <div className="container">
                    <div className="bn-big-ctn">
                        <SiteBreadcrumb
                            className=''
                            items={breadcrumbItems[locale as 'vi' | 'en']}
                        />
                        <h1 className="bn-big-tt add-class text-verti mb-24 is-inview">
                            {t("pages.trucking.title")} <br />
                            {t("pages.trucking.second-title")}
                        </h1>
                        <p className="bn-big-des aos-init aos-animate" data-aos="fade-up-cus">
                            {t("pages.trucking.des")}
                            <br />
                            <br />
                        </p>

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
                                        <p className="des">
                                            {t("pages.trucking.item1")}
                                        </p>
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
                                        <p className="des">
                                            {t("pages.trucking.item2")}
                                        </p>
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
                                        <p className="des">
                                            {t("pages.trucking.item3")}
                                        </p>
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
                                        <p className="des">{t("pages.trucking.item4")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="sec-inter-solve">
                <div className="inter-solve ss-pd">
                    <div className="container">
                        <div className="inter-solve-row row">
                            <div className="inter-solve-side col">
                                <div className="side-fixed">
                                    <ListServices activeIndex={3} />
                                    <div className="side-close">
                                        <i className="fas fa-times close icon"></i>
                                    </div>
                                </div>
                                <div className="side-overlay"></div>
                            </div>
                            <div className="inter-solve-main col">
                                <div className="side-open">
                                    <div className="side-open-wrap">
                                        {' '}
                                        <i className="fa-solid fa-sidebar-flip"></i>
                                    </div>
                                </div>
                                <div className="wrapper">
                                    <h1 className="title title-48 add-class text-verti mb-32">
                                        {t("pages.trucking.sub-title")}
                                    </h1>
                                    <div className="inter-solve-usr">
                                        <div className="name">
                                            <img src="/images/ic-usr-black.svg" alt="" />
                                            <div className="txt">{t("pages.trucking.second-sub-title")}</div>
                                        </div>
                                        <div className="ctn">
                                            <div dangerouslySetInnerHTML={{ __html: t("pages.trucking.second-sub-title-des") }} />
                                        </div>
                                    </div>
                                    <div dangerouslySetInnerHTML={{ __html: t("pages.trucking.sub-des") }} />

                                    <div className="inter-solve-box">
                                        <div className="row">
                                            <div className="col">
                                                <div className="inter-solve-box-it">
                                                    <p className="name">VN-Laos</p>
                                                    <p className="num">15</p>
                                                    <p className="des">{t("common.cont-unit")}</p>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="inter-solve-box-it">
                                                    <p className="name">VN- Campuchia</p>
                                                    <p className="num">20</p>
                                                    <p className="des">{t("common.cont-unit")}</p>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="inter-solve-box-it">
                                                    <p className="name">VN- China</p>
                                                    <p className="num">15</p>
                                                    <p className="des">{t("common.cont-unit")}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="inland-xo">
                                        <div className="imgFull">
                                            <div className="imgFull-inner">
                                                <img
                                                    width="1920"
                                                    height="825"
                                                    src="/images/IMG_2842-e1745555124249.webp"
                                                    className="attachment-full size-full"
                                                    alt=""
                                                    decoding="async"
                                                    loading="lazy"
                                                    srcSet="/images/IMG_2842-e1745555200414.webp 1920w, /images/IMG_2842-e1745555200414-300x129.webp 300w, /images/IMG_2842-e1745555200414-1024x440.webp 1024w, /images/IMG_2842-e1745555200414-768x330.webp 768w, /images/IMG_2842-e1745555200414-1536x660.webp 1536w"
                                                />
                                            </div>
                                        </div>
                                        <div className="container">
                                            <div className="inland-xo-wrap">
                                                <div className="head-verti mb-32 center white">
                                                    <div className="title-head text-verti">
                                                        <h3 className="title title-40 add-class text-hori words chars splitting" data-spl="data-spl" style={{ '--word-total': 5, '--char-total': 17 } as React.CSSProperties}>
                                                            <span className="word" data-word="Ư" style={{ '--word-index': 0 } as React.CSSProperties}>
                                                                <span className="char" data-char="Ư" style={{ '--char-index': 0 } as React.CSSProperties}>
                                                                    {t("pages.trucking.advantages")}
                                                                </span>

                                                            </span>
                                                        </h3>
                                                    </div>
                                                </div>

                                                <div className="inland-xo-box">
                                                    <div className="inland-xo-list row gap-res rows-2 listEven">
                                                        <div className="inland-xo-it col itemEven">
                                                            <div className="inner">
                                                                <div className="icon">
                                                                    <img
                                                                        width="32"
                                                                        height="32"
                                                                        src="/images/ic-il1.svg"
                                                                        className="attachment-full size-full"
                                                                        alt="Nhanh chóng"
                                                                        decoding="async"
                                                                        loading="lazy"
                                                                    />
                                                                </div>
                                                                <p className="text"></p>
                                                                <div className="des">
                                                                    {t("pages.trucking.advantages1")}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="inland-xo-it col itemEven">
                                                            <div className="inner">
                                                                <div className="icon">
                                                                    <img
                                                                        width="24"
                                                                        height="24"
                                                                        src="/images/ic-bn1.svg"
                                                                        className="attachment-full size-full"
                                                                        alt="Icon TMĐT"
                                                                        decoding="async"
                                                                        loading="lazy"
                                                                    />
                                                                </div>
                                                                <p className="text"></p>
                                                                <div className="des">
                                                                    {t("pages.trucking.advantages2")}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="inland-xo-it col itemEven">
                                                            <div className="inner">
                                                                <div className="icon">
                                                                    <img
                                                                        width="24"
                                                                        height="24"
                                                                        src="/images/ic-bn2.svg"
                                                                        className="attachment-full size-full"
                                                                        alt="KẾT NỐI HÀNH TRÌNH"
                                                                        decoding="async"
                                                                        loading="lazy"
                                                                    />
                                                                </div>
                                                                <p className="text"></p>
                                                                <div className="des">
                                                                    {t("pages.trucking.advantages3")}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="inland-xo-it col itemEven">
                                                            <div className="inner">
                                                                <div className="icon">
                                                                    <img width="40" height="40" src="/images/Group-6.png" className="attachment-full size-full" alt="" decoding="async" loading="lazy" />
                                                                </div>
                                                                <p className="text">
                                                                    {t("pages.trucking.advantages4")}
                                                                </p>
                                                                <div className="des"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <PartnersSection />
            <ContactFormSection />
        </main>
    );
};

export default CrossBorderTruckingPage;