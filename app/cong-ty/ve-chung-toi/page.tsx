'use client';
import React from 'react';
import AboutSwiper from '@/components/AboutSwiper';
import SolutionCarousel from '@/components/SolutionCarousel';
import Ecosystem from '@/components/Ecosystem';
import PartnersSection from '@/components/PartnersSection';
import AboutQuote from '@/components/AboutQuote';
import AboutViewContainer from '@/components/AboutViewContainer';
import SiteBreadcrumb from '@/components/SiteBreadcrumb';

interface AboutPageProps {
    initialLocale?: string;
}

const AboutPage: React.FC<AboutPageProps> = ({ initialLocale = 'en' }) => {
    const breadcrumbItems = {
        vi: [
            { text: "Giải pháp", link: "/solutions" },
            { text: "Giải pháp Kho vận", link: "/solutions/warehouse", isActive: true }
        ],
        en: [
            { text: "Solutions", link: "/solutions" },
            { text: "Warehouse Solutions", link: "/solutions/warehouse", isActive: true }
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
                                items={breadcrumbItems[initialLocale as 'vi' | 'en']}
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
                                                <span className="second">EXPEDITORS GLOBAL </span><br />
                                                comprehensive logistics ecosystem
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="line aos-init aos-animate" data-aos="fade-up-cus" data-aos-delay="400">
                                        <div className="desc">
                                            EXPEDITORS GLOBAL is a member unit of Vietnam Post Corporation - the leading prestigious brand in Vietnam. We provide diverse, comprehensive and optimal logistics solutions for customers from domestic to international.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <AboutSwiper />

                        <div className="ab-first-bottom ss-pd pb-4">
                            <div className="container">
                                <div className="head-verti center white">
                                    <div className="line aos-init aos-animate" data-aos="fade-up-cus" data-aos-delay="400">
                                        <div className="desc">
                                            <strong>EXPEDITORS GLOBAL has been effectively fulfilling its role in transportation, operating the supply chain, and connecting trade between Vietnam and the world, contributing significantly to the country's economic development.</strong><br />
                                            <br />
                                            At the same time, thanks to outstanding achievements and relentless efforts, EXPEDITORS GLOBAL has affirmed its position by becoming the official partner of many major enterprises such as USPS, DHL, Korean Air, Vietnam Airlines, Vietjet Air, Cargolux, and is an official member of many large logistics associations worldwide, such as JCtrans and WCA.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ab-first-bottom ss-pd pb-4">
                            <SolutionCarousel />
                        </div>
                    </div>
                </section>

                <AboutQuote />
                <AboutViewContainer />
                <Ecosystem />
                <PartnersSection />

            </main>
        </div>
    )
}

export default AboutPage;