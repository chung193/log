import React from 'react';
import SiteBreadcrumb from '@/components/SiteBreadcrumb';
import ListServices from '@/components/ListServices';
import EXPTrust from '@/components/EXPTrust';
import Partners from '@/components/Partners';
import TopStrong from '@/components/TopStrong';
import PartnersSection from '@/components/PartnersSection';
import ContactFormSection from '@/components/ContactFormSection';

const SeaFreightPage: React.FC<{ language: 'vi' | 'en' }> = ({ language = 'en' }) => {
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
        <main className="main page-inter hd-sticky">
            <div className="bn-big white">
                <div className="bn-big-bg">
                    <img
                        width="1728"
                        height="800"
                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/banner4.jpg"
                        className="attachment-full size-full"
                        alt="Sea Freight Vietnam Post Logistics"
                        decoding="async"
                        fetchPriority="high"
                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/banner4.jpg 1728w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/banner4-300x139.jpg 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/banner4-1024x474.jpg 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/banner4-768x356.jpg 768w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/banner4-1536x711.jpg 1536w"
                    />
                </div>
                <div className="container">
                    <div className="bn-big-ctn">
                        <SiteBreadcrumb
                            items={breadcrumbItems[language]}
                            language={language}
                            showAnimation={true}
                            className="mb-16"
                            // Tùy chọn: có thể set homeLink khác cho từng ngôn ngữ
                            homeLink={language === 'vi' ? '/' : '/en'}
                        />

                        <h1 className="bn-big-tt add-class text-verti mb-24 is-inview">
                            Giải pháp <br />
                            Logistics Quốc tế
                        </h1>
                        <p className="bn-big-des aos-init aos-animate" data-aos="fade-up-cus">
                            Cung cấp dịch vụ Door to Door
                        </p>

                        <div className="bn-box aos-init aos-animate" data-aos="fade-up-cus" data-aos-delay="600">
                            <div className="bn-box-row row gap-res">
                                <div className="bn-box-it col">
                                    <div className="inner">
                                        <div className="icon">
                                            <img
                                                width="24"
                                                height="24"
                                                src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-bn1.svg"
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
                                                src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-bn2.svg"
                                                className="attachment-full size-full"
                                                alt="KẾT NỐI HÀNH TRÌNH"
                                                decoding="async"
                                            />
                                        </div>
                                        <p className="des">Tiết kiệm chi phí nhờ tối ưu hóa quy trình.</p>
                                    </div>
                                </div>
                                <div className="bn-box-it col">
                                    <div className="inner">
                                        <div className="icon">
                                            <img
                                                width="24"
                                                height="24"
                                                src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-bn3.svg"
                                                className="attachment-full size-full"
                                                alt="LIÊN KẾT"
                                                decoding="async"
                                                loading="lazy"
                                            />
                                        </div>
                                        <p className="des">Đội ngũ nhân sự năng động và giàu kinh nghiệm.</p>
                                    </div>
                                </div>
                                <div className="bn-box-it col">
                                    <div className="inner">
                                        <div className="icon">
                                            <img
                                                width="24"
                                                height="24"
                                                src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-bn4.svg"
                                                className="attachment-full size-full"
                                                alt="tmđt"
                                                decoding="async"
                                                loading="lazy"
                                            />
                                        </div>
                                        <p className="des">An toàn và bảo mật của khách hàng là ưu tiên hàng đầu.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="sec-inter-solve">
                <div className="inter-solve ss-pd solv-freight">
                    <div className="container">
                        <div className="inter-solve-row row">
                            <ListServices />
                            <div className="inter-solve-main col">
                                <div className="side-open">
                                    <div className="side-open-wrap">
                                        {' '}
                                        <i className="fa-solid fa-sidebar-flip"></i>
                                    </div>
                                </div>
                                <div className="wrapper">
                                    <h1 className="title title-48 add-class text-verti mb-32 is-inview">Vận tải đường biển</h1>

                                    <p className="inter-solve-des">
                                        <p>Cung cấp giải pháp toàn diện từ khâu lấy hàng, xử lý hàng hóa, lashing đến giao hàng đích danh tại các quốc gia trên thế giới.</p>
                                        <p>&nbsp;</p>
                                        <p></p>
                                    </p>

                                    <EXPTrust />

                                    <div className="inter-solve-box">
                                        <div className="row">
                                            <div className="col">
                                                <div className="inter-solve-box-it">
                                                    <p className="name">VN-US</p>
                                                    <p className="num">200 - 250</p>
                                                    <p className="des">TEU/tháng</p>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="inter-solve-box-it">
                                                    <p className="name">VN-EU</p>
                                                    <p className="num">150</p>
                                                    <p className="des">TEU/tháng</p>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="inter-solve-box-it">
                                                    <p className="name">VN-Asia, UAE</p>
                                                    <p className="num">350</p>
                                                    <p className="des">TEU/tháng</p>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="inter-solve-box-it">
                                                    <p className="name">China-VN</p>
                                                    <p className="num">300</p>
                                                    <p className="des">TEU/tháng</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="inland-xo">
                                        <div className="imgFull">
                                            <div className="imgFull-inner">
                                                <img
                                                    width="977"
                                                    height="400"
                                                    src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/img-ud.jpg"
                                                    className="attachment-full size-full"
                                                    alt=""
                                                    decoding="async"
                                                    loading="lazy"
                                                    srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/img-ud.jpg 977w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/img-ud-300x123.jpg 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/img-ud-768x314.jpg 768w"
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
                                                            style={{ '--word-total': 5, '--char-total': 17 } as React.CSSProperties}
                                                        >
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
                                                    {' '}
                                                    <div className="inland-xo-list row gap-res rows-2  listEven">
                                                        <div className="inland-xo-it col itemEven even">
                                                            <div className="inner">
                                                                <div className="icon">
                                                                    <img
                                                                        width="32"
                                                                        height="32"
                                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-il1.svg"
                                                                        className="attachment-full size-full"
                                                                        alt="Nhanh chóng"
                                                                        decoding="async"
                                                                        loading="lazy"
                                                                    />
                                                                </div>
                                                                <p className="text"></p>
                                                                <div className="des">Giải pháp hoàn hảo cho mọi loại hàng hóa, kể cả các mặt hàng chuyên biệt.</div>
                                                            </div>
                                                        </div>
                                                        <div className="inland-xo-it col itemEven odd">
                                                            <div className="inner">
                                                                <div className="icon">
                                                                    <img
                                                                        width="24"
                                                                        height="24"
                                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-bn1.svg"
                                                                        className="attachment-full size-full"
                                                                        alt="Icon TMĐT"
                                                                        decoding="async"
                                                                        loading="lazy"
                                                                    />
                                                                </div>
                                                                <p className="text"></p>
                                                                <div className="des">Có khả năng vận chuyển hàng hóa dài ngày, đặc biệt là chuyển hàng quốc tế.</div>
                                                            </div>
                                                        </div>
                                                        <div className="inland-xo-it col itemEven odd">
                                                            <div className="inner">
                                                                <div className="icon">
                                                                    <img
                                                                        width="24"
                                                                        height="24"
                                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-bn2.svg"
                                                                        className="attachment-full size-full"
                                                                        alt="KẾT NỐI HÀNH TRÌNH"
                                                                        decoding="async"
                                                                        loading="lazy"
                                                                    />
                                                                </div>
                                                                <p className="text"></p>
                                                                <div className="des">Mạng lưới vận chuyển rộng khắp toàn cầu.</div>
                                                            </div>
                                                        </div>
                                                        <div className="inland-xo-it col itemEven even">
                                                            <div className="inner">
                                                                <div className="icon">
                                                                    <img
                                                                        width="32"
                                                                        height="32"
                                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-il3.svg"
                                                                        className="attachment-full size-full"
                                                                        alt="Đa dạng"
                                                                        decoding="async"
                                                                        loading="lazy"
                                                                    />
                                                                </div>
                                                                <p className="text"></p>
                                                                <div className="des">Tối ưu chi phí so với các phương thức vận chuyển khác.</div>
                                                            </div>
                                                        </div>
                                                        <div className="inland-xo-it col itemEven even">
                                                            <div className="inner">
                                                                <div className="icon">
                                                                    <img
                                                                        width="32"
                                                                        height="32"
                                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-il5.svg"
                                                                        className="attachment-full size-full"
                                                                        alt="An toàn"
                                                                        decoding="async"
                                                                        loading="lazy"
                                                                    />
                                                                </div>
                                                                <p className="text"></p>
                                                                <div className="des">Bảo mật và an toàn.</div>
                                                            </div>
                                                        </div>
                                                        <div className="inland-xo-it col itemEven odd">
                                                            <div className="inner">
                                                                <div className="icon">
                                                                    <img
                                                                        width="40"
                                                                        height="40"
                                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/Group-6.png"
                                                                        className="attachment-full size-full"
                                                                        alt=""
                                                                        decoding="async"
                                                                        loading="lazy"
                                                                    />
                                                                </div>
                                                                <p className="text">KHÁM PHÁ THÊM</p>
                                                                <div className="des"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>{' '}
                                            </div>
                                        </div>
                                    </div>

                                    <Partners />
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

export default SeaFreightPage;