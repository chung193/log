import React from "react";
import './AboutQuote.css'; // Tạo file CSS riêng
import { useSearchParams } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import { Locale } from '@/lib/i18n';

const AboutQuote = () => {
    const searchParams = useSearchParams();
    const langParam = searchParams.get('lang');

    const locale: Locale =
        langParam === 'en' || langParam === 'vi'
            ? langParam
            : initialLocale;

    const { t } = useTranslations(locale);

    return (
        <section className="sec-ab-quote">
            <div className="ab-quote">
                <div className="bg">
                    <img
                        width="1728"
                        height="800"
                        src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/ab-quote.jpg"
                        className="attachment-full size-full"
                        alt="Ảnh Vận chuyển đường biển (Sea Freight) - EXPEDITORS GLOBAL"
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
                                {t("components.about-quote.content")}
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
                                    {t("components.about-quote.des")}
                                </span>&nbsp;
                                {t("components.about-quote.second-des")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutQuote;