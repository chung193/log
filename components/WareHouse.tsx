import React from "react";
import { useSearchParams } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import { Locale } from '@/lib/i18n';
const WareHouse = () => {
    const searchParams = useSearchParams();
    const langParam = searchParams.get('lang');

    const locale: Locale =
        langParam === 'en' || langParam === 'vi'
            ? langParam
            : 'en';

    const { t } = useTranslations(locale);
    const warehouseItems = [
        {
            id: 1,
            title: t("components.warehouse.item1-title"),
            link: "javascript:;",
            image: "/images/store1.png",
            description: t("components.warehouse.item1-des"),
            width: 278,
            height: 190
        },
        {
            id: 2,
            title: t("components.warehouse.item2-title"),
            link: "javascript:;",
            image: "/images/store2.png",
            description: t("components.warehouse.item2-des"),
            width: 278,
            height: 190
        },
        {
            id: 3,
            title: t("components.warehouse.item3-title"),
            link: "javascript:;",
            image: "/images/store3.png",
            description: t("components.warehouse.item3-des"),
            width: 278,
            height: 190
        },
        {
            id: 4,
            title: t("components.warehouse.item4-title"),
            link: "javascript:;",
            image: "/images/store4.png",
            description: t("components.warehouse.item4-des"),
            width: 278,
            height: 190
        },
        {
            id: 5,
            title: t("components.warehouse.item5-title"),
            link: "javascript:;",
            image: "/images/store5.png",
            description: t("components.warehouse.item5-des"),
            width: 278,
            height: 190
        }
    ];

    // CSS cho slider nằm ngang
    const sliderStyles: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row', // Quan trọng: đặt theo hàng ngang
        flexWrap: 'nowrap',
        overflowX: 'auto', // Cho phép cuộn ngang
        scrollbarWidth: 'none', // Ẩn thanh cuộn trên Firefox
        msOverflowStyle: 'none', // Ẩn thanh cuộn trên IE/Edge
    };

    // Ẩn thanh cuộn trên Chrome/Safari
    const hideScrollbarStyles = `
        .store-ser-slide .swiper-wrapper::-webkit-scrollbar {
            display: none;
        }
    `;

    const slideStyles: React.CSSProperties = {
        flex: '0 0 auto', // Không co giãn, không thu nhỏ
        width: '20%', // Điều chỉnh chiều rộng mỗi slide
        marginRight: '0px', // Khoảng cách giữa các slide
    };

    return (
        <div className="w-100">
            <style>{hideScrollbarStyles}</style>
            <div className="store-ser-slide" style={{ overflow: 'hidden' }}>
                <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                    <div
                        className="swiper-wrapper"
                        id="swiper-wrapper-44810a107ab8d13d01"
                        aria-live="polite"
                        style={sliderStyles}
                    >
                        {warehouseItems.map((item, index) => (
                            <div
                                key={item.id}
                                className={`swiper-slide ${index === 0 ? 'swiper-slide-visible swiper-slide-active' : 'swiper-slide-visible'}`}
                                role="group"
                                aria-label={`${index + 1} / ${warehouseItems.length}`}
                                style={slideStyles}
                            >
                                <div className="store-ser-slide-it">
                                    <div className="inner">
                                        <div className="img">
                                            <a className="img-inner" href={item.link}>
                                                <img
                                                    width={item.width}
                                                    height={item.height}
                                                    src={item.image}
                                                    className="attachment-full size-full"
                                                    alt={item.title}
                                                    decoding="async"
                                                    loading="lazy"
                                                />
                                            </a>
                                        </div>
                                        <div className="info">
                                            <h4>
                                                <a className="info-tt" href={item.link}>
                                                    {item.title}
                                                </a>
                                            </h4>
                                            <div className="info-bot">
                                                <p className="info-des">{item.description}</p>
                                            </div>
                                            <a className="btn-circle" href={item.link}>
                                                <img
                                                    src="/images/ic-arrow.svg"
                                                    alt={`Xem thêm về ${item.title}`}
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-lock">
                        <span
                            className="swiper-pagination-bullet swiper-pagination-bullet-active"
                            tabIndex={0}
                            role="button"
                            aria-label="Go to slide 1"
                            aria-current="true"
                        ></span>
                    </div>
                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </div>
            </div>
        </div>
    );
};

export default WareHouse;