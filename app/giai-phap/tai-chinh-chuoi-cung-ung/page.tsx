'use client'
import PartnersSection from '@/components/PartnersSection';
import React from 'react';
import ContactFormSection from '@/components/ContactFormSection';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import { Locale } from '@/lib/i18n';
import SiteBreadcrumb from '@/components/SiteBreadcrumb';

const ExportImportPage: React.FC = () => {
    const breadcrumbItems = {
        'vi': [
            { text: "Giải pháp", link: "javascript:;" },
            { text: "Giải pháp Kho vận", link: "javascript:;", isActive: true }
        ],
        'en': [
            { text: "Solutions", link: "javascript:;" },
            { text: "Export and import", link: "javascript:;e" },
            { text: "Supply Chain Finance", link: "javascript:;e", isActive: true }
        ]
    }

    const searchParams = useSearchParams();
    const langParam = searchParams.get('lang');

    const locale: Locale =
        langParam === 'en' || langParam === 'vi'
            ? langParam
            : 'en';

    const { t } = useTranslations(locale);
    return (
        <main className="main page-exp">
            {/* Banner Section */}
            <div className="bn-big white">
                <div className="bn-big-bg">
                    <img
                        width="1728"
                        height="800"
                        src="/images/banner2.jpg"
                        className="attachment-full size-full"
                        alt="Containers xuất nhập khẩu - EXPEDITORS GLOBAL"
                        decoding="async"
                        srcSet="/images/banner2.jpg 1728w, /images/banner2-300x139.jpg 300w, /images/banner2-1024x474.jpg 1024w, /images/banner2-768x356.jpg 768w, /images/banner2-1536x711.jpg 1536w"
                    />
                </div>
                <div className="container">
                    <div className="bn-big-ctn">
                        <SiteBreadcrumb

                            className=''
                            items={breadcrumbItems[locale as 'vi' | 'en']}
                        />

                        {/* Main Title */}
                        <h1 className="bn-big-tt add-class text-verti mb-24 is-inview">
                            {t("pages.finance.title")}
                        </h1>

                        {/* Features Box */}
                        <div className="bn-box aos-init aos-animate" data-aos-delay="600">
                            <div className="bn-box-row row gap-res">
                                {/* Feature 1 */}
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
                                            {t("pages.finance.title1")}
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 2 */}
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
                                            {t("pages.finance.title2")}
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 3 */}
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
                                            {t("pages.finance.title3")}
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 4 */}
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
                                            {t("pages.finance.title4")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Finance Section */}
            <section className="sec-exp-fin">
                {/* Tab Links */}
                <div className="exp-tabLink ss-pd-t">
                    <div className="cpn-faq-filter scrollContainer">
                        <a className="cpn-faq-filter-it buttons active" href="/giai-phap/tai-chinh-chuoi-cung-ung/">
                            {t("pages.finance.finance")}
                        </a>
                        <a className="cpn-faq-filter-it buttons" href="/giai-phap/uy-thac-xuat-nhap-khau/">
                            {t("pages.finance.im-ex")}
                        </a>
                    </div>
                </div>

                {/* Finance Content */}
                <div className="exp-fin">
                    <div className="bg">
                        <img
                            width="1728"
                            height="700"
                            src="/images/imgFull2.webp"
                            className="attachment-full size-full"
                            alt=""
                            decoding="async"
                            loading="lazy"
                            srcSet="/images/imgFull2.webp 1728w, /images/imgFull2-300x122.webp 300w, /images/imgFull2-1024x415.webp 1024w, /images/imgFull2-768x311.webp 768w, /images/imgFull2-1536x622.webp 1536w"
                        />
                    </div>
                    <div className="container">
                        <div className="exp-fin-ctn">
                            <div className="exp-fin-row row">
                                {/* Left Column - Title */}
                                <div className="exp-fin-l col">
                                    <div className="wrapper white">
                                        <h1 className="title title-48 add-class text-verti">
                                            {t("pages.finance.finance")}
                                        </h1>
                                    </div>
                                </div>

                                {/* Right Column - Features */}
                                <div className="exp-fin-r col">
                                    <div className="wrapper">
                                        <div className="exp-fin-list row">
                                            {/* Feature 1 */}
                                            <div className="col">
                                                <div className="exp-fin-it aos-init" >
                                                    <img src="/images/sao.svg" alt="" />
                                                    <h4 className="tt">
                                                        {t("pages.finance.finance1-title")}
                                                    </h4>
                                                    <p className="des">
                                                        {t("pages.finance.finance1")}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Feature 2 */}
                                            <div className="col">
                                                <div className="exp-fin-it aos-init" >
                                                    <img src="/images/sao.svg" alt="" />
                                                    <h4 className="tt">{t("pages.finance.finance2-title")} </h4>
                                                    <p className="des">{t("pages.finance.finance2")}</p>
                                                </div>
                                            </div>

                                            {/* Feature 3 */}
                                            <div className="col">
                                                <div className="exp-fin-it aos-init">
                                                    <img src="/images/sao.svg" alt="" />
                                                    <h4 className="tt">{t("pages.finance.finance3-title")} </h4>
                                                    <p className="des">{t("pages.finance.finance3")}</p>
                                                </div>
                                            </div>

                                            {/* Feature 4 */}
                                            <div className="col">
                                                <div className="exp-fin-it aos-init" >
                                                    <img src="/images/sao.svg" alt="" />
                                                    <h4 className="tt">{t("pages.finance.finance4-title")} </h4>
                                                    <p className="des">{t("pages.finance.finance4")}</p>
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

            {/* Process Section */}
            <section className="sec-exp-chain">
                <div className="exp-chain ss-pd">
                    <div className="container">
                        <div className="head-verti mb-32 center">
                            <h1 className="title title-48 add-class text-verti">
                                {t("pages.finance.procedure")}
                            </h1>
                        </div>
                        <div className="exp-chain-img">
                            <div className="img">
                                <img
                                    width="1281"
                                    height="498"
                                    src="/images/Group-2144769115.png"
                                    className="attachment-full size-full"
                                    alt=""
                                    decoding="async"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Advantages Section */}
            <div className="inland-xo" style={{ marginBottom: '100px' }}>
                <div className="imgFull">
                    <div className="imgFull-inner">
                        <img
                            width="1728"
                            height="600"
                            src="/images/inland-fly.webp"
                            className="attachment-full size-full"
                            alt=""
                            decoding="async"
                            loading="lazy"
                            srcSet="/images/inland-fly.webp 1728w, /images/inland-fly-300x104.webp 300w, /images/inland-fly-1024x356.webp 1024w, /images/inland-fly-768x267.webp 768w, /images/inland-fly-1536x533.webp 1536w"
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
                                    style={{ "--word-total": 5, "--char-total": 17 } as React.CSSProperties}
                                >
                                    <span className="word" data-word="Ưu" style={{ "--word-index": 0 } as React.CSSProperties}>
                                        <span className="char" data-char="u" style={{ "--char-index": 1 } as React.CSSProperties}>
                                            {t("pages.finance.advantages")}
                                        </span>
                                    </span>

                                </h3>
                            </div>
                        </div>

                        {/* Advantages Box */}
                        <div className="inland-xo-box">
                            <div className="inland-xo-list row gap-res rows-2 listEven">
                                {/* Advantage 1 */}
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
                                        <p className="text">{t("pages.finance.ad1-title")}</p>
                                        <div className="des">{t("pages.finance.ad1")}</div>
                                    </div>
                                </div>

                                {/* Advantage 2 */}
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
                                        <p className="text">{t("pages.finance.ad2-title")}</p>
                                        <div className="des">{t("pages.finance.ad2")}</div>
                                    </div>
                                </div>

                                {/* Advantage 3 */}
                                <div className="inland-xo-it col itemEven odd">
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
                                        <p className="text">{t("pages.finance.ad3-title")}</p>
                                        <div className="des">{t("pages.finance.ad3")}</div>
                                    </div>
                                </div>

                                {/* Advantage 4 */}
                                <div className="inland-xo-it col itemEven even">
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
                                        <p className="text">{t("pages.finance.ad4-title")}</p>
                                        <div className="des">{t("pages.finance.ad4")}</div></div>
                                </div>

                                {/* Advantage 5 */}
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
                                        <p className="text">{t("pages.finance.ad5-title")}</p>
                                        <div className="des">{t("pages.finance.ad5")}</div> </div>
                                </div>

                                {/* Advantage 6 */}
                                <div className="inland-xo-it col itemEven odd">
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
                                        <p className="text">{t("pages.finance.ad6-title")}</p>
                                        <div className="des">{t("pages.finance.ad6")}</div>  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PartnersSection />
            <ContactFormSection />

        </main>
    );
};

export default ExportImportPage;