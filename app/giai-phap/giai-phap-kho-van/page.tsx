'use client';

import React from 'react';
import Breadcrumb from '@/components/SiteBreadcrumb';
import WhyChoose from '@/components/WhyChoose';
import WareHouse from '@/components/WareHouse';
import WareHouseEXP from '@/components/WareHouseEXP';
const ContractLogisticsWarehousingPage = () => {
    return (
        <main className="main page-storage hd-sticky">
            <div className="bn-big white">
                <div className="bn-big-bg">
                    <img
                        width="1728"
                        height="800"
                        src="/images/banner2.jpg"
                        className="attachment-full size-full"
                        alt="Containers xuất nhập khẩu - Vietnam Post Logistics"
                        decoding="async"
                        fetchPriority="high"
                        srcSet="/images/banner2.jpg 1728w, /images/banner2-300x139.jpg 300w, /images/banner2-1024x474.jpg 1024w, /images/banner2-768x356.jpg 768w, /images/banner2-1536x711.jpg 1536w"
                    />
                </div>
                <div className="container">
                    <div className="bn-big-ctn">
                        <Breadcrumb />
                        <h1 className="bn-big-tt add-class text-verti mb-24 is-inview">
                            GIẢI PHÁP KHO VẬN
                        </h1>
                        <div className="bn-count aos-init aos-animate" data-aos="fade-up-cus" data-aos-delay="400">
                            <div className="bn-count-row row gap-res">
                                <div className="bn-count-it col">
                                    <div className="inner">
                                        <div className="num">
                                            <span className="num-txt countNum is-inview">500</span>
                                            <span className="num-sym">K+</span>
                                        </div>
                                        <p className="txt">M2 tổng diện tích kho bãi</p>
                                    </div>
                                </div>
                                <div className="bn-count-it col">
                                    <div className="inner">
                                        <div className="num">
                                            <span className="num-txt countNum is-inview">5</span>
                                            <span className="num-sym">K+</span>
                                        </div>
                                        <p className="txt">Tấn hàng được xử lý trong một ngày</p>
                                    </div>
                                </div>
                                <div className="bn-count-it col">
                                    <div className="inner">
                                        <div className="num">
                                            <span className="num-txt countNum is-inview">16</span>
                                            <span className="num-sym">h</span>
                                        </div>
                                        <p className="txt">Thời gian tối đa xử lý thủ tục hải quan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bn-box aos-init aos-animate" data-aos="fade-up-cus" data-aos-delay="600">
                            <div className="bn-box-row row gap-res">
                                <div className="bn-box-it col">
                                    <div className="inner">
                                        <div className="icon">
                                            <img width="24" height="24" src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-bn1.svg" className="attachment-full size-full" alt="Icon TMĐT" decoding="async" />
                                        </div>
                                        <p className="des">Mô hình quản lý kho vận thông minh.</p>
                                    </div>
                                </div>
                                <div className="bn-box-it col">
                                    <div className="inner">
                                        <div className="icon">
                                            <img width="24" height="24" src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-bn2.svg" className="attachment-full size-full" alt="KẾT NỐI HÀNH TRÌNH" decoding="async" />
                                        </div>
                                        <p className="des">Tiết kiệm chi phí nhờ quy trình tối ưu hoá.</p>
                                    </div>
                                </div>
                                <div className="bn-box-it col">
                                    <div className="inner">
                                        <div className="icon">
                                            <img width="24" height="24" src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-bn3.svg" className="attachment-full size-full" alt="LIÊN KẾT" decoding="async" loading="lazy" />
                                        </div>
                                        <p className="des">Đảm bảo sự hài lòng với dịch vụ đáng tin cậy.</p>
                                    </div>
                                </div>
                                <div className="bn-box-it col">
                                    <div className="inner">
                                        <div className="icon">
                                            <img width="24" height="24" src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-bn4.svg" className="attachment-full size-full" alt="tmđt" decoding="async" loading="lazy" />
                                        </div>
                                        <p className="des">Sự an toàn và bảo mật của khách hàng là ưu tiên hàng đầu.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="sec-store-ser">
                <div className="store-ser">
                    <div className="container">
                        <div className="store-ser-para ss-pd">
                            <div className="store-ser-para-wrap">
                                <p>Mang trong mình vị thế, tầm vóc và khả năng của một <strong>đơn vị Logistics đứng đầu thị trường tại Việt Nam</strong> hiện nay, Vietnam Post Logistics đã và đang mang đến cho Qúy khách hàng những giải pháp kho vận<strong> chất lượng, chuyên nghiệp và đa dạng</strong>.</p>
                            </div>
                        </div>
                    </div>

                    <WareHouse />

                    <div className="store-ser-swiper ss-pd">
                        <div className="container">
                            <div className="store-ser-des">
                                <p>Với kinh nghiệm lâu năm trong ngành cùng hệ thống kho bãi rộng lớn, lên tới 500.000 m2 sàn đặt tại các vị trí đắc địa, thuận lợi cho việc vận chuyển và các hoạt động Logistics như: Hà Nam, Vĩnh Phúc, Hà Nội, Hải Phòng, TP. Hồ Chí Minh,…</p>
                            </div>
                            <div className="swiper row rows-4 gap-res swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                                <div className="swiper-wrapper" id="swiper-wrapper-1000de476b8818929" aria-live="polite">
                                    <div className="swiper-slide col swiper-slide-visible swiper-slide-active" role="group" aria-label="1 / 4">
                                        <div className="store-ser-swiper-it">
                                            <div className="inner">
                                                <div className="img">
                                                    <a className="img-inner" href="https://vietnampostlogistics.com/dich-vu-cho-thue-kho-bai-uy-tin-chat-luong-hang-dau-viet-nam/">
                                                        <img width="286" height="346" src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/storage1.jpg" className="attachment-full size-full" alt="" decoding="async" loading="lazy" srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/storage1.jpg 286w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/storage1-248x300.jpg 248w" />
                                                    </a>
                                                </div>
                                                <div className="info">
                                                    <a className="btn-circle" href="https://vietnampostlogistics.com/dich-vu-cho-thue-kho-bai-uy-tin-chat-luong-hang-dau-viet-nam/">
                                                        <img src="https://vietnampostlogistics.com/template/assets/images/ic-arrow.svg" alt="" />
                                                    </a>
                                                    <p className="info-des">Dịch vụ cho thuê kho bãi</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide col swiper-slide-visible swiper-slide-next" role="group" aria-label="2 / 4">
                                        <div className="store-ser-swiper-it">
                                            <div className="inner">
                                                <div className="img">
                                                    <a className="img-inner" href="https://vietnampostlogistics.com/dich-vu-gia-tri-gia-tang/">
                                                        <img width="286" height="346" src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/storage2.jpg" className="attachment-full size-full" alt="" decoding="async" loading="lazy" srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/storage2.jpg 286w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/storage2-248x300.jpg 248w" />
                                                    </a>
                                                </div>
                                                <div className="info">
                                                    <a className="btn-circle" href="https://vietnampostlogistics.com/dich-vu-gia-tri-gia-tang/">
                                                        <img src="https://vietnampostlogistics.com/template/assets/images/ic-arrow.svg" alt="" />
                                                    </a>
                                                    <p className="info-des">Dịch vụ gia tăng: phân loại, chia chọn và soạn theo đơn hàng, in, dán tem.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide col swiper-slide-visible" role="group" aria-label="3 / 4">
                                        <div className="store-ser-swiper-it">
                                            <div className="inner">
                                                <div className="img">
                                                    <a className="img-inner" href="https://vietnampostlogistics.com/giai-phap-xuat-nhap-khau-tai-kho-va-quan-ly-hang-hoa/">
                                                        <img width="286" height="346" src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/storage3.jpg" className="attachment-full size-full" alt="" decoding="async" loading="lazy" srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/storage3.jpg 286w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/storage3-248x300.jpg 248w" />
                                                    </a>
                                                </div>
                                                <div className="info">
                                                    <a className="btn-circle" href="https://vietnampostlogistics.com/giai-phap-xuat-nhap-khau-tai-kho-va-quan-ly-hang-hoa/">
                                                        <img src="https://vietnampostlogistics.com/template/assets/images/ic-arrow.svg" alt="" />
                                                    </a>
                                                    <p className="info-des">Dịch vụ xuất nhập khẩu tại kho và quản lý hàng hóa.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide col swiper-slide-visible" role="group" aria-label="4 / 4">
                                        <div className="store-ser-swiper-it">
                                            <div className="inner">
                                                <div className="img">
                                                    <a className="img-inner" href="https://vietnampostlogistics.com/dich-vu-hai-quan-cua-vietnam-post-logistics/">
                                                        <img width="286" height="346" src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/storage4.jpg" className="attachment-full size-full" alt="" decoding="async" loading="lazy" srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/storage4.jpg 286w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/storage4-248x300.jpg 248w" />
                                                    </a>
                                                </div>
                                                <div className="info">
                                                    <a className="btn-circle" href="https://vietnampostlogistics.com/dich-vu-hai-quan-cua-vietnam-post-logistics/">
                                                        <img src="https://vietnampostlogistics.com/template/assets/images/ic-arrow.svg" alt="" />
                                                    </a>
                                                    <p className="info-des">Dịch vụ hải quan: thông quan và giám sát hải quan nhập kho.</p>
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

                    <div className="store-ser-time ss-pd-b">
                        <div className="container">
                            <div className="store-ser-time-top">
                                <div className="head-verti mb-32">
                                    <div className="title-head text-verti">
                                        <h3 className="title title-40 add-class text-hori is-inview">
                                            Thời gian xử lý thủ tục hải <br />quan tại kho nhanh nhất thị trường
                                        </h3>
                                    </div>
                                    <div className="line aos-init aos-animate" data-aos="fade-up-cus" data-aos-delay="400">
                                        <div className="desc">
                                            Đảm bảo hàng hóa từ các quốc gia khác về Việt Nam <br />nhanh chóng, thuận tiện.
                                        </div>
                                    </div>
                                </div>
                                <div className="minibox aos-init aos-animate" data-aos="fade-up-cus" data-aos-delay="600">
                                    <div className="icon">
                                        <img width="48" height="48" src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-1.svg" className="attachment-full size-full" alt="Hàng hóa" decoding="async" loading="lazy" />
                                    </div>
                                    <p className="desc">Dưới 16 giờ</p>
                                </div>
                            </div>
                            <div className="store-ser-time-bot aos-init aos-animate" data-aos="fade-right-cus">
                                <div className="img">
                                    <img width="651" height="502" src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/car.png" className="attachment-full size-full" alt="Xe chở container" decoding="async" loading="lazy" srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/car.png 651w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/car-300x231.png 300w" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sec-store-cus">
                <div className="store-cus bg-pri ss-pd">
                    <div className="container">
                        <div className="head-verti mb-32 center white">
                            <h1 className="title title-48 add-class text-verti is-inview">Giải pháp toàn diện dành cho</h1>
                        </div>
                        <div className="store-cus-row row">
                            <div className="store-cus-l col">
                                <div className="wrapper">
                                    <div className="store-cus-it">
                                        <img src="https://vietnampostlogistics.com/template/assets/images/sao.svg" alt="" />
                                        <p className="txt">Các nhà phân phối, bán lẻ.</p>
                                    </div>
                                    <div className="store-cus-it">
                                        <img src="https://vietnampostlogistics.com/template/assets/images/sao.svg" alt="" />
                                        <p className="txt">Các doanh nghiệp sản xuất, xuất nhập khẩu.</p>
                                    </div>
                                    <div className="store-cus-it">
                                        <img src="https://vietnampostlogistics.com/template/assets/images/sao.svg" alt="" />
                                        <p className="txt">Các doanh nghiệp logistics.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="store-cus-r col">
                                <div className="wrapper">
                                    <div className="img">
                                        <div className="img-inner">
                                            <img width="864" height="748" src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/pallet.png" className="attachment-full size-full" alt="" decoding="async" loading="lazy" srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/pallet.png 864w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/pallet-300x260.png 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/pallet-768x665.png 768w" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <WhyChoose />
            <WareHouseEXP />

            <section className="sec-store-imp">
                <div className="store-imp ss-pd">
                    <div className="container">
                        <div className="head-verti mb-32 center">
                            <h1 className="title title-48 add-class text-verti is-inview">Các ngành trọng điểm</h1>
                        </div>
                        <div className="store-imp-img">
                            <img width="1500" height="657" src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/Hinh-anh-gia-tri-gia-tang-e1745555544903.jpg" className="attachment-full size-full" alt="Quy trình hoạt động kho ngoại quan tại Vietnam Post Logistics" decoding="async" loading="lazy" srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/04/Hinh-anh-gia-tri-gia-tang-e1745555544903.jpg 1500w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/Hinh-anh-gia-tri-gia-tang-e1745555544903-300x131.jpg 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/Hinh-anh-gia-tri-gia-tang-e1745555544903-1024x449.jpg 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/04/Hinh-anh-gia-tri-gia-tang-e1745555544903-768x336.jpg 768w" />
                        </div>
                        <div className="store-imp-row row gap-res">
                            <div className="col">
                                <div className="store-imp-it">
                                    <div className="inner">
                                        <div className="img">
                                            <div className="icon">
                                                <img width="100" height="100" src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-import1.svg" className="attachment-full size-full" alt="Công nghệ" decoding="async" loading="lazy" />
                                            </div>
                                            <p className="txt">Technology</p>
                                        </div>
                                        <div className="info">
                                            <div className="desc">
                                                <div className="mona-content">
                                                    {/* Nội dung giữ nguyên */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="store-imp-it">
                                    <div className="inner">
                                        <div className="img">
                                            <div className="icon">
                                                <img width="100" height="100" src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-import2.svg" className="attachment-full size-full" alt="Hang thực phẩm" decoding="async" loading="lazy" />
                                            </div>
                                            <p className="txt">FMCG</p>
                                        </div>
                                        <div className="info">
                                            <div className="desc">
                                                <div className="mona-content">
                                                    {/* Nội dung giữ nguyên */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="store-imp-it">
                                    <div className="inner">
                                        <div className="img">
                                            <div className="icon">
                                                <img width="100" height="100" src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-import1.svg" className="attachment-full size-full" alt="Công nghệ" decoding="async" loading="lazy" />
                                            </div>
                                            <p className="txt">Ecommerce</p>
                                        </div>
                                        <div className="info">
                                            <div className="desc">
                                                <div className="mona-content">
                                                    {/* Nội dung giữ nguyên */}
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
        </main>
    );
};

export default ContractLogisticsWarehousingPage;