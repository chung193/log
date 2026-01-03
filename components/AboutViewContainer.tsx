'use client';
import React, { useEffect, useRef } from "react";
import { useSearchParams } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import { Locale } from '@/lib/i18n';

const AboutViewContainer = ({ initialLocale = 'en' }) => {
    const imageRef = useRef<HTMLDivElement>(null);
    const rafId = useRef<number | null>(null);
    const lastScrollY = useRef(0);

    const searchParams = useSearchParams();
    const langParam = searchParams.get('lang');

    const locale: Locale =
        langParam === 'en' || langParam === 'vi'
            ? langParam
            : initialLocale;

    const { t } = useTranslations(locale);

    useEffect(() => {
        const handleScroll = () => {
            if (!imageRef.current) return;

            // Lấy vị trí scroll hiện tại
            const scrollY = window.scrollY;

            // Tính toán tốc độ scroll
            const scrollDelta = scrollY - lastScrollY.current;
            lastScrollY.current = scrollY;

            // Giới hạn tốc độ scroll
            const limitedDelta = Math.max(-10, Math.min(10, scrollDelta));

            // Lấy vị trí hiện tại của ảnh
            const currentTransform = imageRef.current.style.transform;
            let currentY = 0;

            if (currentTransform) {
                const match = currentTransform.match(/translateY\(([-\d.]+)px\)/);
                if (match) {
                    currentY = parseFloat(match[1]) || 0;
                }
            }

            // Tính toán vị trí mới với hiệu ứng giảm dần (damping)
            const damping = 0.9;
            const newY = currentY + (limitedDelta * damping);

            // Giới hạn khoảng di chuyển
            const maxMove = 200;
            const clampedY = Math.max(-maxMove, Math.min(maxMove, newY));

            // Cập nhật vị trí với requestAnimationFrame để mượt mà
            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
            }

            rafId.current = requestAnimationFrame(() => {
                if (imageRef.current) {
                    imageRef.current.style.transform = `translateY(${clampedY}px)`;
                    imageRef.current.style.transition = 'transform 0.05s linear';
                }
            });
        };

        // Sử dụng passive event listener cho performance
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
            }
        };
    }, []);

    return (
        <section className="sec-ab-view">
            <div className="ab-view ParaY">
                <div className="recontainer">
                    <div className="ab-view-f">
                        <div
                            className="ab-view-img ParaYScroll"
                            ref={imageRef}
                            style={{
                                willChange: 'transform',
                                transform: 'translateY(0px)',
                                transition: 'transform 0.1s ease-out'
                            }}
                        >
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
                                    <div className="name">
                                        {t("components.about-container.vision")}
                                    </div>
                                    <div className="ctn">
                                        <div className="des">
                                            <p>
                                                <div dangerouslySetInnerHTML={{ __html: t("components.about-container.vision-des") }} />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="ab-view-line">
                                    <div className="name">
                                        {t("components.about-container.mission")}
                                    </div>
                                    <div className="ctn">
                                        <div className="des">
                                            <p>
                                                <div dangerouslySetInnerHTML={{ __html: t("components.about-container.mission-des") }} />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="ab-view-line">
                                    <div className="name">
                                        {t("components.about-container.core-value")}
                                    </div>
                                    <div className="ctn">
                                        <div className="des">
                                            <p className="des">
                                                <div dangerouslySetInnerHTML={{ __html: t("components.about-container.core-value-des") }} />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .ab-view-img {
                    position: relative;
                    will-change: transform;
                    transform: translateZ(0); /* Hardware acceleration */
                }
                
                .ParaYScroll {
                    transition: transform 0.1s ease-out;
                }
                
                /* Thêm parallax effect nếu muốn */
                @media (min-width: 768px) {
                    .ab-view-img {
                        transform-style: preserve-3d;
                    }
                }
            `}</style>
        </section>
    );
};

export default AboutViewContainer;