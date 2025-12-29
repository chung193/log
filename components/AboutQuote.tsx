import React from "react";
import './AboutQuote.css'; // Tạo file CSS riêng

const AboutQuote = () => {
    return (
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
                    <div className="bg-overlay"></div>
                </div>
                <div className="container ab-quote-container">
                    <div className="ab-quote-ctn">
                        <div
                            className="ab-quote-text aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay="200"
                            style={{
                                textAlign: 'justify',
                                margin: 0,
                            }}
                        >
                            <p className="des">
                                At Vietnam Post Logistics, we are committed to delivering reliable, fast, and innovative logistics solutions that meet the diverse needs of our customers. Guided by trust, efficiency, and sustainability, we aim to connect communities and businesses across Vietnam and globally.
                            </p>
                        </div>
                        <div
                            className="ab-quote-bot aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay="400"
                        >
                            <p className="des">
                                <span className="second">
                                    Business Philosophy Statement
                                </span>&nbsp;
                                of Vietnam Post Logistics
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutQuote;