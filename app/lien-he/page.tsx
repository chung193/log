'use client'
import React from "react";
import FindMoreButton from "@/components/FindMoreButton";
import SiteBreadcrumb from "@/components/SiteBreadcrumb";
import { useSearchParams } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import { Locale } from '@/lib/i18n';

const ContactPage = () => {
    const breadcrumbItems = {
        'vi': [
            { text: "Giải pháp", link: "/giai-phap" },
            { text: "Giải pháp Kho vận", link: "/giai-phap/giai-phap-kho-van", isActive: true }
        ],
        'en': [
            { text: "Solutions", link: "/solutions" },
            { text: "Warehouse Solutions", link: "/solutions/warehouse", isActive: true }
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
        <div id="primary" className="content-area">
            <main className="main page-contact hd-sticky">
                <div className="bn">
                    <div className="bn-in">
                        <div className="bg">
                            <img
                                width="1728"
                                height="500"
                                src="/images/banner.webp"
                                className="attachment-full size-full"
                                alt="Vận tải đường bộ - EXPEDITORS GLOBAL"
                                decoding="async"
                                fetchPriority="high"
                                srcSet="/images/banner.webp 1728w, /images/banner-300x87.webp 300w, /images/banner-1024x296.webp 1024w, /images/banner-768x222.webp 768w, /images/banner-1536x444.webp 1536w"
                            />
                        </div>
                    </div>
                    <div className="bn-bread">
                        <div className="container">
                            <SiteBreadcrumb
                                initialLocale={initialLocale}
                                className=''
                                items={breadcrumbItems[initialLocale as 'vi' | 'en']}
                                currentPage="Giải pháp Kho vận"
                            />
                        </div>
                    </div>
                </div>

                <section className="sec-contact">
                    <div className="contact ss-pd">
                        <div className="container">
                            <div className="contact-row row">
                                <div className="contact-l col">
                                    <div className="wrapper">
                                        <div className="contact-logo">
                                            <a href="/" className="custom-logo-link" rel="home">
                                                <img
                                                    width="146"
                                                    height="49"
                                                    src="/images/logo.svg"
                                                    className="custom-logo"
                                                    alt="Việt Nam Post Logistics"
                                                    decoding="async"
                                                />
                                            </a>
                                        </div>
                                        <h1 className="contact-tt">

                                        </h1>

                                        <div className="wrapper">
                                            <p className="tt">
                                                {t("pages.contact.head")}
                                            </p>
                                            <div className="ft-add">
                                                <div className="ft-add-line">
                                                    <p className="name">
                                                        {t("pages.contact.head")}
                                                    </p>
                                                    <p className="val">
                                                        {t("pages.contact.head-detail")}
                                                    </p>
                                                </div>
                                                <div className="ft-add-line">
                                                    <p className="name">
                                                        {t("pages.contact.hp")}
                                                    </p>
                                                    <p className="val">
                                                        {t("pages.contact.hp-detail")}
                                                    </p>
                                                </div>
                                                <div className="ft-add-line">
                                                    <p className="name">
                                                        {t("pages.contact.hcm")}
                                                    </p>
                                                    <p className="val">
                                                        {t("pages.contact.hcm-detail")}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="social">
                                            <div className="social-list">
                                                <a href="https://www.facebook.com/VietnamPostLogisticsCompany" target="_blank" rel="noopener noreferrer" className="social-link">
                                                    <img src="/images/ic-fb.svg" alt="Facebook" />
                                                </a>
                                                <a href="https://www.linkedin.com/company/vietnam-post-logistics/" target="_blank" rel="noopener noreferrer" className="social-link">
                                                    <img src="/images/ic-ins.svg" alt="LinkedIn" />
                                                </a>
                                                <a href="https://www.tiktok.com/@vietnampostlogistics" target="_blank" rel="noopener noreferrer" className="social-link">
                                                    <img src="/images/ic-tiktok.svg" alt="TikTok" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact-r col">
                                    <div className="wrapper">
                                        <div className="head-verti mb-24">
                                            <h2 className="contact-tt">
                                                {t("pages.contact.contact-us")}
                                            </h2>
                                            <p className="desc">
                                                {t("pages.contact.get-in")}
                                            </p>
                                        </div>
                                        <div className="mainForm">
                                            <div className="wpcf7 js" id="wpcf7-f1136-p1133-o1" lang="vi" dir="ltr">
                                                <div className="screen-reader-response">
                                                    <p role="status" aria-live="polite" aria-atomic="true"></p>
                                                    <ul></ul>
                                                </div>
                                                <form action="/lien-he/#wpcf7-f1136-p1133-o1" method="post" className="wpcf7-form init" aria-label="Contact form" noValidate data-status="init">
                                                    <div style={{ display: 'none' }}>
                                                        <input type="hidden" name="_wpcf7" value="1136" />
                                                        <input type="hidden" name="_wpcf7_version" value="5.9.8" />
                                                        <input type="hidden" name="_wpcf7_locale" value="vi" />
                                                        <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f1136-p1133-o1" />
                                                        <input type="hidden" name="_wpcf7_container_post" value="1133" />
                                                        <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
                                                    </div>
                                                    <div className="form-list row">
                                                        <label className="form-ip col per5">
                                                            <span className="text spe">
                                                                {t("pages.contact.full-name")}
                                                            </span>
                                                            <span className="wpcf7-form-control-wrap" data-name="your-name">
                                                                <input
                                                                    size={40}
                                                                    maxLength={400}
                                                                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                    aria-required="true"
                                                                    aria-invalid="false"
                                                                    placeholder={t("pages.contact.full-name")}
                                                                    value=""
                                                                    type="text"
                                                                    name="your-name"
                                                                />
                                                            </span>
                                                        </label>
                                                        <label className="form-ip col per5">
                                                            <span className="text spe"> {t("pages.contact.company-name")}</span>
                                                            <span className="wpcf7-form-control-wrap" data-name="your-subject">
                                                                <input
                                                                    size={40}
                                                                    maxLength={400}
                                                                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                    aria-required="true"
                                                                    aria-invalid="false"
                                                                    placeholder={t("pages.contact.company-name")}
                                                                    value=""
                                                                    type="text"
                                                                    name="your-subject"
                                                                />
                                                            </span>
                                                        </label>
                                                        <label className="form-ip col per5">
                                                            <span className="text spe"> {t("pages.contact.email")}</span>
                                                            <span className="wpcf7-form-control-wrap" data-name="your-email">
                                                                <input
                                                                    size={40}
                                                                    maxLength={400}
                                                                    className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
                                                                    aria-required="true"
                                                                    aria-invalid="false"
                                                                    placeholder={t("pages.contact.email")}
                                                                    value=""
                                                                    type="email"
                                                                    name="your-email"
                                                                />
                                                            </span>
                                                        </label>
                                                        <label className="form-ip col per5">
                                                            <span className="text spe"> {t("pages.contact.phone")}</span>
                                                            <span className="wpcf7-form-control-wrap" data-name="tel-391">
                                                                <input
                                                                    size={40}
                                                                    maxLength={400}
                                                                    className="wpcf7-form-control wpcf7-tel wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-tel"
                                                                    aria-required="true"
                                                                    aria-invalid="false"
                                                                    placeholder={t("pages.contact.phone")}
                                                                    value=""
                                                                    type="tel"
                                                                    name="tel-391"
                                                                />
                                                            </span>
                                                        </label>
                                                        <label className="form-ip col">
                                                            <span className="text">
                                                                {t("pages.contact.message")}
                                                            </span>
                                                            <span className="wpcf7-form-control-wrap" data-name="your-message">
                                                                <textarea
                                                                    cols={40}
                                                                    rows={10}
                                                                    maxLength={2000}
                                                                    className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                                                                    aria-required="true"
                                                                    aria-invalid="false"
                                                                    placeholder={t("pages.contact.message")}
                                                                    name="your-message"
                                                                ></textarea>
                                                            </span>
                                                        </label>

                                                        <label className="form-ip col" htmlFor="id_f_contact_page">

                                                            <FindMoreButton
                                                                label={t("components.button.submit")}
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="wpcf7-response-output" aria-hidden="true"></div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </main>
        </div>
    );
}

export default ContactPage;