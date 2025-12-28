import React from 'react';

const InlandLogisticsPage: React.FC = () => {
    return (
        <main className="main page-inland">
            {/* Banner Section */}
            <div className="bn-big white">
                <div className="bn-big-bg">
                    <img
                        width="1920"
                        height="1332"
                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/mde.jpg"
                        className="attachment-full size-full"
                        alt=""
                        decoding="async"
                        fetchpriority="high"
                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/mde.jpg 1920w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/mde-300x208.jpg 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/mde-1024x710.jpg 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/mde-768x533.jpg 768w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/mde-1536x1066.jpg 1536w"
                    />
                </div>
                <div className="container">
                    <div className="bn-big-ctn">
                        {/* Breadcrumb */}
                        <div className="breadcrumb">
                            <div className="breadcrumb-wrapper">
                                <ul className="breadcrumb-list">
                                    <li className="breadcrumb-item aos-init aos-animate" data-aos="fade-left">
                                        <a href="https://vietnampostlogistics.com/" className="breadcrumb-link">Trang chủ</a>
                                    </li>
                                    <li className="breadcrumb-item aos-init aos-animate" data-aos="fade-left">
                                        <a href="" className="breadcrumb-link">Giải pháp</a>
                                    </li>
                                    <li className="breadcrumb-item aos-init aos-animate" data-aos="fade-left">
                                        <a href="" className="breadcrumb-link">Logistics Nội địa</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Main Title */}
                        <h1 className="bn-big-tt add-class text-verti mb-24 is-inview">
                            Giải pháp <br /> Logistics Nội địa
                        </h1>

                        {/* Stats Counter */}
                        <div className="bn-count aos-init aos-animate" data-aos="fade-up-cus" data-aos-delay="400">
                            <div className="bn-count-row row gap-res">
                                <div className="bn-count-it col">
                                    <div className="inner">
                                        <div className="num">
                                            <span className="num-txt countNum is-inview">12</span>
                                            <span className="num-sym">K+</span>
                                        </div>
                                        <p className="txt">Chuyến được vận chuyển trong năm 2024.</p>
                                    </div>
                                </div>
                                <div className="bn-count-it col">
                                    <div className="inner">
                                        <div className="num">
                                            <span className="num-txt countNum is-inview">1</span>
                                            <span className="num-sym">K+</span>
                                        </div>
                                        <p className="txt">Tấn hàng được vận chuyển trong 1 ngày</p>
                                    </div>
                                </div>
                                <div className="bn-count-it col">
                                    <div className="inner">
                                        <div className="num">
                                            <span className="num-txt countNum is-inview">99</span>
                                            <span className="num-sym">%</span>
                                        </div>
                                        <p className="txt">Chuyến vận tải đúng lịch trình và an toàn tuyệt đối.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Features Box */}
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
                                        <p className="des">Tiết kiệm chi phí nhờ quy trình tối ưu hoá.</p>
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
                                        <p className="des">Hệ thống theo dõi hành trình xe GPS 24/7.</p>
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
                                        <p className="des">Sự an toàn và bảo mật của khách hàng là ưu tiên hàng đầu.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Solutions Section */}
            <section className="sec-inland-slide">
                <div className="inland-slide ss-pd">
                    <div className="container">
                        <div className="head-verti mb-32 center">
                            <div className="title-head text-verti">
                                <h3
                                    className="title title-40 add-class text-hori words chars splitting is-inview"
                                    data-spl="data-spl"
                                    style={{ "--word-total": 6, "--char-total": 23 } as React.CSSProperties}
                                >
                                    <span className="word" data-word="Cung" style={{ "--word-index": 0 } as React.CSSProperties}>
                                        <span className="char" data-char="C" style={{ "--char-index": 0 } as React.CSSProperties}>C</span>
                                        <span className="char" data-char="u" style={{ "--char-index": 1 } as React.CSSProperties}>u</span>
                                        <span className="char" data-char="n" style={{ "--char-index": 2 } as React.CSSProperties}>n</span>
                                        <span className="char" data-char="g" style={{ "--char-index": 3 } as React.CSSProperties}>g</span>
                                    </span>
                                    <span className="whitespace"> </span>
                                    <span className="word" data-word="cấp" style={{ "--word-index": 1 } as React.CSSProperties}>
                                        <span className="char" data-char="c" style={{ "--char-index": 4 } as React.CSSProperties}>c</span>
                                        <span className="char" data-char="ấ" style={{ "--char-index": 5 } as React.CSSProperties}>ấ</span>
                                        <span className="char" data-char="p" style={{ "--char-index": 6 } as React.CSSProperties}>p</span>
                                    </span>
                                    <span className="whitespace"> </span>
                                    <span className="word" data-word="giải" style={{ "--word-index": 2 } as React.CSSProperties}>
                                        <span className="char" data-char="g" style={{ "--char-index": 7 } as React.CSSProperties}>g</span>
                                        <span className="char" data-char="i" style={{ "--char-index": 8 } as React.CSSProperties}>i</span>
                                        <span className="char" data-char="ả" style={{ "--char-index": 9 } as React.CSSProperties}>ả</span>
                                        <span className="char" data-char="i" style={{ "--char-index": 10 } as React.CSSProperties}>i</span>
                                    </span>
                                    <span className="whitespace"> </span>
                                    <span className="word" data-word="pháp" style={{ "--word-index": 3 } as React.CSSProperties}>
                                        <span className="char" data-char="p" style={{ "--char-index": 11 } as React.CSSProperties}>p</span>
                                        <span className="char" data-char="h" style={{ "--char-index": 12 } as React.CSSProperties}>h</span>
                                        <span className="char" data-char="á" style={{ "--char-index": 13 } as React.CSSProperties}>á</span>
                                        <span className="char" data-char="p" style={{ "--char-index": 14 } as React.CSSProperties}>p</span>
                                    </span>
                                    <span className="whitespace"> </span>
                                    <span className="word" data-word="toàn" style={{ "--word-index": 4 } as React.CSSProperties}>
                                        <span className="char" data-char="t" style={{ "--char-index": 15 } as React.CSSProperties}>t</span>
                                        <span className="char" data-char="o" style={{ "--char-index": 16 } as React.CSSProperties}>o</span>
                                        <span className="char" data-char="à" style={{ "--char-index": 17 } as React.CSSProperties}>à</span>
                                        <span className="char" data-char="n" style={{ "--char-index": 18 } as React.CSSProperties}>n</span>
                                    </span>
                                    <span className="whitespace"> </span>
                                    <span className="word" data-word="diện" style={{ "--word-index": 5 } as React.CSSProperties}>
                                        <span className="char" data-char="d" style={{ "--char-index": 19 } as React.CSSProperties}>d</span>
                                        <span className="char" data-char="i" style={{ "--char-index": 20 } as React.CSSProperties}>i</span>
                                        <span className="char" data-char="ệ" style={{ "--char-index": 21 } as React.CSSProperties}>ệ</span>
                                        <span className="char" data-char="n" style={{ "--char-index": 22 } as React.CSSProperties}>n</span>
                                    </span>
                                </h3>
                            </div>
                            <div className="line aos-init aos-animate" data-aos="fade-up-cus" data-aos-delay="400">
                                <div className="desc">
                                    <p>Hiện tại, Vietnam Post Logistics đang cung cấp các tuyến vận chuyển nội địa khắp Việt Nam với khả năng xử lý nhanh chóng, an toàn bằng đội xe container và xa tải hiện đại đáp ứng mọi nhu cầu vận chuyển của khách hàng.</p>
                                </div>
                            </div>
                        </div>

                        {/* Solutions Swiper */}
                        <div className="store-ser-swiper ss-pd-b">
                            <div className="swiper row rows-3 gap-res swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                                <div className="swiper-wrapper" aria-live="polite">
                                    {/* Slide 1 */}
                                    <div className="swiper-slide col swiper-slide-visible swiper-slide-active" role="group" aria-label="1 / 3">
                                        <div className="store-ser-swiper-it">
                                            <div className="inner">
                                                <div className="img">
                                                    <a className="img-inner" href="https://vietnampostlogistics.com/dich-vu-van-chuyen-noi-dia/">
                                                        <img
                                                            width="286"
                                                            height="346"
                                                            src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/storage1.jpg"
                                                            className="attachment-full size-full"
                                                            alt=""
                                                            decoding="async"
                                                            loading="lazy"
                                                            srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/storage1.jpg 286w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/storage1-248x300.jpg 248w"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="info">
                                                    <a className="btn-circle" href="https://vietnampostlogistics.com/dich-vu-van-chuyen-noi-dia/">
                                                        <img src="https://vietnampostlogistics.com/template/assets/images/ic-arrow.svg" alt="" />
                                                    </a>
                                                    <p className="info-des">Vận chuyển hàng hóa từ kho đến các điểm giao hàng trong nước.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Slide 2 */}
                                    <div className="swiper-slide col swiper-slide-visible swiper-slide-next" role="group" aria-label="2 / 3">
                                        <div className="store-ser-swiper-it">
                                            <div className="inner">
                                                <div className="img">
                                                    <a className="img-inner" href="https://vietnampostlogistics.com/van-chuyen-xuyen-bien-gioi-asean/">
                                                        <img
                                                            width="286"
                                                            height="346"
                                                            src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/storage2.jpg"
                                                            className="attachment-full size-full"
                                                            alt=""
                                                            decoding="async"
                                                            loading="lazy"
                                                            srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/storage2.jpg 286w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/storage2-248x300.jpg 248w"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="info">
                                                    <a className="btn-circle" href="https://vietnampostlogistics.com/van-chuyen-xuyen-bien-gioi-asean/">
                                                        <img src="https://vietnampostlogistics.com/template/assets/images/ic-arrow.svg" alt="" />
                                                    </a>
                                                    <p className="info-des">Vận chuyển xuyên biên giới qua các nước trong khu vực ASEAN.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Slide 3 */}
                                    <div className="swiper-slide col swiper-slide-visible" role="group" aria-label="3 / 3">
                                        <div className="store-ser-swiper-it">
                                            <div className="inner">
                                                <div className="img">
                                                    <a className="img-inner" href="https://vietnampostlogistics.com/giai-phap-van-tai-duong-bo-da-dang-linh-hoat-theo-yeu-cau/">
                                                        <img
                                                            width="286"
                                                            height="346"
                                                            src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/storage3.jpg"
                                                            className="attachment-full size-full"
                                                            alt=""
                                                            decoding="async"
                                                            loading="lazy"
                                                            srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/storage3.jpg 286w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/storage3-248x300.jpg 248w"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="info">
                                                    <a className="btn-circle" href="https://vietnampostlogistics.com/giai-phap-van-tai-duong-bo-da-dang-linh-hoat-theo-yeu-cau/">
                                                        <img src="https://vietnampostlogistics.com/template/assets/images/ic-arrow.svg" alt="" />
                                                    </a>
                                                    <p className="info-des">Cung cấp giải pháp vận tải đường bộ đa dạng, linh hoạt theo yêu cầu của khách hàng.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                            </div>
                            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-lock">
                                <span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex={0} role="button" aria-label="Go to slide 1" aria-current="true"></span>
                            </div>
                        </div>
                    </div>

                    {/* Advantages Section with Background Image */}
                    <div className="inland-xo">
                        <div className="imgFull">
                            <div className="imgFull-inner">
                                <img
                                    width="1914"
                                    height="661"
                                    src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/xctn2-min.jpg"
                                    className="attachment-full size-full"
                                    alt=""
                                    decoding="async"
                                    loading="lazy"
                                    srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/xctn2-min.jpg 1914w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/xctn2-min-300x104.jpg 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/xctn2-min-1024x354.jpg 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/xctn2-min-768x265.jpg 768w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/xctn2-min-1536x530.jpg 1536w"
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
                                            style={{ "--word-total": 5, "--char-total": 17 } as React.CSSProperties}
                                        >
                                            <span className="word" data-word="Ưu" style={{ "--word-index": 0 } as React.CSSProperties}>
                                                <span className="char" data-char="Ư" style={{ "--char-index": 0 } as React.CSSProperties}>Ư</span>
                                                <span className="char" data-char="u" style={{ "--char-index": 1 } as React.CSSProperties}>u</span>
                                            </span>
                                            <span className="whitespace"> </span>
                                            <span className="word" data-word="điểm" style={{ "--word-index": 1 } as React.CSSProperties}>
                                                <span className="char" data-char="đ" style={{ "--char-index": 2 } as React.CSSProperties}>đ</span>
                                                <span className="char" data-char="i" style={{ "--char-index": 3 } as React.CSSProperties}>i</span>
                                                <span className="char" data-char="ể" style={{ "--char-index": 4 } as React.CSSProperties}>ể</span>
                                                <span className="char" data-char="m" style={{ "--char-index": 5 } as React.CSSProperties}>m</span>
                                            </span>
                                            <span className="whitespace"> </span>
                                            <span className="word" data-word="của" style={{ "--word-index": 2 } as React.CSSProperties}>
                                                <span className="char" data-char="c" style={{ "--char-index": 6 } as React.CSSProperties}>c</span>
                                                <span className="char" data-char="ủ" style={{ "--char-index": 7 } as React.CSSProperties}>ủ</span>
                                                <span className="char" data-char="a" style={{ "--char-index": 8 } as React.CSSProperties}>a</span>
                                            </span>
                                            <span className="whitespace"> </span>
                                            <span className="word" data-word="giải" style={{ "--word-index": 3 } as React.CSSProperties}>
                                                <span className="char" data-char="g" style={{ "--char-index": 9 } as React.CSSProperties}>g</span>
                                                <span className="char" data-char="i" style={{ "--char-index": 10 } as React.CSSProperties}>i</span>
                                                <span className="char" data-char="ả" style={{ "--char-index": 11 } as React.CSSProperties}>ả</span>
                                                <span className="char" data-char="i" style={{ "--char-index": 12 } as React.CSSProperties}>i</span>
                                            </span>
                                            <span className="whitespace"> </span>
                                            <span className="word" data-word="pháp" style={{ "--word-index": 4 } as React.CSSProperties}>
                                                <span className="char" data-char="p" style={{ "--char-index": 13 } as React.CSSProperties}>p</span>
                                                <span className="char" data-char="h" style={{ "--char-index": 14 } as React.CSSProperties}>h</span>
                                                <span className="char" data-char="á" style={{ "--char-index": 15 } as React.CSSProperties}>á</span>
                                                <span className="char" data-char="p" style={{ "--char-index": 16 } as React.CSSProperties}>p</span>
                                            </span>
                                        </h3>
                                    </div>
                                </div>

                                {/* Advantages List */}
                                <div className="inland-xo-list row gap-res rows-3 listEven">
                                    {/* Advantage 1 */}
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
                                            <div className="des">Đội xe container và xe tải hiện đại, được bảo dưỡng định kỳ để đảm bảo an toàn.</div>
                                        </div>
                                    </div>

                                    {/* Advantage 2 */}
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
                                            <div className="des">Mạng lưới vận chuyển rộng khắp, đáp ứng nhanh các yêu cầu vận tải.</div>
                                        </div>
                                    </div>

                                    {/* Advantage 3 */}
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
                                            <div className="des">Hỗ trợ khách hàng trong việc tối ưu hóa lộ trình và chi phí vận chuyển.</div>
                                        </div>
                                    </div>

                                    {/* Advantage 4 */}
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
                                            <div className="des">Dịch vụ linh hoạt với khả năng vận chuyển đa dạng các loại hàng hóa từ hàng tiêu dùng, công nghiệp đến hàng hóa đặc biệt.</div>
                                        </div>
                                    </div>

                                    {/* Advantage 5 */}
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
                                            <div className="des">Dịch vụ có hỗ trợ hệ thống TMS tích hợp.</div>
                                        </div>
                                    </div>

                                    {/* Advantage 6 */}
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
                                            <div className="des">KHÁM PHÁ THÊM</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Target Customers Section */}
            <section className="sec-inland-cus">
                <div className="inland-cus ss-pd-t">
                    <div className="container">
                        <div className="head-verti mb-32 center white">
                            <div className="title-head text-verti">
                                <h3
                                    className="title title-40 add-class text-hori words chars splitting"
                                    data-spl="data-spl"
                                    style={{ "--word-total": 4, "--char-total": 15 } as React.CSSProperties}
                                >
                                    <span className="word" data-word="Giải" style={{ "--word-index": 0 } as React.CSSProperties}>
                                        <span className="char" data-char="G" style={{ "--char-index": 0 } as React.CSSProperties}>G</span>
                                        <span className="char" data-char="i" style={{ "--char-index": 1 } as React.CSSProperties}>i</span>
                                        <span className="char" data-char="ả" style={{ "--char-index": 2 } as React.CSSProperties}>ả</span>
                                        <span className="char" data-char="i" style={{ "--char-index": 3 } as React.CSSProperties}>i</span>
                                    </span>
                                    <span className="whitespace"> </span>
                                    <span className="word" data-word="pháp" style={{ "--word-index": 1 } as React.CSSProperties}>
                                        <span className="char" data-char="p" style={{ "--char-index": 4 } as React.CSSProperties}>p</span>
                                        <span className="char" data-char="h" style={{ "--char-index": 5 } as React.CSSProperties}>h</span>
                                        <span className="char" data-char="á" style={{ "--char-index": 6 } as React.CSSProperties}>á</span>
                                        <span className="char" data-char="p" style={{ "--char-index": 7 } as React.CSSProperties}>p</span>
                                    </span>
                                    <span className="whitespace"> </span>
                                    <span className="word" data-word="dành" style={{ "--word-index": 2 } as React.CSSProperties}>
                                        <span className="char" data-char="d" style={{ "--char-index": 8 } as React.CSSProperties}>d</span>
                                        <span className="char" data-char="à" style={{ "--char-index": 9 } as React.CSSProperties}>à</span>
                                        <span className="char" data-char="n" style={{ "--char-index": 10 } as React.CSSProperties}>n</span>
                                        <span className="char" data-char="h" style={{ "--char-index": 11 } as React.CSSProperties}>h</span>
                                    </span>
                                    <span className="whitespace"> </span>
                                    <span className="word" data-word="cho" style={{ "--word-index": 3 } as React.CSSProperties}>
                                        <span className="char" data-char="c" style={{ "--char-index": 12 } as React.CSSProperties}>c</span>
                                        <span className="char" data-char="h" style={{ "--char-index": 13 } as React.CSSProperties}>h</span>
                                        <span className="char" data-char="o" style={{ "--char-index": 14 } as React.CSSProperties}>o</span>
                                    </span>
                                </h3>
                            </div>
                        </div>

                        <div className="inland-cus-list row rows-3">
                            {/* Customer 1 */}
                            <div className="col">
                                <div className="inland-cus-it">
                                    <img src="https://vietnampostlogistics.com/template/assets/images/sao.svg" alt="" />
                                    <p className="text">
                                        <p><strong>Doanh nghiệp sản xuất và kinh doanh</strong> hàng hóa quy mô lớn trong nước.</p>
                                    </p>
                                </div>
                            </div>

                            {/* Customer 2 */}
                            <div className="col">
                                <div className="inland-cus-it">
                                    <img src="https://vietnampostlogistics.com/template/assets/images/sao.svg" alt="" />
                                    <p className="text">
                                        <p>Các <strong>doanh nghiệp xuất nhập khẩu</strong> cần vận chuyển hàng hóa qua biên giới.</p>
                                    </p>
                                </div>
                            </div>

                            {/* Customer 3 */}
                            <div className="col">
                                <div className="inland-cus-it">
                                    <img src="https://vietnampostlogistics.com/template/assets/images/sao.svg" alt="" />
                                    <p className="text">
                                        <p><strong>Các công ty logistics</strong> có nhu cầu kết nối chuỗi cung ứng.</p>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Background Image */}
                    <div className="imgFull">
                        <div className="imgFull-inner">
                            <img
                                width="1728"
                                height="592"
                                src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/imgContainer.png"
                                className="attachment-full size-full"
                                alt=""
                                decoding="async"
                                loading="lazy"
                                srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/imgContainer.png 1728w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/imgContainer-300x103.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/imgContainer-1024x351.png 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/imgContainer-768x263.png 768w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/imgContainer-1536x526.png 1536w"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="sec-inland-why">
                <div className="inland-why ss-pd">
                    <div className="container">
                        <div className="head-hori mb-32">
                            <div className="title-head text-verti">
                                <h3
                                    className="title title-40 add-class text-hori words chars splitting"
                                    data-spl="data-spl"
                                    style={{ "--word-total": 6, "--char-total": 20 } as React.CSSProperties}
                                >
                                    <span className="word" data-word="Vì" style={{ "--word-index": 0 } as React.CSSProperties}>
                                        <span className="char" data-char="V" style={{ "--char-index": 0 } as React.CSSProperties}>V</span>
                                        <span className="char" data-char="ì" style={{ "--char-index": 1 } as React.CSSProperties}>ì</span>
                                    </span>
                                    <span className="whitespace"> </span>
                                    <span className="word" data-word="sao" style={{ "--word-index": 1 } as React.CSSProperties}>
                                        <span className="char" data-char="s" style={{ "--char-index": 2 } as React.CSSProperties}>s</span>
                                        <span className="char" data-char="a" style={{ "--char-index": 3 } as React.CSSProperties}>a</span>
                                        <span className="char" data-char="o" style={{ "--char-index": 4 } as React.CSSProperties}>o</span>
                                    </span>
                                    <span className="whitespace"> </span>
                                    <span className="word" data-word="nên" style={{ "--word-index": 2 } as React.CSSProperties}>
                                        <span className="char" data-char="n" style={{ "--char-index": 5 } as React.CSSProperties}>n</span>
                                        <span className="char" data-char="ê" style={{ "--char-index": 6 } as React.CSSProperties}>ê</span>
                                        <span className="char" data-char="n" style={{ "--char-index": 7 } as React.CSSProperties}>n</span>
                                    </span>
                                    <span className="whitespace"> </span>
                                    <span className="word" data-word="chọn" style={{ "--word-index": 3 } as React.CSSProperties}>
                                        <span className="char" data-char="c" style={{ "--char-index": 8 } as React.CSSProperties}>c</span>
                                        <span className="char" data-char="h" style={{ "--char-index": 9 } as React.CSSProperties}>h</span>
                                        <span className="char" data-char="ọ" style={{ "--char-index": 10 } as React.CSSProperties}>ọ</span>
                                        <span className="char" data-char="n" style={{ "--char-index": 11 } as React.CSSProperties}>n</span>
                                    </span>
                                    <span className="whitespace"> </span>
                                    <span className="word" data-word="chúng" style={{ "--word-index": 4 } as React.CSSProperties}>
                                        <span className="char" data-char="c" style={{ "--char-index": 12 } as React.CSSProperties}>c</span>
                                        <span className="char" data-char="h" style={{ "--char-index": 13 } as React.CSSProperties}>h</span>
                                        <span className="char" data-char="ú" style={{ "--char-index": 14 } as React.CSSProperties}>ú</span>
                                        <span className="char" data-char="n" style={{ "--char-index": 15 } as React.CSSProperties}>n</span>
                                        <span className="char" data-char="g" style={{ "--char-index": 16 } as React.CSSProperties}>g</span>
                                    </span>
                                    <span className="whitespace"> </span>
                                    <span className="word" data-word="tôi" style={{ "--word-index": 5 } as React.CSSProperties}>
                                        <span className="char" data-char="t" style={{ "--char-index": 17 } as React.CSSProperties}>t</span>
                                        <span className="char" data-char="ô" style={{ "--char-index": 18 } as React.CSSProperties}>ô</span>
                                        <span className="char" data-char="i" style={{ "--char-index": 19 } as React.CSSProperties}>i</span>
                                    </span>
                                </h3>
                            </div>
                        </div>

                        <div className="inland-why-row row">
                            {/* Left Column - Image */}
                            <div className="inland-why-l col">
                                <div className="wrapper">
                                    <div className="img">
                                        <img
                                            width="954"
                                            height="1226"
                                            src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/axctn-1.jpg"
                                            className="attachment-full size-full"
                                            alt=""
                                            decoding="async"
                                            loading="lazy"
                                            srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/axctn-1.jpg 954w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/axctn-1-233x300.jpg 233w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/axctn-1-797x1024.jpg 797w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/axctn-1-768x987.jpg 768w"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Reasons */}
                            <div className="inland-why-r col">
                                <div className="wrapper">
                                    <div className="store-why-list row">
                                        {/* Reason 1 */}
                                        <div className="col">
                                            <div className="store-why-it">
                                                <div className="icon-item">
                                                    <div className="icon">
                                                        <img
                                                            width="101"
                                                            height="100"
                                                            src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/icon-car.svg"
                                                            className="attachment-full size-full"
                                                            alt=""
                                                            decoding="async"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <div className="ctn">
                                                        <p className="tt">Đảm bảo hàng hóa được giao đúng thời gian, đúng địa điểm.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Reason 2 */}
                                        <div className="col">
                                            <div className="store-why-it">
                                                <div className="icon-item">
                                                    <div className="icon">
                                                        <img
                                                            width="100"
                                                            height="100"
                                                            src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-tag.svg"
                                                            className="attachment-full size-full"
                                                            alt="tag"
                                                            decoding="async"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <div className="ctn">
                                                        <p className="tt">Giảm chi phí lưu kho nhờ khả năng vận chuyển nhanh chóng.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Reason 3 */}
                                        <div className="col">
                                            <div className="store-why-it">
                                                <div className="icon-item">
                                                    <div className="icon">
                                                        <img
                                                            width="100"
                                                            height="100"
                                                            src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-hand.svg"
                                                            className="attachment-full size-full"
                                                            alt="Bắt tay"
                                                            decoding="async"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <div className="ctn">
                                                        <p className="tt">Cải thiện chuỗi cung ứng và hiệu quả logistics tổng thể.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Reason 4 */}
                                        <div className="col">
                                            <div className="store-why-it">
                                                <div className="icon-item">
                                                    <div className="icon">
                                                        <img
                                                            width="100"
                                                            height="100"
                                                            src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-increase.svg"
                                                            className="attachment-full size-full"
                                                            alt="vận hành phát triển"
                                                            decoding="async"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <div className="ctn">
                                                        <p className="tt">Đội ngũ lái xe chuyên nghiệp và giàu kinh nghiệm.</p>
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

            {/* Associations Section */}
            <section className="sec-homes-splide">
                <div className="homes-splide">
                    <div className="homes-splide-block">
                        <div className="container">
                            <div className="head-verti center">
                                <div className="line aos-init" data-aos="fade-up-cus">
                                    <h2 className="title title-48 add-class text-verti">Các hiệp hội tham gia</h2>
                                </div>
                            </div>
                        </div>

                        {/* Associations Slider */}
                        <div className="logoSplide">
                            <div className="splide splide--loop splide--ltr splide--draggable is-active is-initialized" id="splide01" role="region" aria-roledescription="carousel">
                                {/* Slider content - Simplified for TSX */}
                                <div className="splide__track" id="splide01-track" aria-live="off" aria-atomic="true">
                                    <div className="splide__list" id="splide01-list" role="presentation">
                                        {/* Association 1 */}
                                        <div className="splide__slide" role="tabpanel" aria-roledescription="slide">
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

                                        {/* Association 2 */}
                                        <div className="splide__slide" role="tabpanel" aria-roledescription="slide">
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

                                        {/* Association 3 */}
                                        <div className="splide__slide" role="tabpanel" aria-roledescription="slide">
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

                                        {/* Association 4 */}
                                        <div className="splide__slide" role="tabpanel" aria-roledescription="slide">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Partners Section */}
                    <div className="homes-splide-block">
                        <div className="container">
                            <div className="head-verti center">
                                <div className="line aos-init" data-aos="fade-up-cus">
                                    <h2 className="title title-48 add-class text-verti">Mạng lưới đối tác</h2>
                                </div>
                            </div>
                        </div>

                        {/* Partners Slider 1 */}
                        <div className="logoSplide">
                            <div className="splide splide--loop splide--rtl splide--draggable is-active is-initialized" id="splide02" role="region" aria-roledescription="carousel">
                                <div className="splide__track" id="splide02-track" aria-live="off" aria-atomic="true">
                                    <div className="splide__list" id="splide02-list" role="presentation">
                                        {/* Partner 1 */}
                                        <div className="splide__slide" role="tabpanel" aria-roledescription="slide">
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

                                        {/* Partner 2 */}
                                        <div className="splide__slide" role="tabpanel" aria-roledescription="slide">
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

                                        {/* Partner 3 */}
                                        <div className="splide__slide" role="tabpanel" aria-roledescription="slide">
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

                                        {/* Partner 4 */}
                                        <div className="splide__slide" role="tabpanel" aria-roledescription="slide">
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

                                        {/* Partner 5 */}
                                        <div className="splide__slide" role="tabpanel" aria-roledescription="slide">
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

                                        {/* Partner 6 */}
                                        <div className="splide__slide" role="tabpanel" aria-roledescription="slide">
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
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Partners Slider 2 */}
                        <div className="logoSplide">
                            <div className="splide splide--loop splide--ltr splide--draggable is-active is-initialized" id="splide03" role="region" aria-roledescription="carousel">
                                <div className="splide__track" id="splide03-track" aria-live="off" aria-atomic="true">
                                    <div className="splide__list" id="splide03-list" role="presentation">
                                        {/* Partner 7 */}
                                        <div className="splide__slide" role="tabpanel" aria-roledescription="slide">
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

                                        {/* Partner 8 */}
                                        <div className="splide__slide" role="tabpanel" aria-roledescription="slide">
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

                                        {/* Partner 9 */}
                                        <div className="splide__slide" role="tabpanel" aria-roledescription="slide">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="sec-homes-contact">
                <div className="homes-contact">
                    <div className="recontainer">
                        <div className="homes-contact-flex">
                            {/* Contact Form */}
                            <div className="homes-contact-ctn ss-pd">
                                <div className="wrapper">
                                    <div className="head-verti white mb-32">
                                        <div className="line aos-init" data-aos="fade-up-cus">
                                            <h2 className="title title-48 add-class text-verti">Liên hệ với Vietnam Post Logistics</h2>
                                        </div>
                                    </div>

                                    <div className="mainForm">
                                        <form className="wpcf7-form" aria-label="Contact form">
                                            <div className="form-list row">
                                                {/* Name */}
                                                <label className="form-ip col per5">
                                                    <span className="text spe">Tên của bạn</span>
                                                    <input
                                                        type="text"
                                                        className="wpcf7-form-control"
                                                        placeholder="Nhập Tên của bạn"
                                                        aria-required="true"
                                                    />
                                                </label>

                                                {/* Company */}
                                                <label className="form-ip col per5">
                                                    <span className="text spe">Tên công ty</span>
                                                    <input
                                                        type="text"
                                                        className="wpcf7-form-control"
                                                        placeholder="Tên công ty"
                                                        aria-required="true"
                                                    />
                                                </label>

                                                {/* Email */}
                                                <label className="form-ip col per5">
                                                    <span className="text spe">Email</span>
                                                    <input
                                                        type="email"
                                                        className="wpcf7-form-control"
                                                        placeholder="Email"
                                                        aria-required="true"
                                                    />
                                                </label>

                                                {/* Phone */}
                                                <label className="form-ip col per5">
                                                    <span className="text spe">Số điện thoại</span>
                                                    <input
                                                        type="tel"
                                                        className="wpcf7-form-control"
                                                        placeholder="Số điện thoại"
                                                        aria-required="true"
                                                    />
                                                </label>

                                                {/* Submit Button */}
                                                <label className="form-ip col">
                                                    <div className="btn-box">
                                                        <div className="btn pri">
                                                            <button type="submit" className="wpcf7-form-control wpcf7-submit">
                                                                <span className="txt">
                                                                    <span className="txt-inner">Liên hệ tư vấn </span>
                                                                    <span className="txt-icon">
                                                                        <img src="https://vietnampostlogistics.com/template/assets/images/ic-arrow.svg" alt="" />
                                                                    </span>
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Image */}
                            <div className="homes-contact-img ParaBlock">
                                <div className="img ParaScroll">
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

export default InlandLogisticsPage;