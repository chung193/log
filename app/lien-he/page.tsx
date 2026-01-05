import React from "react";
import FindMoreButton from "@/components/FindMoreButton";
import SiteBreadcrumb from "@/components/SiteBreadcrumb";
const ContactPage = ({ initialLocale = 'en' }) => {
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
    return (
        <div id="primary" className="content-area">
            <main className="main page-contact hd-sticky">
                <div className="bn">
                    <div className="bn-in">
                        <div className="bg">
                            <img
                                width="1728"
                                height="500"
                                src="banner.jpg"
                                className="attachment-full size-full"
                                alt="Vận tải đường bộ - EXPEDITORS GLOBAL"
                                decoding="async"
                                fetchPriority="high"
                                srcSet="banner.jpg 1728w, banner-300x87.jpg 300w, banner-1024x296.jpg 1024w, banner-768x222.jpg 768w, banner-1536x444.jpg 1536w"
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
                                                    src="logo.svg"
                                                    className="custom-logo"
                                                    alt="Việt Nam Post Logistics"
                                                    decoding="async"
                                                />
                                            </a>
                                        </div>
                                        <h1 className="contact-tt">
                                            Công ty Logistics <br />
                                            Tổng công ty bưu điện việt nam
                                        </h1>

                                        <div className="wrapper">
                                            <p className="tt">
                                                Văn phòng
                                            </p>
                                            <div className="ft-add">
                                                <div className="ft-add-line">
                                                    <p className="name">
                                                        Trụ sở chính:
                                                    </p>
                                                    <p className="val">
                                                        Số 5 Phạm Hùng, Phường Cầu Giấy, Hà Nội
                                                    </p>
                                                </div>
                                                <div className="ft-add-line">
                                                    <p className="name">
                                                        Văn phòng Hải Phòng:
                                                    </p>
                                                    <p className="val">
                                                        Số 5 Đường Nguyễn Tri Phương, Phường Hồng Bàng, TP. Hải Phòng
                                                    </p>
                                                </div>
                                                <div className="ft-add-line">
                                                    <p className="name">
                                                        Văn phòng HCM:
                                                    </p>
                                                    <p className="val">
                                                        Số 8 Phan Đình Giót, Phường Tân Sơn Hòa, TP. Hồ Chí Minh
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="social">
                                            <div className="social-list">
                                                <a href="https://www.facebook.com/VietnamPostLogisticsCompany" target="_blank" rel="noopener noreferrer" className="social-link">
                                                    <img src="ic-fb.svg" alt="Facebook" />
                                                </a>
                                                <a href="https://www.linkedin.com/company/vietnam-post-logistics/" target="_blank" rel="noopener noreferrer" className="social-link">
                                                    <img src="ic-ins.svg" alt="LinkedIn" />
                                                </a>
                                                <a href="https://www.tiktok.com/@vietnampostlogistics" target="_blank" rel="noopener noreferrer" className="social-link">
                                                    <img src="ic-tiktok.svg" alt="TikTok" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact-r col">
                                    <div className="wrapper">
                                        <div className="head-verti mb-24">
                                            <h2 className="contact-tt">
                                                Liên hệ với chúng tôi
                                            </h2>
                                            <p className="desc">
                                                Liên hệ ngay với chúng tôi để được nhận tư vấn!
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
                                                            <span className="text spe">Họ và tên</span>
                                                            <span className="wpcf7-form-control-wrap" data-name="your-name">
                                                                <input
                                                                    size={40}
                                                                    maxLength={400}
                                                                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                    aria-required="true"
                                                                    aria-invalid="false"
                                                                    placeholder="Nhập họ và tên"
                                                                    value=""
                                                                    type="text"
                                                                    name="your-name"
                                                                />
                                                            </span>
                                                        </label>
                                                        <label className="form-ip col per5">
                                                            <span className="text spe">Tên công ty</span>
                                                            <span className="wpcf7-form-control-wrap" data-name="your-subject">
                                                                <input
                                                                    size={40}
                                                                    maxLength={400}
                                                                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                    aria-required="true"
                                                                    aria-invalid="false"
                                                                    placeholder="Nhập tên công ty"
                                                                    value=""
                                                                    type="text"
                                                                    name="your-subject"
                                                                />
                                                            </span>
                                                        </label>
                                                        <label className="form-ip col per5">
                                                            <span className="text spe">Email</span>
                                                            <span className="wpcf7-form-control-wrap" data-name="your-email">
                                                                <input
                                                                    size={40}
                                                                    maxLength={400}
                                                                    className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
                                                                    aria-required="true"
                                                                    aria-invalid="false"
                                                                    placeholder="Nhập Email"
                                                                    value=""
                                                                    type="email"
                                                                    name="your-email"
                                                                />
                                                            </span>
                                                        </label>
                                                        <label className="form-ip col per5">
                                                            <span className="text spe">Số điện thoại</span>
                                                            <span className="wpcf7-form-control-wrap" data-name="tel-391">
                                                                <input
                                                                    size={40}
                                                                    maxLength={400}
                                                                    className="wpcf7-form-control wpcf7-tel wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-tel"
                                                                    aria-required="true"
                                                                    aria-invalid="false"
                                                                    placeholder="Nhập Số điện thoại"
                                                                    value=""
                                                                    type="tel"
                                                                    name="tel-391"
                                                                />
                                                            </span>
                                                        </label>
                                                        <label className="form-ip col">
                                                            <span className="text">Ghi chú</span>
                                                            <span className="wpcf7-form-control-wrap" data-name="your-message">
                                                                <textarea
                                                                    cols={40}
                                                                    rows={10}
                                                                    maxLength={2000}
                                                                    className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                                                                    aria-required="true"
                                                                    aria-invalid="false"
                                                                    placeholder="Nhập nội dung"
                                                                    name="your-message"
                                                                ></textarea>
                                                            </span>
                                                        </label>

                                                        <label className="form-ip col" htmlFor="id_f_contact_page">

                                                            <FindMoreButton
                                                                label="Gửi thông tin"
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