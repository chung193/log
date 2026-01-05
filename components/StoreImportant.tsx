'use client'
import React from "react";
import Image from 'next/image';
import './StoreImportant.css';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import { Locale } from '@/lib/i18n';

interface StoreItemProps {
    iconSrc: string;
    alt: string;
    textKey: string;
    descKey: string;
}

const StoreItem: React.FC<StoreItemProps> = ({ iconSrc, alt, textKey, descKey }) => {

    const { t } = useTranslations();

    return (
        <div className="store-imp-it">
            <div className="inner">
                <div className="img">
                    <div className="icon">
                        <Image
                            src={iconSrc}
                            alt={alt}
                            width={100}
                            height={100}
                            loading="lazy"
                        />
                    </div>
                    <p className="txt">{t(textKey)}</p>
                </div>
                <div className="info">
                    <div className="desc">
                        <div className="mona-content">
                            <div dangerouslySetInnerHTML={{ __html: t(descKey) }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const StoreImportant = ({ initialLocale = 'en' }) => {
    const searchParams = useSearchParams();
    const langParam = searchParams.get('lang');

    const locale: Locale =
        langParam === 'en' || langParam === 'vi'
            ? langParam
            : initialLocale;

    const { t } = useTranslations(locale);

    const storeItems = [
        {
            iconSrc: "/images/ic-import1.svg",
            alt: "Công nghệ",
            textKey: "components.so-important.item1",
            descKey: "components.so-important.item1-des"
        },
        {
            iconSrc: "/images/ic-import2.svg",
            alt: "Công nghệ",
            textKey: "components.so-important.item2",
            descKey: "components.so-important.item2-des"
        },
        {
            iconSrc: "/images/ic-import1 (1).svg",
            alt: "Công nghệ",
            textKey: "components.so-important.item3",
            descKey: "components.so-important.item3-des"
        },
    ];

    return (
        <div className="sec-store-imp" role="region" aria-label="Warehouse Services">
            <div className="store-imp ss-pd">
                <div className="container">
                    <div className="head-verti mb-32 center">
                        <h1 className="title title-48 add-class text-verti is-inview">
                            {t("components.so-important.title")}
                        </h1>
                    </div>

                    <div className="store-imp-img">
                        <Image
                            src="/images/DSC05509-1-e1744797718852.webp"
                            alt="Quy trình hoạt động kho ngoại quan tại EXPEDITORS GLOBAL"
                            width={1500}
                            height={657}
                            sizes="100vw"
                            priority
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>

                    <div className="store-imp-row row gap-res">
                        {storeItems.map((item, index) => (
                            <div className="col" key={index}>
                                <StoreItem {...item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoreImportant;