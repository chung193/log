import React from 'react';

// Component cho Breadcrumb
const Breadcrumb = () => {
    const breadcrumbItems = [
        { label: 'Trang chủ', href: 'https://vietnampostlogistics.com/' },
        { label: 'Giải pháp', href: '' },
        { label: 'Logistics Quốc tế', href: 'https://vietnampostlogistics.com/danh-muc-giai-phap/logistics-quoc-te/' },
        { label: 'Vận tải đường sắt', href: '' }
    ];

    return (
        <div className="breadcrumb">
            <div className="breadcrumb-wrapper">
                <ul className="breadcrumb-list">
                    {breadcrumbItems.map((item, index) => (
                        <li
                            key={index}
                            className="breadcrumb-item aos-init aos-animate"
                            data-aos="fade-left"
                        >
                            <a href={item.href} className="breadcrumb-link">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

// Component cho Benefits Box
const BenefitsBox = () => {
    const benefits = [
        {
            icon: 'https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-bn1.svg',
            alt: 'Icon TMĐT',
            text: 'Đảm bảo sự hài lòng với dịch vụ đáng tin cậy.'
        },
        {
            icon: 'https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-bn2.svg',
            alt: 'KẾT NỐI HÀNH TRÌNH',
            text: 'Tiết kiệm chi phí nhờ quy trình tối ưu hoá.'
        },
        {
            icon: 'https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-bn3.svg',
            alt: 'LIÊN KẾT',
            text: 'Đội ngũ nhân sự năng động và giàu kinh nghiệm.'
        },
        {
            icon: 'https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-bn4.svg',
            alt: 'tmđt',
            text: 'Sự an toàn và bảo mật của khách hàng là ưu tiên hàng đầu.'
        }
    ];

    return (
        <div className="bn-box aos-init aos-animate" data-aos="fade-up-cus" data-aos-delay="600">
            <div className="bn-box-row row gap-res">
                {benefits.map((benefit, index) => (
                    <div key={index} className="bn-box-it col">
                        <div className="inner">
                            <div className="icon">
                                <img
                                    width="24"
                                    height="24"
                                    src={benefit.icon}
                                    className="attachment-full size-full"
                                    alt={benefit.alt}
                                    decoding="async"
                                    loading={index > 1 ? "lazy" : "eager"}
                                />
                            </div>
                            <p className="des">{benefit.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Component cho Side Menu
const SolutionMenu = () => {
    const menuItems = [
        {
            icon: 'https://vietnampostlogistics.com/wp-content/uploads/2025/03/menu1.svg',
            label: 'Vận tải đường biển',
            href: 'https://vietnampostlogistics.com/giai-phap/giai-phap-sea-freight/',
            active: false
        },
        {
            icon: 'https://vietnampostlogistics.com/wp-content/uploads/2025/03/menu2.svg',
            label: 'Chuyển phát nhanh Quốc tế',
            href: 'https://vietnampostlogistics.com/giai-phap/giai-phap-air-express/',
            active: false
        },
        {
            icon: 'https://vietnampostlogistics.com/wp-content/uploads/2025/03/menu3.svg',
            label: 'Vận tải hàng không',
            href: 'https://vietnampostlogistics.com/giai-phap/giai-phap-air-cargo/',
            active: false
        },
        {
            icon: 'https://vietnampostlogistics.com/wp-content/uploads/2025/03/menu4.svg',
            label: 'Đường bộ xuyên biên giới',
            href: 'https://vietnampostlogistics.com/giai-phap/giai-phap-cross-border-trucking/',
            active: false
        },
        {
            icon: 'https://vietnampostlogistics.com/wp-content/uploads/2025/03/menu5.svg',
            label: 'Vận tải đường sắt',
            href: 'https://vietnampostlogistics.com/giai-phap/giai-phap-railway/',
            active: true
        }
    ];

    return (
        <div className="side-fixed">
            <div className="side-fixed-wrap">
                <div className="wrapper">
                    <div className="inter-solve-menu">
                        {menuItems.map((item, index) => (
                            <a
                                key={index}
                                className={`inter-solve-menu-link ${item.active ? 'active' : ''}`}
                                href={item.href}
                            >
                                <img
                                    width="24"
                                    height={index === 1 || index === 2 ? "25" : "24"}
                                    src={item.icon}
                                    className="attachment-full size-full wp-post-image"
                                    alt=""
                                    decoding="async"
                                    loading="lazy"
                                />
                                <span className="txt">{item.label}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="side-close">
                <i className="fas fa-times close icon"></i>
            </div>
        </div>
    );
};

// Component cho Statistics Box
const StatisticsBox = () => {
    const stats = [
        { name: 'VN-Laos', value: '15', description: 'Containers/tháng' },
        { name: 'VN- Campuchia', value: '20', description: 'Containers/tháng' },
        { name: 'VN- China', value: '15', description: 'Containers/tháng' }
    ];

    return (
        <div className="inter-solve-box">
            <div className="row">
                {stats.map((stat, index) => (
                    <div key={index} className="col">
                        <div className="inter-solve-box-it">
                            <p className="name">{stat.name}</p>
                            <p className="num">{stat.value}</p>
                            <p className="des">{stat.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Component cho Advantages
const AdvantagesSection = () => {
    const advantages = [
        {
            icon: 'https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-il1.svg',
            description: 'Khả năng vận chuyển hàng hóa khối lượng lớn với chi phí phải chăng.'
        },
        {
            icon: 'https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-bn1.svg',
            description: 'Giảm thiểu tác động đến môi trường nhờ hiệu quả năng lượng của đường sắt'
        },
        {
            icon: 'https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-bn2.svg',
            description: 'Độ an toàn cao, hạn chế các rủi ro hư hỏng hoặc mất mát hàng hóa.'
        },
        {
            icon: 'https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-il3.svg',
            description: 'Dễ dàng kết nối với các hệ thống vận tải khác để giao hàng nhanh chóng.'
        }
    ];

    return (
        <div className="inland-xo">
            <div className="imgFull">
                <div className="imgFull-inner">
                    <img
                        width="1950"
                        height="788"
                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ds-min.jpg"
                        className="attachment-full size-full"
                        alt=""
                        decoding="async"
                        loading="lazy"
                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ds-min.jpg 1950w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/ds-min-300x121.jpg 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/ds-min-1024x414.jpg 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/ds-min-768x310.jpg 768w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/ds-min-1536x621.jpg 1536w"
                    />
                </div>
            </div>
            <div className="container">
                <div className="inland-xo-wrap">
                    <div className="head-verti mb-32 center white">
                        <div className="title-head text-verti">
                            <h3 className="title title-40 add-class text-hori words chars splitting">
                                Ưu điểm của giải pháp
                            </h3>
                        </div>
                    </div>

                    <div className="inland-xo-box">
                        <div className="inland-xo-list row gap-res rows-2 listEven">
                            {advantages.map((advantage, index) => (
                                <div
                                    key={index}
                                    className={`inland-xo-it col itemEven ${index % 2 === 0 ? 'even' : 'odd'}`}
                                >
                                    <div className="inner">
                                        <div className="icon">
                                            <img
                                                width={index === 0 || index === 3 ? "32" : "24"}
                                                height={index === 0 || index === 3 ? "32" : "24"}
                                                src={advantage.icon}
                                                className="attachment-full size-full"
                                                alt=""
                                                decoding="async"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="des">{advantage.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Component cho Service Benefits
const ServiceBenefits = () => {
    const benefits = [
        {
            icon: 'https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-tag.svg',
            title: 'Tiết kiệm chi phí vận chuyển'
        },
        {
            icon: 'https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-increase.svg',
            title: 'Tăng khả năng lập kế hoạch chính xác nhờ lịch trình ổn định'
        },
        {
            icon: 'https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-trip.svg',
            title: 'Tăng cường độ tin cậy và an toàn'
        },
        {
            icon: 'https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-hand.svg',
            title: 'Giảm thiểu tác động môi trường'
        }
    ];

    return (
        <div className="inter-solve-ser ss-pd-t">
            <h1 className="title title-48 add-class text-verti mb-32">
                Lợi ích khi sử dụng dịch vụ
            </h1>

            <div className="store-why-list row">
                {benefits.map((benefit, index) => (
                    <div key={index} className="col">
                        <div className="store-why-it">
                            <div className="icon-item verti">
                                <div className="icon">
                                    <img
                                        width="100"
                                        height="100"
                                        src={benefit.icon}
                                        className="attachment-full size-full"
                                        alt=""
                                        decoding="async"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="ctn">
                                    <p className="tt">{benefit.title}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Component cho Contact Form
const ContactForm = () => {
    return (
        <section className="sec-homes-contact">
            <div className="homes-contact">
                <div className="recontainer">
                    <div className="homes-contact-flex">
                        <div className="homes-contact-ctn ss-pd">
                            <div className="wrapper">
                                <div className="head-verti white mb-32">
                                    <div className="line aos-init" data-aos="fade-up-cus">
                                        <h2 className="title title-48 add-class text-verti">
                                            Liên hệ với Vietnam Post Logistics
                                        </h2>
                                    </div>
                                </div>
                                <div className="mainForm">
                                    <form
                                        action="/giai-phap/giai-phap-railway/#wpcf7-f785-p974-o1"
                                        method="post"
                                        className="wpcf7-form init"
                                    >
                                        <div className="form-list row">
                                            <label className="form-ip col per5">
                                                <span className="text spe">Tên của bạn</span>
                                                <input
                                                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                    placeholder="Nhập Tên của bạn"
                                                    type="text"
                                                    name="your-name"
                                                    required
                                                />
                                            </label>
                                            <label className="form-ip col per5">
                                                <span className="text spe">Tên công ty</span>
                                                <input
                                                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                    placeholder="Tên công ty"
                                                    type="text"
                                                    name="company-name"
                                                    required
                                                />
                                            </label>
                                            <label className="form-ip col per5">
                                                <span className="text spe">Email</span>
                                                <input
                                                    className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
                                                    placeholder="Email"
                                                    type="email"
                                                    name="your-email"
                                                    required
                                                />
                                            </label>
                                            <label className="form-ip col per5">
                                                <span className="text spe">Số điện thoại</span>
                                                <input
                                                    className="wpcf7-form-control wpcf7-tel wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-tel"
                                                    placeholder="Số điện thoại"
                                                    type="tel"
                                                    name="phone"
                                                    required
                                                />
                                            </label>
                                            <label className="form-ip col" htmlFor="id_f_contact_global">
                                                <div className="btn-box">
                                                    <div className="btn pri">
                                                        <input
                                                            className="wpcf7-form-control wpcf7-submit has-spinner hidden"
                                                            id="id_f_contact_global"
                                                            type="submit"
                                                            value="Send"
                                                        />
                                                        <span className="txt">
                                                            <span className="txt-inner">Liên hệ tư vấn</span>
                                                            <span className="txt-icon">
                                                                <img
                                                                    src="https://vietnampostlogistics.com/template/assets/images/ic-arrow.svg"
                                                                    alt=""
                                                                />
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
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
    );
};

// Main Component
const RailwaySolutionPage: React.FC = () => {
    return (
        <main className="main page-inter">
            {/* Hero Banner Section */}
            <div className="bn-big white">
                <div className="bn-big-bg">
                    <img
                        width="2000"
                        height="1121"
                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/coverrw-min.jpg"
                        className="attachment-full size-full"
                        alt=""
                        decoding="async"
                        fetchPriority="high"
                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/03/coverrw-min.jpg 2000w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/coverrw-min-300x168.jpg 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/coverrw-min-1024x574.jpg 1024w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/coverrw-min-768x430.jpg 768w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/coverrw-min-1536x861.jpg 1536w"
                    />
                </div>
                <div className="container">
                    <div className="bn-big-ctn">
                        <Breadcrumb />

                        <h1 className="bn-big-tt add-class text-verti mb-24 is-inview">
                            Giải pháp <br />
                            Logistics Quốc tế
                        </h1>

                        <p className="bn-big-des aos-init aos-animate" data-aos="fade-up-cus">
                            An toàn - Nhanh chóng - Tiết kiệm chi phí<br />
                            <br />
                            <br />
                        </p>

                        <BenefitsBox />
                    </div>
                </div>
            </div>

            {/* Solution Detail Section */}
            <section className="sec-inter-solve">
                <div className="inter-solve ss-pd">
                    <div className="container">
                        <div className="inter-solve-row row">
                            <div className="inter-solve-side col">
                                <SolutionMenu />
                                <div className="side-overlay"></div>
                            </div>

                            <div className="inter-solve-main col">
                                <div className="side-open">
                                    <div className="side-open-wrap">
                                        <i className="fa-solid fa-sidebar-flip"></i>
                                    </div>
                                </div>

                                <div className="wrapper">
                                    <h1 className="title title-48 add-class text-verti mb-32">
                                        Vận tải đường sắt
                                    </h1>

                                    <p className="inter-solve-des">
                                        Vietnam Post Logistics cung cấp các giải pháp vận chuyển hàng hóa bằng đường sắt Bắc Nam, cũng như các tuyến đường sắt Quốc tế. Chúng tôi xử lý và vận chuyển nhiều loại hàng hóa khác nhau với nhiều dịch vụ linh hoạt cho khách hàng.
                                    </p>

                                    <StatisticsBox />

                                    <AdvantagesSection />

                                    <ServiceBenefits />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Associations and Partners Section */}
            <section className="sec-homes-splide">
                <div className="homes-splide ss-pd">
                    {/* Associations */}
                    <div className="homes-splide-block">
                        <div className="container">
                            <div className="head-verti center">
                                <div className="line aos-init" data-aos="fade-up-cus">
                                    <h2 className="title title-48 add-class text-verti">
                                        Các hiệp hội tham gia
                                    </h2>
                                </div>
                            </div>
                        </div>

                        {/* Note: Carousel components are omitted for brevity */}
                        {/* You would need to implement Splide carousel separately */}
                    </div>

                    {/* Partners */}
                    <div className="homes-splide-block">
                        <div className="container">
                            <div className="head-verti center">
                                <div className="line aos-init" data-aos="fade-up-cus">
                                    <h2 className="title title-48 add-class text-verti">
                                        Mạng lưới đối tác
                                    </h2>
                                </div>
                            </div>
                        </div>

                        {/* Note: Carousel components are omitted for brevity */}
                        {/* You would need to implement Splide carousel separately */}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <ContactForm />
        </main>
    );
};

export default RailwaySolutionPage;