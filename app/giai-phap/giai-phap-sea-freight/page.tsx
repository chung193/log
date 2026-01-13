'use client'
import React from 'react';
import SiteBreadcrumb from '@/components/SiteBreadcrumb';
import ListServices from '@/components/ListServices';
import EXPTrust from '@/components/EXPTrust';
import Partners from '@/components/Partners';
import TopStrong from '@/components/TopStrong';
import PartnersSection from '@/components/PartnersSection';
import ContactFormSection from '@/components/ContactFormSection';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import { Locale } from '@/lib/i18n';
import BoxHeader from '@/components/BoxHeader';

const SeaFreightPage = () => {
    const breadcrumbItems = {
        vi: [
            { text: "Giải pháp", link: "javascript:;" },
            { text: "Logistics quốc tế", link: "javascript:;" },
            { text: "Vận tải đường biển", link: "javascript:;", isActive: true }
        ],
        en: [
            { text: "Solutions", link: "javascript:;" },
            {
                text: "International Logistics", link: "javascript:;"
            },
            {
                text: "Sea Freight", link: "javascript:;", isActive: true
            },
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
        <main className="main page-inter hd-sticky">
            <div className="bn-big white">
                <div className="bn-big-bg">
                    <img
                        width="1728"
                        height="800"
                        src="/images/banner4.webp"
                        className="attachment-full size-full"
                        alt="Sea Freight EXPEDITORS GLOBAL"
                        decoding="async"

                        srcSet="/images/banner4.webp 1728w,/images/banner4.webp 300w, /images/banner4.webp 1024w, /images/banner4.webp 768w, /images/banner4.webp 1536w"
                    />
                </div>
                <div className="container">
                    <div className="bn-big-ctn">
                        <SiteBreadcrumb
                            items={breadcrumbItems[locale]}
                            language={locale}
                            showAnimation={true}
                            className="mb-16"
                        />

                        <h1 className="bn-big-tt add-class text-verti mb-24 is-inview">
                            {t("pages.sea-freight.title")} <br />
                            {t("pages.sea-freight.second-title")}
                        </h1>
                        <p className="bn-big-des aos-init aos-animate" data-aos="fade-up-cus">
                            {t("pages.sea-freight.sub-title")}
                        </p>

                        <BoxHeader />
                    </div>
                </div>
            </div>

            <section className="sec-inter-solve">
                <div className="inter-solve ss-pd solv-freight">
                    <div className="container">
                        <div className="inter-solve-row row">
                            <ListServices />
                            <div className="inter-solve-main col">
                                <div className="side-open">
                                    <div className="side-open-wrap">
                                        {' '}
                                        <i className="fa-solid fa-sidebar-flip"></i>
                                    </div>
                                </div>
                                <div className="wrapper">
                                    <h1 className="title title-48 add-class text-verti mb-32 is-inview">
                                        {t("pages.sea-freight.main-title")}
                                    </h1>

                                    <p className="inter-solve-des">
                                        <div dangerouslySetInnerHTML={{ __html: t("pages.sea-freight.main-des") }} />
                                    </p>

                                    <EXPTrust />

                                    <div className="inter-solve-box">
                                        <div className="row">
                                            <div className="col">
                                                <div className="inter-solve-box-it">
                                                    <p className="name">VN-US</p>
                                                    <p className="num">200 - 250</p>
                                                    <p className="des">{t("common.unit")}</p>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="inter-solve-box-it">
                                                    <p className="name">VN-EU</p>
                                                    <p className="num">150</p>
                                                    <p className="des">{t("common.unit")}</p>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="inter-solve-box-it">
                                                    <p className="name">VN-Asia, UAE</p>
                                                    <p className="num">350</p>
                                                    <p className="des">{t("common.unit")}</p>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="inter-solve-box-it">
                                                    <p className="name">China-VN</p>
                                                    <p className="num">300</p>
                                                    <p className="des">{t("common.unit")}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="inland-xo">
                                        <div className="imgFull">
                                            <div className="imgFull-inner">
                                                <img
                                                    width="977"
                                                    height="400"
                                                    src="/images/img-ud.webp"
                                                    className="attachment-full size-full"
                                                    alt=""
                                                    decoding="async"
                                                    loading="lazy"
                                                    srcSet="/images/img-ud.webp 977w, /images/img-ud-300x123.webp 300w, /images/img-ud-768x314.webp 768w"
                                                />
                                            </div>
                                        </div>
                                        <div className="container">
                                            <div className="inland-xo-wrap">
                                                <div className="head-verti mb-32 center white">
                                                    <div className="title-head text-verti">
                                                        <h3
                                                            className="title title-40 add-class text-hori words chars splitting"
                                                            data-spl="data-spl"
                                                            style={{ '--word-total': 5, '--char-total': 17 } as React.CSSProperties}
                                                        >
                                                            <span className="word" data-word="Ư" style={{ '--word-index': 0 } as React.CSSProperties}>
                                                                <span className="char" data-char="Ư" style={{ '--char-index': 0 } as React.CSSProperties}>
                                                                    {t("pages.sea-freight.title-head")}
                                                                </span>

                                                            </span>

                                                        </h3>
                                                    </div>
                                                </div>

                                                <div className="inland-xo-box">
                                                    {' '}
                                                    <div className="inland-xo-list row gap-res rows-2  listEven">
                                                        <div className="inland-xo-it col itemEven even">
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
                                                                    {t("pages.sea-freight.title-des1")}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="inland-xo-it col itemEven odd">
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
                                                                    {t("pages.sea-freight.title-des2")}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="inland-xo-it col itemEven odd">
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
                                                                    {t("pages.sea-freight.title-des3")}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="inland-xo-it col itemEven even">
                                                            <div className="inner">
                                                                <div className="icon">
                                                                    <img
                                                                        width="32"
                                                                        height="32"
                                                                        src="/images/ic-il3.svg"
                                                                        className="attachment-full size-full"
                                                                        alt="Đa dạng"
                                                                        decoding="async"
                                                                        loading="lazy"
                                                                    />
                                                                </div>
                                                                <p className="text"></p>
                                                                <div className="des">
                                                                    {t("pages.sea-freight.title-des4")}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="inland-xo-it col itemEven even">
                                                            <div className="inner">
                                                                <div className="icon">
                                                                    <img
                                                                        width="32"
                                                                        height="32"
                                                                        src="/images/ic-il5.svg"
                                                                        className="attachment-full size-full"
                                                                        alt="An toàn"
                                                                        decoding="async"
                                                                        loading="lazy"
                                                                    />
                                                                </div>
                                                                <p className="text"></p>
                                                                <div className="des">
                                                                    {t("pages.sea-freight.title-des5")}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="inland-xo-it col itemEven odd">
                                                            <div className="inner">
                                                                <div className="icon">
                                                                    <img
                                                                        width="40"
                                                                        height="40"
                                                                        src="/images/Group-6.png"
                                                                        className="attachment-full size-full"
                                                                        alt=""
                                                                        decoding="async"
                                                                        loading="lazy"
                                                                    />
                                                                </div>
                                                                <p className="text">

                                                                </p>
                                                                <div className="des">
                                                                    {t("pages.sea-freight.title-des6")}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>{' '}
                                            </div>
                                        </div>
                                    </div>

                                    <Partners />
                                    <TopStrong />

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

export default SeaFreightPage;