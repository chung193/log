'use client';

import Breadcrumb from '@/components/SiteBreadcrumb';
import React from 'react';
import ContactFormSection from '@/components/ContactFormSection';
import Partners from '@/components/Partners';
import TopStrong from '@/components/TopStrong';
import PartnersSection from '@/components/PartnersSection';
import BoxHeader from '@/components/BoxHeader';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import { Locale } from '@/lib/i18n';
import SiteBreadcrumb from '@/components/SiteBreadcrumb';
import ListServices from '@/components/ListServices';
const InternationalAirCargoPage = ({ initialLocale = 'en' }) => {
    const breadcrumbItems = {
        vi: [
            { text: "Giải pháp", link: "javascript:;" },
            { text: "Logistics quốc tế", link: "javascript:;" },
            { text: "Vận tải hàng không", link: "javascript:;", isActive: true }
        ],
        en: [
            { text: "Solutions", link: "javascript:;" },
            {
                text: "International Logistics", link: "javascript:;"
            },
            {
                text: "Air Cargo", link: "javascript:;", isActive: true
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
                        fetchPriority="high"
                        srcSet="/images/banner4.jpg 1728w, /images/banner4-300x139.jpg 300w, /images/banner4-1024x474.jpg 1024w, /images/banner4-768x356.jpg 768w, /images/banner4-1536x711.jpg 1536w"
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
                            {t("pages.air.title")} <br />
                            {t("pages.air.second-title")}
                        </h1>
                        <p className="bn-big-des aos-init aos-animate" data-aos="fade-up-cus">
                            {t("pages.air.des")}<br /><br />
                        </p>
                        <BoxHeader initialLocale={'en'} />
                    </div>
                </div>
            </div>

            <section className="sec-inter-solve">
                <div className="inter-solve ss-pd">
                    <div className="container">
                        <div className="inter-solve-row row">
                            <ListServices initialLocale={initialLocale} />
                            <div className="inter-solve-main col">
                                <div className="side-open">
                                    <div className="side-open-wrap">
                                        <i className="fa-solid fa-sidebar-flip"></i>
                                    </div>
                                </div>
                                <div className="wrapper">
                                    <h1 className="title title-48 add-class text-verti mb-32 is-inview">
                                        Vận tải hàng không
                                    </h1>
                                    <div className="inter-solve-usr">
                                        <div className="name">
                                            <img src="/images/ic-usr-black.svg" alt="" />
                                            <div className="txt">Dành cho đối tượng:</div>
                                        </div>
                                        <div className="ctn">
                                            <p className="des">Khách hàng Doanh nghiệp</p>
                                        </div>
                                    </div>
                                    <p className="inter-solve-des">
                                        Với kinh nghiệm sâu rộng và chuyên môn trong lĩnh vực vận tải hàng không, EXPEDITORS GLOBAL có thể đáp ứng nhu cầu vận chuyển hàng hóa nhanh chóng và hiệu quả cho nhiều doanh nghiệp, đặc biệt là các doanh nghiệp FDI.
                                    </p>
                                    <div className="inter-solve-box">
                                        <div className="row">
                                            <div className="col">
                                                <div className="inter-solve-box-it">
                                                    <p className="name">VN-US</p>
                                                    <p className="num">20000</p>
                                                    <p className="des">TEU/tháng</p>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="inter-solve-box-it">
                                                    <p className="name">VN-EU</p>
                                                    <p className="num">40000</p>
                                                    <p className="des">TEU/tháng</p>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="inter-solve-box-it">
                                                    <p className="name">VN-Asia</p>
                                                    <p className="num">10000</p>
                                                    <p className="des">TEU/tháng</p>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="inter-solve-box-it">
                                                    <p className="name">China/EU-VN</p>
                                                    <p className="num">6000 - 7000</p>
                                                    <p className="des">TEU/tháng</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="inland-xo">
                                        <div className="imgFull">
                                            <div className="imgFull-inner">
                                                <img
                                                    width="1950"
                                                    height="788"
                                                    src="/images/ac-1.png"
                                                    className="attachment-full size-full"
                                                    alt=""
                                                    decoding="async"
                                                    loading="lazy"
                                                    srcSet="/images/ac-1.png 1950w, /images/ac-1-300x121.png 300w, /images/ac-1-1024x414.png 1024w, /images/ac-1-768x310.png 768w, /images/ac-1-1536x621.png 1536w"
                                                />
                                            </div>
                                        </div>
                                        <div className="container">
                                            <div className="inland-xo-wrap">
                                                <div className="head-verti mb-32 center white">
                                                    <div className="title-head text-verti">
                                                        <h3 className="title title-40 add-class text-hori words chars splitting is-inview" data-spl="data-spl" style={{ '--word-total': 5, '--char-total': 17 } as React.CSSProperties}>
                                                            Ưu điểm của giải pháp
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div className="inland-xo-box">
                                                    <div className="inland-xo-list row gap-res rows-2 listEven">
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
                                                                    Tốc độ giao hàng nhanh chóng nhất, đặc biệt quan trọng khi cần đẩy nhanh quá trình vận chuyển.
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
                                                                <div className="des">
                                                                    Độ an toàn cao của vận chuyển hàng hóa, đặc biệt phù hợp với hàng dễ vỡ, dễ hỏng.
                                                                </div>
                                                            </div>
                                                        </div>
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
                                                                <div className="des">
                                                                    Kết nối việc giao thương với nhiều quốc gia trên thế giới, tạo điều kiện cho thương mại quốc tế phát triển mạnh mẽ.
                                                                </div>
                                                            </div>
                                                        </div>
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
                                                                <div className="des">
                                                                    Phí bảo hiểm tối ưu, giúp tiết kiệm chi phí cho doanh nghiệp.
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
                                                                <div className="des">
                                                                    Giảm thiểu tình trạng mất hàng hoặc thất lạc hàng hóa, đảm bảo tính toàn vẹn và đúng thời hạn của đơn hàng.
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="inland-xo-it col itemEven odd">
                                                            <div className="inner">
                                                                <div className="icon">
                                                                    <img
                                                                        width="48"
                                                                        height="48"
                                                                        src="/images/ic-why5.svg"
                                                                        className="attachment-full size-full"
                                                                        alt="Icon Tối ưu chi phí"
                                                                        decoding="async"
                                                                        loading="lazy"
                                                                    />
                                                                </div>
                                                                <div className="des">
                                                                    Xử lý nhanh chóng, tiết kiệm chi phí lưu kho.
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

export default InternationalAirCargoPage;