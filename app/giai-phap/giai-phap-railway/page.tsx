'use client'
import React from 'react';
import ContactFormSection from '@/components/ContactFormSection'
import PartnersSection from '@/components/PartnersSection';
import SiteBreadcrumb from '@/components/SiteBreadcrumb';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import { Locale } from '@/lib/i18n';
import ListServices from '@/components/ListServices';


const BenefitsBox = ({ benefits = [] }) => {
    return (
        <div className="bn-box aos-init aos-animate" data-aos="fade-up-cus" data-aos-delay="600">
            <div className="bn-box-row row gap-res">
                {benefits.map((benefit, index) => (
                    <div key={index} className="bn-box-it col">
                        <div className="inner">
                            <div className="icon">
                                <img
                                    width="24"
                                    height="24"
                                    src={benefit.icon}
                                    className="attachment-full size-full"
                                    alt={benefit.alt}
                                    decoding="async"
                                    loading={index > 1 ? "lazy" : "eager"}
                                />
                            </div>
                            <p className="des">{benefit.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Component cho Statistics Box
const StatisticsBox = ({ stats = [] }) => {


    return (
        <div className="inter-solve-box">
            <div className="row">
                {stats.map((stat, index) => (
                    <div key={index} className="col">
                        <div className="inter-solve-box-it">
                            <p className="name">{stat.name}</p>
                            <p className="num">{stat.value}</p>
                            <p className="des">{stat.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Component cho Advantages
const AdvantagesSection = ({ advantages = [] }) => {

    return (
        <div className="inland-xo">
            <div className="imgFull">
                <div className="imgFull-inner">
                    <img
                        width="1950"
                        height="788"
                        src="/images/ds-min.webp"
                        className="attachment-full size-full"
                        alt=""
                        decoding="async"
                        loading="lazy"
                        srcSet="/images/ds-min.webp 1950w, /images/ds-min.webp 300w,/images/ds-min.webp 1024w, /images/ds-min.webp 768w, /images/ds-min.webp 1536w"
                    />
                </div>
            </div>
            <div className="container">
                <div className="inland-xo-wrap">
                    <div className="head-verti mb-32 center white">
                        <div className="title-head text-verti">
                            <h3 className="title title-40 add-class text-hori words chars splitting">
                                Ưu điểm của giải pháp
                            </h3>
                        </div>
                    </div>

                    <div className="inland-xo-box">
                        <div className="inland-xo-list row gap-res rows-2 listEven">
                            {advantages.map((advantage, index) => (
                                <div
                                    key={index}
                                    className={`inland-xo-it col itemEven ${index % 2 === 0 ? 'even' : 'odd'}`}
                                >
                                    <div className="inner">
                                        <div className="icon">
                                            <img
                                                width={index === 0 || index === 3 ? "32" : "24"}
                                                height={index === 0 || index === 3 ? "32" : "24"}
                                                src={advantage.icon}
                                                className="attachment-full size-full"
                                                alt=""
                                                decoding="async"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="des">{advantage.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Component cho Service Benefits
const ServiceBenefits = ({ title = "", benefits = [] }) => {


    return (
        <div className="inter-solve-ser ss-pd-t">
            <h1 className="title title-48 add-class text-verti mb-32">
                {title}
            </h1>

            <div className="store-why-list row">
                {benefits.map((benefit, index) => (
                    <div key={index} className="col">
                        <div className="store-why-it">
                            <div className="icon-item verti">
                                <div className="icon">
                                    <img
                                        width="100"
                                        height="100"
                                        src={benefit.icon}
                                        className="attachment-full size-full"
                                        alt=""
                                        decoding="async"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="ctn">
                                    <p className="tt">{benefit.title}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


// Main Component
const RailwaySolutionPage: React.FC = () => {
    const searchParams = useSearchParams();
    const langParam = searchParams.get('lang');

    const locale: Locale =
        langParam === 'en' || langParam === 'vi'
            ? langParam
            : 'en';

    const { t } = useTranslations(locale);

    const breadcrumbItems = {
        'vi': [
            { text: "Giải pháp", link: "javascript:;" },
            { text: "Giải pháp Kho vận", link: "javascript:;", isActive: true }
        ],
        'en': [
            { text: "Solutions", link: "javascript:;" },
            { text: "International Logistics", link: "javascript:;" },
            { text: "Railway", link: "javascript:;", isActive: true },
        ]
    };


    const benefits = [
        {
            icon: '/images/ic-bn1.svg',
            alt: 'Icon TMĐT',
            text: t("pages.rail.item1")
        },
        {
            icon: '/images/ic-bn2.svg',
            alt: 'KẾT NỐI HÀNH TRÌNH',
            text: t("pages.rail.item2")
        },
        {
            icon: '/images/ic-bn3.svg',
            alt: 'LIÊN KẾT',
            text: t("pages.rail.item3")
        },
        {
            icon: '/images/ic-bn4.svg',
            alt: 'tmđt',
            text: t("pages.rail.item4")
        }
    ];

    const stats = [
        { name: 'VN-Laos', value: '15', description: t("common.cont-unit") },
        { name: 'VN- Campuchia', value: '20', description: t("common.cont-unit") },
        { name: 'VN- China', value: '15', description: t("common.cont-unit") }
    ];

    const advantages = [
        {
            icon: '/images/ic-il1.svg',
            description: t("pages.rail.advantages1")
        },
        {
            icon: '/images/ic-bn1.svg',
            description: t("pages.rail.advantages2")
        },
        {
            icon: '/images/ic-bn2.svg',
            description: t("pages.rail.advantages3")
        },
        {
            icon: '/images/ic-il3.svg',
            description: t("pages.rail.advantages4")
        }
    ];

    const benefits2 = [
        {
            icon: '/images/ic-tag.svg',
            title: t("pages.rail.benefit1")
        },
        {
            icon: '/images/ic-increase.svg',
            title: t("pages.rail.benefit2")
        },
        {
            icon: '/images/ic-trip.svg',
            title: t("pages.rail.benefit3")
        },
        {
            icon: '/images/ic-hand.svg',
            title: t("pages.rail.benefit4")
        }
    ];

    return (
        <main className="main page-inter">
            {/* Hero Banner Section */}
            <div className="bn-big white">
                <div className="bn-big-bg">
                    <img
                        width="2000"
                        height="1121"
                        src="/images/coverrw-min.webp"
                        className="attachment-full size-full"
                        alt=""
                        decoding="async"
                        fetchPriority="high"
                        srcSet="/images/coverrw-min.webp 2000w, /images/coverrw-min-300x168.webp 300w, /images/coverrw-min-1024x574.webp 1024w, /images/coverrw-min-768x430.webp 768w, /images/coverrw-min-1536x861.webp 1536w"
                    />
                </div>
                <div className="container">
                    <div className="bn-big-ctn">
                        <SiteBreadcrumb
                            initialLocale={initialLocale}
                            className=''
                            items={breadcrumbItems[initialLocale as 'vi' | 'en']}
                            currentPage="Giải pháp Kho vận"
                        />

                        <h1 className="bn-big-tt add-class text-verti mb-24 is-inview">
                            {t("pages.rail.title")} <br />
                            {t("pages.rail.second-title")}
                        </h1>

                        <p className="bn-big-des aos-init aos-animate" data-aos="fade-up-cus">
                            {t("pages.rail.des")}<br />
                            <br />
                            <br />
                        </p>

                        <BenefitsBox benefits={benefits} />
                    </div>
                </div>
            </div>

            {/* Solution Detail Section */}
            <section className="sec-inter-solve">
                <div className="inter-solve ss-pd">
                    <div className="container">
                        <div className="inter-solve-row row">
                            <div className="inter-solve-side col">
                                <ListServices />
                                <div className="side-overlay"></div>
                            </div>

                            <div className="inter-solve-main col">
                                <div className="side-open">
                                    <div className="side-open-wrap">
                                        <i className="fa-solid fa-sidebar-flip"></i>
                                    </div>
                                </div>

                                <div className="wrapper">
                                    <h1 className="title title-48 add-class text-verti mb-32">
                                        {t("pages.rail.main-title")}
                                    </h1>

                                    <p className="inter-solve-des">
                                        {t("pages.rail.main-des")}
                                    </p>

                                    <StatisticsBox stats={stats} />

                                    <AdvantagesSection advantages={advantages} />

                                    <ServiceBenefits benefits={benefits2} title={t("pages.rail.benefit-title")} />
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

export default RailwaySolutionPage;