import PartnersSection from '@/components/PartnersSection';
import ContactFormSection from '@/components/ContactFormSection';
import SiteBreadcrumb from '@/components/SiteBreadcrumb';
import React from 'react';

const CrossBorderTruckingPage: React.FC = ({ initialLocale = 'en' }) => {
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
        <main className="main page-inter">
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
                        srcSet="banner4.jpg 1728w, banner4-300x139.jpg 300w, banner4-1024x474.jpg 1024w, banner4-768x356.jpg 768w, banner4-1536x711.jpg 1536w"
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
                            Giải pháp <br />
                            Logistics Quốc tế
                        </h1>
                        <p className="bn-big-des aos-init aos-animate" data-aos="fade-up-cus">
                            An toàn - Nhanh chóng - Tối ưu chi phí
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
                                                src="ic-bn1.svg"
                                                className="attachment-full size-full"
                                                alt="Icon TMĐT"
                                                decoding="async"
                                            />
                                        </div>
                                        <p className="des">Đảm bảo sự hài lòng với dịch vụ đáng tin cậy.</p>
                                    </div>
                                </div>
                                <div className="bn-box-it col">
                                    <div className="inner">
                                        <div className="icon">
                                            <img
                                                width="24"
                                                height="24"
                                                src="ic-bn2.svg"
                                                className="attachment-full size-full"
                                                alt="KẾT NỐI HÀNH TRÌNH"
                                                decoding="async"
                                            />
                                        </div>
                                        <p className="des">Tiết kiệm chi phí nhờ quy trình tối ưu hoá.</p>
                                    </div>
                                </div>
                                <div className="bn-box-it col">
                                    <div className="inner">
                                        <div className="icon">
                                            <img
                                                width="24"
                                                height="24"
                                                src="ic-bn3.svg"
                                                className="attachment-full size-full"
                                                alt="LIÊN KẾT"
                                                decoding="async"
                                                loading="lazy"
                                            />
                                        </div>
                                        <p className="des">Đội ngũ xe chất lượng cao.</p>
                                    </div>
                                </div>
                                <div className="bn-box-it col">
                                    <div className="inner">
                                        <div className="icon">
                                            <img
                                                width="24"
                                                height="24"
                                                src="ic-bn4.svg"
                                                className="attachment-full size-full"
                                                alt="tmđt"
                                                decoding="async"
                                                loading="lazy"
                                            />
                                        </div>
                                        <p className="des">Hệ thống theo dõi hành trình xe 24/7.</p>
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
                            <div className="inter-solve-side col">
                                <div className="side-fixed">
                                    <div className="side-fixed-wrap">
                                        <div className="wrapper">
                                            <div className="inter-solve-menu">
                                                <a className="inter-solve-menu-link " href="/giai-phap/giai-phap-sea-freight/">
                                                    <img
                                                        width="24"
                                                        height="24"
                                                        src="menu1.svg"
                                                        className="attachment-full size-full wp-post-image"
                                                        alt=""
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                    <span className="txt">Vận tải đường biển</span>
                                                </a>
                                                <a className="inter-solve-menu-link " href="/giai-phap/giai-phap-air-express/">
                                                    <img
                                                        width="24"
                                                        height="25"
                                                        src="menu2.svg"
                                                        className="attachment-full size-full wp-post-image"
                                                        alt=""
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                    <span className="txt">Chuyển phát nhanh Quốc tế</span>
                                                </a>
                                                <a className="inter-solve-menu-link " href="/giai-phap/giai-phap-air-cargo/">
                                                    <img
                                                        width="24"
                                                        height="25"
                                                        src="menu3.svg"
                                                        className="attachment-full size-full wp-post-image"
                                                        alt=""
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                    <span className="txt">Vận tải hàng không</span>
                                                </a>
                                                <a className="inter-solve-menu-link active" href="/giai-phap/giai-phap-cross-border-trucking/">
                                                    <img
                                                        width="24"
                                                        height="24"
                                                        src="menu4.svg"
                                                        className="attachment-full size-full wp-post-image"
                                                        alt=""
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                    <span className="txt">Đường bộ xuyên biên giới</span>
                                                </a>
                                                <a className="inter-solve-menu-link " href="/giai-phap/giai-phap-railway/">
                                                    <img
                                                        width="24"
                                                        height="24"
                                                        src="menu5.svg"
                                                        className="attachment-full size-full wp-post-image"
                                                        alt=""
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                    <span className="txt">Vận tải đường sắt</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="side-close">
                                        <i className="fas fa-times close icon"></i>
                                    </div>
                                </div>
                                <div className="side-overlay"></div>
                            </div>
                            <div className="inter-solve-main col">
                                <div className="side-open">
                                    <div className="side-open-wrap">
                                        {' '}
                                        <i className="fa-solid fa-sidebar-flip"></i>
                                    </div>
                                </div>
                                <div className="wrapper">
                                    <h1 className="title title-48 add-class text-verti mb-32">Đường bộ xuyên biên giới</h1>
                                    <div className="inter-solve-usr">
                                        <div className="name">
                                            <img src="/template/assets/images/ic-usr-black.svg" alt="" />
                                            <div className="txt">Dành cho đối tượng:</div>
                                        </div>
                                        <div className="ctn">
                                            <p className="des"></p>
                                            <p>
                                                Các doanh nghiệp xuất nhập khẩu
                                                <br />
                                                Các công ty thương mại điện tử quốc tế.
                                                <br />
                                                Các nhà cung cấp dịch vụ logistics cần giải pháp tích hợp
                                            </p>
                                            <p></p>
                                        </div>
                                    </div>
                                    <p className="inter-solve-des"></p>
                                    <p>
                                        Giải pháp vận tải đường bộ xuyên biên giới giúp doanh nghiệp vận chuyển hàng hóa bằng đường bộ nhanh chóng và chi phí tối ưu.
                                        <br />
                                        Chúng tôi có hệ thống theo dõi hành trình xe GPS 24/7, này giúp tăng cường tính minh bạch, an toàn và giảm thiểu rủi ro mất mát hoặc hư hỏng hàng hóa.
                                        <br />
                                        &nbsp;
                                    </p>
                                    <p></p>

                                    <div className="inter-solve-box">
                                        <div className="row">
                                            <div className="col">
                                                <div className="inter-solve-box-it">
                                                    <p className="name">VN-Laos</p>
                                                    <p className="num">15</p>
                                                    <p className="des">Containers/tháng</p>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="inter-solve-box-it">
                                                    <p className="name">VN- Campuchia</p>
                                                    <p className="num">20</p>
                                                    <p className="des">Containers/tháng</p>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="inter-solve-box-it">
                                                    <p className="name">VN- China</p>
                                                    <p className="num">15</p>
                                                    <p className="des">Containers/tháng</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="inland-xo">
                                        <div className="imgFull">
                                            <div className="imgFull-inner">
                                                <img
                                                    width="1920"
                                                    height="825"
                                                    src="IMG_2842-e1745555200414.jpg"
                                                    className="attachment-full size-full"
                                                    alt=""
                                                    decoding="async"
                                                    loading="lazy"
                                                    srcSet="IMG_2842-e1745555200414.jpg 1920w, IMG_2842-e1745555200414-300x129.jpg 300w, IMG_2842-e1745555200414-1024x440.jpg 1024w, IMG_2842-e1745555200414-768x330.jpg 768w, IMG_2842-e1745555200414-1536x660.jpg 1536w"
                                                />
                                            </div>
                                        </div>
                                        <div className="container">
                                            <div className="inland-xo-wrap">
                                                <div className="head-verti mb-32 center white">
                                                    <div className="title-head text-verti">
                                                        <h3 className="title title-40 add-class text-hori words chars splitting" data-spl="data-spl" style={{ '--word-total': 5, '--char-total': 17 } as React.CSSProperties}>
                                                            <span className="word" data-word="Ư" style={{ '--word-index': 0 } as React.CSSProperties}>
                                                                <span className="char" data-char="Ư" style={{ '--char-index': 0 } as React.CSSProperties}>
                                                                    Ư
                                                                </span>
                                                                <span className="char" data-char="u" style={{ '--char-index': 1 } as React.CSSProperties}>
                                                                    u
                                                                </span>
                                                            </span>
                                                            <span className="whitespace"> </span>
                                                            <span className="word" data-word="điểm" style={{ '--word-index': 1 } as React.CSSProperties}>
                                                                <span className="char" data-char="đ" style={{ '--char-index': 2 } as React.CSSProperties}>
                                                                    đ
                                                                </span>
                                                                <span className="char" data-char="i" style={{ '--char-index': 3 } as React.CSSProperties}>
                                                                    i
                                                                </span>
                                                                <span className="char" data-char="ể" style={{ '--char-index': 4 } as React.CSSProperties}>
                                                                    ể
                                                                </span>
                                                                <span className="char" data-char="m" style={{ '--char-index': 5 } as React.CSSProperties}>
                                                                    m
                                                                </span>
                                                            </span>
                                                            <span className="whitespace"> </span>
                                                            <span className="word" data-word="của" style={{ '--word-index': 2 } as React.CSSProperties}>
                                                                <span className="char" data-char="c" style={{ '--char-index': 6 } as React.CSSProperties}>
                                                                    c
                                                                </span>
                                                                <span className="char" data-char="ủ" style={{ '--char-index': 7 } as React.CSSProperties}>
                                                                    ủ
                                                                </span>
                                                                <span className="char" data-char="a" style={{ '--char-index': 8 } as React.CSSProperties}>
                                                                    a
                                                                </span>
                                                            </span>
                                                            <span className="whitespace"> </span>
                                                            <span className="word" data-word="giải" style={{ '--word-index': 3 } as React.CSSProperties}>
                                                                <span className="char" data-char="g" style={{ '--char-index': 9 } as React.CSSProperties}>
                                                                    g
                                                                </span>
                                                                <span className="char" data-char="i" style={{ '--char-index': 10 } as React.CSSProperties}>
                                                                    i
                                                                </span>
                                                                <span className="char" data-char="ả" style={{ '--char-index': 11 } as React.CSSProperties}>
                                                                    ả
                                                                </span>
                                                                <span className="char" data-char="i" style={{ '--char-index': 12 } as React.CSSProperties}>
                                                                    i
                                                                </span>
                                                            </span>
                                                            <span className="whitespace"> </span>
                                                            <span className="word" data-word="pháp" style={{ '--word-index': 4 } as React.CSSProperties}>
                                                                <span className="char" data-char="p" style={{ '--char-index': 13 } as React.CSSProperties}>
                                                                    p
                                                                </span>
                                                                <span className="char" data-char="h" style={{ '--char-index': 14 } as React.CSSProperties}>
                                                                    h
                                                                </span>
                                                                <span className="char" data-char="á" style={{ '--char-index': 15 } as React.CSSProperties}>
                                                                    á
                                                                </span>
                                                                <span className="char" data-char="p" style={{ '--char-index': 16 } as React.CSSProperties}>
                                                                    p
                                                                </span>
                                                            </span>{' '}
                                                        </h3>
                                                    </div>
                                                </div>

                                                <div className="inland-xo-box">
                                                    <div className="inland-xo-list row gap-res rows-2 listEven">
                                                        <div className="inland-xo-it col itemEven">
                                                            <div className="inner">
                                                                <div className="icon">
                                                                    <img
                                                                        width="32"
                                                                        height="32"
                                                                        src="ic-il1.svg"
                                                                        className="attachment-full size-full"
                                                                        alt="Nhanh chóng"
                                                                        decoding="async"
                                                                        loading="lazy"
                                                                    />
                                                                </div>
                                                                <p className="text"></p>
                                                                <div className="des">Vận chuyển nhanh chóng và tiết kiệm tối đa phí tổn. Hiện nay vận tải xuyên biên giới phát triển mạnh mẽ và được ưa chuộng rộng rãi.</div>
                                                            </div>
                                                        </div>
                                                        <div className="inland-xo-it col itemEven">
                                                            <div className="inner">
                                                                <div className="icon">
                                                                    <img
                                                                        width="24"
                                                                        height="24"
                                                                        src="ic-bn1.svg"
                                                                        className="attachment-full size-full"
                                                                        alt="Icon TMĐT"
                                                                        decoding="async"
                                                                        loading="lazy"
                                                                    />
                                                                </div>
                                                                <p className="text"></p>
                                                                <div className="des">Quá trình giao dịch hàng hóa được diễn ra một cách nhanh chóng hơn, thúc đẩy kinh tế mạnh mẽ.</div>
                                                            </div>
                                                        </div>
                                                        <div className="inland-xo-it col itemEven">
                                                            <div className="inner">
                                                                <div className="icon">
                                                                    <img
                                                                        width="24"
                                                                        height="24"
                                                                        src="ic-bn2.svg"
                                                                        className="attachment-full size-full"
                                                                        alt="KẾT NỐI HÀNH TRÌNH"
                                                                        decoding="async"
                                                                        loading="lazy"
                                                                    />
                                                                </div>
                                                                <p className="text"></p>
                                                                <div className="des">Giúp doanh nghiệp vận chuyển nhanh hơn đường biển, tiết kiệm chi phí hơn so với đường hàng không.</div>
                                                            </div>
                                                        </div>
                                                        <div className="inland-xo-it col itemEven">
                                                            <div className="inner">
                                                                <div className="icon">
                                                                    <img width="40" height="40" src="Group-6.png" className="attachment-full size-full" alt="" decoding="async" loading="lazy" />
                                                                </div>
                                                                <p className="text">KHÁM PHÁ THÊM</p>
                                                                <div className="des"></div>
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
                    </div>
                </div>
            </section>


            <PartnersSection />
            <ContactFormSection />
        </main>
    );
};

export default CrossBorderTruckingPage;