import React from 'react';
import SiteBreadcrumb from '@/components/SiteBreadcrumb';
import ListServices from '@/components/ListServices';
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
                                    <div className="exp-entrust-slide">
                                        <div className="swiper row rows-2 gap-res swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                                            <div className="swiper-wrapper" id="swiper-wrapper-a8badb9ad677be6e" aria-live="polite" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                                                <div className="swiper-slide col swiper-slide-visible swiper-slide-active" role="group" aria-label="1 / 2">
                                                    <div className="entrust-item">
                                                        <div className="inner">
                                                            <div className="img hover-img-rotate">
                                                                <a className="img-inner" href="https://vietnampostlogistics.com/tat-tan-tat-ve-fcl-full-container-load-trong-logistics/">
                                                                    <img
                                                                        width="274"
                                                                        height="296"
                                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/exp1.jpg"
                                                                        className="attachment-full size-full"
                                                                        alt="Bãi containers"
                                                                        decoding="async"
                                                                        loading="lazy"
                                                                    />
                                                                </a>
                                                                <a className="btn-circle" href="https://vietnampostlogistics.com/tat-tan-tat-ve-fcl-full-container-load-trong-logistics/">
                                                                    <img src="https://vietnampostlogistics.com/template/assets/images/ic-arrow.svg" alt="" />
                                                                </a>
                                                            </div>
                                                            <div className="info">
                                                                <h4>
                                                                    <a className="info-tt" href="https://vietnampostlogistics.com/tat-tan-tat-ve-fcl-full-container-load-trong-logistics/">
                                                                        FCL - Full container load
                                                                    </a>
                                                                </h4>
                                                                <p className="info-des">Tất cả các mặt hàng là của một chủ hàng và thường là các mặt hàng đồng nhất.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide col swiper-slide-visible swiper-slide-next" role="group" aria-label="2 / 2">
                                                    <div className="entrust-item">
                                                        <div className="inner">
                                                            <div className="img hover-img-rotate">
                                                                <a className="img-inner" href="https://vietnampostlogistics.com/lcl-giai-phap-van-chuyen-gom-hang-toi-uu-cho-doanh-nghiep/">
                                                                    <img
                                                                        width="274"
                                                                        height="296"
                                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/exp2.jpg"
                                                                        className="attachment-full size-full"
                                                                        alt="thùng hàng carton và pallet"
                                                                        decoding="async"
                                                                        loading="lazy"
                                                                    />
                                                                </a>
                                                                <a className="btn-circle" href="https://vietnampostlogistics.com/lcl-giai-phap-van-chuyen-gom-hang-toi-uu-cho-doanh-nghiep/">
                                                                    <img src="https://vietnampostlogistics.com/template/assets/images/ic-arrow.svg" alt="" />
                                                                </a>
                                                            </div>
                                                            <div className="info">
                                                                <h4>
                                                                    <a className="info-tt" href="https://vietnampostlogistics.com/lcl-giai-phap-van-chuyen-gom-hang-toi-uu-cho-doanh-nghiep/">
                                                                        LCL - Less than container load
                                                                    </a>
                                                                </h4>
                                                                <p className="info-des">Phù hợp cho doanh nghiệp và chủ hàng khi gửi kiện hàng lẻ.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                                        </div>
                                        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-lock">
                                            <span
                                                className="swiper-pagination-bullet swiper-pagination-bullet-active"
                                                tabIndex={0}
                                                role="button"
                                                aria-label="Go to slide 1"
                                                aria-current="true"
                                            ></span>
                                        </div>
                                    </div>

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

                                    <div className="solv-freight-partner">
                                        <div className="head-verti center mb-32">
                                            <h1 className="title title-48 add-class text-verti">Đối tác chiến lược</h1>
                                        </div>
                                        <div className="solv-our-slide">
                                            <div className="swiper row gap-res swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                                                <div className="swiper-wrapper" id="swiper-wrapper-ff8b94c184ad6b27" aria-live="polite" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                                                    <div className="swiper-slide col swiper-slide-visible swiper-slide-active" role="group" aria-label="1 / 5">
                                                        <div className="solv-our-it">
                                                            <a className="img" href="javascript:;">
                                                                <img
                                                                    width="384"
                                                                    height="201"
                                                                    src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw2.jpg"
                                                                    className="attachment-full size-full"
                                                                    alt="Logo VCCI"
                                                                    decoding="async"
                                                                    loading="lazy"
                                                                    srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw2.jpg 384w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw2-300x157.jpg 300w"
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide col swiper-slide-visible swiper-slide-next" role="group" aria-label="2 / 5">
                                                        <div className="solv-our-it">
                                                            <a className="img" href="javascript:;">
                                                                <img
                                                                    width="384"
                                                                    height="201"
                                                                    src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw3.jpg"
                                                                    className="attachment-full size-full"
                                                                    alt="Logo JC TRANS"
                                                                    decoding="async"
                                                                    loading="lazy"
                                                                    srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw3.jpg 384w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw3-300x157.jpg 300w"
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide col swiper-slide-visible" role="group" aria-label="3 / 5">
                                                        <div className="solv-our-it">
                                                            <a className="img" href="javascript:;">
                                                                <img
                                                                    width="384"
                                                                    height="201"
                                                                    src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw4.jpg"
                                                                    className="attachment-full size-full"
                                                                    alt="Logo Postal Service - United States"
                                                                    decoding="async"
                                                                    loading="lazy"
                                                                    srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw4.jpg 384w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw4-300x157.jpg 300w"
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide col swiper-slide-visible" role="group" aria-label="4 / 5">
                                                        <div className="solv-our-it">
                                                            <a className="img" href="javascript:;">
                                                                <img
                                                                    width="384"
                                                                    height="201"
                                                                    src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw5.jpg"
                                                                    className="attachment-full size-full"
                                                                    alt="Logo Vietjet Air"
                                                                    decoding="async"
                                                                    loading="lazy"
                                                                    srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw5.jpg 384w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw5-300x157.jpg 300w"
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide col swiper-slide-visible" role="group" aria-label="5 / 5">
                                                        <div className="solv-our-it">
                                                            <a className="img" href="javascript:;">
                                                                <img
                                                                    width="384"
                                                                    height="200"
                                                                    src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw6.jpg"
                                                                    className="attachment-full size-full"
                                                                    alt="Logo Korean Air"
                                                                    decoding="async"
                                                                    loading="lazy"
                                                                    srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw6.jpg 384w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw6-300x156.jpg 300w"
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                                            </div>
                                            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-lock">
                                                <span
                                                    className="swiper-pagination-bullet swiper-pagination-bullet-active"
                                                    tabIndex={0}
                                                    role="button"
                                                    aria-label="Go to slide 1"
                                                    aria-current="true"
                                                ></span>
                                            </div>
                                        </div>
                                        <div className="solv-our-slide">
                                            <div className="swiper row gap-res swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                                                <div className="swiper-wrapper" id="swiper-wrapper-050d413edde5a03f" aria-live="polite" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                                                    <div className="swiper-slide col swiper-slide-visible swiper-slide-active" role="group" aria-label="1 / 5">
                                                        <div className="solv-our-it">
                                                            <a className="img" href="javascript:;">
                                                                <img
                                                                    width="384"
                                                                    height="200"
                                                                    src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw6-1.jpg"
                                                                    className="attachment-full size-full"
                                                                    alt=""
                                                                    decoding="async"
                                                                    loading="lazy"
                                                                    srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw6-1.jpg 384w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw6-1-300x156.jpg 300w"
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide col swiper-slide-visible swiper-slide-next" role="group" aria-label="2 / 5">
                                                        <div className="solv-our-it">
                                                            <a className="img" href="javascript:;">
                                                                <img
                                                                    width="384"
                                                                    height="201"
                                                                    src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw5-1.jpg"
                                                                    className="attachment-full size-full"
                                                                    alt=""
                                                                    decoding="async"
                                                                    loading="lazy"
                                                                    srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw5-1.jpg 384w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw5-1-300x157.jpg 300w"
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide col swiper-slide-visible" role="group" aria-label="3 / 5">
                                                        <div className="solv-our-it">
                                                            <a className="img" href="javascript:;">
                                                                <img
                                                                    width="384"
                                                                    height="201"
                                                                    src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw4-1.jpg"
                                                                    className="attachment-full size-full"
                                                                    alt=""
                                                                    decoding="async"
                                                                    loading="lazy"
                                                                    srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw4-1.jpg 384w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw4-1-300x157.jpg 300w"
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide col swiper-slide-visible" role="group" aria-label="4 / 5">
                                                        <div className="solv-our-it">
                                                            <a className="img" href="javascript:;">
                                                                <img
                                                                    width="384"
                                                                    height="201"
                                                                    src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw3-1.jpg"
                                                                    className="attachment-full size-full"
                                                                    alt=""
                                                                    decoding="async"
                                                                    loading="lazy"
                                                                    srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw3-1.jpg 384w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw3-1-300x157.jpg 300w"
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide col swiper-slide-visible" role="group" aria-label="5 / 5">
                                                        <div className="solv-our-it">
                                                            <a className="img" href="javascript:;">
                                                                <img
                                                                    width="384"
                                                                    height="201"
                                                                    src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw2-1.jpg"
                                                                    className="attachment-full size-full"
                                                                    alt=""
                                                                    decoding="async"
                                                                    loading="lazy"
                                                                    srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw2-1.jpg 384w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/aw2-1-300x157.jpg 300w"
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                                            </div>
                                            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-lock">
                                                <span
                                                    className="swiper-pagination-bullet swiper-pagination-bullet-active"
                                                    tabIndex={0}
                                                    role="button"
                                                    aria-label="Go to slide 1"
                                                    aria-current="true"
                                                ></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="inter-solve-top">
                                        <div className="head-verti mb-32">
                                            <div className="title-head text-verti">
                                                <h3
                                                    className="title title-40 add-class text-hori words chars splitting"
                                                    data-spl="data-spl"
                                                    style={{ '--word-total': 4, '--char-total': 14 } as React.CSSProperties}
                                                >
                                                    <span className="word" data-word="Lĩnh" style={{ '--word-index': 0 } as React.CSSProperties}>
                                                        <span className="char" data-char="L" style={{ '--char-index': 0 } as React.CSSProperties}>
                                                            L
                                                        </span>
                                                        <span className="char" data-char="ĩ" style={{ '--char-index': 1 } as React.CSSProperties}>
                                                            ĩ
                                                        </span>
                                                        <span className="char" data-char="n" style={{ '--char-index': 2 } as React.CSSProperties}>
                                                            n
                                                        </span>
                                                        <span className="char" data-char="h" style={{ '--char-index': 3 } as React.CSSProperties}>
                                                            h
                                                        </span>
                                                    </span>
                                                    <span className="whitespace"> </span>
                                                    <span className="word" data-word="vực" style={{ '--word-index': 1 } as React.CSSProperties}>
                                                        <span className="char" data-char="v" style={{ '--char-index': 4 } as React.CSSProperties}>
                                                            v
                                                        </span>
                                                        <span className="char" data-char="ự" style={{ '--char-index': 5 } as React.CSSProperties}>
                                                            ự
                                                        </span>
                                                        <span className="char" data-char="c" style={{ '--char-index': 6 } as React.CSSProperties}>
                                                            c
                                                        </span>
                                                    </span>
                                                    <span className="whitespace"> </span>
                                                    <span className="word" data-word="thế" style={{ '--word-index': 2 } as React.CSSProperties}>
                                                        <span className="char" data-char="t" style={{ '--char-index': 7 } as React.CSSProperties}>
                                                            t
                                                        </span>
                                                        <span className="char" data-char="h" style={{ '--char-index': 8 } as React.CSSProperties}>
                                                            h
                                                        </span>
                                                        <span className="char" data-char="ế" style={{ '--char-index': 9 } as React.CSSProperties}>
                                                            ế
                                                        </span>
                                                    </span>
                                                    <span className="whitespace"> </span>
                                                    <span className="word" data-word="mạnh" style={{ '--word-index': 3 } as React.CSSProperties}>
                                                        <span className="char" data-char="m" style={{ '--char-index': 10 } as React.CSSProperties}>
                                                            m
                                                        </span>
                                                        <span className="char" data-char="ạ" style={{ '--char-index': 11 } as React.CSSProperties}>
                                                            ạ
                                                        </span>
                                                        <span className="char" data-char="n" style={{ '--char-index': 12 } as React.CSSProperties}>
                                                            n
                                                        </span>
                                                        <span className="char" data-char="h" style={{ '--char-index': 13 } as React.CSSProperties}>
                                                            h
                                                        </span>
                                                    </span>{' '}
                                                </h3>
                                            </div>
                                            <div className="line aos-init" data-aos="fade-up-cus">
                                                <p className="desc">
                                                    Với kinh nghiệm dày dặn và đội ngũ nhân viên chuyên nghiệp, chúng tôi tự tin chinh phục những khách hàng khó tính nhất, đặc biệt trong các
                                                    lĩnh vực:
                                                </p>
                                            </div>
                                        </div>
                                        <div className="inter-solve-top-slide">
                                            <div className="swiper row rows-4 gap-res swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                                                <div className="swiper-wrapper" id="swiper-wrapper-f52727e510fad10375" aria-live="polite" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                                                    <div className="swiper-slide col swiper-slide-visible swiper-slide-active" role="group" aria-label="1 / 4">
                                                        <div className="inter-solve-top-it">
                                                            <div className="inner">
                                                                <div className="img">
                                                                    <a className="img-inner" href="">
                                                                        <img
                                                                            width="605"
                                                                            height="412"
                                                                            src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/Screenshot_2025-04-24_141744-removebg-preview.png"
                                                                            className="attachment-full size-full"
                                                                            alt=""
                                                                            decoding="async"
                                                                            loading="lazy"
                                                                            srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/Screenshot_2025-04-24_141744-removebg-preview.png 605w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/Screenshot_2025-04-24_141744-removebg-preview-300x204.png 300w"
                                                                        />
                                                                    </a>
                                                                </div>
                                                                <div className="info">
                                                                    <h4>
                                                                        <a className="info-tt" href="">
                                                                            Sản phẩm công nghệ
                                                                        </a>
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide col swiper-slide-visible swiper-slide-next" role="group" aria-label="2 / 4">
                                                        <div className="inter-solve-top-it">
                                                            <div className="inner">
                                                                <div className="img">
                                                                    <a className="img-inner" href="">
                                                                        <img
                                                                            width="436"
                                                                            height="573"
                                                                            src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hydraulic-ironworker-sw132-removebg-preview.png"
                                                                            className="attachment-full size-full"
                                                                            alt=""
                                                                            decoding="async"
                                                                            loading="lazy"
                                                                            srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hydraulic-ironworker-sw132-removebg-preview.png 436w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/hydraulic-ironworker-sw132-removebg-preview-228x300.png 228w"
                                                                        />
                                                                    </a>
                                                                </div>
                                                                <div className="info">
                                                                    <h4>
                                                                        <a className="info-tt" href="">
                                                                            Thiết bị công nghiệp
                                                                        </a>
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide col swiper-slide-visible" role="group" aria-label="3 / 4">
                                                        <div className="inter-solve-top-it">
                                                            <div className="inner">
                                                                <div className="img">
                                                                    <a className="img-inner" href="">
                                                                        <img
                                                                            width="500"
                                                                            height="500"
                                                                            src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/pngtree-advanced-medical-equipment-png-image_17293421-removebg-preview.png"
                                                                            className="attachment-full size-full"
                                                                            alt=""
                                                                            decoding="async"
                                                                            loading="lazy"
                                                                            srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/pngtree-advanced-medical-equipment-png-image_17293421-removebg-preview.png 500w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/pngtree-advanced-medical-equipment-png-image_17293421-removebg-preview-300x300.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/pngtree-advanced-medical-equipment-png-image_17293421-removebg-preview-150x150.png 150w"
                                                                        />
                                                                    </a>
                                                                </div>
                                                                <div className="info">
                                                                    <h4>
                                                                        <a className="info-tt" href="">
                                                                            Thiết bị y tế
                                                                        </a>
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide col swiper-slide-visible" role="group" aria-label="4 / 4">
                                                        <div className="inter-solve-top-it">
                                                            <div className="inner">
                                                                <div className="img">
                                                                    <a className="img-inner" href="">
                                                                        <img
                                                                            width="667"
                                                                            height="374"
                                                                            src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/Construction-Materials-Are-Used-for-Buildings-removebg-preview.png"
                                                                            className="attachment-full size-full"
                                                                            alt=""
                                                                            decoding="async"
                                                                            loading="lazy"
                                                                            srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/Construction-Materials-Are-Used-for-Buildings-removebg-preview.png 667w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/Construction-Materials-Are-Used-for-Buildings-removebg-preview-300x168.png 300w"
                                                                        />
                                                                    </a>
                                                                </div>
                                                                <div className="info">
                                                                    <h4>
                                                                        <a className="info-tt" href="">
                                                                            Vật liệu xây dựng
                                                                        </a>
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                                            </div>

                                            <div className="swiper-control posi midle">
                                                <div
                                                    className="swiper-control-btn swiper-prev swiper-button-disabled swiper-button-lock"
                                                    tabIndex={-1}
                                                    role="button"
                                                    aria-label="Previous slide"
                                                    aria-controls="swiper-wrapper-f52727e510fad10375"
                                                    aria-disabled="true"
                                                >
                                                    {' '}
                                                    <i className="fa-solid fa-arrow-left"></i>
                                                </div>
                                                <div
                                                    className="swiper-control-btn swiper-next swiper-button-disabled swiper-button-lock"
                                                    tabIndex={-1}
                                                    role="button"
                                                    aria-label="Next slide"
                                                    aria-controls="swiper-wrapper-f52727e510fad10375"
                                                    aria-disabled="true"
                                                >
                                                    {' '}
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </div>
                                            </div>
                                            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-lock">
                                                <span
                                                    className="swiper-pagination-bullet swiper-pagination-bullet-active"
                                                    tabIndex={0}
                                                    role="button"
                                                    aria-label="Go to slide 1"
                                                    aria-current="true"
                                                ></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sec-homes-splide">
                <div className="homes-splide ss-pd">
                    <div className="homes-splide-block">
                        <div className="container">
                            <div className="head-verti center">
                                <div className="line aos-init" data-aos="fade-up-cus">
                                    <h2 className="title title-48 add-class text-verti">Các hiệp hội tham gia</h2>
                                </div>
                            </div>
                        </div>
                        <div className="logoSplide">
                            <div className="splide splide--loop splide--ltr splide--draggable is-active is-initialized" id="splide01" role="region" aria-roledescription="carousel">
                                <div className="splide__arrows splide__arrows--ltr">
                                    <button className="splide__arrow splide__arrow--prev" type="button" aria-label="Previous slide" aria-controls="splide01-track">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false">
                                            <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
                                        </svg>
                                    </button>
                                    <button className="splide__arrow splide__arrow--next" type="button" aria-label="Next slide" aria-controls="splide01-track">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false">
                                            <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div
                                    className="splide__track splide__track--loop splide__track--ltr splide__track--draggable"
                                    id="splide01-track"
                                    style={{ paddingLeft: '0px', paddingRight: '0px' }}
                                    aria-live="off"
                                    aria-atomic="true"
                                >
                                    <div className="splide__list" id="splide01-list" role="presentation" style={{ transform: 'translateX(-2638.47px)' }}>
                                        <div className="splide__slide splide__slide--clone" id="splide01-clone01" role="tabpanel" aria-roledescription="slide" aria-label="3 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh3.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo JCTRANS"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide01-clone02" role="tabpanel" aria-roledescription="slide" aria-label="4 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh4.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo IATA"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide01-clone03" role="tabpanel" aria-roledescription="slide" aria-label="1 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh1.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo WCA"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone is-active" id="splide01-clone04" role="tabpanel" aria-roledescription="slide" aria-label="2 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh2.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo VCCI"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide01-clone05" role="tabpanel" aria-roledescription="slide" aria-label="3 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh3.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo JCTRANS"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide01-clone06" role="tabpanel" aria-roledescription="slide" aria-label="4 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh4.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo IATA"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide01-clone07" role="tabpanel" aria-roledescription="slide" aria-label="1 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh1.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo WCA"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone is-active" id="splide01-clone08" role="tabpanel" aria-roledescription="slide" aria-label="2 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh2.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo VCCI"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide01-clone09" role="tabpanel" aria-roledescription="slide" aria-label="3 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh3.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo JCTRANS"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide01-clone10" role="tabpanel" aria-roledescription="slide" aria-label="4 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh4.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo IATA"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide01-clone11" role="tabpanel" aria-roledescription="slide" aria-label="1 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh1.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo WCA"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone is-active" id="splide01-clone12" role="tabpanel" aria-roledescription="slide" aria-label="2 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh2.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo VCCI"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide01-clone13" role="tabpanel" aria-roledescription="slide" aria-label="3 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh3.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo JCTRANS"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide01-clone14" role="tabpanel" aria-roledescription="slide" aria-label="4 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh4.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo IATA"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide01-clone15" role="tabpanel" aria-roledescription="slide" aria-label="1 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh1.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo WCA"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone is-visible is-active" id="splide01-clone16" role="tabpanel" aria-roledescription="slide" aria-label="2 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }}>
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh2.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo VCCI"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone is-visible" id="splide01-clone17" role="tabpanel" aria-roledescription="slide" aria-label="3 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }}>
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh3.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo JCTRANS"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone is-visible" id="splide01-clone18" role="tabpanel" aria-roledescription="slide" aria-label="4 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }}>
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh4.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo IATA"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide is-visible is-prev" id="splide01-slide01" role="tabpanel" aria-roledescription="slide" aria-label="1 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }}>
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh1.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo WCA"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide is-visible is-active" id="splide01-slide02" role="tabpanel" aria-roledescription="slide" aria-label="2 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }}>
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh2.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo VCCI"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide is-visible is-next" id="splide01-slide03" role="tabpanel" aria-roledescription="slide" aria-label="3 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }}>
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh3.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo JCTRANS"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide is-visible" id="splide01-slide04" role="tabpanel" aria-roledescription="slide" aria-label="4 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }}>
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh4.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo IATA"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone is-visible" id="splide01-clone19" role="tabpanel" aria-roledescription="slide" aria-label="1 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }}>
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh1.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo WCA"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone is-active" id="splide01-clone20" role="tabpanel" aria-roledescription="slide" aria-label="2 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh2.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo VCCI"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide01-clone21" role="tabpanel" aria-roledescription="slide" aria-label="3 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh3.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo JCTRANS"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide01-clone22" role="tabpanel" aria-roledescription="slide" aria-label="4 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh4.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo IATA"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide01-clone23" role="tabpanel" aria-roledescription="slide" aria-label="1 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh1.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo WCA"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone is-active" id="splide01-clone24" role="tabpanel" aria-roledescription="slide" aria-label="2 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh2.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo VCCI"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide01-clone25" role="tabpanel" aria-roledescription="slide" aria-label="3 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh3.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo JCTRANS"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide01-clone26" role="tabpanel" aria-roledescription="slide" aria-label="4 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh4.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo IATA"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide01-clone27" role="tabpanel" aria-roledescription="slide" aria-label="1 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh1.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo WCA"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone is-active" id="splide01-clone28" role="tabpanel" aria-roledescription="slide" aria-label="2 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh2.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo VCCI"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide01-clone29" role="tabpanel" aria-roledescription="slide" aria-label="3 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh3.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo JCTRANS"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide01-clone30" role="tabpanel" aria-roledescription="slide" aria-label="4 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh4.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo IATA"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide01-clone31" role="tabpanel" aria-roledescription="slide" aria-label="1 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh1.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo WCA"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone is-active" id="splide01-clone32" role="tabpanel" aria-roledescription="slide" aria-label="2 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh2.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo VCCI"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide01-clone33" role="tabpanel" aria-roledescription="slide" aria-label="3 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh3.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo JCTRANS"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide01-clone34" role="tabpanel" aria-roledescription="slide" aria-label="4 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh4.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo IATA"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide01-clone35" role="tabpanel" aria-roledescription="slide" aria-label="1 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh1.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo WCA"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone is-active" id="splide01-clone36" role="tabpanel" aria-roledescription="slide" aria-label="2 of 4" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh2.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo VCCI"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul className="splide__pagination splide__pagination--ltr" role="tablist" aria-label="Select a slide to show">
                                    <li role="presentation">
                                        <button className="splide__pagination__page" type="button" role="tab" aria-controls="splide01-slide01" aria-label="Go to slide 1" tabIndex={-1}></button>
                                    </li>
                                    <li role="presentation">
                                        <button className="splide__pagination__page is-active" type="button" role="tab" aria-controls="splide01-slide02" aria-label="Go to slide 2" aria-selected="true"></button>
                                    </li>
                                    <li role="presentation">
                                        <button className="splide__pagination__page" type="button" role="tab" aria-controls="splide01-slide03" aria-label="Go to slide 3" tabIndex={-1}></button>
                                    </li>
                                    <li role="presentation">
                                        <button className="splide__pagination__page" type="button" role="tab" aria-controls="splide01-slide04" aria-label="Go to slide 4" tabIndex={-1}></button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="homes-splide-block">
                        <div className="container">
                            <div className="head-verti center">
                                <div className="line aos-init" data-aos="fade-up-cus">
                                    <h2 className="title title-48 add-class text-verti">Mạng lưới đối tác</h2>
                                </div>
                            </div>
                        </div>
                        <div className="logoSplide">
                            <div className="splide splide--loop splide--rtl splide--draggable is-active is-initialized" id="splide02" role="region" aria-roledescription="carousel">
                                <div className="splide__arrows splide__arrows--rtl">
                                    <button className="splide__arrow splide__arrow--prev" type="button" aria-label="Previous slide" aria-controls="splide02-track">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false">
                                            <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
                                        </svg>
                                    </button>
                                    <button className="splide__arrow splide__arrow--next" type="button" aria-label="Next slide" aria-controls="splide02-track">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false">
                                            <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div
                                    className="splide__track splide__track--loop splide__track--rtl splide__track--draggable"
                                    id="splide02-track"
                                    style={{ paddingRight: '0px', paddingLeft: '0px' }}
                                    aria-live="off"
                                    aria-atomic="true"
                                >
                                    <div className="splide__list" id="splide02-list" role="presentation" style={{ transform: 'translateX(2638.47px)' }}>
                                        <div className="splide__slide splide__slide--clone" id="splide02-clone01" role="tabpanel" aria-roledescription="slide" aria-label="7 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="1200"
                                                        height="857"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/hapag-lloyd@logotyp.us_.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo hapag-lloyd"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/hapag-lloyd@logotyp.us_.png 1200w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/hapag-lloyd@logotyp.us_-300x214.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/hapag-lloyd@logotyp.us_-1024x731.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/hapag-lloyd@logotyp.us_-768x548.png 768w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide02-clone02" role="tabpanel" aria-roledescription="slide" aria-label="8 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="1200"
                                                        height="857"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/zim@logotyp.us_.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo ZIM"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/zim@logotyp.us_.png 1200w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/zim@logotyp.us_-300x214.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/zim@logotyp.us_-1024x731.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/zim@logotyp.us_-768x548.png 768w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide02-clone03" role="tabpanel" aria-roledescription="slide" aria-label="1 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/pn1.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo Vietnam Airlines"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone is-active" id="splide02-clone04" role="tabpanel" aria-roledescription="slide" aria-label="2 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/pn2.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo United States Postal"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide02-clone05" role="tabpanel" aria-roledescription="slide" aria-label="3 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/pn3.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo Korean Air"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide02-clone06" role="tabpanel" aria-roledescription="slide" aria-label="4 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/pn4.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo Quatar Airlines"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide02-clone07" role="tabpanel" aria-roledescription="slide" aria-label="5 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/pn5.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo Vietjet Air"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide02-clone08" role="tabpanel" aria-roledescription="slide" aria-label="6 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="204"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/pn6.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo Cargolux"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide02-clone09" role="tabpanel" aria-roledescription="slide" aria-label="7 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="1200"
                                                        height="857"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/hapag-lloyd@logotyp.us_.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo hapag-lloyd"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/hapag-lloyd@logotyp.us_.png 1200w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/hapag-lloyd@logotyp.us_-300x214.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/hapag-lloyd@logotyp.us_-1024x731.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/hapag-lloyd@logotyp.us_-768x548.png 768w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide02-clone10" role="tabpanel" aria-roledescription="slide" aria-label="8 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="1200"
                                                        height="857"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/zim@logotyp.us_.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo ZIM"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/zim@logotyp.us_.png 1200w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/zim@logotyp.us_-300x214.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/zim@logotyp.us_-1024x731.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/zim@logotyp.us_-768x548.png 768w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide02-clone11" role="tabpanel" aria-roledescription="slide" aria-label="1 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/pn1.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo Vietnam Airlines"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone is-active" id="splide02-clone12" role="tabpanel" aria-roledescription="slide" aria-label="2 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/pn2.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo United States Postal"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide02-clone13" role="tabpanel" aria-roledescription="slide" aria-label="3 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/pn3.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo Korean Air"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide02-clone14" role="tabpanel" aria-roledescription="slide" aria-label="4 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/pn4.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo Quatar Airlines"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide02-clone15" role="tabpanel" aria-roledescription="slide" aria-label="5 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/pn5.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo Vietjet Air"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone is-visible" id="splide02-clone16" role="tabpanel" aria-roledescription="slide" aria-label="6 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }}>
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="204"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/pn6.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo Cargolux"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone is-visible" id="splide02-clone17" role="tabpanel" aria-roledescription="slide" aria-label="7 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }}>
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="1200"
                                                        height="857"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/hapag-lloyd@logotyp.us_.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo hapag-lloyd"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/hapag-lloyd@logotyp.us_.png 1200w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/hapag-lloyd@logotyp.us_-300x214.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/hapag-lloyd@logotyp.us_-1024x731.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/hapag-lloyd@logotyp.us_-768x548.png 768w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone is-visible" id="splide02-clone18" role="tabpanel" aria-roledescription="slide" aria-label="8 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }}>
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="1200"
                                                        height="857"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/zim@logotyp.us_.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo ZIM"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/zim@logotyp.us_.png 1200w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/zim@logotyp.us_-300x214.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/zim@logotyp.us_-1024x731.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/zim@logotyp.us_-768x548.png 768w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide is-visible is-prev" id="splide02-slide01" role="tabpanel" aria-roledescription="slide" aria-label="1 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }}>
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/pn1.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo Vietnam Airlines"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide is-visible is-active" id="splide02-slide02" role="tabpanel" aria-roledescription="slide" aria-label="2 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }}>
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/pn2.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo United States Postal"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide is-visible is-next" id="splide02-slide03" role="tabpanel" aria-roledescription="slide" aria-label="3 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }}>
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/pn3.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo Korean Air"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide is-visible" id="splide02-slide04" role="tabpanel" aria-roledescription="slide" aria-label="4 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }}>
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/pn4.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo Quatar Airlines"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide is-visible" id="splide02-slide05" role="tabpanel" aria-roledescription="slide" aria-label="5 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }}>
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/pn5.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo Vietjet Air"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide" id="splide02-slide06" role="tabpanel" aria-roledescription="slide" aria-label="6 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="204"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/pn6.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo Cargolux"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide" id="splide02-slide07" role="tabpanel" aria-roledescription="slide" aria-label="7 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="1200"
                                                        height="857"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/hapag-lloyd@logotyp.us_.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo hapag-lloyd"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/hapag-lloyd@logotyp.us_.png 1200w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/hapag-lloyd@logotyp.us_-300x214.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/hapag-lloyd@logotyp.us_-1024x731.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/hapag-lloyd@logotyp.us_-768x548.png 768w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide" id="splide02-slide08" role="tabpanel" aria-roledescription="slide" aria-label="8 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="1200"
                                                        height="857"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/zim@logotyp.us_.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo ZIM"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/zim@logotyp.us_.png 1200w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/zim@logotyp.us_-300x214.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/zim@logotyp.us_-1024x731.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/zim@logotyp.us_-768x548.png 768w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide02-clone19" role="tabpanel" aria-roledescription="slide" aria-label="1 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/pn1.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo Vietnam Airlines"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone is-active" id="splide02-clone20" role="tabpanel" aria-roledescription="slide" aria-label="2 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/pn2.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo United States Postal"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide02-clone21" role="tabpanel" aria-roledescription="slide" aria-label="3 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/pn3.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo Korean Air"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide02-clone22" role="tabpanel" aria-roledescription="slide" aria-label="4 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/pn4.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo Quatar Airlines"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide02-clone23" role="tabpanel" aria-roledescription="slide" aria-label="5 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/pn5.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo Vietjet Air"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide02-clone24" role="tabpanel" aria-roledescription="slide" aria-label="6 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="204"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/pn6.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo Cargolux"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide02-clone25" role="tabpanel" aria-roledescription="slide" aria-label="7 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="1200"
                                                        height="857"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/hapag-lloyd@logotyp.us_.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo hapag-lloyd"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/hapag-lloyd@logotyp.us_.png 1200w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/hapag-lloyd@logotyp.us_-300x214.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/hapag-lloyd@logotyp.us_-1024x731.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/hapag-lloyd@logotyp.us_-768x548.png 768w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide02-clone26" role="tabpanel" aria-roledescription="slide" aria-label="8 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="1200"
                                                        height="857"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/zim@logotyp.us_.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo ZIM"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/zim@logotyp.us_.png 1200w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/zim@logotyp.us_-300x214.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/zim@logotyp.us_-1024x731.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/zim@logotyp.us_-768x548.png 768w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide02-clone27" role="tabpanel" aria-roledescription="slide" aria-label="1 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/pn1.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo Vietnam Airlines"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone is-active" id="splide02-clone28" role="tabpanel" aria-roledescription="slide" aria-label="2 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/pn2.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo United States Postal"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide02-clone29" role="tabpanel" aria-roledescription="slide" aria-label="3 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/pn3.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo Korean Air"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide02-clone30" role="tabpanel" aria-roledescription="slide" aria-label="4 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/pn4.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo Quatar Airlines"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide02-clone31" role="tabpanel" aria-roledescription="slide" aria-label="5 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/pn5.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo Vietjet Air"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide02-clone32" role="tabpanel" aria-roledescription="slide" aria-label="6 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="204"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/pn6.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo Cargolux"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide02-clone33" role="tabpanel" aria-roledescription="slide" aria-label="7 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="1200"
                                                        height="857"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/hapag-lloyd@logotyp.us_.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo hapag-lloyd"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/hapag-lloyd@logotyp.us_.png 1200w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/hapag-lloyd@logotyp.us_-300x214.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/hapag-lloyd@logotyp.us_-1024x731.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/hapag-lloyd@logotyp.us_-768x548.png 768w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide02-clone34" role="tabpanel" aria-roledescription="slide" aria-label="8 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="1200"
                                                        height="857"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/zim@logotyp.us_.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo ZIM"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/zim@logotyp.us_.png 1200w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/zim@logotyp.us_-300x214.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/zim@logotyp.us_-1024x731.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/zim@logotyp.us_-768x548.png 768w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide02-clone35" role="tabpanel" aria-roledescription="slide" aria-label="1 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/pn1.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo Vietnam Airlines"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone is-active" id="splide02-clone36" role="tabpanel" aria-roledescription="slide" aria-label="2 of 8" style={{ marginLeft: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="182"
                                                        height="116"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/pn2.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo United States Postal"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul className="splide__pagination splide__pagination--rtl" role="tablist" aria-label="Select a slide to show">
                                    <li role="presentation">
                                        <button className="splide__pagination__page" type="button" role="tab" aria-controls="splide02-slide01" aria-label="Go to slide 1" tabIndex={-1}></button>
                                    </li>
                                    <li role="presentation">
                                        <button className="splide__pagination__page is-active" type="button" role="tab" aria-controls="splide02-slide02" aria-label="Go to slide 2" aria-selected="true"></button>
                                    </li>
                                    <li role="presentation">
                                        <button className="splide__pagination__page" type="button" role="tab" aria-controls="splide02-slide03" aria-label="Go to slide 3" tabIndex={-1}></button>
                                    </li>
                                    <li role="presentation">
                                        <button className="splide__pagination__page" type="button" role="tab" aria-controls="splide02-slide04" aria-label="Go to slide 4" tabIndex={-1}></button>
                                    </li>
                                    <li role="presentation">
                                        <button className="splide__pagination__page" type="button" role="tab" aria-controls="splide02-slide05" aria-label="Go to slide 5" tabIndex={-1}></button>
                                    </li>
                                    <li role="presentation">
                                        <button className="splide__pagination__page" type="button" role="tab" aria-controls="splide02-slide06" aria-label="Go to slide 6" tabIndex={-1}></button>
                                    </li>
                                    <li role="presentation">
                                        <button className="splide__pagination__page" type="button" role="tab" aria-controls="splide02-slide07" aria-label="Go to slide 7" tabIndex={-1}></button>
                                    </li>
                                    <li role="presentation">
                                        <button className="splide__pagination__page" type="button" role="tab" aria-controls="splide02-slide08" aria-label="Go to slide 8" tabIndex={-1}></button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="logoSplide">
                            <div className="splide splide--loop splide--ltr splide--draggable is-active is-initialized" id="splide03" role="region" aria-roledescription="carousel">
                                <div className="splide__arrows splide__arrows--ltr">
                                    <button className="splide__arrow splide__arrow--prev" type="button" aria-label="Previous slide" aria-controls="splide03-track">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false">
                                            <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
                                        </svg>
                                    </button>
                                    <button className="splide__arrow splide__arrow--next" type="button" aria-label="Next slide" aria-controls="splide03-track">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false">
                                            <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div
                                    className="splide__track splide__track--loop splide__track--ltr splide__track--draggable"
                                    id="splide03-track"
                                    style={{ paddingLeft: '0px', paddingRight: '0px' }}
                                    aria-live="off"
                                    aria-atomic="true"
                                >
                                    <div className="splide__list" id="splide03-list" role="presentation" style={{ transform: 'translateX(-2638.47px)' }}>
                                        <div className="splide__slide splide__slide--clone" id="splide03-clone01" role="tabpanel" aria-roledescription="slide" aria-label="4 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="1200"
                                                        height="857"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/cosco@logotyp.us_.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo Cosco Shipping"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/cosco@logotyp.us_.png 1200w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/cosco@logotyp.us_-300x214.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/cosco@logotyp.us_-1024x731.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/cosco@logotyp.us_-768x548.png 768w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide03-clone02" role="tabpanel" aria-roledescription="slide" aria-label="5 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="1450"
                                                        height="350"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/50b7b3c77c77a142b07c8a371bdd487f.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo China Airway"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/50b7b3c77c77a142b07c8a371bdd487f.png 1450w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/50b7b3c77c77a142b07c8a371bdd487f-300x72.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/50b7b3c77c77a142b07c8a371bdd487f-1024x247.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/50b7b3c77c77a142b07c8a371bdd487f-768x185.png 768w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide03-clone03" role="tabpanel" aria-roledescription="slide" aria-label="6 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="1200"
                                                        height="857"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/hmm@logotyp.us_.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo HMM"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/hmm@logotyp.us_.png 1200w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/hmm@logotyp.us_-300x214.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/hmm@logotyp.us_-1024x731.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/hmm@logotyp.us_-768x548.png 768w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide03-clone04" role="tabpanel" aria-roledescription="slide" aria-label="7 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="312"
                                                        height="274"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/z6511022655018_80c884c7eef6e042707b8d38ea531cd3-e1750749147440.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo MSC"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide03-clone05" role="tabpanel" aria-roledescription="slide" aria-label="1 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="2717"
                                                        height="2717"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo ONE"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01.png 2717w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01-300x300.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01-1024x1024.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01-150x150.png 150w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01-768x768.png 768w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01-1536x1536.png 1536w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01-2048x2048.png 2048w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone is-active" id="splide03-clone06" role="tabpanel" aria-roledescription="slide" aria-label="2 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="1340"
                                                        height="838"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/logo-bamboo-airways-inkythuatso-1.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo Bamboo Airway"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/logo-bamboo-airways-inkythuatso-1.png 1340w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/logo-bamboo-airways-inkythuatso-1-300x188.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/logo-bamboo-airways-inkythuatso-1-1024x640.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/logo-bamboo-airways-inkythuatso-1-768x480.png 768w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide03-clone07" role="tabpanel" aria-roledescription="slide" aria-label="3 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="500"
                                                        height="313"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/Maersk-Logo-500x313-1.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo Maersk"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/Maersk-Logo-500x313-1.png 500w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/Maersk-Logo-500x313-1-300x188.png 300w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide03-clone08" role="tabpanel" aria-roledescription="slide" aria-label="4 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="1200"
                                                        height="857"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/cosco@logotyp.us_.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo Cosco Shipping"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/cosco@logotyp.us_.png 1200w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/cosco@logotyp.us_-300x214.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/cosco@logotyp.us_-1024x731.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/cosco@logotyp.us_-768x548.png 768w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide03-clone09" role="tabpanel" aria-roledescription="slide" aria-label="5 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="1450"
                                                        height="350"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/50b7b3c77c77a142b07c8a371bdd487f.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo China Airway"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/50b7b3c77c77a142b07c8a371bdd487f.png 1450w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/50b7b3c77c77a142b07c8a371bdd487f-300x72.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/50b7b3c77c77a142b07c8a371bdd487f-1024x247.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/50b7b3c77c77a142b07c8a371bdd487f-768x185.png 768w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide03-clone10" role="tabpanel" aria-roledescription="slide" aria-label="6 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="1200"
                                                        height="857"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/hmm@logotyp.us_.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo HMM"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/hmm@logotyp.us_.png 1200w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/hmm@logotyp.us_-300x214.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/hmm@logotyp.us_-1024x731.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/hmm@logotyp.us_-768x548.png 768w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide03-clone11" role="tabpanel" aria-roledescription="slide" aria-label="7 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="312"
                                                        height="274"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/z6511022655018_80c884c7eef6e042707b8d38ea531cd3-e1750749147440.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo MSC"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide03-clone12" role="tabpanel" aria-roledescription="slide" aria-label="1 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="2717"
                                                        height="2717"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo ONE"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01.png 2717w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01-300x300.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01-1024x1024.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01-150x150.png 150w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01-768x768.png 768w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01-1536x1536.png 1536w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01-2048x2048.png 2048w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone is-active" id="splide03-clone13" role="tabpanel" aria-roledescription="slide" aria-label="2 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="1340"
                                                        height="838"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/logo-bamboo-airways-inkythuatso-1.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo Bamboo Airway"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/logo-bamboo-airways-inkythuatso-1.png 1340w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/logo-bamboo-airways-inkythuatso-1-300x188.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/logo-bamboo-airways-inkythuatso-1-1024x640.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/logo-bamboo-airways-inkythuatso-1-768x480.png 768w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide03-clone14" role="tabpanel" aria-roledescription="slide" aria-label="3 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="500"
                                                        height="313"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/Maersk-Logo-500x313-1.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo Maersk"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/Maersk-Logo-500x313-1.png 500w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/Maersk-Logo-500x313-1-300x188.png 300w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide03-clone15" role="tabpanel" aria-roledescription="slide" aria-label="4 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="1200"
                                                        height="857"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/cosco@logotyp.us_.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo Cosco Shipping"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/cosco@logotyp.us_.png 1200w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/cosco@logotyp.us_-300x214.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/cosco@logotyp.us_-1024x731.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/cosco@logotyp.us_-768x548.png 768w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone is-visible" id="splide03-clone16" role="tabpanel" aria-roledescription="slide" aria-label="5 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }}>
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="1450"
                                                        height="350"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/50b7b3c77c77a142b07c8a371bdd487f.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo China Airway"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/50b7b3c77c77a142b07c8a371bdd487f.png 1450w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/50b7b3c77c77a142b07c8a371bdd487f-300x72.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/50b7b3c77c77a142b07c8a371bdd487f-1024x247.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/50b7b3c77c77a142b07c8a371bdd487f-768x185.png 768w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone is-visible" id="splide03-clone17" role="tabpanel" aria-roledescription="slide" aria-label="6 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }}>
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="1200"
                                                        height="857"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/hmm@logotyp.us_.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo HMM"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/hmm@logotyp.us_.png 1200w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/hmm@logotyp.us_-300x214.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/hmm@logotyp.us_-1024x731.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/hmm@logotyp.us_-768x548.png 768w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone is-visible" id="splide03-clone18" role="tabpanel" aria-roledescription="slide" aria-label="7 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }}>
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="312"
                                                        height="274"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/z6511022655018_80c884c7eef6e042707b8d38ea531cd3-e1750749147440.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo MSC"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide is-visible is-prev" id="splide03-slide01" role="tabpanel" aria-roledescription="slide" aria-label="1 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }}>
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="2717"
                                                        height="2717"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo ONE"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01.png 2717w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01-300x300.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01-1024x1024.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01-150x150.png 150w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01-768x768.png 768w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01-1536x1536.png 1536w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01-2048x2048.png 2048w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide is-visible is-active" id="splide03-slide02" role="tabpanel" aria-roledescription="slide" aria-label="2 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }}>
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="1340"
                                                        height="838"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/logo-bamboo-airways-inkythuatso-1.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo Bamboo Airway"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/logo-bamboo-airways-inkythuatso-1.png 1340w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/logo-bamboo-airways-inkythuatso-1-300x188.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/logo-bamboo-airways-inkythuatso-1-1024x640.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/logo-bamboo-airways-inkythuatso-1-768x480.png 768w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide is-visible is-next" id="splide03-slide03" role="tabpanel" aria-roledescription="slide" aria-label="3 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }}>
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="500"
                                                        height="313"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/Maersk-Logo-500x313-1.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo Maersk"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/Maersk-Logo-500x313-1.png 500w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/Maersk-Logo-500x313-1-300x188.png 300w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide is-visible" id="splide03-slide04" role="tabpanel" aria-roledescription="slide" aria-label="4 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }}>
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="1200"
                                                        height="857"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/cosco@logotyp.us_.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo Cosco Shipping"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/cosco@logotyp.us_.png 1200w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/cosco@logotyp.us_-300x214.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/cosco@logotyp.us_-1024x731.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/cosco@logotyp.us_-768x548.png 768w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide is-visible" id="splide03-slide05" role="tabpanel" aria-roledescription="slide" aria-label="5 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }}>
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="1450"
                                                        height="350"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/50b7b3c77c77a142b07c8a371bdd487f.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo China Airway"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/50b7b3c77c77a142b07c8a371bdd487f.png 1450w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/50b7b3c77c77a142b07c8a371bdd487f-300x72.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/50b7b3c77c77a142b07c8a371bdd487f-1024x247.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/50b7b3c77c77a142b07c8a371bdd487f-768x185.png 768w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide" id="splide03-slide06" role="tabpanel" aria-roledescription="slide" aria-label="6 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="1200"
                                                        height="857"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/hmm@logotyp.us_.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo HMM"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/hmm@logotyp.us_.png 1200w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/hmm@logotyp.us_-300x214.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/hmm@logotyp.us_-1024x731.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/hmm@logotyp.us_-768x548.png 768w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide" id="splide03-slide07" role="tabpanel" aria-roledescription="slide" aria-label="7 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="312"
                                                        height="274"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/z6511022655018_80c884c7eef6e042707b8d38ea531cd3-e1750749147440.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo MSC"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide03-clone19" role="tabpanel" aria-roledescription="slide" aria-label="1 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="2717"
                                                        height="2717"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo ONE"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01.png 2717w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01-300x300.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01-1024x1024.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01-150x150.png 150w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01-768x768.png 768w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01-1536x1536.png 1536w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01-2048x2048.png 2048w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone is-active" id="splide03-clone20" role="tabpanel" aria-roledescription="slide" aria-label="2 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="1340"
                                                        height="838"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/logo-bamboo-airways-inkythuatso-1.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo Bamboo Airway"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/logo-bamboo-airways-inkythuatso-1.png 1340w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/logo-bamboo-airways-inkythuatso-1-300x188.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/logo-bamboo-airways-inkythuatso-1-1024x640.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/logo-bamboo-airways-inkythuatso-1-768x480.png 768w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide03-clone21" role="tabpanel" aria-roledescription="slide" aria-label="3 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="500"
                                                        height="313"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/Maersk-Logo-500x313-1.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo Maersk"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/Maersk-Logo-500x313-1.png 500w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/Maersk-Logo-500x313-1-300x188.png 300w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide03-clone22" role="tabpanel" aria-roledescription="slide" aria-label="4 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="1200"
                                                        height="857"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/cosco@logotyp.us_.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo Cosco Shipping"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/cosco@logotyp.us_.png 1200w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/cosco@logotyp.us_-300x214.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/cosco@logotyp.us_-1024x731.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/cosco@logotyp.us_-768x548.png 768w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide03-clone23" role="tabpanel" aria-roledescription="slide" aria-label="5 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="1450"
                                                        height="350"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/50b7b3c77c77a142b07c8a371bdd487f.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo China Airway"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/50b7b3c77c77a142b07c8a371bdd487f.png 1450w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/50b7b3c77c77a142b07c8a371bdd487f-300x72.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/50b7b3c77c77a142b07c8a371bdd487f-1024x247.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/50b7b3c77c77a142b07c8a371bdd487f-768x185.png 768w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide03-clone24" role="tabpanel" aria-roledescription="slide" aria-label="6 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="1200"
                                                        height="857"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/hmm@logotyp.us_.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo HMM"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/hmm@logotyp.us_.png 1200w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/hmm@logotyp.us_-300x214.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/hmm@logotyp.us_-1024x731.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/hmm@logotyp.us_-768x548.png 768w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide03-clone25" role="tabpanel" aria-roledescription="slide" aria-label="7 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="312"
                                                        height="274"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/z6511022655018_80c884c7eef6e042707b8d38ea531cd3-e1750749147440.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo MSC"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide03-clone26" role="tabpanel" aria-roledescription="slide" aria-label="1 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="2717"
                                                        height="2717"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo ONE"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01.png 2717w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01-300x300.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01-1024x1024.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01-150x150.png 150w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01-768x768.png 768w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01-1536x1536.png 1536w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01-2048x2048.png 2048w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone is-active" id="splide03-clone27" role="tabpanel" aria-roledescription="slide" aria-label="2 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="1340"
                                                        height="838"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/logo-bamboo-airways-inkythuatso-1.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo Bamboo Airway"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/logo-bamboo-airways-inkythuatso-1.png 1340w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/logo-bamboo-airways-inkythuatso-1-300x188.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/logo-bamboo-airways-inkythuatso-1-1024x640.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/logo-bamboo-airways-inkythuatso-1-768x480.png 768w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide03-clone28" role="tabpanel" aria-roledescription="slide" aria-label="3 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="500"
                                                        height="313"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/Maersk-Logo-500x313-1.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo Maersk"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/Maersk-Logo-500x313-1.png 500w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/Maersk-Logo-500x313-1-300x188.png 300w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide03-clone29" role="tabpanel" aria-roledescription="slide" aria-label="4 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="1200"
                                                        height="857"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/cosco@logotyp.us_.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo Cosco Shipping"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/cosco@logotyp.us_.png 1200w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/cosco@logotyp.us_-300x214.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/cosco@logotyp.us_-1024x731.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/cosco@logotyp.us_-768x548.png 768w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide03-clone30" role="tabpanel" aria-roledescription="slide" aria-label="5 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="1450"
                                                        height="350"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/50b7b3c77c77a142b07c8a371bdd487f.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo China Airway"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/50b7b3c77c77a142b07c8a371bdd487f.png 1450w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/50b7b3c77c77a142b07c8a371bdd487f-300x72.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/50b7b3c77c77a142b07c8a371bdd487f-1024x247.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/50b7b3c77c77a142b07c8a371bdd487f-768x185.png 768w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide03-clone31" role="tabpanel" aria-roledescription="slide" aria-label="6 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="1200"
                                                        height="857"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/hmm@logotyp.us_.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo HMM"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/hmm@logotyp.us_.png 1200w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/hmm@logotyp.us_-300x214.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/hmm@logotyp.us_-1024x731.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/hmm@logotyp.us_-768x548.png 768w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide03-clone32" role="tabpanel" aria-roledescription="slide" aria-label="7 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="312"
                                                        height="274"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/z6511022655018_80c884c7eef6e042707b8d38ea531cd3-e1750749147440.jpg"
                                                        className="attachment-full size-full"
                                                        alt="Logo MSC"
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide03-clone33" role="tabpanel" aria-roledescription="slide" aria-label="1 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="2717"
                                                        height="2717"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo ONE"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01.png 2717w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01-300x300.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01-1024x1024.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01-150x150.png 150w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01-768x768.png 768w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01-1536x1536.png 1536w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/ocean-network-express-one-vector-logo-01-2048x2048.png 2048w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone is-active" id="splide03-clone34" role="tabpanel" aria-roledescription="slide" aria-label="2 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="1340"
                                                        height="838"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/logo-bamboo-airways-inkythuatso-1.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo Bamboo Airway"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/logo-bamboo-airways-inkythuatso-1.png 1340w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/logo-bamboo-airways-inkythuatso-1-300x188.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/logo-bamboo-airways-inkythuatso-1-1024x640.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/logo-bamboo-airways-inkythuatso-1-768x480.png 768w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide03-clone35" role="tabpanel" aria-roledescription="slide" aria-label="3 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="500"
                                                        height="313"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/Maersk-Logo-500x313-1.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo Maersk"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/Maersk-Logo-500x313-1.png 500w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/Maersk-Logo-500x313-1-300x188.png 300w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="splide__slide splide__slide--clone" id="splide03-clone36" role="tabpanel" aria-roledescription="slide" aria-label="4 of 7" style={{ marginRight: '24px', width: 'calc(11.1111% - 21.3333px)' }} aria-hidden="true">
                                            <div className="logoSplide-it">
                                                <div className="img">
                                                    <img
                                                        width="1200"
                                                        height="857"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/cosco@logotyp.us_.png"
                                                        className="attachment-full size-full"
                                                        alt="Logo Cosco Shipping"
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/cosco@logotyp.us_.png 1200w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/cosco@logotyp.us_-300x214.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/cosco@logotyp.us_-1024x731.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/cosco@logotyp.us_-768x548.png 768w"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul className="splide__pagination splide__pagination--ltr" role="tablist" aria-label="Select a slide to show">
                                    <li role="presentation">
                                        <button className="splide__pagination__page" type="button" role="tab" aria-controls="splide03-slide01" aria-label="Go to slide 1" tabIndex={-1}></button>
                                    </li>
                                    <li role="presentation">
                                        <button className="splide__pagination__page is-active" type="button" role="tab" aria-controls="splide03-slide02" aria-label="Go to slide 2" aria-selected="true"></button>
                                    </li>
                                    <li role="presentation">
                                        <button className="splide__pagination__page" type="button" role="tab" aria-controls="splide03-slide03" aria-label="Go to slide 3" tabIndex={-1}></button>
                                    </li>
                                    <li role="presentation">
                                        <button className="splide__pagination__page" type="button" role="tab" aria-controls="splide03-slide04" aria-label="Go to slide 4" tabIndex={-1}></button>
                                    </li>
                                    <li role="presentation">
                                        <button className="splide__pagination__page" type="button" role="tab" aria-controls="splide03-slide05" aria-label="Go to slide 5" tabIndex={-1}></button>
                                    </li>
                                    <li role="presentation">
                                        <button className="splide__pagination__page" type="button" role="tab" aria-controls="splide03-slide06" aria-label="Go to slide 6" tabIndex={-1}></button>
                                    </li>
                                    <li role="presentation">
                                        <button className="splide__pagination__page" type="button" role="tab" aria-controls="splide03-slide07" aria-label="Go to slide 7" tabIndex={-1}></button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sec-homes-contact">
                <div className="homes-contact">
                    <div className="recontainer">
                        <div className="homes-contact-flex">
                            <div className="homes-contact-ctn ss-pd">
                                <div className="wrapper">
                                    <div className="head-verti white mb-32">
                                        <div className="line aos-init" data-aos="fade-up-cus">
                                            <h2 className="title title-48 add-class text-verti">Liên hệ với Vietnam Post Logistics</h2>
                                        </div>
                                    </div>
                                    <div className="mainForm">
                                        <div className="wpcf7 js" id="wpcf7-f785-p937-o1" lang="vi" dir="ltr">
                                            <div className="screen-reader-response">
                                                <p role="status" aria-live="polite" aria-atomic="true"></p> <ul></ul>
                                            </div>
                                            <form action="/giai-phap/giai-phap-sea-freight/#wpcf7-f785-p937-o1" method="post" className="wpcf7-form init" aria-label="Contact form" noValidate data-status="init">
                                                <div style={{ display: 'none' }}>
                                                    <input type="hidden" name="_wpcf7" value="785" />
                                                    <input type="hidden" name="_wpcf7_version" value="5.9.8" />
                                                    <input type="hidden" name="_wpcf7_locale" value="vi" />
                                                    <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f785-p937-o1" />
                                                    <input type="hidden" name="_wpcf7_container_post" value="937" />
                                                    <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
                                                </div>
                                                <div className="form-list row">
                                                    <label className="form-ip col per5">
                                                        <span className="text spe">Tên của bạn</span>
                                                        <span className="wpcf7-form-control-wrap" data-name="your-name">
                                                            <input
                                                                size={40}
                                                                maxLength={400}
                                                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                aria-required="true"
                                                                aria-invalid="false"
                                                                placeholder="Nhập Tên của bạn"
                                                                value=""
                                                                type="text"
                                                                name="your-name"
                                                            />
                                                        </span>
                                                    </label>
                                                    <label className="form-ip col per5">
                                                        <span className="text spe">Tên công ty</span>
                                                        <span className="wpcf7-form-control-wrap" data-name="text-679">
                                                            <input
                                                                size={40}
                                                                maxLength={400}
                                                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                aria-required="true"
                                                                aria-invalid="false"
                                                                placeholder="Tên công ty"
                                                                value=""
                                                                type="text"
                                                                name="text-679"
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
                                                                placeholder="Email"
                                                                value=""
                                                                type="email"
                                                                name="your-email"
                                                            />
                                                        </span>
                                                    </label>
                                                    <label className="form-ip col per5">
                                                        <span className="text spe">Số điện thoại</span>
                                                        <span className="wpcf7-form-control-wrap" data-name="tel-328">
                                                            <input
                                                                size={40}
                                                                maxLength={400}
                                                                className="wpcf7-form-control wpcf7-tel wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-tel"
                                                                aria-required="true"
                                                                aria-invalid="false"
                                                                placeholder="Số điện thoại"
                                                                value=""
                                                                type="tel"
                                                                name="tel-328"
                                                            />
                                                        </span>
                                                    </label>
                                                    <label className="form-ip col" htmlFor="id_f_contact_global">
                                                        <span id="wpcf7-694f77fc766d9-wrapper" className="wpcf7-form-control-wrap honeypot-438-wrap" style={{ display: 'none !important', visibility: 'hidden !important' }}>
                                                            <label htmlFor="wpcf7-694f77fc766d9-field" className="hp-message">
                                                                Please leave this field empty.
                                                            </label>
                                                            <input id="wpcf7-694f77fc766d9-field" className="wpcf7-form-control wpcf7-text" type="text" name="honeypot-438" value="" size={40} tabIndex={-1} autoComplete="new-password" />
                                                        </span>
                                                        <div className="btn-box">
                                                            <div className="btn pri">
                                                                <input className="wpcf7-form-control wpcf7-submit has-spinner hidden" id="id_f_contact_global" type="submit" value="Send" />
                                                                <span className="wpcf7-spinner"></span>
                                                                <span className="txt">
                                                                    <span className="txt-inner">Liên hệ tư vấn </span>
                                                                    <span className="txt-icon">
                                                                        <img src="https://vietnampostlogistics.com/template/assets/images/ic-arrow.svg" alt="" />
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="wpcf7-response-output" aria-hidden="true"></div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="homes-contact-img ParaBlock">
                                <div className="img ParaScroll" style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 300px)' }}>
                                    <div className="img-inner">
                                        <img
                                            width="1229"
                                            height="615"
                                            src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/fly.png"
                                            className="attachment-full size-full"
                                            alt="Máy bay, containers"
                                            decoding="async"
                                            loading="lazy"
                                            srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/fly.png 1229w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/fly-300x150.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/fly-1024x512.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/fly-768x384.png 768w"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default SeaFreightPage;