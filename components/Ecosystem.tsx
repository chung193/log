'use client';
import React, { useEffect, useRef } from 'react';
import './Ecosystem.css';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import { Locale } from '@/lib/i18n';

interface LogisticsItemProps {
    title: string;
    subtitle?: string;
    description?: string;
    items?: string[];
    twoColumns?: boolean;
}

const LogisticsItem: React.FC<LogisticsItemProps> = ({
    title,
    subtitle,
    description,
    items,
    twoColumns,
}) => {
    const searchParams = useSearchParams();
    const langParam = searchParams.get('lang');

    const locale: Locale =
        langParam === 'en' || langParam === 'vi'
            ? langParam
            : initialLocale;

    const { t } = useTranslations(locale);

    return (
        <div className="homes-logis-item col">
            <div className="inner">
                <div className="des">
                    <p className="des">{title}</p>
                    {description && <p className="sub">{description}</p>}
                    {items && items.length > 0 && (
                        twoColumns ? (
                            <div className="two-column-list">
                                <ul>
                                    {items.slice(0, Math.ceil(items.length / 2)).map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                                <ul>
                                    {items.slice(Math.ceil(items.length / 2)).map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <ul>
                                {items.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        )
                    )}
                </div>
                {subtitle && <p className="tt">{subtitle}</p>}
            </div>
        </div>
    );
};

interface CircleIconProps {
    src: string;
    alt: string;
    angle: number; // Góc tính từ tâm (0-360 độ)
}

const CircleIcon: React.FC<CircleIconProps> = ({ src, alt, angle }) => {
    const iconRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updatePosition = () => {
            if (!iconRef.current) return;

            const circleContainer = iconRef.current.closest('.homes-logis-circle');
            if (!circleContainer) return;

            // Lấy circle-img để tính bán kính chính xác
            const circleImg = circleContainer.querySelector('.circle-img') as HTMLElement;
            if (!circleImg) return;

            const imgRect = circleImg.getBoundingClientRect();
            const containerRect = circleContainer.getBoundingClientRect();

            // Tính tâm của circle-img so với container
            const centerX = (imgRect.left - containerRect.left) + imgRect.width / 2;
            const centerY = (imgRect.top - containerRect.top) + imgRect.height / 2;

            // Bán kính = nửa chiều rộng của circle-img
            const radius = imgRect.width / 2;

            // Tính toán vị trí dựa trên góc
            const radian = angle * (Math.PI / 180);
            const x = centerX + radius * Math.cos(radian);
            const y = centerY + radius * Math.sin(radian);

            // Áp dụng vị trí
            iconRef.current.style.left = `${x}px`;
            iconRef.current.style.top = `${y}px`;
        };

        // Chạy nhiều lần để đảm bảo layout ổn định
        updatePosition();
        const timeout1 = setTimeout(updatePosition, 50);
        const timeout2 = setTimeout(updatePosition, 150);

        window.addEventListener('resize', updatePosition);

        return () => {
            window.removeEventListener('resize', updatePosition);
            clearTimeout(timeout1);
            clearTimeout(timeout2);
        };
    }, [angle]);

    return (
        <div ref={iconRef} className="icon">
            <img
                width="48"
                height="48"
                src={src}
                className="attachment-full size-full"
                alt={alt}
                decoding="async"
                loading="lazy"
            />
        </div>
    );
};

const Ecosystem: React.FC = (initialLocale?: Locale) => {
    const searchParams = useSearchParams();
    const langParam = searchParams.get('lang');

    const locale: Locale =
        langParam === 'en' || langParam === 'vi'
            ? langParam
            : initialLocale;

    const { t } = useTranslations(locale);

    const circleIcons: CircleIconProps[] = [
        {
            src: 'https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-1.svg',
            alt: 'Hàng hóa',
            angle: 0  // Trên bên phải
        },
        {
            src: 'https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-2.svg',
            alt: 'Kho',
            angle: 60   // Dưới bên phải
        },
        {
            src: 'https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-3.svg',
            alt: 'Building',
            angle: 120   // Dưới cùng
        },
        {
            src: 'https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-4.svg',
            alt: 'Trucking',
            angle: 180  // Dưới bên trái
        },
        {
            src: 'https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-5.svg',
            alt: 'cửa hàng',
            angle: 240  // Trên bên trái
        },
        {
            src: 'https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-6.svg',
            alt: 'Khách hàng',
            angle: 300  // Trên cùng (vì circle đã rotate -90deg)
        }
    ];

    return (
        <div className="sec-homes-logis">
            <div className="homes-logis ss-pd">
                <div className="container">
                    <div className="head-verti center mb-32">
                        <div className="line aos-init aos-animate" data-aos="fade-up-cus">
                            <h2 className="title title-48 add-className text-verti is-inview">
                                {t('ecosystem.title')}
                            </h2>
                        </div>
                    </div>
                    <div className="homes-logis-box">
                        <div className="homes-logis-list row gap-res">
                            {/* Communication */}
                            <LogisticsItem
                                title={t('ecosystem.item_1')}
                                subtitle={t('ecosystem.sub_item_1')}
                            />

                            {/* Procurement */}
                            <LogisticsItem
                                title={t('ecosystem.item_2')}
                                subtitle={t('ecosystem.sub_item_2')}
                            />

                            {/* Inbound Logistics */}
                            <LogisticsItem
                                title={t('ecosystem.item_3')}
                                subtitle={t('ecosystem.sub_item_3')}
                                subtitle={t('ecosystem.desc_3')}
                            />

                            {/* Inbound Logistics */}
                            <LogisticsItem
                                title={t('ecosystem.item_4')}
                                subtitle={t('ecosystem.sub_item_4')}
                                subtitle={t('ecosystem.desc_4')}
                                items={[
                                    t('ecosystem.items_item_4.item_1'),
                                    t('ecosystem.items_item_4.item_2'),
                                    t('ecosystem.items_item_4.item_3'),
                                ]}
                            />

                            {/* E-commerce */}
                            <LogisticsItem
                                title={t('ecosystem.item_5')}
                                items={[
                                    t('ecosystem.items_item_5.item_1'),
                                    t('ecosystem.items_item_5.item_2'),
                                    t('ecosystem.items_item_5.item_3'),
                                ]}
                            />

                            {/* Circle Center */}
                            <div className="homes-logis-circle col">
                                <div className="circle-text">
                                    <img
                                        src="https://vietnampostlogistics.com/template/assets/images/text.png"
                                        alt="Logistics text"
                                    />
                                </div>
                                <div className="circle-img">
                                    <div className="img">
                                        <div className="img-inner">
                                            <img
                                                src="https://vietnampostlogistics.com/template/assets/images/car.jpg"
                                                alt="Logistics truck"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="circle">
                                    {circleIcons.map((icon, idx) => (
                                        <CircleIcon
                                            key={idx}
                                            src={icon.src}
                                            alt={icon.alt}
                                            angle={icon.angle}
                                        />
                                    ))}
                                </div>
                                <div className="circle-tts">
                                    <div className="circle-tt">{t('ecosystem.Retailer')}</div>
                                    <div className="circle-tt">{t('ecosystem.Manufacturer')}</div>
                                </div>
                            </div>

                            {/* Supply Chain Finance */}
                            <LogisticsItem
                                title={t('ecosystem.item_6')}
                                description={t('ecosystem.desc_6')}
                            />

                            {/* Last-miles Delivery */}
                            <LogisticsItem
                                title={t('ecosystem.item_7')}
                                items={[
                                    t('ecosystem.items_item_7.item_1'),
                                    t('ecosystem.items_item_7.item_2'),
                                    t('ecosystem.items_item_7.item_3'),
                                ]}
                            />

                            {/* Distribution Service */}
                            <LogisticsItem
                                title={t('ecosystem.item_8')}
                                subtitle={t('ecosystem.sub_item_8')}
                                description={t('ecosystem.desc_8')}
                            />

                            {/* Outbound Logistics */}
                            <LogisticsItem
                                title={t('ecosystem.item_9')}
                                items={[
                                    t('ecosystem.items_item_9.item_1'),
                                    t('ecosystem.items_item_9.item_2'),
                                    t('ecosystem.items_item_9.item_3'),
                                    t('ecosystem.items_item_9.item_4'),
                                    t('ecosystem.items_item_9.item_5'),
                                ]}
                                twoColumns={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ecosystem;