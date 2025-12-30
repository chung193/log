import React from 'react';
import SiteBreadcrumb from '@/components/SiteBreadcrumb';
import SolutionSwiper from '@/components/SolutionSwiper';
import PartnersSection from '@/components/PartnersSection';
import ContactFormSection from '@/components/ContactFormSection';

const InlandLogisticsPage: React.FC = ({ initialLocale = 'en' }) => {
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
        <main className="main page-inland" >
            {/* Banner Section */}
            < div className="bn-big white" >
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
                        <SiteBreadcrumb
                            initialLocale={initialLocale}
                            className=''
                            items={breadcrumbItems[initialLocale as 'vi' | 'en']}
                            currentPage="Giải pháp Kho vận"
                        />
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
            </div >

            {/* Solutions Section */}
            < section className="sec-inland-slide" >
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
                        <SolutionSwiper />
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
            </section >

            {/* Target Customers Section */}
            < section className="sec-inland-cus" >
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
            </section >

            {/* Why Choose Us Section */}
            < section className="sec-inland-why" >
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
            </section >

            <PartnersSection />
            <ContactFormSection />

        </main>
    );
};

export default InlandLogisticsPage;