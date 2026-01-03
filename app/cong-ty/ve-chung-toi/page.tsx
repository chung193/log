'use client';
import React from 'react';
import AboutSwiper from '@/components/AboutSwiper';
import SolutionCarousel from '@/components/SolutionCarousel';
import Ecosystem from '@/components/Ecosystem';
import PartnersSection from '@/components/PartnersSection';
import AboutQuote from '@/components/AboutQuote';
import AboutViewContainer from '@/components/AboutViewContainer';
import SiteBreadcrumb from '@/components/SiteBreadcrumb';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import { Locale } from '@/lib/i18n';

interface AboutPageProps {
    initialLocale?: string;
}

const AboutPage: React.FC<AboutPageProps> = ({ initialLocale = 'en' }) => {
    const searchParams = useSearchParams();
    const langParam = searchParams.get('lang');

    const locale: Locale =
        langParam === 'en' || langParam === 'vi'
            ? langParam
            : initialLocale;

    const { t } = useTranslations(locale);
    const breadcrumbItems = {
        vi: [
            { text: "Công ty", link: "javascript:;" },
            { text: "Về chúng tôi", link: "/cong-ty/ve-chung-toi", isActive: true }
        ],
        en: [
            { text: "Company", link: "javascript:;" },
            { text: "About us", link: "/cong-ty/ve-chung-toi", isActive: true }
        ]
    };
    return (
        <div id="primary" className="content-area">
            <main className="main page-ab">
                <div className="bn">
                    <div className="bn-in">
                        <div className="bg">
                            <img
                                width="1728"
                                height="500"
                                src="/images/bn4.webp"
                                className="attachment-full size-full"
                                alt="Kho ngoại quan chất lượng cao"
                                decoding="async"
                                fetchpriority="high"
                            />
                        </div>
                    </div>

                    <div className="bn-bread">
                        <div className="container">
                            <SiteBreadcrumb
                                initialLocale={initialLocale}
                                className=''
                                language={langParam}
                                items={breadcrumbItems[locale]}
                                currentPage="About us"
                            />
                        </div>
                    </div>

                </div>


                <section className="sec-ab-first">
                    <div className="ab-first">
                        <div className="ab-first-ctn ss-pd">
                            <div className="container">
                                <div className="head-verti center">
                                    <div className="line aos-init aos-animate" data-aos="fade-up-cus">
                                        <div className="title-head text-verti">
                                            <h3 className="title title-40 add-className text-hori is-inview">
                                                <span className="second">
                                                    {t("pages.about-us.title")}
                                                </span>
                                                <br />
                                                {t("pages.about-us.second-title")}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="line aos-init aos-animate" data-aos="fade-up-cus" data-aos-delay="400">
                                        <div className="desc">
                                            {t("pages.about-us.content")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <AboutSwiper lang={locale} />

                        <div className="ab-first-bottom ss-pd pb-4">
                            <div className="container">
                                <div className="head-verti center white">
                                    <div className="line aos-init aos-animate" data-aos="fade-up-cus" data-aos-delay="400">
                                        <div className="desc">
                                            <strong>
                                                {t("pages.about-us.intro")}                                                </strong><br />
                                            <br />
                                            {t("pages.about-us.second-intro")}                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ab-first-bottom ss-pd pb-4">
                            <SolutionCarousel />
                        </div>
                    </div>
                </section>

                <AboutQuote language={locale} />
                <AboutViewContainer language={locale} />
                <Ecosystem />
                <PartnersSection />

            </main>
        </div>
    )
}

export default AboutPage;