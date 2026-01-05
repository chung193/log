const ExpEntrustSection = () => {
    return (
        <div className="exp-entrust-slide">
            <div className="row rows-2 gap-res">
                {/* Item 1 */}
                <div className="col">
                    <div className="entrust-item">
                        <div className="inner">
                            <div className="img hover-img-rotate">
                                <a
                                    className="img-inner"
                                    href="/tat-tan-tat-ve-fcl-full-container-load-trong-logistics/"
                                >
                                    <img
                                        width="274"
                                        height="296"
                                        src="/images/exp1.jpg"
                                        className="attachment-full size-full"
                                        alt="Bãi containers"
                                        decoding="async"
                                        loading="lazy"
                                    />
                                </a>
                                <a
                                    className="btn-circle"
                                    href="/tat-tan-tat-ve-fcl-full-container-load-trong-logistics/"
                                >
                                    <img
                                        src="/images/ic-arrow.svg"
                                        alt="arrow icon"
                                    />
                                </a>
                            </div>
                            <div className="info">
                                <h4>
                                    <a
                                        className="info-tt"
                                        href="/tat-tan-tat-ve-fcl-full-container-load-trong-logistics/"
                                    >
                                        FCL - Full container load
                                    </a>
                                </h4>
                                <p className="info-des">
                                    Tất cả các mặt hàng là của một chủ hàng và thường là các mặt hàng đồng nhất.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="col">
                    <div className="entrust-item">
                        <div className="inner">
                            <div className="img hover-img-rotate">
                                <a
                                    className="img-inner"
                                    href="/lcl-giai-phap-van-chuyen-gom-hang-toi-uu-cho-doanh-nghiep/"
                                >
                                    <img
                                        width="274"
                                        height="296"
                                        src="/images/exp2.jpg"
                                        className="attachment-full size-full"
                                        alt="thùng hàng carton và pallet"
                                        decoding="async"
                                        loading="lazy"
                                    />
                                </a>
                                <a
                                    className="btn-circle"
                                    href="/lcl-giai-phap-van-chuyen-gom-hang-toi-uu-cho-doanh-nghiep/"
                                >
                                    <img
                                        src="/images/ic-arrow.svg"
                                        alt="arrow icon"
                                    />
                                </a>
                            </div>
                            <div className="info">
                                <h4>
                                    <a
                                        className="info-tt"
                                        href="/lcl-giai-phap-van-chuyen-gom-hang-toi-uu-cho-doanh-nghiep/"
                                    >
                                        LCL - Less than container load
                                    </a>
                                </h4>
                                <p className="info-des">
                                    Phù hợp cho doanh nghiệp và chủ hàng khi gửi kiện hàng lẻ.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpEntrustSection;