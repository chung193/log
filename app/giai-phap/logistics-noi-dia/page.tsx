'use client'
import React from 'react';
import SiteBreadcrumb from '@/components/SiteBreadcrumb';
import SolutionSwiper from '@/components/SolutionSwiper';
import PartnersSection from '@/components/PartnersSection';
import ContactFormSection from '@/components/ContactFormSection';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import { Locale } from '@/lib/i18n';

const InlandLogisticsPage: React.FC = () => {
    const breadcrumbItems = {
        'vi': [
            { text: "Giải pháp", link: "javascript:;" },
            { text: "Giải pháp Kho vận", link: "javascript:;", isActive: true }
        ],
        'en': [
            { text: "Solutions", link: "javascript:;" },
            { text: "Domestic Logistics", link: "javascript:;", isActive: true }
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
        <main className="main page-inland" >
            {/* Banner Section */}
            < div className="bn-big white" >
                <div className="bn-big-bg">
                    <img
                        width="1920"
                        height="1332"
                        src="/images/mde.webp"
                        className="attachment-full size-full"
                        alt=""
                        srcSet="/images/mde.webp 1920w, /images/mde-300x208.webp 300w, /images/mde-1024x710.webp 1024w, /images/mde-768x533.webp 768w, /images/mde-1536x1066.webp 1536w"
                    />
                </div>
                <div className="container">
                    <div className="bn-big-ctn">
                        {/* Breadcrumb */}
                        <SiteBreadcrumb
                            className=''
                            items={breadcrumbItems[locale as 'vi' | 'en']}
                        />
                        {/* Main Title */}
                        <h1 className="bn-big-tt add-class text-verti mb-24 is-inview">
                            {t("pages.logistics.title")}
                        </h1>

                        {/* Stats Counter */}
                        <div className="bn-count aos-init aos-animate" data-aos="fade-up-cus" data-aos-delay="400">
                            <div className="bn-count-row row gap-res">
                                <div className="bn-count-it col">
                                    <div className="inner">
                                        <div className="num">
                                            <span className="num-txt countNum is-inview">12</span>
                                            <span className="num-sym">K+</span>
                                        </div>
                                        <p className="txt">
                                            {t("pages.logistics.title1")}
                                        </p>
                                    </div>
                                </div>
                                <div className="bn-count-it col">
                                    <div className="inner">
                                        <div className="num">
                                            <span className="num-txt countNum is-inview">1</span>
                                            <span className="num-sym">K+</span>
                                        </div>
                                        <p className="txt">
                                            {t("pages.logistics.title2")}
                                        </p>
                                    </div>
                                </div>
                                <div className="bn-count-it col">
                                    <div className="inner">
                                        <div className="num">
                                            <span className="num-txt countNum is-inview">99</span>
                                            <span className="num-sym">%</span>
                                        </div>
                                        <p className="txt">
                                            {t("pages.logistics.title3")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Features Box */}
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
                                            {t("pages.logistics.item1")}
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
                                            {t("pages.logistics.item2")}
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
                                            {t("pages.logistics.item3")}
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
                                            {t("pages.logistics.item4")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            {/* Solutions Section */}
            < section className="sec-inland-slide" >
                <div className="inland-slide ss-pd">
                    <div className="container">
                        <div className="head-verti mb-32 center">
                            <div className="title-head text-verti">
                                <h3
                                    className="title title-40 add-class text-hori words chars splitting is-inview"
                                    data-spl="data-spl"
                                    style={{ "--word-total": 6, "--char-total": 23 } as React.CSSProperties}
                                >
                                    <span className="word" data-word="Cung" style={{ "--word-index": 0 } as React.CSSProperties}>
                                        <span className="char" data-char="C" style={{ "--char-index": 0 } as React.CSSProperties}>
                                            {t("pages.logistics.providing")}
                                        </span>
                                    </span>

                                </h3>
                            </div>
                            <div className="line aos-init aos-animate" data-aos="fade-up-cus" data-aos-delay="400">
                                <div className="desc">
                                    <p>
                                        {t("pages.logistics.providing-des")}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Solutions Swiper */}
                        <SolutionSwiper />
                    </div>

                    {/* Advantages Section with Background Image */}
                    <div className="inland-xo">
                        <div className="imgFull">
                            <div className="imgFull-inner">
                                <img
                                    width="1914"
                                    height="661"
                                    src="/images/xctn2-min.webp"
                                    className="attachment-full size-full"
                                    alt=""
                                    decoding="async"
                                    loading="lazy"
                                    srcSet="/images/xctn2-min.webp 1914w, /images/xctn2-min-300x104.webp 300w, /images/xctn2-min-1024x354.webp 1024w,/images/xctn2-min-768x265.webp 768w, /images/xxctn2-min-1536x530.webp 1536w"
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
                                                <span className="char" data-char="Ư" style={{ "--char-index": 0 } as React.CSSProperties}>
                                                    {t("pages.logistics.advantages")}
                                                </span>
                                            </span>

                                        </h3>
                                    </div>
                                </div>

                                {/* Advantages List */}
                                <div className="inland-xo-list row gap-res rows-3 listEven">
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
                                            <div className="des">
                                                {t("pages.logistics.ad1")}
                                            </div>
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
                                            <div className="des">
                                                {t("pages.logistics.ad2")}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Advantage 3 */}
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
                                            <div className="des">
                                                {t("pages.logistics.ad3")}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Advantage 4 */}
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
                                            <div className="des">
                                                {t("pages.logistics.ad4")}
                                            </div>
                                        </div>
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
                                            <div className="des">
                                                {t("pages.logistics.ad5")}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Advantage 6 */}
                                    <div className="inland-xo-it col itemEven odd">
                                        <div className="inner">
                                            <div className="icon">
                                                <img
                                                    width="40"
                                                    height="40"
                                                    src="/images/Group-6.webp"
                                                    className="attachment-full size-full"
                                                    alt=""
                                                    decoding="async"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="des">
                                                {t("pages.logistics.ad6")}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Target Customers Section */}
            < section className="sec-inland-cus" >
                <div className="inland-cus ss-pd-t">
                    <div className="container">
                        <div className="head-verti mb-32 center white">
                            <div className="title-head text-verti">
                                <h3
                                    className="title title-40 add-class text-hori words chars splitting"
                                    data-spl="data-spl"
                                    style={{ "--word-total": 4, "--char-total": 15 } as React.CSSProperties}
                                >
                                    <span className="word" data-word="Giải" style={{ "--word-index": 0 } as React.CSSProperties}>
                                        <span className="char" data-char="G" style={{ "--char-index": 0 } as React.CSSProperties}>
                                            {t("pages.logistics.solution-for")}
                                        </span>

                                    </span>

                                </h3>
                            </div>
                        </div>

                        <div className="inland-cus-list row rows-3">
                            {/* Customer 1 */}
                            <div className="col">
                                <div className="inland-cus-it">
                                    <img src="/images/sao.svg" alt="" />
                                    <p className="text">
                                        <p>
                                            {t("pages.logistics.so1")}
                                        </p>
                                    </p>
                                </div>
                            </div>

                            {/* Customer 2 */}
                            <div className="col">
                                <div className="inland-cus-it">
                                    <img src="/images/sao.svg" alt="" />
                                    <p className="text">
                                        <p>
                                            {t("pages.logistics.so2")}
                                        </p>
                                    </p>
                                </div>
                            </div>

                            {/* Customer 3 */}
                            <div className="col">
                                <div className="inland-cus-it">
                                    <img src="/images/sao.svg" alt="" />
                                    <p className="text">
                                        {t("pages.logistics.so3")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Background Image */}
                    <div className="imgFull">
                        <div className="imgFull-inner">
                            <img
                                width="1728"
                                height="592"
                                src="/images/imgContainer.webp"
                                className="attachment-full size-full"
                                alt=""
                                decoding="async"
                                loading="lazy"
                                srcSet="/images/imgContainer.webp 1728w, /images/imgContainer-300x103.webp 300w, /images/imgContainer-1024x351.webp 1024w, /images/imgContainer-768x263.webp 768w, /images/imgContainer-1536x526.webp 1536w"
                            />
                        </div>
                    </div>
                </div>
            </section >

            {/* Why Choose Us Section */}
            < section className="sec-inland-why" >
                <div className="inland-why ss-pd">
                    <div className="container">
                        <div className="head-hori mb-32">
                            <div className="title-head text-verti">
                                <h3
                                    className="title title-40 add-class text-hori words chars splitting"
                                    data-spl="data-spl"
                                    style={{ "--word-total": 6, "--char-total": 20 } as React.CSSProperties}
                                >
                                    <span className="word" data-word="Vì" style={{ "--word-index": 0 } as React.CSSProperties}>
                                        <span className="char" data-char="V" style={{ "--char-index": 0 } as React.CSSProperties}>
                                            {t("pages.logistics.why-choose")}
                                        </span>
                                    </span>

                                </h3>
                            </div>
                        </div>

                        <div className="inland-why-row row">
                            {/* Left Column - Image */}
                            <div className="inland-why-l col">
                                <div className="wrapper">
                                    <div className="img">
                                        <img
                                            width="954"
                                            height="1226"
                                            src="/images/axctn-1.webp"
                                            className="attachment-full size-full"
                                            alt=""
                                            decoding="async"
                                            loading="lazy"
                                            srcSet="/images/axctn-1.webp 954w, /images/axctn-1-233x300.webp 233w, /images/axctn-1-797x1024.webp 797w, /images/axctn-1-768x987.webp 768w"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Reasons */}
                            <div className="inland-why-r col">
                                <div className="wrapper">
                                    <div className="store-why-list row">
                                        {/* Reason 1 */}
                                        <div className="col">
                                            <div className="store-why-it">
                                                <div className="icon-item">
                                                    <div className="icon">
                                                        <img
                                                            width="101"
                                                            height="100"
                                                            src="/images/icon-car.svg"
                                                            className="attachment-full size-full"
                                                            alt=""
                                                            decoding="async"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <div className="ctn">
                                                        <p className="tt">
                                                            {t("pages.logistics.why1")}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Reason 2 */}
                                        <div className="col">
                                            <div className="store-why-it">
                                                <div className="icon-item">
                                                    <div className="icon">
                                                        <img
                                                            width="100"
                                                            height="100"
                                                            src="/images/ic-tag.svg"
                                                            className="attachment-full size-full"
                                                            alt="tag"
                                                            decoding="async"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <div className="ctn">
                                                        <p className="tt">
                                                            {t("pages.logistics.why2")}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Reason 3 */}
                                        <div className="col">
                                            <div className="store-why-it">
                                                <div className="icon-item">
                                                    <div className="icon">
                                                        <img
                                                            width="100"
                                                            height="100"
                                                            src="/images/ic-hand.svg"
                                                            className="attachment-full size-full"
                                                            alt="Bắt tay"
                                                            decoding="async"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <div className="ctn">
                                                        <p className="tt">
                                                            {t("pages.logistics.why3")}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Reason 4 */}
                                        <div className="col">
                                            <div className="store-why-it">
                                                <div className="icon-item">
                                                    <div className="icon">
                                                        <img
                                                            width="100"
                                                            height="100"
                                                            src="/images/ic-increase.svg"
                                                            className="attachment-full size-full"
                                                            alt="vận hành phát triển"
                                                            decoding="async"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <div className="ctn">
                                                        <p className="tt">
                                                            {t("pages.logistics.why4")}
                                                        </p>
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
            </section >

            <PartnersSection />
            <ContactFormSection />

        </main>
    );
};

export default InlandLogisticsPage;