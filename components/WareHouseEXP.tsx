"use client";

import React, { useState } from "react";

const WareHouseEXP = () => {
    const [activeTab, setActiveTab] = useState<"vietnam" | "china">("vietnam");
    const [activePin, setActivePin] = useState("vinhphuc");

    return (
        <section className="sec-store-sys">
            <div className="store-sys ss-pd">
                <div className="container">
                    <div className="head-verti mb-32 center">
                        <h1 className="title title-48 add-class text-verti is-inview">Hệ thống kho bãi</h1>
                        <div className="line aos-init aos-animate" data-aos="fade-up-cus">
                            <p className="desc">
                                Với kinh nghiệm lâu năm trong ngành cùng hệ thống kho bãi rộng lớn, lên tới 500.000 m2 sàn đặt tại các vị trí đắc địa, thuận lợi cho việc vận chuyển và các hoạt động Logistics như: Hà Nam, Vĩnh Phúc, Hà Nội, Hải Phòng, TP. Hồ Chí Minh,…
                            </p>
                        </div>
                    </div>

                    <div className="store-sys-tab tabJS">
                        {/* Tab Buttons */}
                        <div className="store-sys-btns scrollContainer">
                            <div
                                className={`store-sys-btn tabBtn buttons ${activeTab === "vietnam" ? "active" : ""}`}
                                onClick={() => setActiveTab("vietnam")}
                                style={{ cursor: "pointer" }}
                            >
                                Việt Nam
                            </div>
                            <div
                                className={`store-sys-btn tabBtn buttons ${activeTab === "china" ? "active" : ""}`}
                                onClick={() => setActiveTab("china")}
                                style={{ cursor: "pointer" }}
                            >
                                Trung Quốc
                            </div>
                        </div>

                        <div className="store-sys-panels">
                            {/* Panel Việt Nam */}
                            <div
                                className={`store-sys-panel tabPanel svgTabJS ${activeTab === "vietnam" ? "open" : ""}`}
                                style={{ display: activeTab === "vietnam" ? "block" : "none" }}
                            >
                                <div className="row">
                                    <div className="store-sys-map col">
                                        <div className="wrapper">
                                            <div className="img">
                                                <div className="img-inner">
                                                    <img
                                                        width="777"
                                                        height="1284"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/11/map-VN2.png"
                                                        className="attachment-full size-full"
                                                        alt=""
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/11/map-VN2.png 777w, https://vietnampostlogistics.com/wp-content/uploads/2025/11/map-VN2-182x300.png 182w, https://vietnampostlogistics.com/wp-content/uploads/2025/11/map-VN2-620x1024.png 620w, https://vietnampostlogistics.com/wp-content/uploads/2025/11/map-VN2-768x1269.png 768w"
                                                    />
                                                </div>
                                            </div>

                                            <div className="img-Map svgBtnJS">
                                                <svg width="777" height="100%" viewBox="0 0 777 1284" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    {/* SVG paths giữ nguyên */}
                                                    <path
                                                        d="M271.177 220.449L271.231 220.502C271.526 220.69 271.928 220.878 272.357 221.092C274.77 222.325 278.791 224.362 280.829 230.473C282.705 235.888 283 236.075 285.44 237.577C285.815 237.818 286.244 238.086 286.754 238.407C288.711 236.451 292.464 233.207 295.869 233.1C302.384 232.966 305.494 231.894 305.708 229.696C305.842 228.356 305.252 227.552 304.368 226.346C303.563 225.247 302.464 223.746 301.472 221.172C299.435 215.919 300.453 208.762 304.85 207.02C306.673 206.296 307.907 205.17 308.416 203.75C308.925 202.276 308.684 200.56 307.665 198.791C306.941 197.504 305.628 196.54 304.368 195.628C302.303 194.127 300.159 192.573 300.802 189.57C300.882 189.142 300.99 188.659 301.07 188.15C301.66 184.933 302.384 180.94 304.663 180.645C304.502 180.082 304.394 179.492 304.341 178.876C304.046 175.043 301.177 174.533 295.949 173.622C294.153 173.3 292.116 172.952 289.81 172.389C289.408 172.282 289.033 172.201 288.657 172.121L288.389 173.247C287.826 176.329 287.638 179.278 290.453 186.649C291.928 190.455 291.848 193.377 290.212 194.422C289.837 194.663 289.435 194.77 288.979 194.77C288.094 194.77 287.129 194.315 286.271 193.457C283.671 190.857 281.419 190.991 276.915 191.206C276.486 191.206 276.03 191.259 275.547 191.286C270.132 191.608 264.019 187.48 262.411 183.727C261.687 182.146 259.569 181.395 257.853 181.02C257.665 181.288 257.504 181.529 257.29 181.797C255.735 183.754 254.368 184.692 253.349 185.389C251.526 186.622 250.775 187.131 251.553 191.634C251.955 193.913 251.928 195.575 251.928 196.915C251.928 199.434 251.874 200.748 254.716 202.812C255.118 201.445 255.949 200.426 257.719 200.346C260.775 200.212 264.877 201.016 267.129 203.643C268.63 205.385 269.14 207.69 268.604 210.451C267.183 218.036 269.22 219.269 271.204 220.502"
                                                        stroke="#0F172A"
                                                        strokeOpacity="0.2"
                                                        strokeWidth="1.33335"
                                                        strokeMiterlimit="10"
                                                        className={`svg-elem-5 hanoi ${activePin === "hanoi" ? "active" : ""}`}
                                                        id="hanoi"
                                                        onClick={() => setActivePin("hanoi")}
                                                        style={{ cursor: "pointer" }}
                                                    />

                                                    <path
                                                        d="M289.034 240.471C288.712 240.257 288.391 240.016 288.042 239.774C286.862 238.944 285.978 238.381 285.254 237.952C282.761 236.424 282.385 236.183 280.482 230.634C278.471 224.657 274.557 222.673 272.198 221.467C271.769 221.253 271.366 221.038 271.045 220.851L270.964 220.797C268.873 219.511 266.728 218.197 268.176 210.344C268.685 207.69 268.23 205.519 266.809 203.857C264.637 201.337 260.696 200.587 257.72 200.694C255.978 200.775 255.281 201.874 254.959 203.375C254.825 203.321 254.718 203.267 254.584 203.187C251.447 200.935 251.474 199.461 251.5 196.861C251.5 195.548 251.554 193.886 251.152 191.661C250.321 186.89 251.259 186.274 253.109 185.014C254.155 184.317 255.441 183.432 256.943 181.529C257.157 181.261 257.345 180.993 257.533 180.725C259.919 181.288 262.171 182.226 262.76 183.54C264.342 187.158 270.24 191.152 275.522 190.857C276.004 190.857 276.46 190.803 276.889 190.777C281.5 190.535 283.833 190.428 286.541 193.135C287.693 194.288 289.061 194.663 289.972 194.047C291.098 193.323 291.715 191.018 290.053 186.756C287.184 179.305 287.399 176.302 287.962 173.14L288.23 172.014C284.45 171.103 284.289 170.888 283.592 169.119C283.082 167.832 282.197 165.661 278.98 161.56C274.503 155.824 270.24 157.54 266.139 159.175C263.109 160.381 260.214 161.533 257.479 159.577C256.46 158.853 254.45 157.647 252.895 156.682C252.653 156.548 252.412 156.414 252.171 156.253C248.203 153.921 244.45 151.75 240.321 146.202C236.246 140.76 233.323 142.771 228.9 145.853C227.157 147.059 225.147 148.453 222.787 149.579C216.541 152.554 216.836 154.002 217.452 157.138C217.667 158.156 217.881 159.309 217.962 160.729C218.122 163.222 218.632 164.723 219.114 166.063C219.758 167.913 220.267 169.387 219.382 172.389C218.98 173.81 218.042 175.07 216.514 176.249C217.801 177.348 218.766 178.983 218.98 182.414C219.141 184.987 219.356 186.676 219.543 188.043C219.811 190.08 219.677 193.162 219.329 195.441C219.222 195.923 219.114 196.459 218.954 197.022C217.291 203.616 218.498 204.715 222.09 207.931L222.332 208.146C223.726 209.405 225.2 209.915 226.621 210.397C228.98 211.201 231.206 211.979 232.6 216.133C233.511 218.894 233.538 221.012 232.6 222.673C231.474 224.737 229.088 225.568 227.372 226.024C225.71 226.48 224.584 226.372 223.431 226.265C221.929 226.131 220.374 225.97 217.399 227.069C213.484 228.544 213.913 229.884 214.771 232.564C215.012 233.341 215.281 234.199 215.495 235.218C215.602 235.807 215.656 236.451 215.71 237.067H215.575C216.514 237.201 217.533 237.469 218.659 237.952C224.342 240.311 226.621 240.284 229.248 240.284C231.876 240.284 232.734 240.284 235.629 240.9C239.463 241.731 240.106 242.348 241.554 243.688C242.895 244.948 244.959 246.878 251.045 250.308C255.2 252.64 258.042 254.115 260.106 255.214C263.35 256.929 264.932 257.76 267.399 259.583C269.517 256.473 271.474 254.758 273.163 254.517C274.021 254.409 274.798 254.651 275.522 255.24C278.525 257.76 278.525 258.832 278.525 259.797C278.525 260.762 278.525 261.03 279.731 262.129C281.018 263.255 282.305 263.603 283.109 263.04C283.887 262.477 284.289 260.842 283.109 257.894C282.197 255.642 282.761 253.471 284.53 252.265C286.299 251.059 289.356 250.845 292.305 252.962C293.458 251.354 293.618 249.933 293.779 248.539C293.779 248.218 293.86 247.923 293.913 247.628C294.423 244.358 293.27 243.554 288.954 240.525"
                                                        stroke="#0F172A"
                                                        strokeOpacity="0.2"
                                                        strokeWidth="1.33335"
                                                        strokeMiterlimit="10"
                                                        className={`svg-elem-15 vinhphuckhongoai ${activePin === "vinhphuc" ? "active" : ""}`}
                                                        id="vinhphuc"
                                                        onClick={() => setActivePin("vinhphuc")}
                                                        style={{ cursor: "pointer" }}
                                                    />

                                                    {/* Các path khác giữ nguyên, chỉ thêm onClick */}
                                                    <path
                                                        d="M191.098 384.704C195.79 391.619 194.316 390.574 200.241 393.442C206.219 396.31 208.981 397.543 216.407 396.31C223.887 395.05 225.04 399.285 228.364 399.178C231.474 399.071 234.477 401.59 238.042 405.584C242.064 405.96 246.166 406.924 249.973 408.774C260.562 413.92 265.737 412.178 269.865 410.784C271.956 410.087 273.726 409.471 275.871 409.792C279.275 410.275 280.75 409.069 282.278 407.782C283.511 406.764 284.771 405.718 287.05 405.638C288.846 405.638 291.554 405.075 294.235 404.432C292.412 401.162 288.793 397.489 283.887 389.877C276.755 378.914 278.364 376.368 283.672 369.238C288.927 362.162 287.211 362.751 291.688 356.452C293.136 354.415 293.592 353.102 293.592 351.923C291.393 351.735 289.356 351.44 288.176 350.958C285.415 349.832 285.334 349.832 283.297 349.591C282.653 349.51 281.769 349.43 280.536 349.242H280.428C276.407 348.679 276.353 348.652 275.254 345.516C274.986 344.766 274.664 343.828 274.182 342.675C271.769 336.698 270.321 336.591 267.131 336.403C266.38 336.349 265.683 336.403 264.986 336.403C262.493 336.51 260.348 336.617 257.72 333.133C255.817 330.667 255.147 330.747 253.94 330.908C253.056 331.015 251.956 331.149 250.053 330.453C246.407 329.112 246.809 327.772 247.372 325.896C247.533 325.333 247.747 324.69 247.828 323.993C248.203 321.259 247.265 320.133 242.412 317.694C238.981 315.898 238.82 314.611 238.605 312.681C238.525 311.904 238.418 311.046 238.096 310.001C237.506 308.071 237.935 306.919 238.418 305.552C238.927 304.185 239.49 302.657 239.222 299.869C238.954 296.921 236.943 296.224 234.128 295.259C231.876 294.481 229.088 293.517 226.621 290.943C225.442 289.71 224.021 288.906 222.493 288.397C222.412 288.585 222.305 288.745 222.225 288.879C221.286 290.327 219.892 291.104 216.863 292.927C213.887 294.803 213.86 294.267 210.509 295.983C207.184 297.698 209.57 300.807 211.34 303.166C213.163 305.498 211.34 309.653 209.946 309.974C208.498 310.242 204.959 310.403 203.351 312.413C201.742 314.504 202.251 316.22 200.428 318.498C198.605 320.776 196.38 322.358 192.841 322.492C189.356 322.706 187.908 319.731 184.423 316.916C180.938 314.102 178.766 315.603 175.281 316.809C171.796 318.015 170.187 315.415 165.763 314.477C161.34 313.539 158.739 316.3 155.522 314.263C152.251 312.172 150.375 312.038 147.56 313.941C144.745 315.925 147.935 321.795 151.367 324.448C154.798 327.102 153.297 334.017 149.972 337.663C146.648 341.362 145.924 341.362 142.385 341.925C138.846 342.488 135.254 344.015 137.452 349.725C139.624 355.434 142.198 356.131 149.061 356.962C155.924 357.739 154.584 359.133 160.964 361.17C167.426 363.261 168.444 367.147 174.182 371.624C179.892 376.1 186.353 377.815 191.018 384.677"
                                                        stroke="#0F172A"
                                                        strokeOpacity="0.2"
                                                        strokeWidth="1.33335"
                                                        strokeMiterlimit="10"
                                                        className={`svg-elem-25 nghean ${activePin === "nghean" ? "active" : ""}`}
                                                        id="nghean"
                                                        onClick={() => setActivePin("nghean")}
                                                        style={{ cursor: "pointer" }}
                                                    />

                                                    {/* Thêm các path khác tương tự với onClick */}

                                                </svg>
                                            </div>

                                            <div className="imgArrows">
                                                {/* Các pin */}
                                                <div
                                                    className={`imgArrow ${activePin === "vinhphuc" ? "open" : ""}`}
                                                    arrow-id="vinhphuc"
                                                    posi-id="vinhphuc1"
                                                    onClick={() => setActivePin("vinhphuc")}
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    <img
                                                        width="35"
                                                        height="45"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/11/pinMap.svg"
                                                        className="attachment-full size-full"
                                                        alt=""
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>

                                                <div
                                                    className={`imgArrow ${activePin === "hanoi" ? "open" : ""}`}
                                                    arrow-id="hanoi"
                                                    posi-id="hanoi1"
                                                    onClick={() => setActivePin("hanoi")}
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    <img
                                                        width="35"
                                                        height="45"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/11/pinMap.svg"
                                                        className="attachment-full size-full"
                                                        alt=""
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>

                                                <div
                                                    className={`imgArrow ${activePin === "haiphong" ? "open" : ""}`}
                                                    arrow-id="haiphong"
                                                    posi-id="haiphong1"
                                                    onClick={() => setActivePin("haiphong")}
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    <img
                                                        width="35"
                                                        height="45"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/11/pinMap.svg"
                                                        className="attachment-full size-full"
                                                        alt=""
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>

                                                <div
                                                    className={`imgArrow ${activePin === "ninhbinh" ? "open" : ""}`}
                                                    arrow-id="ninhbinh"
                                                    posi-id="ninhbinh1"
                                                    onClick={() => setActivePin("ninhbinh")}
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    <img
                                                        width="35"
                                                        height="45"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/11/pinMap.svg"
                                                        className="attachment-full size-full"
                                                        alt=""
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>

                                                <div
                                                    className={`imgArrow ${activePin === "nghean" ? "open" : ""}`}
                                                    arrow-id="nghean"
                                                    posi-id="nghean"
                                                    onClick={() => setActivePin("nghean")}
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    <img
                                                        width="35"
                                                        height="45"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/11/pinMap.svg"
                                                        className="attachment-full size-full"
                                                        alt=""
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>

                                                <div
                                                    className={`imgArrow ${activePin === "binhduong" ? "open" : ""}`}
                                                    arrow-id="binhduong"
                                                    posi-id="binhduong"
                                                    onClick={() => setActivePin("binhduong")}
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    <img
                                                        width="35"
                                                        height="45"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/11/pinMap.svg"
                                                        className="attachment-full size-full"
                                                        alt=""
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>

                                                <div
                                                    className={`imgArrow ${activePin === "hcm" ? "open" : ""}`}
                                                    arrow-id="hcm"
                                                    posi-id="hcm1"
                                                    onClick={() => setActivePin("hcm")}
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    <img
                                                        width="35"
                                                        height="45"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/11/pinMap.svg"
                                                        className="attachment-full size-full"
                                                        alt=""
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="store-sys-box col">
                                        <div className="store-sys-sticky">
                                            {/* Các panel info */}
                                            <div
                                                className={`img-Panel svgPanelJS ${activePin === "vinhphuc" ? "open" : ""}`}
                                                posi-id="vinhphuc1"
                                                style={{ display: activePin === "vinhphuc" ? "block" : "none" }}
                                            >
                                                <div className="wrapper" style={{}}>
                                                    <div className="sys-box">
                                                        <div className="icon">
                                                            <img
                                                                width="45"
                                                                height="45"
                                                                src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-sys-home.svg"
                                                                className="attachment-full size-full"
                                                                alt="Lưu kho"
                                                                decoding="async"
                                                                loading="lazy"
                                                            />
                                                        </div>
                                                        <p className="tt">Kho Ngoại quan Vĩnh Phúc</p>
                                                        <div className="add">
                                                            <p><strong>Địa chỉ :</strong> Lô F4A, KCN Thăng Long Vĩnh Phúc, xã Bình Xuyên, tỉnh Phú Thọ<span data-sheets-root="1">.</span></p>
                                                            <p><strong>Diện tích :</strong> <span data-sheets-root="1">18,272 m2</span></p>
                                                        </div>
                                                    </div>

                                                    <div className="sys-box">
                                                        <div className="icon">
                                                            <img
                                                                width="45"
                                                                height="45"
                                                                src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-sys-home.svg"
                                                                className="attachment-full size-full"
                                                                alt="Lưu kho"
                                                                decoding="async"
                                                                loading="lazy"
                                                            />
                                                        </div>
                                                        <p className="tt">Kho ngoại quan Vĩnh Phúc 2</p>
                                                        <div className="add">
                                                            <p><strong>Địa chỉ :</strong> Nhà xưởng 5, Lô 122, Khu công nghiệp Bá Thiện – Phân Khu I, xã Bình Xuyên, tỉnh Phú Thọ.</p>
                                                            <p><strong>Diện tích :</strong> 4,185 m2</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className={`img-Panel svgPanelJS ${activePin === "ninhbinh" ? "open" : ""}`}
                                                posi-id="ninhbinh1"
                                                style={{ display: activePin === "ninhbinh" ? "block" : "none" }}
                                            >
                                                <div className="wrapper">
                                                    <div className="sys-box">
                                                        <div className="icon">
                                                            <img
                                                                width="45"
                                                                height="45"
                                                                src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-sys-home.svg"
                                                                className="attachment-full size-full"
                                                                alt="Lưu kho"
                                                                decoding="async"
                                                                loading="lazy"
                                                            />
                                                        </div>
                                                        <p className="tt">Kho Ngoại quan Hà Nam 1</p>
                                                        <div className="add">
                                                            <p><strong>Địa chỉ :</strong> Lô CN06, KCN hỗ trợ Đồng Văn III, phường Đồng Văn, tỉnh Ninh Bình<span data-sheets-root="1">.</span></p>
                                                            <p><strong>Diện tích :</strong> <span data-sheets-root="1">19,276 m2</span></p>
                                                        </div>
                                                    </div>

                                                    <div className="sys-box">
                                                        <div className="icon">
                                                            <img
                                                                width="45"
                                                                height="45"
                                                                src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-sys-home.svg"
                                                                className="attachment-full size-full"
                                                                alt="Lưu kho"
                                                                decoding="async"
                                                                loading="lazy"
                                                            />
                                                        </div>
                                                        <p className="tt">Kho ngoại quan Hà Nam 2</p>
                                                        <div className="add">
                                                            <p><strong>Địa chỉ :</strong> Lô CN07, KCN hỗ trợ Đồng Văn III, phường Đông Văn, tỉnh Ninh Bình.</p>
                                                            <p><strong>Diện tích :</strong> 3,000 m2</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Các panel khác giữ nguyên, chỉ thêm style display */}
                                            <div
                                                className={`img-Panel svgPanelJS ${activePin === "hanoi" ? "open" : ""}`}
                                                posi-id="hanoi1"
                                                style={{ display: activePin === "hanoi" ? "block" : "none" }}
                                            >
                                                {/* Nội dung Hà Nội */}
                                            </div>

                                            <div
                                                className={`img-Panel svgPanelJS ${activePin === "nghean" ? "open" : ""}`}
                                                posi-id="nghean"
                                                style={{ display: activePin === "nghean" ? "block" : "none" }}
                                            >
                                                {/* Nội dung Nghệ An */}
                                            </div>

                                            <div
                                                className={`img-Panel svgPanelJS ${activePin === "hcm" ? "open" : ""}`}
                                                posi-id="hcm1"
                                                style={{ display: activePin === "hcm" ? "block" : "none" }}
                                            >
                                                {/* Nội dung HCM */}
                                            </div>

                                            <div
                                                className={`img-Panel svgPanelJS ${activePin === "haiphong" ? "open" : ""}`}
                                                posi-id="haiphong1"
                                                style={{ display: activePin === "haiphong" ? "block" : "none" }}
                                            >
                                                {/* Nội dung Hải Phòng */}
                                            </div>

                                            <div
                                                className={`img-Panel svgPanelJS ${activePin === "binhduong" ? "open" : ""}`}
                                                posi-id="binhduong"
                                                style={{ display: activePin === "binhduong" ? "block" : "none" }}
                                            >
                                                {/* Nội dung Bình Dương */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Panel Trung Quốc */}
                            <div
                                className={`store-sys-panel tabPanel svgTabJS ${activeTab === "china" ? "open" : ""}`}
                                style={{ display: activeTab === "china" ? "block" : "none" }}
                            >
                                <div className="row">
                                    <div className="store-sys-map col">
                                        <div className="wrapper">
                                            <div className="img">
                                                <div className="img-inner">
                                                    <img
                                                        width="686"
                                                        height="558"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/11/map-TQ.png"
                                                        className="attachment-full size-full"
                                                        alt=""
                                                        decoding="async"
                                                        loading="lazy"
                                                        srcSet="https://vietnampostlogistics.com/wp-content/uploads/2025/11/map-TQ.png 686w, https://vietnampostlogistics.com/wp-content/uploads/2025/11/map-TQ-300x244.png 300w"
                                                    />
                                                </div>
                                            </div>

                                            <div className="img-Map svgBtnJS mapTQ">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 685 557" height="557" width="685">
                                                    <path
                                                        className={`active ${activePin === "tq" ? "active" : ""}`}
                                                        id="tq"
                                                        strokeMiterlimit="10"
                                                        strokeWidth="0.5"
                                                        stroke="#475467"
                                                        fill="#F2F4F7"
                                                        d="M454.828 455.087C454.613 455.629 453.518 455.968 453.518 455.968L452.404 456.385C452.544 457.172 452.729 458.005 452.961 458.514C453.095 458.773 453.258 459.029 453.425 459.291C454.123 460.388 454.875 461.572 453.751 463.33C452.588 465.147 452.461 465.673 452.261 466.498C452.222 466.661 452.18 466.835 452.126 467.034C452.031 467.386 452.047 467.719 452.063 468.043C452.101 468.827 452.137 469.563 450.594 470.414C449.995 470.745 449.353 471.041 448.731 471.327C447.09 472.084 445.585 472.779 445.349 473.887C445.244 474.381 445.046 475.085 444.827 475.865C444.369 477.494 443.817 479.458 443.817 480.554C443.817 480.955 443.896 481.449 443.982 481.979C444.241 483.593 444.554 485.541 442.842 486.203C440.568 487.083 436.854 488.935 435.88 490.324C435.451 490.955 435.148 491.685 434.848 492.407C434.466 493.327 434.09 494.233 433.466 494.908C432.789 495.671 430.993 496.527 429.497 497.24C428.633 497.652 427.869 498.016 427.478 498.288C426.364 499.029 421.908 502.316 421.351 502.964C421.127 503.236 420.785 503.839 420.415 504.49C420.093 505.057 419.75 505.66 419.448 506.113C418.736 505.822 417.37 506.161 416.435 506.394C416.028 506.495 415.703 506.576 415.548 506.576C415.284 506.576 414.837 506.751 414.306 506.96C413.528 507.265 412.569 507.641 411.742 507.641C410.349 507.641 407.332 506.715 406.218 506.02C405.698 505.704 405.234 505.235 404.754 504.751C404.249 504.241 403.727 503.715 403.108 503.335C402.199 502.831 401.045 503.984 400.303 504.726C400.022 505.007 399.801 505.228 399.673 505.279C399.255 505.511 397.445 506.298 395.403 506.344C393.36 506.39 389.508 505.279 388.161 504.538C387.868 504.382 387.419 504.189 386.884 503.958C384.884 503.096 381.68 501.715 380.874 499.816C380.369 498.648 378.855 497.47 377.391 496.33C375.893 495.165 374.448 494.04 374.19 493.009C373.679 490.972 373.911 490.046 375.118 488.749C376.371 487.453 377.207 486.527 377.068 486.157C376.96 485.87 373.935 485.417 371.517 485.055C370.81 484.949 370.155 484.851 369.641 484.767C367.413 484.397 364.72 483.888 362.91 482.962C361.1 482.036 360.821 480.924 360.821 480.924H360.589C361.007 479.489 361.61 478.146 362.771 477.174C363.588 476.491 364.639 476.081 365.678 475.674C367.176 475.089 368.649 474.513 369.362 473.146C369.873 472.173 369.873 470.97 369.641 469.858C369.316 468.284 368.619 466.71 367.32 465.784C365.654 464.548 363.666 465.052 361.813 465.522C361.445 465.615 361.082 465.707 360.728 465.784C358.918 466.2 356.597 466.247 355.715 464.58C355.42 463.991 355.403 463.334 355.386 462.672C355.378 462.396 355.371 462.12 355.344 461.848C355.251 460.922 354.833 459.857 353.951 459.672C353.375 459.541 352.843 459.809 352.297 460.083C351.876 460.295 351.446 460.511 350.981 460.552C350.331 460.644 349.727 460.366 349.17 460.089C348.056 459.533 346.989 458.746 346.339 457.681C346.06 457.264 345.921 456.755 345.828 456.246C347.174 456.384 348.474 456.477 348.892 456.384C349.505 456.239 350.155 456.276 350.784 456.313C351.155 456.334 351.518 456.355 351.862 456.338C352.837 456.246 353.626 454.162 353.812 453.375C353.968 452.846 354.983 452.777 355.843 452.718C356.264 452.69 356.647 452.664 356.876 452.588C357.525 452.356 361.285 454.116 362.26 454.949C363.189 455.829 365.324 456.616 366.995 457.033C368.325 457.364 368.596 456.875 368.909 456.311C368.989 456.167 369.072 456.017 369.176 455.875C369.364 455.62 369.571 455.232 369.801 454.801C370.197 454.06 370.661 453.19 371.219 452.634C371.672 452.182 372.678 451.864 373.775 451.517C374.812 451.19 375.931 450.836 376.743 450.319C377.935 449.559 378.749 449.601 379.776 449.653C380.188 449.674 380.634 449.697 381.152 449.671C382.963 449.578 382.498 447.865 382.313 447.633C382.174 447.402 382.22 444.531 382.313 443.79C382.359 443.105 383.535 442.87 384.681 442.642L384.727 442.633C385.632 442.452 386.311 443.624 386.742 444.368C386.864 444.578 386.966 444.753 387.047 444.855C387.419 445.318 388.858 446.8 390.157 447.17C391.147 447.452 391.733 448.137 392.366 448.877C392.565 449.109 392.768 449.346 392.989 449.578C393.917 450.504 395.82 451.106 396.935 451.106C397.777 451.106 397.584 449.651 397.44 448.561C397.394 448.209 397.352 447.894 397.352 447.68C397.352 447.031 398.766 445.928 399.714 445.19C400.05 444.928 400.328 444.711 400.462 444.577C400.864 444.176 401.267 444.752 401.782 445.489C401.921 445.688 402.068 445.899 402.226 446.105C402.969 447.031 404.547 446.893 405.708 446.522C406.511 446.266 408.049 445.188 409.443 444.211C410.062 443.777 410.653 443.363 411.138 443.05C412.144 442.419 412.705 441.736 413.228 441.098C413.551 440.705 413.859 440.329 414.248 439.994C414.352 439.904 414.453 439.818 414.551 439.734C415.424 438.99 416.082 438.428 416.291 437.679C416.384 437.308 417.126 436.382 417.962 435.456C417.995 435.489 418.022 435.522 418.047 435.552C418.093 435.608 418.134 435.658 418.194 435.688C419.726 437.077 421.118 437.308 422 437.077C422.882 436.845 425.157 434.021 425.157 434.021L427.895 436.104C427.895 436.104 429.845 436.521 430.077 436.197C430.127 436.128 430.174 435.959 430.239 435.727C430.48 434.874 430.961 433.165 432.676 432.4C434.858 431.428 440.103 430.641 440.103 430.641C440.103 430.641 441.728 432.493 441.31 434.345C440.892 436.197 441.449 437.401 442.192 437.91C442.506 438.131 443.171 438.417 443.847 438.708C444.873 439.15 445.925 439.603 445.813 439.855C445.691 440.097 445.34 440.302 444.939 440.535C444.576 440.747 444.172 440.982 443.863 441.29C443.393 441.759 443.141 443.03 442.968 443.906C442.902 444.24 442.847 444.517 442.796 444.67C442.662 444.989 442.146 445.69 441.582 446.457C441.163 447.025 440.718 447.63 440.382 448.143C439.593 449.347 438.85 450.412 438.432 450.875C438.015 451.291 436.993 453.143 437.782 453.467C437.979 453.548 438.198 453.669 438.427 453.795C439.117 454.175 439.894 454.603 440.382 454.116C440.663 453.835 441.135 453.391 441.602 452.95C442.216 452.371 442.823 451.799 442.981 451.615C443.306 451.291 444.745 450.643 444.838 452.264C444.883 452.786 444.865 453.188 444.85 453.532C444.818 454.255 444.797 454.72 445.395 455.505C446.277 456.709 450.826 456.94 450.826 456.94L452.451 456.292L453.565 455.875C453.565 455.875 454.535 455.575 454.828 455.087Z"
                                                        onClick={() => setActivePin("tq")}
                                                        style={{ cursor: "pointer" }}
                                                    />
                                                </svg>
                                            </div>

                                            <div className="imgArrows mapTQ">
                                                <div
                                                    className={`imgArrow ${activePin === "tq" ? "open" : ""}`}
                                                    arrow-id="tq"
                                                    posi-id="tq"
                                                    onClick={() => setActivePin("tq")}
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    <img
                                                        width="35"
                                                        height="45"
                                                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/11/pinMap.svg"
                                                        className="attachment-full size-full"
                                                        alt=""
                                                        decoding="async"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="store-sys-box col">
                                        <div className="store-sys-sticky">
                                            <div
                                                className={`img-Panel svgPanelJS ${activePin === "tq" ? "open" : ""}`}
                                                posi-id="tq"
                                                style={{ display: activePin === "tq" ? "block" : "none" }}
                                            >
                                                <div className="wrapper">
                                                    <div className="sys-box">
                                                        <div className="icon">
                                                            <img
                                                                width="45"
                                                                height="45"
                                                                src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-sys-home.svg"
                                                                className="attachment-full size-full"
                                                                alt="Lưu kho"
                                                                decoding="async"
                                                                loading="lazy"
                                                            />
                                                        </div>
                                                        <p className="tt">Trung tâm kho vận Trung Quốc</p>
                                                        <div className="add">
                                                            <p><strong>Địa chỉ:</strong> TP Nam Ninh, tỉnh Quảng tây, Trung Quốc</p>
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
                </div>
            </div>
        </section>
    );
};

export default WareHouseEXP;