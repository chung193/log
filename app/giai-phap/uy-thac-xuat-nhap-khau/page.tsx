import React from 'react';
import SiteBreadcrumb from '@/components/SiteBreadcrumb';
import EXPTrustSlide from '@/components/EXPTrustSlide';
import PartnersSection from '@/components/PartnersSection';
import ContactFormSection from '@/components/ContactFormSection';

const ImportExportSolution = ({ initialLocale = 'en' }) => {
    const breadcrumbItems = {
        'vi': [
            { text: "Giải pháp", link: "/giai-phap" },
            { text: "Giải pháp Kho vận", link: "/giai-phap/giai-phap-kho-van", isActive: true }
        ],
        'en': [
            { text: "Solutions", link: "/solutions" },
            { text: "Warehouse Solutions", link: "/solutions/warehouse", isActive: true }
        ]
    }
    return (
        <main className="main page-exp">
            {/* Banner Section */}
            <div className="bn-big white">
                <div className="bn-big-bg">
                    <img
                        width="1728"
                        height="800"
                        src="banner2.jpg"
                        className="attachment-full size-full"
                        alt="Containers xuất nhập khẩu - EXPEDITORS GLOBAL"
                        decoding="async"
                        fetchPriority="high"
                        srcSet="banner2.jpg 1728w, banner2-300x139.jpg 300w, banner2-1024x474.jpg 1024w, banner2-768x356.jpg 768w, banner2-1536x711.jpg 1536w"
                    />
                </div>
                <div className="container">
                    <div className="bn-big-ctn">
                        {/* Breadcrumb */}
                        <SiteBreadcrumb
                            initialLocale={initialLocale}
                            className=''
                            items={breadcrumbItems[initialLocale as 'vi' | 'en']}
                            currentPage="Giải pháp Kho vận"
                        />

                        <h1 className="bn-big-tt add-class text-verti mb-24 is-inview">
                            Giải pháp Xuất - nhập khẩu
                        </h1>

                        {/* Benefit Boxes */}
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
                                        <p className="des">Tăng cơ hội bán hàng ở các thị trường quốc tế.</p>
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
                                        <p className="des">Đảm bảo sự hài lòng với dịch vụ đáng tin cậy.</p>
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
                                        <p className="des">Sự an toàn và bảo mật của khách hàng là ưu tiên hàng đầu.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Entrust Services Section */}
            <section className="sec-exp-entrust">
                <div className="exp-tabLink ss-pd-t">
                    <div className="cpn-faq-filter scrollContainer">
                        <a className="cpn-faq-filter-it buttons" href="/giai-phap/tai-chinh-chuoi-cung-ung/">
                            Tài chính chuỗi cung ứng
                        </a>
                        <a className="cpn-faq-filter-it buttons active" href="/giai-phap/uy-thac-xuat-nhap-khau/">
                            Ủy thác xuất nhập khẩu
                        </a>
                    </div>
                </div>

                <div className="exp-entrust ss-pd-b">
                    <div className="container">
                        <div className="head-verti mb-32 center">
                            <h1 className="title title-48 add-class text-verti">Ủy thác xuất nhập khẩu</h1>
                        </div>
                        <EXPTrustSlide />
                    </div>
                </div>
            </section>

            {/* Procedure Section */}
            <section className="sec-exp-proc">
                <div className="exp-pro ss-pd-b">
                    <div className="container">
                        <div className="head-verti mb-32 center">
                            <h1 className="title title-48 add-class text-verti">Thực hiện thủ tục xuất nhập khẩu</h1>
                        </div>
                        <div className="exp-pro-list">
                            <div className="img">
                                <img
                                    width="1229"
                                    height="1080"
                                    src="sodogiaiphap.svg"
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
            <div className="inland-xo">
                <div className="imgFull">
                    <div className="imgFull-inner">
                        <img
                            width="1728"
                            height="600"
                            src="inland-fly.jpg"
                            className="attachment-full size-full"
                            alt=""
                            decoding="async"
                            loading="lazy"
                            srcSet="inland-fly.jpg 1728w, inland-fly-300x104.jpg 300w, inland-fly-1024x356.jpg 1024w, inland-fly-768x267.jpg 768w, inland-fly-1536x533.jpg 1536w"
                        />
                    </div>
                </div>
                <div className="container">
                    <div className="inland-xo-wrap">
                        <div className="head-verti mb-32 center white">
                            <div className="title-head text-verti">
                                <h3 className="title title-40 add-class text-hori words chars splitting" data-spl="data-spl" style={{ '--word-total': 5, '--char-total': 17 } as React.CSSProperties}>
                                    <span className="word" data-word="Ưu" style={{ '--word-index': 0 } as React.CSSProperties}>
                                        <span className="char" data-char="Ư" style={{ '--char-index': 0 } as React.CSSProperties}>Ư</span>
                                        <span className="char" data-char="u" style={{ '--char-index': 1 } as React.CSSProperties}>u</span>
                                    </span>
                                    <span className="whitespace"> </span>
                                    <span className="word" data-word="điểm" style={{ '--word-index': 1 } as React.CSSProperties}>
                                        <span className="char" data-char="đ" style={{ '--char-index': 2 } as React.CSSProperties}>đ</span>
                                        <span className="char" data-char="i" style={{ '--char-index': 3 } as React.CSSProperties}>i</span>
                                        <span className="char" data-char="ể" style={{ '--char-index': 4 } as React.CSSProperties}>ể</span>
                                        <span className="char" data-char="m" style={{ '--char-index': 5 } as React.CSSProperties}>m</span>
                                    </span>
                                    <span className="whitespace"> </span>
                                    <span className="word" data-word="của" style={{ '--word-index': 2 } as React.CSSProperties}>
                                        <span className="char" data-char="c" style={{ '--char-index': 6 } as React.CSSProperties}>c</span>
                                        <span className="char" data-char="ủ" style={{ '--char-index': 7 } as React.CSSProperties}>ủ</span>
                                        <span className="char" data-char="a" style={{ '--char-index': 8 } as React.CSSProperties}>a</span>
                                    </span>
                                    <span className="whitespace"> </span>
                                    <span className="word" data-word="giải" style={{ '--word-index': 3 } as React.CSSProperties}>
                                        <span className="char" data-char="g" style={{ '--char-index': 9 } as React.CSSProperties}>g</span>
                                        <span className="char" data-char="i" style={{ '--char-index': 10 } as React.CSSProperties}>i</span>
                                        <span className="char" data-char="ả" style={{ '--char-index': 11 } as React.CSSProperties}>ả</span>
                                        <span className="char" data-char="i" style={{ '--char-index': 12 } as React.CSSProperties}>i</span>
                                    </span>
                                    <span className="whitespace"> </span>
                                    <span className="word" data-word="pháp" style={{ '--word-index': 4 } as React.CSSProperties}>
                                        <span className="char" data-char="p" style={{ '--char-index': 13 } as React.CSSProperties}>p</span>
                                        <span className="char" data-char="h" style={{ '--char-index': 14 } as React.CSSProperties}>h</span>
                                        <span className="char" data-char="á" style={{ '--char-index': 15 } as React.CSSProperties}>á</span>
                                        <span className="char" data-char="p" style={{ '--char-index': 16 } as React.CSSProperties}>p</span>
                                    </span>
                                </h3>
                            </div>
                        </div>

                        <div className="inland-xo-box">
                            <div className="inland-xo-list row gap-res rows-2 listEven">
                                {/* Advantage Items */}
                                <div className="inland-xo-it col itemEven even">
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
                                        <p className="text">Giao hàng nhanh chóng</p>
                                        <div className="des">Thời gian giao hàng nhanh chóng nhờ mạng lưới vận chuyển trên toàn cầu.</div>
                                    </div>
                                </div>

                                <div className="inland-xo-it col itemEven odd">
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
                                        <p className="text">Hỗ trợ hải quan</p>
                                        <div className="des">Hỗ trợ khai báo hải quan và chính sách thuế tối ưu.</div>
                                    </div>
                                </div>

                                <div className="inland-xo-it col itemEven odd">
                                    <div className="inner">
                                        <div className="icon">
                                            <img
                                                width="32"
                                                height="32"
                                                src="ic-il3.svg"
                                                className="attachment-full size-full"
                                                alt="Đa dạng"
                                                decoding="async"
                                                loading="lazy"
                                            />
                                        </div>
                                        <p className="text">Linh hoạt mọi quy mô</p>
                                        <div className="des">Đáp ứng linh hoạt với nhiều quy mô lô hàng khác nhau.</div>
                                    </div>
                                </div>

                                <div className="inland-xo-it col itemEven even">
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
                                        <p className="text">Hợp tác cùng đối tác lớn</p>
                                        <div className="des">Hợp tác với các đơn vị chuyển phát nhanh uy tín nhất như FEDEX, UPS, DHL, giúp gia tăng độ tin cậy.</div>
                                    </div>
                                </div>

                                <div className="inland-xo-it col itemEven even">
                                    <div className="inner">
                                        <div className="icon">
                                            <img
                                                width="32"
                                                height="32"
                                                src="ic-il5.svg"
                                                className="attachment-full size-full"
                                                alt="An toàn"
                                                decoding="async"
                                                loading="lazy"
                                            />
                                        </div>
                                        <p className="text">CN38 – Giải pháp thông quan</p>
                                        <div className="des">CN38 là gói giải pháp độc quyền của bưu điện Việt Nam, có thể xử lý thông quan đa dạng các mặt hàng được vận chuyển theo đường bưu chính với thời gian tối ưu.</div>
                                    </div>
                                </div>

                                <div className="inland-xo-it col itemEven odd">
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
                                        <p className="text">T86/ECCF – Giao nhanh hiệu quả</p>
                                        <div className="des">T86/ECCF mang đến khả năng xử lý linh hoạt đối với các gói hàng nhỏ, cần giao hàng nhanh chóng, đặc biệt là các mặt hàng mỹ phẩm và thực phẩm chức năng</div>
                                    </div>
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

export default ImportExportSolution;