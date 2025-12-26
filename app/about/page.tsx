import React from 'react';
import AboutSwiper from './swiper';

interface AboutPageProps {
    initialLocale?: string;
}

const AboutPage: React.FC<AboutPageProps> = ({ initialLocale = 'en' }) => {
    return (
        <div id="primary" className="content-area">
            <main className="main page-ab">
                <div className="bn">
                    <div className="bn-in">
                        <div className="bg">
                            <img
                                width="1728"
                                height="500"
                                src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/bn4.jpg"
                                className="attachment-full size-full"
                                alt="Kho ngoại quan chất lượng cao"
                                decoding="async"
                                fetchpriority="high"
                            />
                        </div>
                    </div>
                    <div className="bn-bread">
                        <div className="container">
                            <div className="breadcrumb">
                                <div className="breadcrumb-wrapper">
                                    <ul className="breadcrumb-list">
                                        <li className="breadcrumb-item aos-init aos-animate" data-aos="fade-left">
                                            <a href="https://vietnampostlogistics.com/en/" className="breadcrumb-link">Home</a>
                                        </li>
                                        <li className="breadcrumb-item aos-init aos-animate" data-aos="fade-left">
                                            <a href="https://vietnampostlogistics.com/en/company/" className="breadcrumb-link">Company</a>
                                        </li>
                                        <li className="breadcrumb-item aos-init aos-animate" data-aos="fade-left">
                                            <a href="" className="breadcrumb-link">About us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <section className="sec-ab-first">
                    <div className="ab-first">
                        <div className="ab-first-ctn ss-pd">
                            <div className="container">
                                <div className="head-verti center">
                                    <div className="line aos-init aos-animate" data-aos="fade-up-cus">
                                        <div className="title-head text-verti">
                                            <h3 className="title title-40 add-className text-hori is-inview">
                                                <span className="second">Vietnam Post Logistics </span><br />
                                                comprehensive logistics ecosystem
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="line aos-init aos-animate" data-aos="fade-up-cus" data-aos-delay="400">
                                        <div className="desc">
                                            Vietnam Post Logistics is a member unit of Vietnam Post Corporation - the leading prestigious brand in Vietnam. We provide diverse, comprehensive and optimal logistics solutions for customers from domestic to international.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <AboutSwiper />

                        <div className="ab-first-bottom ss-pd">
                            <div className="container">
                                <div className="head-verti center white">
                                    <div className="line aos-init aos-animate" data-aos="fade-up-cus" data-aos-delay="400">
                                        <div className="desc">
                                            <strong>Vietnam Post Logistics has been effectively fulfilling its role in transportation, operating the supply chain, and connecting trade between Vietnam and the world, contributing significantly to the country's economic development.</strong><br />
                                            <br />
                                            At the same time, thanks to outstanding achievements and relentless efforts, Vietnam Post Logistics has affirmed its position by becoming the official partner of many major enterprises such as USPS, DHL, Korean Air, Vietnam Airlines, Vietjet Air, Cargolux, and is an official member of many large logistics associations worldwide, such as JCtrans and WCA.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="homes-solv-swiper splitCardJS">
                                <div className="homes-solv-swiper-box">
                                    <div className="swiper row rows-5 gap-res swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                                        <div className="swiper-wrapper" id="swiper-wrapper-f8730f89594c951f" aria-live="polite">
                                            <div className="swiper-slide col splitCardItemJS active swiper-slide-visible swiper-slide-active" role="group" aria-label="1 / 5">
                                                <div className="homes-solv-it">
                                                    <div className="inner">
                                                        <div className="bg">
                                                            <img
                                                                width="954"
                                                                height="1226"
                                                                src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/kv.jpg"
                                                                className="attachment-full size-full"
                                                                alt="Vận hành bên trong kho Vietnam Post Logistics"
                                                                decoding="async"
                                                                loading="lazy"
                                                            />
                                                        </div>
                                                        <div className="info">
                                                            <div className="info-tags"></div>
                                                            <h4>
                                                                <a className="info-tt" href="https://vietnampostlogistics.com/en/giai-phap/contract-logistics/">
                                                                    Contract Logistics
                                                                </a>
                                                            </h4>
                                                            <p className="info-des">
                                                                Efficient warehouse & contract logistics solutions for optimal storage.
                                                            </p>
                                                            <div className="btn-box">
                                                                <a className="btn full white" href="https://vietnampostlogistics.com/en/giai-phap/contract-logistics/">
                                                                    <span className="txt">
                                                                        <span className="txt-inner">
                                                                            Read more
                                                                        </span>
                                                                        <span className="txt-icon">
                                                                            <img src="https://vietnampostlogistics.com/template/assets/images/ic-arrow.svg" alt="" />
                                                                        </span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide col splitCardItemJS swiper-slide-visible swiper-slide-next" role="group" aria-label="2 / 5">
                                                <div className="homes-solv-it">
                                                    <div className="inner">
                                                        <div className="bg">
                                                            <img
                                                                width="954"
                                                                height="1226"
                                                                src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/Untitled-1-1.jpg"
                                                                className="attachment-full size-full"
                                                                alt="Vận chuyển đường biển và hàng không"
                                                                decoding="async"
                                                                loading="lazy"
                                                            />
                                                        </div>
                                                        <div className="info">
                                                            <div className="info-tags"></div>
                                                            <h4>
                                                                <a className="info-tt" href="https://vietnampostlogistics.com/en/giai-phap/sea-freight/">
                                                                    Global Logistics
                                                                </a>
                                                            </h4>
                                                            <p className="info-des">
                                                                Providing comprehensive logistics solutions from air, sea, railway, cross-border trucking & more...
                                                            </p>
                                                            <div className="btn-box">
                                                                <a className="btn full white" href="https://vietnampostlogistics.com/en/giai-phap/sea-freight/">
                                                                    <span className="txt">
                                                                        <span className="txt-inner">
                                                                            Read more
                                                                        </span>
                                                                        <span className="txt-icon">
                                                                            <img src="https://vietnampostlogistics.com/template/assets/images/ic-arrow.svg" alt="" />
                                                                        </span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide col splitCardItemJS swiper-slide-visible" role="group" aria-label="3 / 5">
                                                <div className="homes-solv-it">
                                                    <div className="inner">
                                                        <div className="bg">
                                                            <img
                                                                width="954"
                                                                height="1226"
                                                                src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/tmdt.jpg"
                                                                className="attachment-full size-full"
                                                                alt="Dịch vụ TMĐT Xuyên biên giới"
                                                                decoding="async"
                                                                loading="lazy"
                                                            />
                                                        </div>
                                                        <div className="info">
                                                            <div className="info-tags"></div>
                                                            <h4>
                                                                <a className="info-tt" href="https://vietnampostlogistics.com/en/giai-phap/international-e-commerce/">
                                                                    Global E-commerce Solutions
                                                                </a>
                                                            </h4>
                                                            <p className="info-des">
                                                                Accompanying sellers who want to conquer the international e-commerce market
                                                            </p>
                                                            <div className="btn-box">
                                                                <a className="btn full white" href="https://vietnampostlogistics.com/en/giai-phap/international-e-commerce/">
                                                                    <span className="txt">
                                                                        <span className="txt-inner">
                                                                            Read more
                                                                        </span>
                                                                        <span className="txt-icon">
                                                                            <img src="https://vietnampostlogistics.com/template/assets/images/ic-arrow.svg" alt="" />
                                                                        </span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide col splitCardItemJS swiper-slide-visible" role="group" aria-label="4 / 5">
                                                <div className="homes-solv-it">
                                                    <div className="inner">
                                                        <div className="bg">
                                                            <img
                                                                width="954"
                                                                height="1226"
                                                                src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/nd.jpg"
                                                                className="attachment-full size-full"
                                                                alt="Xe tải vận chuyển hàng hóa của Vietnam Post Logistics"
                                                                decoding="async"
                                                                loading="lazy"
                                                            />
                                                        </div>
                                                        <div className="info">
                                                            <div className="info-tags"></div>
                                                            <h4>
                                                                <a className="info-tt" href="https://vietnampostlogistics.com/en/giai-phap/domestic-logistics/">
                                                                    Domestic Logistics
                                                                </a>
                                                            </h4>
                                                            <p className="info-des">
                                                                Demonstrate responsibility, ensure accurate and correct delivery.
                                                            </p>
                                                            <div className="btn-box">
                                                                <a className="btn full white" href="https://vietnampostlogistics.com/en/giai-phap/domestic-logistics/">
                                                                    <span className="txt">
                                                                        <span className="txt-inner">
                                                                            Read more
                                                                        </span>
                                                                        <span className="txt-icon">
                                                                            <img src="https://vietnampostlogistics.com/template/assets/images/ic-arrow.svg" alt="" />
                                                                        </span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide col splitCardItemJS swiper-slide-visible" role="group" aria-label="5 / 5">
                                                <div className="homes-solv-it">
                                                    <div className="inner">
                                                        <div className="bg">
                                                            <img
                                                                width="954"
                                                                height="1226"
                                                                src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/xnk.jpg"
                                                                className="attachment-full size-full"
                                                                alt="Xuất nhập khẩu hàng hóa Vietnam Post Logistics"
                                                                decoding="async"
                                                                loading="lazy"
                                                            />
                                                        </div>
                                                        <div className="info">
                                                            <div className="info-tags"></div>
                                                            <h4>
                                                                <a className="info-tt" href="https://vietnampostlogistics.com/en/giai-phap/supply-chain-finance/">
                                                                    Import-Export Solution
                                                                </a>
                                                            </h4>
                                                            <p className="info-des">
                                                                Comprehensive import-export solutions to streamline your global trade.
                                                            </p>
                                                            <div className="btn-box">
                                                                <a className="btn full white" href="https://vietnampostlogistics.com/en/giai-phap/supply-chain-finance/">
                                                                    <span className="txt">
                                                                        <span className="txt-inner">
                                                                            Read more
                                                                        </span>
                                                                        <span className="txt-icon">
                                                                            <img src="https://vietnampostlogistics.com/template/assets/images/ic-arrow.svg" alt="" />
                                                                        </span>
                                                                    </span>
                                                                </a>
                                                            </div>
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
                        </div>
                    </div>
                </section>

                <section className="sec-ab-quote">
                    <div className="ab-quote">
                        <div className="bg">
                            <img
                                width="1728"
                                height="800"
                                src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ab-quote.jpg"
                                className="attachment-full size-full"
                                alt="Ảnh Vận chuyển đường biển (Sea Freight) - Vietnam Post Logistics"
                                decoding="async"
                                loading="lazy"
                            />
                        </div>
                        <div className="container">
                            <div className="ab-quote-ctn">
                                <div className="ab-quote-text aos-init" data-aos="fade-up-cus">
                                    <p className="des">
                                        At Vietnam Post Logistics, we are committed to delivering reliable, fast, and innovative logistics solutions that meet the diverse needs of our customers. Guided by trust, efficiency, and sustainability, we aim to connect communities and businesses across Vietnam and globally.
                                    </p>
                                </div>
                                <div className="ab-quote-bot aos-init" data-aos="fade-up-cus">
                                    <p className="des">
                                        <span className="second">
                                            Business Philosophy Statement
                                        </span>
                                        of Vietnam Post Logistics
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="sec-ab-view">
                    <div className="ab-view ParaY">
                        <div className="recontainer">
                            <div className="ab-view-f">
                                <div className="ab-view-img ParaYScroll">
                                    <div className="img">
                                        <img
                                            width="653"
                                            height="716"
                                            src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/container-treo.png"
                                            className="attachment-full size-full"
                                            alt="treo container"
                                            decoding="async"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                                <div className="ab-view-content ss-pd">
                                    <div className="ab-view-lines">
                                        <div className="ab-view-line">
                                            <div className="name">Vision</div>
                                            <div className="ctn">
                                                <div className="des">
                                                    <p>To become the leading logistics & <strong>supply chain solution provider connecting Vietnam with the world</strong>, empowering businesses and consumers through seamless, innovative and sustainable logistics solutions</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ab-view-line">
                                            <div className="name">Mission</div>
                                            <div className="ctn">
                                                <div className="des">
                                                    <p>Our mission is to seamlessly <strong>connect</strong> businesses and individuals across Vietnam with the world. We are committed to driving growth by providing innovative, reliable, and efficient logistics solutions that foster global trade and communication. With a focus on customer satisfaction, sustainable practices, and advanced technologies, we aim to bridge distances, empower communities, and become a trusted partner in the global supply chain. Together, we deliver opportunities, strengthen connections, and unlock new possibilities for Vietnam and beyond.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ab-view-line">
                                            <div className="name">Core Value</div>
                                            <div className="ctn">
                                                <div className="des">
                                                    <p className="des">reflect its commitment to delivering quality and reliability in logistics services. These values are encapsulated by the principles of <strong>challenge, commitment, integrity, responsibility, and respect</strong>. The company emphasizes continuous improvement and strives to connect people and businesses through efficient logistics solutions. With these values, Vietnam Post Logistics aims to become a leading logistics provider in Vietnam, leveraging its vast network and infrastructure to offer comprehensive supply chain solutions.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <section className="sec-homes-logis">
                            <div className="homes-logis ss-pd">
                                <div className="container">
                                    <div className="head-verti center mb-32">
                                        <div className="line aos-init" data-aos="fade-up-cus">
                                            <h2 className="title title-48 add-className text-verti">
                                                Our Ecosystem
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="homes-logis-box">
                                        <div className="homes-logis-list row gap-res">
                                            <div className="homes-logis-item col">
                                                <div className="inner">
                                                    <div className="des">
                                                        <p>Communication</p>
                                                    </div>
                                                    <p className="tt">Consumer</p>
                                                </div>
                                            </div>
                                            <div className="homes-logis-item col">
                                                <div className="inner">
                                                    <div className="des">
                                                        <p>Procurement</p>
                                                    </div>
                                                    <p className="tt">Raw Materials</p>
                                                </div>
                                            </div>
                                            <div className="homes-logis-item col">
                                                <div className="inner">
                                                    <div className="des">
                                                        <p className="des">Inbound Logistics</p>
                                                        <ul>
                                                            <li>Import Freight: Air, Ocean (FLC & LCL), customs Clearance</li>
                                                            <li>Storage Service: PVMI (bonded warehouse, CFS..), Factory fulfillment center</li>
                                                            <li>Land trucking</li>
                                                        </ul>
                                                    </div>
                                                    <p className="tt">Supplier</p>
                                                </div>
                                            </div>
                                            <div className="homes-logis-item col">
                                                <div className="inner">
                                                    <div className="des">
                                                        <p className="des">E-commerce</p>
                                                        <ul>
                                                            <li>E-commerce, B2C delivery</li>
                                                            <li>COD</li>
                                                            <li>E-commerce platform</li>
                                                        </ul>
                                                    </div>
                                                    <p className="tt"></p>
                                                </div>
                                            </div>
                                            <div className="homes-logis-circle col">
                                                <div className="circle-text">
                                                    <img src="https://vietnampostlogistics.com/template/assets/images/text.png" alt="" />
                                                </div>
                                                <div className="circle-img">
                                                    <div className="img">
                                                        <div className="img-inner">
                                                            <img src="https://vietnampostlogistics.com/template/assets/images/car.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="circle">
                                                    <div className="icon">
                                                        <img
                                                            width="48"
                                                            height="48"
                                                            src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-1.svg"
                                                            className="attachment-full size-full"
                                                            alt=""
                                                            decoding="async"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <div className="icon">
                                                        <img
                                                            width="48"
                                                            height="48"
                                                            src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-2.svg"
                                                            className="attachment-full size-full"
                                                            alt=""
                                                            decoding="async"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <div className="icon">
                                                        <img
                                                            width="48"
                                                            height="48"
                                                            src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-3.svg"
                                                            className="attachment-full size-full"
                                                            alt=""
                                                            decoding="async"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <div className="icon">
                                                        <img
                                                            width="48"
                                                            height="48"
                                                            src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-4.svg"
                                                            className="attachment-full size-full"
                                                            alt=""
                                                            decoding="async"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <div className="icon">
                                                        <img
                                                            width="48"
                                                            height="48"
                                                            src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-5.svg"
                                                            className="attachment-full size-full"
                                                            alt=""
                                                            decoding="async"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <div className="icon">
                                                        <img
                                                            width="48"
                                                            height="48"
                                                            src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-6.svg"
                                                            className="attachment-full size-full"
                                                            alt=""
                                                            decoding="async"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="circle-tts">
                                                    <div className="circle-tt">Retailer</div>
                                                    <div className="circle-tt">Manufacturer</div>
                                                </div>
                                            </div>
                                            <div className="homes-logis-item col">
                                                <div className="inner">
                                                    <div className="des">
                                                        <p className="des">Supply Chain Finance</p>
                                                        <p className="sub">Optimize cash flow for supplier or buyer</p>
                                                    </div>
                                                    <p className="tt"></p>
                                                </div>
                                            </div>
                                            <div className="homes-logis-item col">
                                                <div className="inner">
                                                    <div className="des">
                                                        <p className="des">Last-miles Delivery</p>
                                                        <ul>
                                                            <li>Nation wide Hub & transport network</li>
                                                            <li>Land trucking</li>
                                                            <li>Air shipment</li>
                                                        </ul>
                                                    </div>
                                                    <p className="tt"></p>
                                                </div>
                                            </div>
                                            <div className="homes-logis-item col">
                                                <div className="inner">
                                                    <div className="des">
                                                        <p className="des">Distribution Service</p>
                                                        <p className="sub">VNP is deploying modern distribution strategy by using nationwide network</p>
                                                    </div>
                                                    <p className="tt">Distributors</p>
                                                </div>
                                            </div>
                                            <div className="homes-logis-item col">
                                                <div className="inner">
                                                    <div className="des">
                                                        <p className="des">Outbound Logistics</p>
                                                        <div className="table-container">
                                                            <table>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <ul>
                                                                                <li>Distribution center</li>
                                                                                <li>Air, Ocean freight</li>
                                                                                <li>Fulfillment center</li>
                                                                            </ul>
                                                                        </td>
                                                                        <td>
                                                                            <ul>
                                                                                <li>VAS</li>
                                                                                <li>Land trucking</li>
                                                                            </ul>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <p className="tt"></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>

                <section className="sec-homes-splide">
                    <div className="homes-splide ss-pd">
                        <div className="homes-splide-block">
                            <div className="container">
                                <div className="head-verti center">
                                    <div className="line aos-init" data-aos="fade-up-cus">
                                        <h2 className="title title-48 add-className text-verti">
                                            Logistics Associations
                                        </h2>
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
                                        <button className="splide__arrow splide__arrow--next" type="button" aria-label="Go to first slide" aria-controls="splide01-track">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false">
                                                <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="splide__track splide__track--loop splide__track--ltr splide__track--draggable" id="splide01-track" aria-live="off" aria-atomic="true">
                                        <div className="splide__list" id="splide01-list" role="presentation">
                                            <div className="splide__slide" id="splide01-slide01" role="tabpanel" aria-roledescription="slide" aria-label="1 of 4">
                                                <div className="logoSplide-it">
                                                    <div className="img">
                                                        <img
                                                            width="182"
                                                            height="116"
                                                            src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh1.jpg"
                                                            className="attachment-full size-full"
                                                            alt=""
                                                            decoding="async"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="splide__slide" id="splide01-slide02" role="tabpanel" aria-roledescription="slide" aria-label="2 of 4">
                                                <div className="logoSplide-it">
                                                    <div className="img">
                                                        <img
                                                            width="182"
                                                            height="116"
                                                            src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh2.jpg"
                                                            className="attachment-full size-full"
                                                            alt=""
                                                            decoding="async"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="splide__slide" id="splide01-slide03" role="tabpanel" aria-roledescription="slide" aria-label="3 of 4">
                                                <div className="logoSplide-it">
                                                    <div className="img">
                                                        <img
                                                            width="182"
                                                            height="116"
                                                            src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh3.jpg"
                                                            className="attachment-full size-full"
                                                            alt=""
                                                            decoding="async"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="splide__slide" id="splide01-slide04" role="tabpanel" aria-roledescription="slide" aria-label="4 of 4">
                                                <div className="logoSplide-it">
                                                    <div className="img">
                                                        <img
                                                            width="182"
                                                            height="116"
                                                            src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/hh4.jpg"
                                                            className="attachment-full size-full"
                                                            alt=""
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
                                            <button className="splide__pagination__page" type="button" role="tab" aria-controls="splide01-slide02" aria-label="Go to slide 2" tabIndex={-1}></button>
                                        </li>
                                        <li role="presentation">
                                            <button className="splide__pagination__page" type="button" role="tab" aria-controls="splide01-slide03" aria-label="Go to slide 3" tabIndex={-1}></button>
                                        </li>
                                        <li role="presentation">
                                            <button className="splide__pagination__page is-active" type="button" role="tab" aria-controls="splide01-slide04" aria-label="Go to slide 4" aria-selected="true"></button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="homes-splide-block">
                            <div className="container">
                                <div className="head-verti center">
                                    <div className="line aos-init" data-aos="fade-up-cus">
                                        <h2 className="title title-48 add-className text-verti">
                                            Our Partners
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            {/* Phần partners slider tương tự - đã sửa lỗi cú pháp */}
                        </div>
                    </div>
                </section>

                <section className="sec-ab-award">
                    <div className="ab-award ss-pd">
                        <div className="container">
                            <div className="head-verti center mb-32 white">
                                <div className="line aos-init" data-aos="fade-up-cus">
                                    <h1 className="title title-48 add-className text-verti">
                                        Awards and Certificates
                                    </h1>
                                </div>
                            </div>
                            <div className="ab-award-wrapper aos-init" data-aos="fade-up">
                                <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-grid swiper-backface-hidden">
                                    <div className="swiper-wrapper" id="swiper-wrapper-880101ce9d8d710797" aria-live="polite">
                                        <div className="swiper-slide swiper-slide-active" role="group" aria-label="1 / 4">
                                            <div className="logo-item">
                                                <div className="inner">
                                                    <div className="img">
                                                        <a className="img-inner" href="javascript:void(0)">
                                                            <img
                                                                width="1806"
                                                                height="1204"
                                                                src="https://vietnampostlogistics.com/wp-content/uploads/2025/04/5-1-1.jpg"
                                                                className="attachment-full size-full"
                                                                alt=""
                                                                decoding="async"
                                                                loading="lazy"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="info">
                                                        <h4>
                                                            <a className="info-tt" href="javascript:void(0)">
                                                                Gold Rank - Vietnam No. 1 Brand Awards 2015
                                                            </a>
                                                        </h4>
                                                        <p className="info-des">
                                                            Vietnam Post Logistics - No. 1 Logistics Service Provider in Vietnam
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide swiper-slide-next" role="group" aria-label="2 / 4">
                                            <div className="logo-item">
                                                <div className="inner">
                                                    <div className="img">
                                                        <a className="img-inner" href="javascript:void(0)">
                                                            <img
                                                                width="980"
                                                                height="653"
                                                                src="https://vietnampostlogistics.com/wp-content/uploads/2025/05/FL2_0099.jpg"
                                                                className="attachment-full size-full"
                                                                alt=""
                                                                decoding="async"
                                                                loading="lazy"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="info">
                                                        <h4>
                                                            <a className="info-tt" href="javascript:void(0)">
                                                                Sustainable Enterprise of 2025
                                                            </a>
                                                        </h4>
                                                        <p className="info-des">
                                                            Vietnam Post Logistics was honored with the prestigious "Sustainable Enterprise of 2025" award.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" role="group" aria-label="3 / 4">
                                            <div className="logo-item">
                                                <div className="inner">
                                                    <div className="img">
                                                        <a className="img-inner" href="javascript:void(0)">
                                                            <img
                                                                width="2000"
                                                                height="1463"
                                                                src="https://vietnampostlogistics.com/wp-content/uploads/2025/07/1-Recoveredeng-1-e1753695259247.jpg"
                                                                className="attachment-full size-full"
                                                                alt="FMC license - Vietnam Post Logistics"
                                                                decoding="async"
                                                                loading="lazy"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="info">
                                                        <h4>
                                                            <a className="info-tt" href="javascript:void(0)">
                                                                FMC - OTI - NVOOC LICENSE
                                                            </a>
                                                        </h4>
                                                        <p className="info-des">
                                                            Vietnam Post Logistics is authorized with FMC License to operate import - export transportation services in the U.S.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" role="group" aria-label="4 / 4">
                                            <div className="logo-item">
                                                <div className="inner">
                                                    <div className="img">
                                                        <a className="img-inner" href="javascript:void(0)">
                                                            <img
                                                                width="1000"
                                                                height="667"
                                                                src="https://vietnampostlogistics.com/wp-content/uploads/2025/07/PT_04855.jpg"
                                                                className="attachment-full size-full"
                                                                alt="Vietnam Post Logistics nhận giải"
                                                                decoding="async"
                                                                loading="lazy"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="info">
                                                        <h4>
                                                            <a className="info-tt" href="javascript:void(0)">
                                                                National Reputable Brand 2025
                                                            </a>
                                                        </h4>
                                                        <p className="info-des">
                                                            Vietnam Post Logistics honored as "National Reputable Brand 2025," affirming its leadership with comprehensive and sustainable logistics solutions.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                                </div>
                                <div className="swiper-control posi minus">
                                    <div className="swiper-control-btn swiper-prev swiper-button-disabled swiper-button-lock" tabIndex={-1} role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-880101ce9d8d710797" aria-disabled="true">
                                        <i className="fa-solid fa-arrow-left"></i>
                                    </div>
                                    <div className="swiper-control-btn swiper-next swiper-button-disabled swiper-button-lock" tabIndex={-1} role="button" aria-label="Next slide" aria-controls="swiper-wrapper-880101ce9d8d710797" aria-disabled="true">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>
                                </div>
                                <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-lock">
                                    <span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex={0} role="button" aria-label="Go to slide 1" aria-current="true"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default AboutPage;