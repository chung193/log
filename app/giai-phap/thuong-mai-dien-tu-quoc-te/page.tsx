import React from 'react';
import './page.css'; // Import CSS tương ứng
import SiteBreadcrumb from '@/components/SiteBreadcrumb';
import SolutionSlider from '@/components/SolutionSlider';
import PartnersSection from '@/components/PartnersSection';
import ContactFormSection from '@/components/ContactFormSection';

const ECommerceSolutionsPage = ({ initialLocale = 'en' }) => {
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
    <main className="main page-inland">
      {/* Hero Banner */}
      <div className="bn-big white">
        <div className="bn-big-bg">
          <img
            width="2000"
            height="1000"
            src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/tmdt1-min.jpg"
            className="attachment-full size-full"
            alt="Thương mại điện tử quốc tế"
            decoding="async"
            fetchpriority="high"
            srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/tmdt1-min.jpg 2000w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/tmdt1-min-300x150.jpg 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/tmdt1-min-1024x512.jpg 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/tmdt1-min-768x384.jpg 768w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/tmdt1-min-1536x768.jpg 1536w"
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
              Giải pháp <br />
              Thương mại điện tử quốc tế
            </h1>

            {/* Description */}
            <p className="bn-big-des aos-init aos-animate" data-aos="fade-up-cus">
              Cung cấp giải pháp toàn diện từ khâu lấy hàng, xử lý hàng hóa, đóng <br />
              gói đến giao hàng đích danh tại các quốc gia trên thế giới.
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
                      Tấn hàng mỗi tháng được xử lý và giao hàng Quốc tế.
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
                      Lô hàng được giao hàng theo đúng cam kết.
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
                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-bn1.svg"
                        className="attachment-full size-full"
                        alt="Icon TMĐT"
                        decoding="async"
                      />
                    </div>
                    <p className="des">
                      Tăng cơ hội bán hàng ở các thị trường quốc tế.
                    </p>
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
                    <p className="des">
                      Tiết kiệm chi phí nhờ quy trình tối ưu hoá.
                    </p>
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
                    <p className="des">
                      Đảm bảo sự hài lòng với dịch vụ đáng tin cậy.
                    </p>
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
                    <p className="des">
                      Sự an toàn và bảo mật của khách hàng là ưu tiên hàng đầu.
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
                Kinh nghiệm sâu rộng trên các sàn TMĐT
              </h1>
              <div className="line aos-init aos-animate" data-aos="fade-up-cus">
                <p className="desc">
                  Chúng tôi có kinh nghiệm sâu rộng trong việc quản lý và vận chuyển hàng hóa cho nhiều sàn thương mại điện tử xuyên Quốc gia lớn trên Thế giới như:
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
                          src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/br1.jpg"
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
                          src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/br2.jpg"
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
                          src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/br3.jpg"
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
                          src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/br4.jpg"
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
                          src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/br5.jpg"
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
                          src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/br6.jpg"
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
                Giải pháp toàn diện dành cho
              </h1>
            </div>
            <div className="solv-cus-list row gap-res">
              {/* Target Customer 1 */}
              <div className="solv-cus-it col">
                <div className="inner">
                  <img src="https://vietnampostlogistics.com/template/assets/images/sao.svg" alt="icon" />
                  <p className="des">
                    <strong>Các doanh nghiệp sản xuất tại Việt Nam </strong>muốn đưa hàng hóa ra thế giới.
                  </p>
                </div>
              </div>

              {/* Target Customer 2 */}
              <div className="solv-cus-it col">
                <div className="inner">
                  <img src="https://vietnampostlogistics.com/template/assets/images/sao.svg" alt="icon" />
                  <p className="des">
                    <strong>Doanh nghiệp thương mại điện tử</strong> quy mô vừa và lớn.
                  </p>
                </div>
              </div>

              {/* Target Customer 3 */}
              <div className="solv-cus-it col">
                <div className="inner">
                  <img src="https://vietnampostlogistics.com/template/assets/images/sao.svg" alt="icon" />
                  <p className="des">
                    Các cá nhân, doanh nghiệp có <strong>nhu cầu vận chuyển hàng hóa từ Trung Quốc về Việt Nam.</strong>
                  </p>
                </div>
              </div>

              {/* Target Customer 4 */}
              <div className="solv-cus-it col">
                <div className="inner">
                  <img src="https://vietnampostlogistics.com/template/assets/images/sao.svg" alt="icon" />
                  <p className="des">
                    <strong>Các cá nhân bán hàng trên nền tảng e-commerce</strong> như Amazon, eBay, Etsy tại thị trường Châu Mỹ &amp; Châu Âu.
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="solv-cus-img col">
                <div className="img">
                  <img
                    width="526"
                    height="652"
                    src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/solv-cus.png"
                    className="attachment-full size-full"
                    alt="Khách hàng giải pháp TMĐT"
                    decoding="async"
                    loading="lazy"
                    srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/solv-cus.png 526w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/solv-cus-242x300.png 242w"
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
                  src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/inland-fly.jpg"
                  className="attachment-full size-full"
                  alt="Ưu điểm giải pháp"
                  decoding="async"
                  loading="lazy"
                  srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/inland-fly.jpg 1728w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/inland-fly-300x104.jpg 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/inland-fly-1024x356.jpg 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/inland-fly-768x267.jpg 768w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/inland-fly-1536x533.jpg 1536w"
                />
              </div>
            </div>
            <div className="container">
              <div className="inland-xo-wrap">
                <div className="head-verti mb-32 center white">
                  <div className="title-head text-verti">
                    <h3 className="title title-40 add-class text-hori words chars splitting is-inview">
                      Ưu điểm của giải pháp
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
                      <p className="text">Giao hàng nhanh chóng</p>
                      <div className="des">
                        Thời gian giao hàng nhanh chóng nhờ mạng lưới vận chuyển trên toàn cầu.
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
                          src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-bn1.svg"
                          className="attachment-full size-full"
                          alt="Icon TMĐT"
                          decoding="async"
                          loading="lazy"
                        />
                      </div>
                      <p className="text">Hỗ trợ hải quan</p>
                      <div className="des">
                        Hỗ trợ khai báo hải quan và chính sách thuế tối ưu.
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
                          src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-il3.svg"
                          className="attachment-full size-full"
                          alt="Đa dạng"
                          decoding="async"
                          loading="lazy"
                        />
                      </div>
                      <p className="text">Linh hoạt mọi quy mô</p>
                      <div className="des">
                        Đáp ứng linh hoạt với nhiều quy mô lô hàng khác nhau.
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
                          src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-bn2.svg"
                          className="attachment-full size-full"
                          alt="KẾT NỐI HÀNH TRÌNH"
                          decoding="async"
                          loading="lazy"
                        />
                      </div>
                      <p className="text">Hợp tác cùng đối tác lớn</p>
                      <div className="des">
                        Hợp tác với các đơn vị chuyển phát nhanh uy tín nhất như FEDEX, UPS, DHL, giúp gia tăng độ tin cậy.
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
                          src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-il5.svg"
                          className="attachment-full size-full"
                          alt="An toàn"
                          decoding="async"
                          loading="lazy"
                        />
                      </div>
                      <p className="text">Hệ thống quản lý tập trung</p>
                      <div className="des">
                        Sở hữu hệ thống quản lý tập trung giúp nhà bán hàng quản lý tracking, trạng thái đơn hàng, các thông tin trên cùng một nền tảng dễ dàng và minh bạch.
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
                          src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-bn3.svg"
                          className="attachment-full size-full"
                          alt="LIÊN KẾT"
                          decoding="async"
                          loading="lazy"
                        />
                      </div>
                      <p className="text">Đội ngũ nhân viên chuyên nghiệp</p>
                      <div className="des">
                        Đội ngũ nhân viên chuyên nghiệp, có kiến thức chuyên sâu về thị trường TMĐT, thông quan và vận chuyển hàng hóa, sẵn sàng hỗ trợ khách hàng 24/7.
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
                Chúng tôi luôn sẵn sàng đem đến cho khách hàng những&nbsp;
                <span className="second">giải pháp hoàn hảo&nbsp;</span>
                nhất
              </h3>
              <div className="table-scroll-x">
                <table style={{ width: '100%' }}>
                  <thead>
                    <tr>
                      <th style={{ width: '14.2857%' }}>Hạng mục</th>
                      <th style={{ width: '44.2322%' }}>Ưu điểm</th>
                      <th style={{ width: '40.7181%' }}>Lợi ích cho khách hàng</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ width: '14.2857%' }}>Giá</td>
                      <td style={{ width: '44.2322%' }}>Cạnh tranh</td>
                      <td style={{ width: '40.7181%' }}>Tiết kiệm chi phí cho khách hàng.</td>
                    </tr>
                    <tr>
                      <td style={{ width: '14.2857%' }}>Thời gian giao</td>
                      <td style={{ width: '44.2322%' }}>Tốc độ nhanh nhất thị trường (5-7days)</td>
                      <td style={{ width: '40.7181%' }}>Đảm bảo việc kinh doanh của khách trơn tru.</td>
                    </tr>
                    <tr>
                      <td style={{ width: '14.2857%' }}>Tem nhãn</td>
                      <td style={{ width: '44.2322%' }}>
                        Tem chuẩn Global Direct Entry của USPS Cung cấp đủ loại tem Prority, Ground Advantage, Parcel Select. Đặc biệt tem Parcel Select đấu chạy nối thẳng USPS, không qua đại lý trung gian.
                      </td>
                      <td style={{ width: '40.7181%' }}>Tỉ lệ 100% phát hàng thành công.</td>
                    </tr>
                    <tr>
                      <td style={{ width: '14.2857%' }}>Tải bay</td>
                      <td style={{ width: '44.2322%' }}>Chúng tôi là đối tác chính thức của nhiều hãng hàng không lớn.</td>
                      <td style={{ width: '40.7181%' }}>Đảm bảo tải bay ngay cả trong mùa cao điểm.</td>
                    </tr>
                    <tr>
                      <td style={{ width: '14.2857%' }}>Cập nhật thông tin</td>
                      <td style={{ width: '44.2322%' }}>Đội ngũ CS người Việt cập nhật liên tục thông tin.</td>
                      <td style={{ width: '40.7181%' }}>Luôn nắm bắt tình trạng hàng hóa chi tiết, dễ dàng giao tiếp.</td>
                    </tr>
                    <tr>
                      <td style={{ width: '14.2857%' }}>Đảm bảo chất lượng giao nhận hai đầu</td>
                      <td style={{ width: '44.2322%' }}>
                        Là đối tác chính thức của USPS và nhiều tập đoàn bưu chính lớn trên Thế giới, trực tiếp liên hệ và giám sát chất lượng vận chuyển tại điểm đích.
                      </td>
                      <td style={{ width: '40.7181%' }}>Trạng thái Intransit sớm, minh bạch, rõ ràng, tiết kiệm.</td>
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
                    Lĩnh vực thế mạnh
                  </h3>
                </div>
                <div className="line aos-init aos-animate" data-aos="fade-up-cus">
                  <p className="desc">
                    Với kinh nghiệm sâu rộng trên thị trường thương mại điện tử Quốc tế, chúng tôi tự tin chinh phục các lĩnh vực:
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
                                src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/inter1.png"
                                className="attachment-full size-full"
                                alt="Mỹ phẩm"
                                decoding="async"
                                loading="lazy"
                              />
                            </a>
                          </div>
                          <div className="info">
                            <h4>
                              <a className="info-tt" href="">Mỹ phẩm</a>
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
                                src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/inter2.png"
                                className="attachment-full size-full"
                                alt="May mặc"
                                decoding="async"
                                loading="lazy"
                              />
                            </a>
                          </div>
                          <div className="info">
                            <h4>
                              <a className="info-tt" href="">May mặc</a>
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
                                src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/inter3.png"
                                className="attachment-full size-full"
                                alt="Chăm sóc sức khoẻ"
                                decoding="async"
                                loading="lazy"
                              />
                            </a>
                          </div>
                          <div className="info">
                            <h4>
                              <a className="info-tt" href="">Chăm sóc sức khoẻ</a>
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
                                src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/inter4.png"
                                className="attachment-full size-full"
                                alt="Đồ gia dụng"
                                decoding="async"
                                loading="lazy"
                              />
                            </a>
                          </div>
                          <div className="info">
                            <h4>
                              <a className="info-tt" href="">Đồ gia dụng</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Mỹ phẩm (duplicate) */}
                    <div className="swiper-slide col" role="group" aria-label="5 / 5">
                      <div className="inter-solve-top-it">
                        <div className="inner">
                          <div className="img">
                            <a className="img-inner" href="">
                              <img
                                width="217"
                                height="174"
                                src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/inter1.png"
                                className="attachment-full size-full"
                                alt="Mỹ phẩm"
                                decoding="async"
                                loading="lazy"
                              />
                            </a>
                          </div>
                          <div className="info">
                            <h4>
                              <a className="info-tt" href="">Mỹ phẩm</a>
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

    </main>
  );
};

export default ECommerceSolutionsPage;