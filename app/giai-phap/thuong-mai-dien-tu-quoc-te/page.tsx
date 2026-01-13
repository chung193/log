'use client'
import React from 'react';
import './page.css'; // Import CSS tương ứng
import SiteBreadcrumb from '@/components/SiteBreadcrumb';
import SolutionSlider from '@/components/SolutionSlider';
import PartnersSection from '@/components/PartnersSection';
import ContactFormSection from '@/components/ContactFormSection';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import { Locale } from '@/lib/i18n';

const ECommerceSolutionsPage = () => {
  const breadcrumbItems = {
    'vi': [
      { text: "Giải pháp", link: "/giai-phap" },
      { text: "Giải pháp Kho vận", link: "/giai-phap/giai-phap-kho-van", isActive: true }
    ],
    'en': [
      { text: "Solutions", link: "/solutions" },
      {
        text: " International e-commerce", link: "/solutions/warehouse", isActive: true
      }
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
    <div className="main page-inland">
      {/* Hero Banner */}
      <div className="bn-big white">
        <div className="bn-big-bg">
          <img
            width="2000"
            height="1000"
            src="/images/tmdt1-min.webp"
            className="attachment-full size-full"
            alt="Thương mại điện tử quốc tế"
            decoding="async"
            srcSet="/images/tmdt1-min.webp 2000w, /images/tmdt1-min.webp 300w, /images/tmdt1-min.webp 1024w, /images/tmdt1-min.webp 768w,/images/tmdt1-min.webp 1536w"
          />
        </div>
        <div className="container">
          <div className="bn-big-ctn">
            {/* Breadcrumb */}
            <SiteBreadcrumb
              className=''
              items={breadcrumbItems[locale as 'vi' | 'en']}
            />

            {/* Main Title */}
            <h1 className="bn-big-tt add-class text-verti mb-24 is-inview">
              {t("pages.e-commerce.title")}<br />
              {t("pages.e-commerce.sub-title")}
            </h1>

            {/* Description */}
            <p className="bn-big-des aos-init aos-animate" data-aos="fade-up-cus">
              {t("pages.e-commerce.des")}
            </p>

            {/* Statistics */}
            <div className="bn-count aos-init aos-animate" data-aos="fade-up-cus" data-aos-delay="400">
              <div className="bn-count-row row gap-res">
                <div className="bn-count-it col">
                  <div className="inner">
                    <div className="num">
                      <span className="num-txt countNum is-inview">150</span>
                      <span className="num-sym">+</span>
                    </div>
                    <p className="txt">
                      {t("pages.e-commerce.cargo-handle")}
                    </p>
                  </div>
                </div>
                <div className="bn-count-it col">
                  <div className="inner">
                    <div className="num">
                      <span className="num-txt countNum is-inview">99</span>
                      <span className="num-sym">%</span>
                    </div>
                    <p className="txt">
                      {t("pages.e-commerce.shipment")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bn-box aos-init aos-animate" data-aos="fade-up-cus" data-aos-delay="600">
              <div className="bn-box-row row gap-res">
                <div className="bn-box-it col">
                  <div className="inner">
                    <div className="icon">
                      <img
                        width="24"
                        height="24"
                        src="/images/ic-bn1.svg"
                        className="attachment-full size-full"
                        alt="Icon TMĐT"
                        decoding="async"
                      />
                    </div>
                    <p className="des">
                      {t("pages.e-commerce.item1")}
                    </p>
                  </div>
                </div>
                <div className="bn-box-it col">
                  <div className="inner">
                    <div className="icon">
                      <img
                        width="24"
                        height="24"
                        src="/images/ic-bn2.svg"
                        className="attachment-full size-full"
                        alt="KẾT NỐI HÀNH TRÌNH"
                        decoding="async"
                      />
                    </div>
                    <p className="des">
                      {t("pages.e-commerce.item2")}
                    </p>
                  </div>
                </div>
                <div className="bn-box-it col">
                  <div className="inner">
                    <div className="icon">
                      <img
                        width="24"
                        height="24"
                        src="/images/ic-bn3.svg"
                        className="attachment-full size-full"
                        alt="LIÊN KẾT"
                        decoding="async"
                        loading="lazy"
                      />
                    </div>
                    <p className="des">
                      {t("pages.e-commerce.item3")}
                    </p>
                  </div>
                </div>
                <div className="bn-box-it col">
                  <div className="inner">
                    <div className="icon">
                      <img
                        width="24"
                        height="24"
                        src="/images/ic-bn4.svg"
                        className="attachment-full size-full"
                        alt="tmđt"
                        decoding="async"
                        loading="lazy"
                      />
                    </div>
                    <p className="des">
                      {t("pages.e-commerce.item4")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SolutionSlider />

      {/* Section 2: Kinh nghiệm sàn TMĐT */}
      <section className="sec-solv-our">
        <div className="solv-our ss-pd-b">
          <div className="container">
            <div className="head-verti center mb-32">
              <h1 className="title title-48 add-class text-verti is-inview">
                {t("pages.e-commerce.experience")}
              </h1>
              <div className="line aos-init aos-animate" data-aos="fade-up-cus">
                <p className="desc">
                  {t("pages.e-commerce.experience-des")}
                </p>
              </div>
            </div>

            {/* E-commerce Platform Logos */}
            <div className="solv-our-slide">
              <div className="swiper row gap-res swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                <div className="swiper-wrapper" id="swiper-wrapper-3fc1c108a6259d924" aria-live="polite">
                  {/* Etsy */}
                  <div className="swiper-slide col swiper-slide-visible swiper-slide-active" role="group" aria-label="1 / 6">
                    <div className="solv-our-it">
                      <a className="img" href="javascript:void(0)">
                        <img
                          width="182"
                          height="116"
                          src="/images/br1.webp"
                          className="attachment-full size-full"
                          alt="Logo etsy"
                          decoding="async"
                          loading="lazy"
                        />
                      </a>
                    </div>
                  </div>

                  {/* Amazon */}
                  <div className="swiper-slide col swiper-slide-visible swiper-slide-next" role="group" aria-label="2 / 6">
                    <div className="solv-our-it">
                      <a className="img" href="javascript:void(0)">
                        <img
                          width="182"
                          height="116"
                          src="/images/br2.webp"
                          className="attachment-full size-full"
                          alt="amazon"
                          decoding="async"
                          loading="lazy"
                        />
                      </a>
                    </div>
                  </div>

                  {/* Temu */}
                  <div className="swiper-slide col swiper-slide-visible" role="group" aria-label="3 / 6">
                    <div className="solv-our-it">
                      <a className="img" href="javascript:void(0)">
                        <img
                          width="182"
                          height="116"
                          src="/images/br3.webp"
                          className="attachment-full size-full"
                          alt="temu"
                          decoding="async"
                          loading="lazy"
                        />
                      </a>
                    </div>
                  </div>

                  {/* Logo TQ */}
                  <div className="swiper-slide col swiper-slide-visible" role="group" aria-label="4 / 6">
                    <div className="solv-our-it">
                      <a className="img" href="javascript:void(0)">
                        <img
                          width="182"
                          height="116"
                          src="/images/br4.webp"
                          className="attachment-full size-full"
                          alt="Logo TQ"
                          decoding="async"
                          loading="lazy"
                        />
                      </a>
                    </div>
                  </div>

                  {/* Tiktok */}
                  <div className="swiper-slide col swiper-slide-visible" role="group" aria-label="5 / 6">
                    <div className="solv-our-it">
                      <a className="img" href="javascript:void(0)">
                        <img
                          width="182"
                          height="116"
                          src="/images/br5.webp"
                          className="attachment-full size-full"
                          alt="Tiktok"
                          decoding="async"
                          loading="lazy"
                        />
                      </a>
                    </div>
                  </div>

                  {/* Taobao */}
                  <div className="swiper-slide col swiper-slide-visible" role="group" aria-label="6 / 6">
                    <div className="solv-our-it">
                      <a className="img" href="javascript:void(0)">
                        <img
                          width="182"
                          height="116"
                          src="/images/br6.webp"
                          className="attachment-full size-full"
                          alt="Taobao"
                          decoding="async"
                          loading="lazy"
                        />
                      </a>
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
        </div>
      </section>

      {/* Section 3: Giải pháp toàn diện dành cho */}
      <section className="sec-solv-cus">
        <div className="solv-cus bg-pri ss-pd">
          <div className="container">
            <div className="head-verti center mb-48 white">
              <h1 className="title title-48 add-class text-verti is-inview">
                {t("pages.e-commerce.comprehensive")}
              </h1>
            </div>
            <div className="solv-cus-list row gap-res">
              {/* Target Customer 1 */}
              <div className="solv-cus-it col">
                <div className="inner">
                  <img src="/images/sao.svg" alt="icon" />
                  <p className="des">
                    {t("pages.e-commerce.comprehensive1")}
                  </p>
                </div>
              </div>

              {/* Target Customer 2 */}
              <div className="solv-cus-it col">
                <div className="inner">
                  <img src="/images/sao.svg" alt="icon" />
                  <p className="des">
                    {t("pages.e-commerce.comprehensive2")}
                  </p>
                </div>
              </div>

              {/* Target Customer 3 */}
              <div className="solv-cus-it col">
                <div className="inner">
                  <img src="/images/sao.svg" alt="icon" />
                  <p className="des">
                    {t("pages.e-commerce.comprehensive3")}
                  </p>
                </div>
              </div>

              {/* Target Customer 4 */}
              <div className="solv-cus-it col">
                <div className="inner">
                  <img src="/images/sao.svg" alt="icon" />
                  <p className="des">
                    {t("pages.e-commerce.comprehensive4")}
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="solv-cus-img col">
                <div className="img">
                  <img
                    width="526"
                    height="652"
                    src="/images/solv-cus.webp"
                    className="attachment-full size-full"
                    alt="Khách hàng giải pháp TMĐT"
                    decoding="async"
                    loading="lazy"
                    srcSet="/images/solv-cus.webp 526w, /images/solv-cus-242x300.webp 242w"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Ưu điểm của giải pháp */}
      <section className="sec-solv-inland">
        <div className="solv-inland">
          <div className="inland-xo">
            <div className="imgFull">
              <div className="imgFull-inner">
                <img
                  width="1728"
                  height="600"
                  src="/images/inland-fly.webp"
                  className="attachment-full size-full"
                  alt="Ưu điểm giải pháp"
                  decoding="async"
                  loading="lazy"
                  srcSet="/images/inland-fly.webp 1728w, /images/inland-fly-300x104.webp 300w, /images/inland-fly-1024x356.webp 1024w, /images/inland-fly-768x267.webp 768w, /images/inland-fly-1536x533.webp 1536w"
                />
              </div>
            </div>
            <div className="container">
              <div className="inland-xo-wrap">
                <div className="head-verti mb-32 center white">
                  <div className="title-head text-verti">
                    <h3 className="title title-40 add-class text-hori words chars splitting is-inview">
                      {t("pages.e-commerce.advantages")}
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
                          src="/images/ic-il1.svg"
                          className="attachment-full size-full"
                          alt="Nhanh chóng"
                          decoding="async"
                          loading="lazy"
                        />
                      </div>
                      <p className="text">{t("pages.e-commerce.advantages1-title")}</p>
                      <div className="des">
                        {t("pages.e-commerce.advantages1")}
                      </div>
                    </div>
                  </div>

                  {/* Advantage 2 */}
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
                      <p className="text">{t("pages.e-commerce.advantages2-title")}</p>
                      <div className="des">
                        {t("pages.e-commerce.advantages2")}
                      </div>
                    </div>
                  </div>

                  {/* Advantage 3 */}
                  <div className="inland-xo-it col itemEven even">
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
                      <p className="text">{t("pages.e-commerce.advantages3-title")}</p>
                      <div className="des">
                        {t("pages.e-commerce.advantages3")}
                      </div>
                    </div>
                  </div>

                  {/* Advantage 4 */}
                  <div className="inland-xo-it col itemEven odd">
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
                      <p className="text">{t("pages.e-commerce.advantages4-title")}</p>
                      <div className="des">
                        {t("pages.e-commerce.advantages4")}
                      </div>
                    </div>
                  </div>

                  {/* Advantage 5 */}
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
                      <p className="text">{t("pages.e-commerce.advantages5-title")}</p>
                      <div className="des">
                        {t("pages.e-commerce.advantages5")}
                      </div>
                    </div>
                  </div>

                  {/* Advantage 6 */}
                  <div className="inland-xo-it col itemEven odd">
                    <div className="inner">
                      <div className="icon">
                        <img
                          width="24"
                          height="24"
                          src="/images/ic-bn3.svg"
                          className="attachment-full size-full"
                          alt="LIÊN KẾT"
                          decoding="async"
                          loading="lazy"
                        />
                      </div>
                      <p className="text">{t("pages.e-commerce.advantages6-title")}</p>
                      <div className="des">
                        {t("pages.e-commerce.advantages6")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Bảng so sánh */}
      <section className="sec-solv-table">
        <div className="solv-table ss-pd">
          <div className="container">
            <div className="mona-content ses-table">
              <h3 className="solv-table-tt center">
                {t("pages.e-commerce.bring")}
              </h3>
              <div className="table-scroll-x">
                <table style={{ width: '100%' }}>
                  <thead>
                    <tr>
                      <th style={{ width: '14.2857%' }}>
                        {t("pages.e-commerce.column-category")}
                      </th>
                      <th style={{ width: '44.2322%' }}>
                        {t("pages.e-commerce.column-advantages")}
                      </th>
                      <th style={{ width: '40.7181%' }}>
                        {t("pages.e-commerce.column-benefits")}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ width: '14.2857%' }}>
                        {t("pages.e-commerce.11")}
                      </td>
                      <td style={{ width: '44.2322%' }}>
                        {t("pages.e-commerce.12")}
                      </td>
                      <td style={{ width: '40.7181%' }}>
                        {t("pages.e-commerce.13")}
                      </td>
                    </tr>

                    <tr>
                      <td style={{ width: '14.2857%' }}>
                        {t("pages.e-commerce.21")}
                      </td>
                      <td style={{ width: '44.2322%' }}>
                        {t("pages.e-commerce.22")}
                      </td>
                      <td style={{ width: '40.7181%' }}>
                        {t("pages.e-commerce.23")}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: '14.2857%' }}>
                        {t("pages.e-commerce.31")}
                      </td>
                      <td style={{ width: '44.2322%' }}>
                        {t("pages.e-commerce.32")}
                      </td>
                      <td style={{ width: '40.7181%' }}>
                        {t("pages.e-commerce.33")}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: '14.2857%' }}>
                        {t("pages.e-commerce.41")}
                      </td>
                      <td style={{ width: '44.2322%' }}>
                        {t("pages.e-commerce.42")}
                      </td>
                      <td style={{ width: '40.7181%' }}>
                        {t("pages.e-commerce.43")}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: '14.2857%' }}>
                        {t("pages.e-commerce.51")}
                      </td>
                      <td style={{ width: '44.2322%' }}>
                        {t("pages.e-commerce.52")}
                      </td>
                      <td style={{ width: '40.7181%' }}>
                        {t("pages.e-commerce.53")}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: '14.2857%' }}>
                        {t("pages.e-commerce.61")}
                      </td>
                      <td style={{ width: '44.2322%' }}>
                        {t("pages.e-commerce.62")}
                      </td>
                      <td style={{ width: '40.7181%' }}>
                        {t("pages.e-commerce.63")}
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Lĩnh vực thế mạnh */}
      <section className="sec-solv-top">
        <div className="solv-top ss-pd">
          <div className="container">
            <div className="inter-solve-top">
              <div className="head-verti mb-32">
                <div className="title-head text-verti">
                  <h3 className="title title-40 add-class text-hori words chars splitting is-inview">
                    {t("pages.e-commerce.top")}
                  </h3>
                </div>
                <div className="line aos-init aos-animate" data-aos="fade-up-cus">
                  <p className="desc">
                    {t("pages.e-commerce.top-des")}
                  </p>
                </div>
              </div>

              {/* Strong Areas Slider */}
              <div className="inter-solve-top-slide">
                <div className="swiper row rows-4 gap-res swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                  <div className="swiper-wrapper" id="swiper-wrapper-f9f6343f1781a1093" aria-live="polite">
                    {/* Mỹ phẩm */}
                    <div className="swiper-slide col swiper-slide-visible swiper-slide-active" role="group" aria-label="1 / 5">
                      <div className="inter-solve-top-it">
                        <div className="inner">
                          <div className="img">
                            <a className="img-inner" href="">
                              <img
                                width="217"
                                height="174"
                                src="/images/inter1.webp"
                                className="attachment-full size-full"
                                alt="Mỹ phẩm"
                                decoding="async"
                                loading="lazy"
                              />
                            </a>
                          </div>
                          <div className="info">
                            <h4>
                              <a className="info-tt" href="">{t("pages.e-commerce.top1")}</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* May mặc */}
                    <div className="swiper-slide col swiper-slide-visible swiper-slide-next" role="group" aria-label="2 / 5">
                      <div className="inter-solve-top-it">
                        <div className="inner">
                          <div className="img">
                            <a className="img-inner" href="">
                              <img
                                width="218"
                                height="174"
                                src="/images/inter2.webp"
                                className="attachment-full size-full"
                                alt="May mặc"
                                decoding="async"
                                loading="lazy"
                              />
                            </a>
                          </div>
                          <div className="info">
                            <h4>
                              <a className="info-tt" href="">{t("pages.e-commerce.top2")}</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Chăm sóc sức khoẻ */}
                    <div className="swiper-slide col swiper-slide-visible" role="group" aria-label="3 / 5">
                      <div className="inter-solve-top-it">
                        <div className="inner">
                          <div className="img">
                            <a className="img-inner" href="">
                              <img
                                width="217"
                                height="174"
                                src="/images/inter3.webp"
                                className="attachment-full size-full"
                                alt="Chăm sóc sức khoẻ"
                                decoding="async"
                                loading="lazy"
                              />
                            </a>
                          </div>
                          <div className="info">
                            <h4>
                              <a className="info-tt" href="">{t("pages.e-commerce.top3")}</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Đồ gia dụng */}
                    <div className="swiper-slide col swiper-slide-visible" role="group" aria-label="4 / 5">
                      <div className="inter-solve-top-it">
                        <div className="inner">
                          <div className="img">
                            <a className="img-inner" href="">
                              <img
                                width="217"
                                height="174"
                                src="/images/inter4.webp"
                                className="attachment-full size-full"
                                alt="Đồ gia dụng"
                                decoding="async"
                                loading="lazy"
                              />
                            </a>
                          </div>
                          <div className="info">
                            <h4>
                              <a className="info-tt" href="">{t("pages.e-commerce.top4")}</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </div>

                <div className="swiper-control posi midle">
                  <div className="swiper-control-btn swiper-prev swiper-button-disabled" tabIndex={-1} role="button" aria-label="Previous slide">
                    <i className="fa-solid fa-arrow-left"></i>
                  </div>
                  <div className="swiper-control-btn swiper-next" tabIndex={0} role="button" aria-label="Next slide">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
                <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                  <span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex={0} role="button" aria-label="Go to slide 1" aria-current="true"></span>
                  <span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 2"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <PartnersSection />
      <ContactFormSection />

    </div>
  );
};

export default ECommerceSolutionsPage;