import React from "react"
const StoreTime = () => {
    return (
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
    )
}

export default StoreTime;