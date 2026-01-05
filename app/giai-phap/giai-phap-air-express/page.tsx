'use client'
import PartnersSection from '@/components/PartnersSection';
import React from 'react';
import ContactFormSection from '@components/ContactFormSection';
import ListServices from '@/components/ListServices';
import SiteBreadcrumb from '@/components/SiteBreadcrumb';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import { Locale } from '@/lib/i18n';

const InternationalLogisticsPage: React.FC = ({ initialLocale = 'en' }) => {
    const breadcrumbItems = {
        vi: [
            { text: "Giải pháp", link: "javascript:;" },
            { text: "Logistics quốc tế", link: "javascript:;" },
            {
                text: "Chuyển phát nhanh Quốc tế", link: "javascript:;", isActive: true
            }
        ],
        en: [
            { text: "Solutions", link: "javascript:;" },
            {
                text: "International Logistics", link: "javascript:;"
            },
            {
                text: "Air Express", link: "javascript:; ", isActive: true
            },
        ]
    };

    const searchParams = useSearchParams();
    const langParam = searchParams.get('lang');

    const locale: Locale =
        langParam === 'en' || langParam === 'vi'
            ? langParam
            : initialLocale;

    const { t } = useTranslations(locale);
    return (
        <main className="main page-inter hd-sticky">
            <div className="bn-big white">
                <div className="bn-big-bg">
                    <img
                        width="1728"
                        height="800"
                        src="banner4.jpg"
                        className="attachment-full size-full"
                        alt="Sea Freight EXPEDITORS GLOBAL"
                        decoding="async"
                        fetchPriority="high"
                        srcSet="/images/banner4.webp 1728w, /images/banner4-300x139.webp 300w, /images/banner4-1024x474.webp 1024w, /images/banner4-768x356.webp 768w, /images/banner4-1536x711.webp 1536w"
                    />
                </div>
                <div className="container">
                    <div className="bn-big-ctn">
                        <SiteBreadcrumb
                            items={breadcrumbItems[initialLocale]}
                            language={initialLocale}
                            showAnimation={true}
                            className="mb-16"
                            // Tùy chọn: có thể set homeLink khác cho từng ngôn ngữ
                            homeLink={initialLocale === 'vi' ? '/' : '/en'}
                        />
                        <h1 className="bn-big-tt add-class text-verti mb-24 is-inview">
                            {t("pages.in-log.title")} <br />
                            {t("pages.in-log.second-title")}
                        </h1>
                        <p className="bn-big-des aos-init aos-animate" data-aos="fade-up-cus">
                            {t("pages.in-log.des")}
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
                                            {t("pages.in-log.item1")}
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
                                            {t("pages.in-log.item2")}
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
                                            {t("pages.in-log.item3")}
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
                                        <p className="des">
                                            {t("pages.in-log.item4")}
                                        </p>
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
                            <ListServices initialLocale={'en'} />
                            <div className="inter-solve-main col">
                                <div className="side-open">
                                    <div className="side-open-wrap">
                                        {' '}
                                        <i className="fa-solid fa-sidebar-flip"></i>
                                    </div>
                                </div>
                                <div className="wrapper">
                                    <h1 className="title title-48 add-class text-verti mb-32 is-inview">
                                        {t("pages.in-log.text")}
                                    </h1>
                                    <div className="inter-solve-">
                                        <div className="mona-content">
                                            <p>
                                                <strong>{t("pages.in-log.second-text")}
                                                </strong>
                                            </p>
                                            <p>
                                                {t("pages.in-log.text-des")}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="homes-ab-splide-grid">
                                        <div className="homes-ab-splide-it">
                                            <a className="img" href="homes-ab1.jpg" data-fancybox="gallery1">
                                                <img
                                                    width="492"
                                                    height="188"
                                                    src="homes-ab1.jpg"
                                                    className="attachment-full size-full"
                                                    alt="MÁY BAY"
                                                    decoding="async"
                                                    loading="lazy"
                                                    srcSet="/images/homes-ab1.webp 492w, /images/homes-ab1-300x115.webp 300w"
                                                />
                                            </a>
                                        </div>
                                        <div className="homes-ab-splide-it">
                                            <a className="img" href="homes-ab2.jpg" data-fancybox="gallery1">
                                                <img
                                                    width="188"
                                                    height="188"
                                                    src="homes-ab2.jpg"
                                                    className="attachment-full size-full"
                                                    alt="Logo EXPEDITORS GLOBAL"
                                                    decoding="async"
                                                    loading="lazy"
                                                    srcSet="/images/homes-ab2.webp 188w, /images/homes-ab2-150x150.webp 150w"
                                                />
                                            </a>
                                        </div>
                                        <div className="homes-ab-splide-it">
                                            <a className="img" href="homes-ab3.jpg" data-fancybox="gallery1">
                                                <img width="280" height="188" src="/images/homes-ab3.jpg" className="attachment-full size-full" alt="Bê thùng hàng" decoding="async" loading="lazy" />
                                            </a>
                                        </div>
                                        <div className="homes-ab-splide-it">
                                            <a className="img" href="homes-ab4.jpg" data-fancybox="gallery1">
                                                <img
                                                    width="493"
                                                    height="400"
                                                    src="homes-ab4.jpg"
                                                    className="attachment-full size-full"
                                                    alt="Xe tải, container, máy bay"
                                                    decoding="async"
                                                    loading="lazy"
                                                    srcSet="/images/homes-ab4.webp 493w, /images/homes-ab4-300x243.webp 300w"
                                                />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="inter-solve-map">
                                        <div className="head-verti mb-24 center">
                                            <div className="title-head text-verti mb-32">
                                                <h3 className="title title-40 add-class text-hori words chars splitting is-inview" data-spl="data-spl" style={{ '--word-total': 8, '--char-total': 32 } as React.CSSProperties}>
                                                    <span className="word" data-word="Tốc" style={{ '--word-index': 0 } as React.CSSProperties}>
                                                        <span className="char" data-char="T" style={{ '--char-index': 0 } as React.CSSProperties}>
                                                            {t('pages.in-log.speed')}
                                                        </span>
                                                    </span>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="img">
                                            <img
                                                width="977"
                                                height="586"
                                                src="/images/Group-2144769123.webp"
                                                className="attachment-full size-full"
                                                alt=""
                                                decoding="async"
                                                loading="lazy"
                                                srcSet="/images/Group-2144769123.webp 977w, /images/Group-2144769123.webp 300w, /images/Group-2144769123.webp 768w"
                                            />
                                        </div>
                                    </div>

                                    <div className="inter-solve-ud">
                                        <div className="head-verti mb-24 center">
                                            <div className="title-head text-verti mb-32">
                                                <h3 className="title title-40 add-class text-hori is-inview">
                                                    {t('pages.in-log.advantages')}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="inter-solve-ud-ctn">
                                        <div className="bg">
                                            <img
                                                width="977"
                                                height="500"
                                                src="/images/solve-ud.jpg"
                                                className="attachment-full size-full"
                                                alt=""
                                                decoding="async"
                                                loading="lazy"
                                                srcSet="/images/solve-ud.jpg 977w, /images/solve-ud-300x154.jpg 300w, /images/solve-ud-768x393.jpg 768w"
                                            />
                                        </div>
                                        <div className="inter-solve-ud-list">
                                            <div className="inter-solve-ud-it">
                                                <div className="inner">
                                                    <div className="inner-front">
                                                        <p className="tt">
                                                            {t('pages.in-log.item1-title')}
                                                        </p>
                                                    </div>
                                                    <div className="inner-back">
                                                        <p className="tt">
                                                            {t('pages.in-log.item1-title')}
                                                        </p>
                                                        <p className="des">
                                                            {t('pages.in-log.item1-des')}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="inter-solve-ud-it">
                                                <div className="inner">
                                                    <div className="inner-front">
                                                        <p className="tt">
                                                            {t('pages.in-log.item2-title')}
                                                        </p>
                                                    </div>
                                                    <div className="inner-back">
                                                        <p className="tt">
                                                            {t('pages.in-log.item2-title')}
                                                        </p>
                                                        <p className="des">
                                                            {t('pages.in-log.item2-des')}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="inter-solve-ud-it">
                                                <div className="inner">
                                                    <div className="inner-front">
                                                        <p className="tt">
                                                            {t('pages.in-log.item3-title')}
                                                        </p>
                                                    </div>
                                                    <div className="inner-back">
                                                        <p className="tt">
                                                            {t('pages.in-log.item3-title')}
                                                        </p>
                                                        <p className="des">
                                                            {t('pages.in-log.item3-des')}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="inter-solve-ud-it">
                                                <div className="inner">
                                                    <div className="inner-front">
                                                        <p className="tt">
                                                            {t('pages.in-log.item4-title')}
                                                        </p>
                                                    </div>
                                                    <div className="inner-back">
                                                        <p className="tt">
                                                            {t('pages.in-log.item4-title')}
                                                        </p>
                                                        <p className="des">
                                                            {t('pages.in-log.item4-des')}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="inter-solve-ser ss-pd-t">
                                    <h1 className="title title-48 add-class text-verti mb-32">{t('pages.in-log.why-choose')}</h1>
                                    <div className="store-why-list row">
                                        <div className="col">
                                            <div className="store-why-it">
                                                <div className="icon-item verti">
                                                    <div className="icon">
                                                        <img width="100" height="100" src="/images/ic-hand.svg" className="attachment-full size-full" alt="Bắt tay" decoding="async" loading="lazy" />
                                                    </div>
                                                    <div className="ctn">
                                                        <p className="tt">
                                                            {t('pages.in-log.why-item1')}
                                                        </p>
                                                        <p className="des">
                                                            {t('pages.in-log.why-item1-des')}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="store-why-it">
                                                <div className="icon-item verti">
                                                    <div className="icon">
                                                        <img width="100" height="100" src="/images/ic-trip.svg" className="attachment-full size-full" alt="Khách hàng" decoding="async" loading="lazy" />
                                                    </div>
                                                    <div className="ctn">
                                                        <p className="tt">{t('pages.in-log.why-item2')}</p>
                                                        <p className="des">{t('pages.in-log.why-item2-des')}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="store-why-it">
                                                <div className="icon-item verti">
                                                    <div className="icon">
                                                        <img width="100" height="100" src="/images/ic-increase.svg" className="attachment-full size-full" alt="vận hành phát triển" decoding="async" loading="lazy" />
                                                    </div>
                                                    <div className="ctn">
                                                        <p className="tt">{t('pages.in-log.why-item3')}</p>
                                                        <p className="des">{t('pages.in-log.why-item3-des')}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="store-why-it">
                                                <div className="icon-item verti">
                                                    <div className="icon">
                                                        <img width="100" height="100" src="/images/ic-quality.svg" className="attachment-full size-full" alt="phần thưởng." decoding="async" loading="lazy" />
                                                    </div>
                                                    <div className="ctn">
                                                        <p className="tt">{t('pages.in-log.why-item4')}</p>
                                                        <p className="des">{t('pages.in-log.why-item4-des')}</p>
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

export default InternationalLogisticsPage;