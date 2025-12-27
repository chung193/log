import React from 'react';
const ListServices = () => {
    return (
        <div className="inter-solve-side col">
            <div className="side-fixed">
                <div className="side-fixed-wrap">
                    <div className="wrapper">
                        <div className="inter-solve-menu">
                            <a className="inter-solve-menu-link active" href="https://vietnampostlogistics.com/giai-phap/giai-phap-sea-freight/">
                                <img
                                    width="24"
                                    height="24"
                                    src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/menu1.svg"
                                    className="attachment-full size-full wp-post-image"
                                    alt=""
                                    decoding="async"
                                    loading="lazy"
                                />
                                <span className="txt">Vận tải đường biển</span>
                            </a>
                            <a className="inter-solve-menu-link " href="https://vietnampostlogistics.com/giai-phap/giai-phap-air-express/">
                                <img
                                    width="24"
                                    height="25"
                                    src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/menu2.svg"
                                    className="attachment-full size-full wp-post-image"
                                    alt=""
                                    decoding="async"
                                    loading="lazy"
                                />
                                <span className="txt">Chuyển phát nhanh Quốc tế</span>
                            </a>
                            <a className="inter-solve-menu-link " href="https://vietnampostlogistics.com/giai-phap/giai-phap-air-cargo/">
                                <img
                                    width="24"
                                    height="25"
                                    src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/menu3.svg"
                                    className="attachment-full size-full wp-post-image"
                                    alt=""
                                    decoding="async"
                                    loading="lazy"
                                />
                                <span className="txt">Vận tải hàng không</span>
                            </a>
                            <a className="inter-solve-menu-link " href="https://vietnampostlogistics.com/giai-phap/giai-phap-cross-border-trucking/">
                                <img
                                    width="24"
                                    height="24"
                                    src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/menu4.svg"
                                    className="attachment-full size-full wp-post-image"
                                    alt=""
                                    decoding="async"
                                    loading="lazy"
                                />
                                <span className="txt">Đường bộ xuyên biên giới</span>
                            </a>
                            <a className="inter-solve-menu-link " href="https://vietnampostlogistics.com/giai-phap/giai-phap-railway/">
                                <img
                                    width="24"
                                    height="24"
                                    src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/menu5.svg"
                                    className="attachment-full size-full wp-post-image"
                                    alt=""
                                    decoding="async"
                                    loading="lazy"
                                />
                                <span className="txt">Vận tải đường sắt</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="side-close">
                    <i className="fas fa-times close icon"></i>
                </div>
            </div>
            <div className="side-overlay"></div>
        </div>
    );
};
export default ListServices;